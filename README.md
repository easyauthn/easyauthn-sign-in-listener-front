# easyauthn-sign-in-listener-front
EasyAuthn package implementing [sign in listener](https://github.com/easyauthn/api-doc#sign-in-listener-front).
EasyAuthn API is public and you can create your own module simular to this one.

## Table of contents

1. [Installation](#installation)
2. [Examples](#examples)

## Installation

You can include direct link in the page where you will get the last version:
```
<script src="https://easyauthn.com/sdk/easyauthn-sign-in-listener-front/easyauthn.js"></script>
```

or you can download the repo an make setup on your server. In this case you need to change the `socket.io.js` path in `easyauthn.js`.

## Examples

After you have included the SDK in the project you will have access to `easyauthn` object.
To init:
```
easyauthn.init('STATUS_ROOM_VALUE')
```
`STATUS_ROOM_VALUE` is `statusRoom` from [requestInstanceIdUrl](https://github.com/easyauthn/api-doc#requestinstanceidurl)

After the init you can lister for the event:
```
easyauthn.onStatus((status) => { 
  if (status === 'ok') {
    // all is good and you can create behaviour based on the event
  }
})
```
