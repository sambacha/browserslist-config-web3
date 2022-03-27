# browserslist-config-web3

[![nodejs](https://github.com/sambacha/browserslist-config-web3/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sambacha/browserslist-config-web3/actions/workflows/nodejs.yml)

## Motivation

Web3 DApps don't need to support things like IE, etc. Using this configuration, you will tell babel/typescript not to support those browsers, thereby reducing polyfills, etc which lead to a smaller compiled output. This means better performance as less javascript is transfered over the wire that has to be parsed by the browser.

#### Additional Points of Reference 

Google Workspace dropped support for Internet Explorer on [March 15th, 2021](https://workspaceupdates.googleblog.com/2021/02/reminder-ending-support-for-ie11-for.html)

(Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets, Slides, Forms, Sites, [etc.](https://workspace.google.com))

### Desktop browsers [[policy](https://support.google.com/a/answer/33864)]

- Chrome
- Firefox
- Safari
- Edge

### Mobile [[policy](https://support.google.com/a/answer/6288871)]

- Chrome for Android _(caniuse data caveat: best covered by matching desktop Chrome versions)_
- iOS Safari

[see https://browserslist.dev](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) for examples

## Getting started

```bash
npm install -S browserslist-config-web3
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add browserslist-config-web3
```

## Example

```javascript
// example config
'use strict';
module.exports = {
  production: [
    '>0.3%',
    'not dead',
    'not op_mini all',
    'not IE > 0',
    'not samsung 4',
    'not and_uc 12.12',
  ],
  development: [
    'last 1 chrome version',
    'last 1 firefox version',
    'last 1 edge version',
  ],
};
```

### Browser Support

Using the example above, you can check to see browser coverage by:
```shell
npx browserslist ">0.3%, not dead, not op_mini all, not IE > 0"
```
Returns:

```javascript
/** @usage */
/** @returns ['>0.3%', 'not dead', 'not op_mini all', 'not IE > 0']; */
and_chr 89
and_uc 12.12
chrome 88
chrome 87
chrome 86
edge 88
firefox 85
ios_saf 14.0-14.5
ios_saf 13.4-13.7
ios_saf 12.2-12.4
opera 73
safari 14
safari 13.1
samsung 13.0
```



## 📝 License

   
Licensed under the Apache License, Version 2.0 (the "License"); you may not use   
this file except in compliance with the License. You may obtain a copy of the   
License at   
   
http://www.apache.org/licenses/LICENSE-2.0   
   
Unless required by applicable law or agreed to in writing, software distributed   
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR   
CONDITIONS OF ANY KIND, either express or implied. See the License for the   
specific language governing permissions and limitations under the License.   
   
