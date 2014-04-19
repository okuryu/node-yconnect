# node-yconnect

[YConnect](http://developer.yahoo.co.jp/yconnect/) is OAuth 2.0 + OpenID
Connect authorization functionality by Yahoo! JAPAN.

## Install

```
npm install yconnect
```

## Usage

By passing the access token to access the API, you can retrieve the data.

### UserInfo API

A example to access the [UserInfo API](http://developer.yahoo.co.jp/yconnect/userinfo.html):

```javascript
var YConnect = require('yconnect').YConnect;
var yc = new YConnect({
    access_token: '<access token>'
});

yc.getUserInfo({schema: 'openid'}, function (error, data) {
    if (!error) {
        console.log(JSON.parse(data));
    } else {
        console.log(error);
    }
});
```

The result just below:

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

## License

BSD license
