# @wepin/widget-sdk
Wepin Widget Javascript SDK for Web.

This package is only available in the web environment. It cannot be used in Android and iOS apps (Webview).

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

## ⏩ Initialize

Methods about initializing Wepin SDK

### init

```javascript
await Wepin.init(appId, appKey[, attributes])
```

#### Parameters

- `appId` \<string>
- `appKey` \<string>
- `attributes` \<IAttributes> _optional_
  - Type of `attributes` is assigned at [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types) as `IAttributes`
    - type: The type of display of widget as wepin is initiated (defalut: 'hide)
      - 'hide' | 'show'
    - defaultLanguage: The language to be displayed on the widget (default: 'ko')
      - Currently, only 'ko' and 'en' are supported.
    - defaultCurrency: The currency to be displayed on the widget (default: 'KRW')

#### Example

```javascript
await Wepin.init('APPID', 'APPKEY', {
  type: 'hide',
  defaultLanguage: 'en',
  defaultCurrency: 'USD',
})
```

### isInitialized

```javascript
Wepin.isInitialized()
```

The `isInitialized()` method checks Wepin SDK is initialized.

#### Return value

- \<boolean>
  - `true` if Wepin SDK is already initialized.

## ⏩ Methods

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

- `networks` \<Array> _optional_
  - `network` \<string> _optional_

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
    ;[
      {
        address: '0x0000001111112222223333334444445555556666',
        network: 'Ethereum',
      },
    ]
    ```
- `Promise` \<void>
  - If user is not logged in, it returns `Promise` \<void>.

### getStatus (Support from version `0.3.1`)

```javascript
Wepin.getStatus()
```

The `getStatus()` method returns lifecycle of wepin.

#### Example

```javascript
var status = Wepin.getStatus()
```

#### Return value

- \<WepinLifeCycle>
  - The `WepinLifeCycle` is defined at [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types) as (Support from version `0.0.7`)
    - `not_initialized`: if wepin is not initialized
    - `initializing`: if wepin is initializing
    - `initialized`: if wepin is initialized
    - `before_login`: if wepin is initialized but the user is not logged in
    - `login`: if the user is logged in

### login(Support from version `0.3.1`)

```javascript
await Wepin.login()
```

The `login()` method returns information of the logged-in user. If a user is not logged in, Wepin widget will show login page.

#### Example

```javascript
var userInfo = await Wepin.login()
```

#### Return value

- `Promise` \<IWepinUser>

  - Type of `IWepinUser` is defined in [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types) (Support from version `0.0.7`)

    - `status` \<'success'|'fail'>
    - `userInfo` \<object> _optional_
      - `userId` \<string>
      - `email` \<string>
      - `provider` \<'google'|'apple'>

  - Example

    ```js
    {
    	status: 'success',
    	userInfo: {
    		userID: '123455',
    		email: 'abc@test.com',
    		provider: 'google'
            }
    }
    ```

### logout (Support from version `0.3.1`)

```javascript
await Wepin.logout()
```

The `logout()` method performs a wepin logout .

#### Return value

- `Promise` \<void>

Example

```javascript
await Wepin.logout()
```

### **finalize** (Support from version `0.3.1`)

```javascript
Wepin.finalize()
```

The `finalize()` methodfinalizes the Wepin SDK

#### Return value

- `void`

Example

```javascript
Wepin.finalize()
```
