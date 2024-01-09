# @wepin/widget-sdk

<div>
  <!-- NPM Version -->
  <a href="https://www.npmjs.org/package/@wepin/widget-sdk">
    <img src="http://img.shields.io/npm/v/@wepin/widget-sdk.svg"
    alt="NPM version" />
  </a>
</div>
<br />
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
    - loginProviders: An array of login providers to configure the widget. (If not provided, all available login providers will be displayed on the widget.)
      - The `loginProviders` parameter accepts values defined in the `LoginProviders` of `@wepin/types `, starting from version `v0.0.10`.

#### Example

```javascript
await Wepin.init('APPID', 'APPKEY', {
  type: 'hide',
  defaultLanguage: 'en',
  defaultCurrency: 'USD',
  loginProviders: ['google', 'apple'],
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

## ⏩Provider(Support from version `0.3.2`)

Wepin Provider Widget SDK for Web.

This package is only available in the web environment. It cannot be used in Android and iOS apps(Webview).

Wipin supports providers that return JSON-RPC request responses to connect with blockchain networks in webs. With Wipin Provider, you can easily connect to various networks supported by Wipin.

The providers supported by Wipin are as follows.

- EVM compatible Networks
- Klaytn Network (Comming soon)

### EVM compatible Networks

Ethers.js or Web3.js can be used with Wepin Provider to interoperate with EVM compatible blockchains.

#### Support Networks

| Chain ID | Network Name            | Network Variable   |
| -------- | ----------------------- | ------------------ |
| 1        | Ethereum Mainnet        | ethereum           |
| 5        | Ethereum Goerli Testnet | evmeth-goerli      |
| 19       | Songbird Canary Network | evmsongbird        |
| 137      | Polygon Mainnet         | evmpolygon         |
| 1001     | Klaytn Testnet          | klaytn-testnet     |
| 8217     | Klaytn Mainnet          | klaytn             |
| 80001    | Polygon Mumbai          | evmpolygon-testnet |
| 2731     | Time Testnet            | evmtime-elizabeth  |
| 11155111 | Ethereum Sepolia        | evmeth sepolia     |

### getProvider

It returns a Provider by given network.

```js
Wepin.getProvider({ network })
```

#### Parameter

- `network` \<string> - Available chains Wepin helps provide.(Network variables)

#### Return vlaue

- EIP-1193 provider.

#### Example

```js
const provider = Wepin.getProvider({ network: 'ethereum' })
```

### Method

- **Get Accounts**
  - You can receive account information through the initialized web3.

```javascript
const accounts = await web3.eth.getAccounts()
```

- **Get Balance**
  - You can check the account balance using the account information.

```javascript
const balance = await web3.eth.getBalance(accounts[0])
```

> Please refer to the document below for instructions on how to check the balance, fee details, block numbers, etc.
>
> - web3.js: [web3.js 1.0.0 documentation](https://web3js-kr.readthedocs.io/ko/latest/getting-started.html)
> - ethers.js: [ethers.js 5.7 documentaion](https://docs.ethers.org/v5/getting-started/)

- **Send Transaction**
  Transaction can be sent.

```javascript
const accounts = await web3.eth.getAccounts()
const tx = {
  from: accounts[0],
  gasPrice: '2000000000',
  gas: '21000',
  to: '0x11f4d0A3c1......13F7E19D048276DAe',
  value: '10000000000000000',
}
const response = await web3.eth.sendTransaction(tx)
```

- **Contract Call**
  A contract call can be performed.

```javascript
const callObject = {
  to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', //contract address
  data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003',
}
const response = await web3.eth.call(callObject)
```

For details of Ethereum compatible network providers, please refer to the link below.

[EIP-1193: Ethereum Provider Javascript API](https://eips.ethereum.org/EIPS/eip-1193)
