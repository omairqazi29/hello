# hello
A Node.js module that prints 'Hello World'

## Installation 
```sh
npm install hello --save
yarn add hello
```

## Usage

### Javascript

```javascript
var hello = require('hello');
var hw = hello.string('Hello World!');
```
```sh
Output should be 'Hello World!'
```

### TypeScript
```typescript
import { string } from 'hello';
console.log('Hello World!')
```
```sh
Output should be 'Hello World!'
```

## Test 
```sh
npm run test
```
