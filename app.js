"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var server = fastify_1.default({
    logger: true
});
server.get('/test', function (req, rep) {
    rep.send({ message: 'ok, it is working' });
});
server.get('/test', function (req, rep) {
    rep.send({ message: 'ok, it is working' });
});
try {
    server.listen(3333, '0.0.0.0', function () {
        console.log('Server is running!');
    });
}
catch (err) {
    console.log('erro');
}
