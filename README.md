# nachos-config

Nachos settings file for nachos

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OSX</th>
      <th>Windows</th>
      <th>Coverage</th>
      <th>Dependencies</th>
      <th>DevDependencies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/nachos/nachos-config"><img src="https://img.shields.io/travis/nachos/nachos-config.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/noamokman/nachos-config"><img src="https://img.shields.io/appveyor/ci/nachos/nachos-config.svg?style=flat-square"></a>
      </td>
      <td align="center">
<a href='https://coveralls.io/r/nachos/nachos-config'><img src='https://img.shields.io/coveralls/nachos/nachos-config.svg?style=flat-square' alt='Coverage Status' /></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/nachos-config"><img src="https://img.shields.io/david/nachos/nachos-config.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/nachos-config#info=devDependencies"><img src="https://img.shields.io/david/dev/nachos/nachos-config.svg?style=flat-square"/></a>
      </td>
    </tr>
  </tbody>
</table>

## Have a problem? Come chat with us!
[![Join the chat at https://gitter.im/nachos/nachos-config](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachos/nachos-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation
``` bash
  $ [sudo] npm install nachos-config --save
```

## Examples
Nachos settings defines the defaults for nachos settings file

``` js
var nachosConfig = require('nachos-config')();
```

See [settings-file](https://github.com/nachos/settings-file) documentation to see list of available functions

## Run Tests
``` bash
  $ npm test
```

## License

[MIT](LICENSE)
