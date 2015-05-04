# node-yconnect

[![NPM version](https://img.shields.io/npm/v/yconnect.svg?style=flat-square)](https://www.npmjs.com/package/yconnect)
[![Build Status](https://img.shields.io/travis/okuryu/node-yconnect/master.svg?style=flat-square)](https://travis-ci.org/okuryu/node-yconnect)
[![Dependency Status](https://img.shields.io/gemnasium/okuryu/node-yconnect.svg?style=flat-square)](https://gemnasium.com/okuryu/node-yconnect)
[![Coverage Status](https://img.shields.io/coveralls/okuryu/node-yconnect.svg?style=flat-square)](https://coveralls.io/r/okuryu/node-yconnect?branch=master)

YConnect (OAuth 2.0 + OpenID connect authorization) for Node.js.

## Getting Started

Install to using NPM.

```
$ npm install yconnect
```

By passing the access token to access the API, you can retrieve the data.

Here is an example to access the [UserInfo API](http://developer.yahoo.co.jp/yconnect/userinfo.html):

```js
var yconnect = require('yconnect');

yconnect("<YOUR_ACCESS_TOKEN>").getUserInfo({schema: 'openid'}, function (error, data) {
    if (!error) {
        console.log(JSON.parse(data));
    } else {
        console.log(error);
    }
});
```

The result is just below.

```
{ user_id: '43M63NAGMHBAYMXRMY3WODOWS4',
  name: 'OkumuraRyuichi',
  given_name: 'Ryuichi',
  'given_name#ja-Kana-JP': '',
  'given_name#ja-Hani-JP': 'Ryuichi',
  family_name: 'Okumura',
  'family_name#ja-Kana-JP': '',
  'family_name#ja-Hani-JP': 'Okumura',
  locale: 'ja-JP',
  email: 'okuryu@gmail.com',
  email_verified: true,
  address:
   { country: 'jp',
     postal_code: '1060032',
     region: 'Tokyo',
     locality: 'Minato-ku' },
  birthday: '1984',
  gender: 'male' }
```

## More details to use YConnect

All the stuff in [YConnect official documents](http://developer.yahoo.co.jp/yconnect/).

## Author

* Ryuichi Okumura ([@okuryu](https://github.com/okuryu))

## License

This module is available under the [BSD license](LICENSE).

The [oauth](https://github.com/ciaranj/node-oauth) module is available under the MIT license.
