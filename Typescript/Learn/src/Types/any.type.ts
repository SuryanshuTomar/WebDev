// ANY TYPE -

let firstName: any = "Mark";

// Reassigning it to another type without any issue.
firstName = 123;

firstName = [1, 2, 3, 4, 5];

firstName = function (number: any) {
	return number * 2;
};
