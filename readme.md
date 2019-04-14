# unique-port
Build robust servers by guaranteeing they always run on a unique port

Write your application once, and be sure it always finds a port to run on

## Installation

```javascript
    npm install unique-port
```

## API

```javascript
    const uniquePort = require("unique-port")
    const server = require("http").createServer()

    // Run the server on a unique port
    uniquePort(server)

```


```javascript
    // Or with express
    const express = require("unique-port")
    const app = require("express")()

    uniquePort(app)
```

### Defaults

By default, unique port tires to serve your application at port 3000.

If it fails, its moves by 1. To 3001 and so on.

### Want to change the default port

uniquePort(server, port)

```javascript
    const uniquePort = require("unique-port")
    const server = require("express")()

    // Start from port 4000
    uniquePort(server, 4000)
```

### Want to change the step?

```javascript
    const uniquePort = require("unique-port")
    const server = require("express")()

    // Start the server from 4000 and step by 100
    uniquePort(server, 4000, 100)
```

This tries to run the server from port 4000 but then steps by 100

So it tries 4000, then 4100 and so on until one is found