/*
 Copyright (c) 2013, Ryuichi Okumura. All rights reserved.
 Code licensed under the BSD License:
 https://github.com/okuryu/node-yconnect/blob/master/LICENSE
 */
"use strict";

var querystring = require("querystring"),
    OAuth2 = require("oauth").OAuth2;

var defaultRequestURL = "https://userinfo.yahooapis.jp/yconnect/v1/attribute";

function YConnect(options) {
    this.oauth = new OAuth2();
    this.token = options.token;
    this.requestURL = options.requestURL || defaultRequestURL;
}

YConnect.prototype.getUserInfo = function (params, callback) {
    if (typeof params !== "object") {
        params = {
            schema: "openid"
        };
    }
    var requestURL = this.requestURL;
    if (this.requestURL === defaultRequestURL) {
        requestURL =  + "?" + querystring.stringify(params);
    }
    if (typeof callback === "function") {
        this.oauth.get(requestURL, this.token, callback);
    }
    return this;
};

function yconnect(params) {
    var options;
    if (typeof params === "string") {
        options = {
            token: params
        };
    } else if (typeof params === "object") {
        if (typeof params.token !== "string") {
            throw new Error("the params.token (string) is required.");
        }
        options = params;
    } else {
        throw new Error("the params.token (string or object) is required.");
    }
    return new YConnect(options);
}

module.exports = yconnect;
