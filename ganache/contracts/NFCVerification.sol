// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract NFCVerification {
    struct NFCData {
        string passcode;
        string productId;
        uint256 timestamp;
    }

    mapping(string => NFCData) private records;

    event NFCScanned(string indexed productId, string passcode, bool verified);

    function storeNFCData(string memory _productId, string memory _passcode) public {
        records[_productId] = NFCData(_passcode, _productId, now); // 'now' is used in older Solidity versions
    }

    function verifyNFCData(string memory _productId, string memory _passcode) public returns (bool) {
        NFCData memory data = records[_productId];

        if (keccak256(abi.encodePacked(data.passcode)) == keccak256(abi.encodePacked(_passcode))) {
            emit NFCScanned(_productId, _passcode, true);
            return true;
        } else {
            emit NFCScanned(_productId, _passcode, false);
            return false;
        }
    }
}
