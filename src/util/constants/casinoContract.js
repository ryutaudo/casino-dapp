const address = "0xad0d87ebc36fff44d6e3ad95d4e8ef501d62daba"
const ABI = [{
    "constant": false,
    "inputs": [{
      "name": "_number",
      "type": "uint256"
    }],
    "name": "bet",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_status",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "Won",
    "type": "event"
  },
  {
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "inputs": [{
        "name": "_minBet",
        "type": "uint256"
      },
      {
        "name": "_houseEdge",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "checkContractBalance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export {
  address,
  ABI
}
