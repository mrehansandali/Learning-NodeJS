// import { es6func } from "./esmodule.mjs";
import url from 'node:url';
// const secondfile = require("./second")
// const os = require('os');

// es6func()

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh'; 

console.log(myURL)
console.log(myURL.href)