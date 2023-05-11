// Index Signatures - 
// The idea of the index signatures is to type objects of unknown structure when you only know the key and value types. An index signature fits the case of the salary parameter: the function should accept salary objects of different structures — just make sure that object values are numbers.

type Airplane = {
	flightNumber: string;
	model: string;
	dateOfDeparture: string;
	timeOfDeparture: string;
	from: string;
	to: string;
	seats: {
		// Index Signature (And It can only be defined once inside and object)
		[key: string | number]: string | number;

		// other properties defined along with the Index Signature should be of the same type as the index signature otherwise it will throw error;
		orderProperty: number;

		// this will not work
		// check: boolean;
	};
};

const airPlane: Airplane = {
	flightNumber: "SG102",
	model: "A380",
	dateOfDeparture: "01/06/2023",
	timeOfDeparture: "23:10",
	from: "JFK",
	to: "DCA",
	seats: {
		orderProperty: 1001,
		A: "Mark Thomas",
		B: "John Jocobs",
		10: 22024,
	},
};
