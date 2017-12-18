# hello
A Node.js module that prints 'Hello World'

## Installation 
```sh
npm install hello-omair --save
yarn add hello-omair
```

## Usage

### Javascript

```javascript
var hello = require('hello-omair');
var hw = hello.string('Hello World!');
```
```sh
Output should be 'Hello World!'
```

### TypeScript
```typescript
import { string } from 'hello-omair';
console.log('Hello World!')
```
```sh
Output should be 'Hello World!'
```

## Test 
```sh
npm run test
```
