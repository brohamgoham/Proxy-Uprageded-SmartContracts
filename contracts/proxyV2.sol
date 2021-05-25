pragma solidity ^0.7.0;

contract prox {
    uint256 private value;

    event ValueChanges(uint256 newValue);

    function storeValue(uint256 newValue) public {
        value = newValue;
        emit ValueChanges(newValue);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }
    function increment() public {
        value = value + 1;
        emit ValueChanges(value);
    }
}