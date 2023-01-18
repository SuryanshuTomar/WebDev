// ----------------------------------------------------------------------------------------------
// => URL Class in Javascript -

// - The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
// - Syntax -
// new URL(url)
// new URL(url, base)

// 1. url -
// - A string or any other object with a stringifier — including, for example, an <a> or <area> element — that represents an absolute or relative URL. If url is a relative URL, base is required, and will be used as the base URL. If url is an absolute URL, a given base will be ignored.

// 2. base (Optional) -
// - A string representing the base URL to use in cases where url is a relative URL. If not specified, it defaults to undefined.

// - Example -
// - This will return us a new url object with different properties and values of a URL.
// const URL_STRING = "https://www.youtube.com";
// const url = new URL(URL_STRING);

// ----------------------------------------------------------------------------------------------
// - Check the url -

// console.log(url);
// console.log(url.hostname);

// ----------------------------------------------------------------------------------------------
// - We can change the properties of our url object

// url.hostname = "www.google.com";
// console.log(url);
// console.log(url.hostname);

// ----------------------------------------------------------------------------------------------
// - We can also print our whole url using toString() method

// console.log(url.toString());

// ----------------------------------------------------------------------------------------------
// - Using search property in url object to set the url search parameters-

// url.search = "?name=alex mercer&age=24";
// console.log(url);
// console.log(url.toString());

// ----------------------------------------------------------------------------------------------
// - Using the URLSearchParams property to set the url search parameters -

// - URLSearchParamas is itself an instance of URLSearchParams in the url object. And it can be used to set and change the query string for our url object.
// url.searchParams.set("name", "alex");
// url.searchParams.set("age", 25);
// console.log(url);
// console.log(url.toString());

// ----------------------------------------------------------------------------------------------
// - Using the URLSearchParams property to get the url search parameters -

// url.search = "?name=alex mercer&age=24";
// console.log(url.searchParams.get("name"));
// console.log(url.searchParams.get("age"));

// ----------------------------------------------------------------------------------------------
// - Get the PathName of the url object -

// console.log(pageUrl.pathname);

// ----------------------------------------------------------------------------------------------
// - Using the URL() to get the current Page url -

// const pageUrl = new URL(window.location.href);
// console.log(pageUrl);
// console.log(pageUrl.toString());

// - Using the URL() to get the assests file urls -

// - For this we have to provide the path to the asset in the constructor as the first argument and import.meta.url as the second argument will get the data on the current url of the page / current working directory.
// Syntax - const urlName = new URL("/path to the asset from the current file", import.meta.url)

const cssUrl = new URL("../Practise/style.css", import.meta.url);
console.log(cssUrl);

// ---------------------------------------------------------------------------------------------
// - Fetching the data by passing the url object to the fetch API -

// fetch(cssUrl)
// 	.then((response) => response.text())
// 	.then((text) => console.log(text))
// 	.catch((error) => console.log(error));
