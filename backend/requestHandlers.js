var exec = require("child_process").exec;
function start(response) {
console.log("Request handler 'start' was called.");
response.write("Hello start");
response.end();
}
function find(response) {
console.log("Request handler 'start' was called.");
response.end();

}
function upload(response) {
console.log("Request handler 'upload' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Upload");
response.end();
}
function show(response) {
console.log("Request handler 'show' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello show");
response.end();
}
function login(response) {
console.log("Request handler 'login' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello login");
response.end();
}
function logout(response) {
console.log("Request handler 'start' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello logout");
response.end();
}
exports.start = start;
exports.upload = upload;
exports.find = find;
exports.show = show;
exports.login = login;
exports.logout = logout;
