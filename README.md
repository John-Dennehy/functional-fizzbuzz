# Functional Fizzbuzz
My attempt at creating fizzbuzz in javascript, while using functional programming and TDD. Feedback on how to improve my approach is welcome!

## Initial Setup

In terminal:

```terminal
npm init -y
npm i --save-dev jest babel-jest @babel/core @babel/preset-env
```

Create a config file called 'babel.config.js and add:

```js
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
}
```

Ensure package.json has jest set to the testing frawework:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
