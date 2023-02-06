// => GENERICS -

// - Documentation -
// https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

// ------------------------------------------------------------------------
// - Example 1 -
// -> Check for an object using Generics-
const isObject = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObject(true));
// console.log(isObject("John"));
// console.log(isObject([1, 2, 3]));
// console.log(isObject({ name: "John" }));
// console.log(isObject(null));

// ------------------------------------------------------------------------
// - Example 2 -
// -> Check if True using Generics and Interface / Type Alias -
// type BoolCheck<T> = {
//   value: T;
//   is: boolean;
// };

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) return { value: arg, is: false };
  if (isObject(arg) && !Object.keys(arg as keyof T).length)
    return { value: arg, is: false };
  return { value: arg, is: !!arg };
};

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({})); // modified
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([])); // modified
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

// ------------------------------------------------------------------------
// - Example 3 -
// -> Type Narrowing in generics -
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  // process the user with some logic here....
  return user;
};

// console.log(processUser({ name: "John" }));
// throw work because the passed object doesn't have any id.

// console.log(processUser({ id: 1, name: "John" })); // correct

// ------------------------------------------------------------------------
// - Example 4 -
// -> Using Multiple Generics Variables and extends and keyof -

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

// console.log(getUsersProperty(usersArray, "email"));
// console.log(getUsersProperty(usersArray, "username"));
// console.log(getUsersProperty(usersArray, "company"));

// ------------------------------------------------------------------------
// - Example 5 -
// -> Generics with Classes -

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
