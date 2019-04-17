# unique-port
Build robust servers by guaranteeing they always run on a unique port

Write your application once, and be sure it always finds a port to run on

Github: https://github.com/iammadab/unique-port
Npm: https://www.npmjs.com/package/unique-port

## Installation

```javascript
    npm install unique-port
```

## API

#### with node http server...

```javascript
    const uniquePort = require("unique-port")
    const server = require("http").createServer()

    // Run the server on a unique port
    uniquePort(server)

```

#### or with express...

```javascript
    const express = require("unique-port")
    const app = require("express")()

    uniquePort(app)
```

### Defaults

By default, unique port tires to serve your application at port 3000.

If it fails, its moves by 1. To 3001 and so on.

#### Default port : 3000
#### Default step : 1

### Want to change the default port?

#### uniquePort(server, port)

```javascript
    const uniquePort = require("unique-port")
    const server = require("express")()

    // Start from port 4000
    uniquePort(server, 4000)
```

### Want to change the step?

#### uniquePort(server, port, step)
    
```javascript
    const uniquePort = require("unique-port")
    const server = require("express")()

    // Start the server from 4000 and step by 100
    uniquePort(server, 4000, 100)
```

This tries to run the server from port 4000 but then steps by 100

So it tries 4000, then 4100 and so on until one is found


### Author
Wisdom Ogwu (iammadab)

[Twitter](https://twitter.com/iammadab)