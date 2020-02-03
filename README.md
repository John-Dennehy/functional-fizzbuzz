# Setup

In terminal:
```
npm init -y
npm i --save-dev jest babel-jest @babel/core @babel/preset-env
```

Create a config file called 'babel.config.js and add:
```
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
