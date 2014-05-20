/*
 Copyright (c) 2013, Ryuichi Okumura. All rights reserved.
 Code licensed under the BSD License:
 https://github.com/okuryu/node-yconnect/blob/master/LICENSE
 */
/*global describe, it*/
"use strict";

var yconnect = require("../index"),
    EchoEcho = require("echoecho").EchoEcho,
    http = require("http"),
    expect = require("chai").expect;

var ee = new EchoEcho({all: true}),
    eeBaseURL = "http://127.0.0.1:8080",
    server;

server = http.createServer(function (req, res) {
    if (ee.handle(req)) {
        ee.serve(req, res);
    } else {
        console.log("Bad Request");
    }
});
server.listen(8080);

describe("Initialize Tests", function () {
    it("basic initialize", function () {
        var connect = yconnect({
            token: "test_api_key"
        });
        expect(connect).to.be.an("object");
    });
    it("string initialize", function () {
        var connect = yconnect("test_api_key");
        expect(connect).to.be.an("object");
    });
    it("empty option", function () {
        expect(yconnect).to.throw(Error);
    });
    it("empty api key", function () {
        expect(function () {
            yconnect({});
        }).to.throw(Error);
    });
});

describe("Get User Info Tests", function () {
    it("basic get user info", function () {
        var connect = yconnect({
            token: "test_api_key"
        }).getUserInfo();
        expect(connect).to.be.an("object");
    });
    it("get user info with params", function () {
        var connect = yconnect({
            token: "test_api_key",
            requestURL: eeBaseURL + "/echo/post?response={\"user_id\":\"1\"}"
        }).getUserInfo({
            schema: "openid"
        }, function () {
        });
        expect(connect).to.be.an("object");
    });
});
