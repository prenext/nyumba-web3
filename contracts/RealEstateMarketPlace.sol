// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// TODO: Implement land verification by government and land registry

contract RealEstateMarketPlace {
    enum PropertyStatus {
        Available,
        Sold,
        Rented
    }

    struct Property {
        uint256 id;
        address payable owner;
        string uri;
        uint256 price;
        uint256 rent;
        PropertyStatus status;
    }

    struct User {
        uint256 id;
        address walletAddress;
    }

    mapping(uint256 => Property) public properties;
    mapping(address => User) public users;
    mapping(uint256 => address) public userAddressById;
    mapping(address => uint256[]) public userProperties; // Mapping from user address to property IDs

    uint256 private _propertyIdCounter;
    uint256 private _userIdCounter;

    event PropertyAdded(
        uint256 propertyId,
        address owner,
        uint256 price,
        uint256 rent
    );
    event PropertySold(uint256 propertyId, address buyer, uint256 price);
    event PropertyRented(uint256 propertyId, address tenant, uint256 rent);
    event UserRegistered(uint256 userId, address walletAddress);

    modifier onlyOwner(uint256 propertyId) {
        require(properties[propertyId].owner == msg.sender, "Not the owner");
        _;
    }

    modifier onlyRegistered() {
        require(users[msg.sender].id != 0, "User not registered");
        _;
    }

    function registerUser() public {
        require(users[msg.sender].id == 0, "User already registered");

        _userIdCounter++;
        uint256 userId = _userIdCounter;

        users[msg.sender] = User({id: userId, walletAddress: msg.sender});
        userAddressById[userId] = msg.sender;

        emit UserRegistered(userId, msg.sender);
    }

    function addProperty(
        string memory uri,
        uint256 price,
        uint256 rent
    ) public onlyRegistered {
        _propertyIdCounter++;
        uint256 propertyId = _propertyIdCounter;

        properties[propertyId] = Property({
            id: propertyId,
            owner: payable(msg.sender),
            uri: uri,
            price: price,
            rent: rent,
            status: PropertyStatus.Available
        });

        userProperties[msg.sender].push(propertyId);

        emit PropertyAdded(propertyId, msg.sender, price, rent);
    }

    function buyProperty(uint256 propertyId) public payable onlyRegistered {
        Property storage property = properties[propertyId];
        require(property.status == PropertyStatus.Available, "Property not available");
        require(msg.value == property.price, "Incorrect payment amount");

        // Transfer payment to property owner
        property.owner.transfer(property.price);

        // Update property status and ownership
        address previousOwner = property.owner;
        property.owner = payable(msg.sender);
        property.status = PropertyStatus.Sold;

        // Update userProperties
        removePropertyFromUser(previousOwner, propertyId);
        userProperties[msg.sender].push(propertyId);

        // Refund any excess payment (shouldn't be any if exact amount is sent)
        uint256 excessPayment = msg.value - property.price;
        if (excessPayment > 0) {
            payable(msg.sender).transfer(excessPayment);
        }

        emit PropertySold(propertyId, msg.sender, property.price);
    }

    function rentProperty(uint256 propertyId) public payable onlyRegistered {
        Property storage property = properties[propertyId];
        require(property.status == PropertyStatus.Available, "Property not available");
        require(msg.value == property.rent, "Incorrect payment amount");

        // Transfer rent payment to property owner
        property.owner.transfer(property.rent);

        // Update property status
        property.status = PropertyStatus.Rented;

        // Refund any excess payment (shouldn't be any if exact amount is sent)
        uint256 excessPayment = msg.value - property.rent;
        if (excessPayment > 0) {
            payable(msg.sender).transfer(excessPayment);
        }

        emit PropertyRented(propertyId, msg.sender, property.rent);
    }

    function getProperty(uint256 propertyId) public view returns (Property memory) {
        return properties[propertyId];
    }

    function availableProperties() public view returns (Property[] memory) {
        uint256 totalProperties = _propertyIdCounter;
        uint256 count = 0;

        for (uint256 i = 1; i <= totalProperties; i++) {
            if (properties[i].status == PropertyStatus.Available) {
                count++;
            }
        }

        Property[] memory availableProps = new Property[](count);
        uint256 index = 0;

        for (uint256 i = 1; i <= totalProperties; i++) {
            if (properties[i].status == PropertyStatus.Available) {
                availableProps[index] = properties[i];
                index++;
            }
        }

        return availableProps;
    }

    function getMyProperties() public view returns (Property[] memory) {
        uint256[] storage propertyIds = userProperties[msg.sender];
        Property[] memory myProperties = new Property[](propertyIds.length);

        for (uint256 i = 0; i < propertyIds.length; i++) {
            myProperties[i] = properties[propertyIds[i]];
        }

        return myProperties;
    }

    function getUserByAddress(address userAddress) public view returns (bool exists, uint256 propertyCount) {
        if (users[userAddress].id != 0) {
            propertyCount = userProperties[userAddress].length;
            return (true, propertyCount);
        }
        return (false, 0);
    }

    function removePropertyFromUser(address userAddress, uint256 propertyId) internal {
        uint256[] storage propertyIds = userProperties[userAddress];
        for (uint256 i = 0; i < propertyIds.length; i++) {
            if (propertyIds[i] == propertyId) {
                propertyIds[i] = propertyIds[propertyIds.length - 1];
                propertyIds.pop();
                break;
            }
        }
    }
}
