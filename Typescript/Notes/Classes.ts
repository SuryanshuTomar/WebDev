// => Classes -

// Defining a class and constructor with members
// class Coder1 {
// 	name: string;
// 	music: string;
// 	age: number;
// 	lang: string;

// 	constructor(name: string, music: string, age: number, lang: string) {
// 		this.name = name;
// 		this.music = music;
// 		this.age = age;
// 		this.lang = lang;
// 	}
// }

// Another Way to Defining the above class and constructor with members and prevent repeating things, we can use Visibility Modifiers -
// class Coder2 {
// 	secondLang: string;
// 	constructor(
// 		// Visibility Modifiers or Data Modifiers or Access Modifiers
// 		public readonly name: string,
// 		public music: string,
// 		private age: number,
// 		// 		protected lang: string
// 		secondLang: string
// 	) {
// 		this.secondLang = secondLang;
// 	}
// }
// Note : If we use Visibility Modifiers, then declaration of data members and setting their values using constructor will happen internally.

// => NON-NULL ASSERTIONS FOR CLASS MEMBERS -
// Example -
// Parent Class
class Coder {
	// data member
	secondLang!: string; // non-null assertion for class member if we want to define a class member and not want to initialize it right await and initliaze it later.

	// constructor
	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "Typescript"
	) {}

	// setter
	public set setAge(newAge: number) {
		this.age = newAge;
	}

	public set setLang(newLang: string) {
		this.lang = newLang;
	}

	// getter
	public get getAge(): number {
		return this.age;
	}

	public get getLang(): string {
		return this.lang;
	}
}

const newCoder = new Coder("Alex", "Country", 25, "JS");
// console.log(newCoder);

// Not Allowed
// console.log(newCoder.age)
// console.log(newCoder.lang)

// console.log("Age: ", newCoder.getAge);
// newCoder.setAge = 26;
// console.log("Age: ", newCoder.getAge);

// console.log("lang: ", newCoder.getLang);
// newCoder.setLang = "C++";
// console.log("lang: ", newCoder.getLang);

// Child Class
class Webdev extends Coder {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
		this.computer = computer;
	}
}

const sara = new Webdev("Windows", "Sara", "Lofi", 25);
console.log("Sara writes in", sara.getLang);
// console.log(Sara.age) // Private member
// console.log(Sara.lang) // Protected member

// --------------------------------------------------------------------------------------
// - Interfaces and classes -
interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Guitarist implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}

	public play(action: string): string {
		return `${this.name} ${action} the ${this.instrument}`;
	}
}

const emma = new Guitarist("Emma", "guitar");
console.log(emma.play("strums"));

// ------------------------------------------------------------------------------------
// - Static Members -
class Peeps {
	static count: number = 0;

	static getCount(): number {
		return Peeps.count;
	}

	public id: number;

	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);

// ------------------------------------------------------------------------------------
// - Getters and Setters -

class Bands {
	private dataState: string[];

	constructor() {
		this.dataState = [];
	}

	public get data(): string[] {
		return this.dataState;
	}

	public set data(value: string[]) {
		if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
			this.dataState = value;
			return;
		} else throw new Error("Param is not an array of strings");
	}
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150]; // must be string data
