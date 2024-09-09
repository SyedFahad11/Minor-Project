export const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum DrugEnsureRegistry.UserType",
        "name": "userType",
        "type": "uint8"
      }, {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }, {
        "indexed": false,
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "regNo",
        "type": "string"
      }
    ],
    "name": "UserAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_wallet", "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "internalType": "enum DrugEnsureRegistry.UserType",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_regNo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_type",
        "type": "string"
      }
    ],
    "name": "setUser", "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "enum DrugEnsureRegistry.UserType",
        "name": "userType",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "regNo",
        "type": "string"
      }],
    "stateMutability": "view",
    "type": "function"
  }
];