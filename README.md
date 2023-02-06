# @wepin/widget-sdk
Wepin Widget Javascript SDK for Web

## :fast_forward: Get App ID and Key 
Contact to wepin.contact@iotrust.kr
## :fast_forward: Install
```
npm install @wepin/widget-sdk
```
or
```
yarn add @wepin/widget-sdk
```
## :fast_forward: Import SDK
```javascript
import '@wepin/widget-sdk'

var Wepin = window.Wepin
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@wepin/widget-sdk@0.0.2-alpha/dist/wepin-widget-sdk.js" defer async></script>
```

## :fast_forward: Initialize 
Methods about initializing Wepin SDK
### init
```javascript
await Wepin.init(appId, appSdkKey[, attributes])
```
The `init()` method initializes Wepin SDK. If you don't have appId or appSdkKey, please contact to wepin.contact@iotrust.kr
#### Parameters
- `appId` \<string>
  - Application ID generated on application registration
- `appSdkKey` \<string>
  - Application SDK key assigned after application registration
- `attributes` \<Object> *optional*
  - Initial attributes for Wepin widget
  - Type of `attributes` is assigned at [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types) as `IAttributes`
  - `type` \<string> *optional*
    - Showing type of Wepin widget window
    - If `type` is omitted, `'hide'` is used
    - `'hide'`: Hide Wepin widget
    - `'show'`: Show Wepin widget after first loading
  - `defaultLanguage` \<string> *optional*
    - Default language of Wepin widget
    - If `defaultLanguage` is omitted, `'en'` is used
    - `'en'`: English
    - `'ko'`: Korean
  - `defaultCurrency` \<string> *optional*
    - Default currency of Wepin widget
    - If `defaultLanguage` is omitted, `'usd'` is used
    - `'usd'`: US Dollar
    - `'krw'`: Korean Won
#### Return value
- `Promise` \<boolean>
  - A `Promise` object resolved with result of initialization as boolean type.
#### Example
```javascript
var appId = 'YOUR_APP_ID'
var appSdkKey = 'YOUR_APP_SDK_KEY'
var attributes = {
	type: 'show',
	defaultLanguage: 'ko',
	defaultCurrency : 'krw',
}
await Wepin.init(appId, appSdkKey, attributes)
```

### isInitialized
```javascript
Wepin.isInitialized()
```
The `isInitialized()` method checks Wepin SDK is initialized.

#### Return value
- \<boolean>
  - `true` if Wepin SDK is already initialized.

## :fast_forward: Methods
Methods can be used after initialization of Wepin SDK.
### openWidget
```javascript
await Wepin.openWidget()
```
The `openWidget()` method shows Wepin widget. If a user is not logged in, Wepin widget will show login page. 
#### Return value
- `Promise` \<void>

### closeWidget
```javascript
Wepin.closeWidget()
```
The `closeWidget()` method closes Wepin widget.
#### Return value
- `undefined`

### getAccounts
```javascript
await Wepin.getAccounts()
await Wepin.getAccounts(networks)
```
The `getAccounts()` method returns user accounts. If user is not logged in, Wepin widget will be opened and show login page. It is recommended to use `getAccounts()` method without argument to get all user accounts.
#### Parameters
- `networks` \<Array> *optional*
  - `network` \<string> *optional*
#### Example
```javascript
var accounts = await Wepin.getAccounts(['Ethereum'])
```
#### Return value
- `Promise` \<Array>
  - If user is logged in, it returns a `Promise` object resolved with array of `account` of networks.
    - Type of `account` is assigned at [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types) as `IAccount`
    - `account` \<Object>
      - `address` \<string>
      - `network` \<string>
  - If networks aren't passed, it returns a `Promise` object resolved with array of `account` of all networks.
  - Example
    ```javascript
    [
	    {
		    address: "0x0000001111112222223333334444445555556666",
		    network: "Ethereum"
	    },
    ]
    ```
- `Promise` \<void>
  - If user is not logged in, it returns `Promise` \<void>.
