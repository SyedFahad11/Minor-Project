//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DrugEnsureRegistry {

    enum UserType {
        Manufacturer,
        Supplier,
        Consumer
    }

    struct User {
        UserType userType;
        string name;
        string companyName;  //For manufacturers
        string regNo;        //For manufacturers
    }


    mapping(address => User) public users;

    event UserAdded(address indexed wallet, UserType userType, string name, string companyName, string regNo);

    function setUser(string memory _name, string memory _companyName, string memory _regNo, string memory _type) public {

        // Check user type and assign appropriate values
        if (keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("Manufacturer")))
        {
            users[msg.sender] = User(UserType.Manufacturer, _name, _companyName, _regNo);
            emit UserAdded(msg.sender, UserType.Manufacturer, _name, _companyName, _regNo);
        }
        else if (keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("Supplier")))
        {
            users[msg.sender] = User(UserType.Supplier, _name, "", "");
            emit UserAdded(msg.sender, UserType.Supplier, _name, "", "");
        } else {

            users[msg.sender] = User(UserType.Consumer, _name, "", "");
            emit UserAdded(msg.sender, UserType.Consumer, _name, "", "");
        }
    }


    function getUser(address _wallet) public view returns (UserType, string memory, string memory, string memory) {
        User memory user = users[_wallet];
        return (user.userType, user.name, user.companyName, user.regNo);
    }
}
