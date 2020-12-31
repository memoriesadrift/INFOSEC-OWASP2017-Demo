const MoneyExchange = artifacts.require('MoneyExchange')

contract('users', () => {
	it("Accounts can be created", async () => {
		const storage = await MoneyExchange.deployed();
		const bobUsername = web3.utils.fromAscii("bob");
		const aliceUsername = web3.utils.fromAscii("alice");
		const bobPw = web3.utils.fromAscii("bob123");
		const alicePw = web3.utils.fromAscii("alice123");
		
		const tx1 = await storage.setupAccount(bobUsername, bobPw);
		const tx2 = await storage.setupAccount(aliceUsername, alicePw);

		const bob = await storage.users.call(1);
		console.log(tx1);
		console.log(tx2);
		assert.equal(parseInt(bob[0]), 1);
	});

	it("Balance can be viewed", async () => {
		const storage = await MoneyExchange.deployed();
		const bobUsername = web3.utils.fromAscii("bob");
		const bobPw = web3.utils.fromAscii("bob123");
		
		const bobId = await storage.setupAccount(bobUsername, bobPw);
		const userInfo = await storage.users.call(1);
		const balance = userInfo[2];


		assert.equal(parseInt(balance), 100);
	});

	it("Funds can be transferred", async () => {
		const storage = await MoneyExchange.deployed();
		const bobUsername = web3.utils.fromAscii("bob");
		const aliceUsername = web3.utils.fromAscii("alice");
		const bobPw = web3.utils.fromAscii("bob123");
		const alicePw = web3.utils.fromAscii("alice123");

		const bobId = await storage.setupAccount(bobUsername, bobPw);
		const aliceId = await storage.setupAccount(aliceUsername, alicePw);

		const bobInfo = await storage.users.call(1);
		const aliceInfo = await storage.users.call(2);
		const tx = await storage.sendFunds(bobInfo[0], aliceInfo[0], bobInfo[3], 10);

		const newAliceInfo  = await storage.users.call(2);
		assert.equal(newAliceInfo[2], 110);
	});
	
	it("security breach - Alice can read Bob's password from the blockchain!", async () => {
		const storage = await MoneyExchange.deployed();
		const bobUsername = web3.utils.fromAscii("bob");
		const aliceUsername = web3.utils.fromAscii("alice");
		const bobPw = web3.utils.fromAscii("bob123");
		const alicePw = web3.utils.fromAscii("alice123");

		const bobId = await storage.setupAccount(bobUsername, bobPw);
		const aliceId = await storage.setupAccount(aliceUsername, alicePw);

		const bobInfo = await storage.users.call(1);
		const aliceInfo = await storage.users.call(2);
		console.log("Alice knows Bob's ID and can call users[bobsId].passphrase to get access to his password!");
		assert.equal(bobPw, bobInfo[3]);
		
	});
	
})
