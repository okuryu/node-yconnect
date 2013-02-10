"use strict";

var querystring = require('querystring');
var OAuth2 = require('oauth').OAuth2;

function YConnect(options) {
    this.oauth = new OAuth2();
    this.options = options || {};
}

YConnect.prototype = {
    getUserInfo: function (params, callback) {
        if (typeof params !== 'object') {
            params = {
                schema: 'openid'
            };
        }
        var urlBase = 'https://userinfo.yahooapis.jp/yconnect/v1/attribute',
            url = urlBase + '?' + querystring.stringify(params);
        this.oauth.get(url, this.options.access_token, callback);
    }
};

module.exports.YConnect = YConnect;
