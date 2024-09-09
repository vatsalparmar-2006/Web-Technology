function hello() {
    return "Hello from other module...";
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.hello = hello;