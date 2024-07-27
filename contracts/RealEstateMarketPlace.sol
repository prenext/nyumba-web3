// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RealEstateMarketPlace is ERC721URIStorage, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _propertyIdCounter;
    Counters.Counter private _userIdCounter;

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
    mapping(address => User) public users; // Maps wallet address to User
    mapping(uint256 => address) public userAddressById; // Maps user ID to wallet address

    event PropertyAdded(
        uint256 propertyId,
        address owner,
        uint256 price,
        uint256 rent
    );
    event PropertySold(uint256 propertyId, address buyer, uint256 price);
    event PropertyRented(uint256 propertyId, address tenant, uint256 rent);
    event UserRegistered(uint256 userId, address walletAddress);

    constructor() ERC721("RealEstateMarketplace", "REM") {}

    function registerUser() public {
        require(users[msg.sender].id == 0, "User already registered");

        _userIdCounter.increment();
        uint256 userId = _userIdCounter.current();

        users[msg.sender] = User({id: userId, walletAddress: msg.sender});
        userAddressById[userId] = msg.sender;

        emit UserRegistered(userId, msg.sender);
    }

    function addProperty(
        string memory uri,
        uint256 price,
        uint256 rent
    ) public onlyOwner {
        _propertyIdCounter.increment();
        uint256 propertyId = _propertyIdCounter.current();

        properties[propertyId] = Property({
            id: propertyId,
            owner: payable(msg.sender),
            uri: uri,
            price: price,
            rent: rent,
            status: PropertyStatus.Available
        });

        _mint(msg.sender, propertyId);
        _setTokenURI(propertyId, uri);

        emit PropertyAdded(propertyId, msg.sender, price, rent);
    }

    function buyProperty(uint256 propertyId) public payable nonReentrant {
        Property storage property = properties[propertyId];
        require(
            property.status == PropertyStatus.Available,
            "Property is not available for sale"
        );
        require(
            msg.value >= property.price,
            "Insufficient funds to buy this property"
        );

        property.owner.transfer(property.price);
        _transfer(property.owner, msg.sender, propertyId);
        property.owner = payable(msg.sender);
        property.status = PropertyStatus.Sold;

        emit PropertySold(propertyId, msg.sender, property.price);
    }

    function rentProperty(uint256 propertyId) public payable nonReentrant {
        Property storage property = properties[propertyId];
        require(
            property.status == PropertyStatus.Available,
            "Property is not available for rent"
        );
        require(
            msg.value >= property.rent,
            "Insufficient funds to rent this property"
        );

        property.owner.transfer(property.rent);
        property.status = PropertyStatus.Rented;

        emit PropertyRented(propertyId, msg.sender, property.rent);
    }

    function getProperty(
        uint256 propertyId
    ) public view returns (Property memory) {
        return properties[propertyId];
    }

    function availableProperties() public view returns (Property[] memory) {
        uint256 totalProperties = _propertyIdCounter.current();
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
}
