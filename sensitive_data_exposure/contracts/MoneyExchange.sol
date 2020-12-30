pragma solidity ^0.5.10;

contract MoneyExchange {
	struct User {
		uint id;
		bytes32 username;
		uint funds;
		string passphrase;
	}

	uint genUserId = 0;
	mapping(uint => User) public users;

	function createUser(bytes32 _username, string memory  _passphrase) private returns(uint) {
		genUserId++;
		users[genUserId] = User(genUserId, _username, 0, _passphrase);
		return genUserId;	
	}
	
	// Function to populate accounts with cash for testing purposes
	function dripFunds(uint _id, uint amt) private {
		users[_id].funds += amt;
	}
	
	function setupAccount(bytes32 _username, string memory _passphrase) public returns(uint) {
		createUser(_username, _passphrase);
		dripFunds(genUserId, 100);
		return genUserId;
	}

	function viewAccountBalance(uint _id) public view returns(uint) {
		return users[_id].funds;
	}

	function sendFunds(uint _fromId, uint _toId, string memory _passphrase) public  returns(uint) {
		require(keccak256(abi.encodePacked(users[_fromId].passphrase)) == keccak256(abi.encodePacked(_passphrase)));
		require(users[_fromId].funds > 10);
		users[_fromId].funds -= 10;
		users[_toId].funds += 10;

		return users[_toId].funds;
	}

}
