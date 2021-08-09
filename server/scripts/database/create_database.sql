CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS Users (
	email 		VARCHAR(320) 	PRIMARY KEY,
	password 	TEXT			NOT NULL,
	firstName 	VARCHAR(50) 	NOT NULL,
	lastName 	VARCHAR(50) 	NOT NULL,
	town		VARCHAR(50)	
);

CREATE TABLE IF NOT EXISTS Item (
	itemID		SERIAL 			PRIMARY KEY,
	sellerID	VARCHAR(320)	NOT NULL REFERENCES Users(email),
	title		VARCHAR(50)		NOT NULL,
	minTime		INT				CHECK (minTime >= 0), 	-- In Hours
	maxTime		INT				CHECK (maxTime >= 0), 	-- In Hours
	price		REAL			CHECK (price >= 0), 	-- Price per time unit
	timeUnit	VARCHAR(1)		NOT NULL,
	description	VARCHAR(400)
);

CREATE TABLE IF NOT EXISTS Vehicule (
	vehiculeType	INT 		NOT NULL,
	fuelType		INT 		NOT NULL,
	manufacturer	VARCHAR(12) NOT NULL,
	fabricationYear	INT			CHECK (fabricationYear > 1883),
	numberOfSeats	INT			CHECK (numberOfSeats >= 0),
	isAutomatic		BOOLEAN		DEFAULT FALSE,
	appleCarPlay	BOOLEAN 	DEFAULT FALSE,
	androidAuto 	BOOLEAN 	DEFAULT FALSE,
	aux 			BOOLEAN 	DEFAULT FALSE,
	backupCamera	BOOLEAN 	DEFAULT FALSE,
	dashCamera		BOOLEAN 	DEFAULT FALSE,
	bikeCarriage	BOOLEAN 	DEFAULT FALSE,
	bluetooth		BOOLEAN 	DEFAULT FALSE,
	heaterSeats		BOOLEAN 	DEFAULT FALSE,
	kidsSeats		BOOLEAN 	DEFAULT FALSE,
	usbCharger		BOOLEAN 	DEFAULT FALSE,
	sunroof			BOOLEAN 	DEFAULT FALSE,
	allowsAnimals	BOOLEAN 	DEFAULT FALSE,
	isConvertible	BOOLEAN 	DEFAULT FALSE
) INHERITS(Item);

CREATE TABLE IF NOT EXISTS Space (
	isIndoor				BOOLEAN 	DEFAULT FALSE,
	climateControlAvailable	BOOLEAN 	DEFAULT FALSE,
	canStoreVehicule		BOOLEAN		DEFAULT FALSE,
	width					INTEGER 	CHECK (width >= 0), -- In meters
	height					INTEGER 	CHECK (height >= 0), -- In meters
	length					INTEGER 	CHECK (length >= 0)  -- In meters
) INHERITS(Item);

CREATE TABLE IF NOT EXISTS SportsEquiment (

) INHERITS(Item);

CREATE TABLE IF NOT EXISTS Tools (
	
) INHERITS(Item);

CREATE TABLE IF NOT EXISTS Media (
	mediaID		SERIAL 			PRIMARY KEY,
	itemID		INT				NOT NULL REFERENCES Item(itemID),
	data		BLOB 			NOT NULL,
	description VARCHAR(120)	 			
);

CREATE TABLE IF NOT EXISTS Address (
	itemID INT PRIMARY KEY REFERENCES Item(itemID),
	number		VARCHAR(10)		NOT NULL,
	appartment	VARCHAR(10)		NOT NULL,
	city 		VARCHAR(20)		NOT NULL,
	state 		VARCHAR(2)		NOT NULL,
	country 	VARCHAR(2)		NOT NULL,
	postalCode	VARCHAR(10)		NOT NULL
);

CREATE TABLE IF NOT EXISTS Reservation (
	reservationID	SERIAL			PRIMARY KEY,
	itemID			INT				NOT NULL REFERENCES Item(itemID),
	sellerID		VARCHAR(320)	NOT NULL REFERENCES Users(email),
	startDate		DATE 			NOT NULL,
	endDate			DATE 			CHECK (endDate >= startDate),
	totalPrice		REAL 			CHECK (totalPrice >= 0)
);