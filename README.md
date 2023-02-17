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
```
import '@wepin/widget-sdk'
```
or
```
<script src="https://cdn.jsdelivr.net/npm/@wepin/widget-sdk@0.0.2-alpha/dist/wepin-widget-sdk.js" defer async></script>
```

## :fast_forward: Initialize 
```
const Wepin = window?.Wepin 
await Wepin.init(attributes)
```
Wepin is initialized by an object of `IAttributes`. (Refer to [`@wepin/types`](https://github.com/WepinWallet/wepin-js-sdk-types))

