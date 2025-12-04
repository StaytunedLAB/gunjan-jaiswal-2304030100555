/* Function Object (new Function) */

const add = new Function("a", "b", "return a + b;");

const greet = new Function(
"name",
"if (!name) return "Hello, Stranger!"; return "Hello, " + name.toUpperCase();"
);

function testScope() {
const secret = "local-secret";

const normalFn = function () {
return secret;
};

const funcObj = new Function("return typeof secret !== 'undefined' ? secret : 'no access';");

return { normalFn: normalFn(), funcObj: funcObj() };
}

const scopeResult = testScope();

/* Named Function Expression (NFE) */

const factorial = function calc(n) {
if (n <= 1) return 1;
return n * calc(n - 1);
};

const backup = factorial;
factorial = null;
const backupResult = backup(5);

const anon = function (n) {
return n * 2;
};

const named = function double(n) {
return n * 2;
};

/* Hoisting */

function declaredFn() {
return "Declared function";
}

const exprFn = function () {
return "Expression function";
};