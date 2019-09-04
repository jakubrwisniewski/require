# require
Simple JavaScript module manager

## Usage

```javascript
define('Button', () => {
  return () => document.createElement('button');
});

const Button = require('Button');
const button = Button();
```
