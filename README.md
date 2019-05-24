[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Using this module in other modules

Here is a quick example of how this module can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/index.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports selected exports from other files. The _package.json_ file contains `main` attribute that points to the generated `lib/index.js` file and `typings` attribute that points to the generated `lib/index.d.ts` file.

> If you are planning to have code in multiple files (which is quite natural for a NodeJS module) that users can import, make sure you update `src/index.ts` file appropriately.

Now assuming you have published this amazing module to _npm_ with the name `xpub-generator`, and installed it in the module in which you need it -

- To use the `XPubGenerator` class in a TypeScript file -

```ts
import Bitcoin = require('bitcoinjs-lib');
import { XPubGenerator } from 'xpub-generator';
 
const g = new XPubGenerator('xpub....');
g.nthReceiving(1);
 
const gTestnet = new XPubGenerator('tpub...', Bitcoin.networks.testnet);
gTestnet.nthReceiving(1);
 
const gLitecoin = new XPubGenerator('tpub...', Bitcoin.networks.litecoin);
gLitecoin.nthReceiving(1);
```

- To use the `XPubGenerator` class in a JavaScript file -

```js
const Bitcoin = require('bitcoinjs-lib')
const XPubGenerator = require('xpub-generator').XPubGenerator;
 
const g = new XPubGenerator('xpub...');
g.nthReceiving(1);
 
const gTestnet = new XPubGenerator('tpub...', Bitcoin.networks.testnet);
gTestnet.nthReceiving(1);
 
const gLitecoin = new XPubGenerator('tpub...', Bitcoin.networks.litecoin);
gLitecoin.nthReceiving(1);
```

## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace {{github-user-name}}/{{github-app-name}} with your repo details like: "ospatil/generator-node-typescript".
