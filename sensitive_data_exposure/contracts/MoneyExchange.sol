pragma solidity ^0.5.10;

contract MoneyExchange {
	struct User {
		uint id;
		bytes32 username;
		uint funds;
		string passphrase; // stored in plaintext!
	}

	uint genUserId = 0;
	mapping(uint => User) public users;

	function _createUser(bytes32 _username, string memory  _passphrase) private returns(uint) {
		genUserId++;
		users[genUserId] = User(genUserId, _username, 0, _passphrase);
		return genUserId;	
	}
	
	// Function to populate accounts with cash for testing purposes
	function _dripFunds(uint _id, uint _amt) private {
		users[_id].funds += _amt;
	}
	
	function setupAccount(bytes32 _username, string memory _passphrase) public returns(uint) {
		_createUser(_username, _passphrase);
		_dripFunds(genUserId, 100);
		return genUserId;
	}

	function viewAccountBalance(uint _id) public view returns(uint) {
		return users[_id].funds;
	}

	function sendFunds(uint _fromId, uint _toId, string memory _passphrase, uint _amt) public  returns(uint) {
		require(keccak256(abi.encodePacked(users[_fromId].passphrase)) == keccak256(abi.encodePacked(_passphrase))); // Check hashes of password in DB against inserted PW
		require(users[_fromId].funds > _amt);
		users[_fromId].funds -= _amt;
		users[_toId].funds += _amt;

		return users[_toId].funds;
	}

}
