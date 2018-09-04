# Bunyan logger for VueJS

> This is just a vue plugin, core comes from bunyan & browser bunyan

### Install:

```bash
npm install vue-bunyan-logger@latest
```

### How to use
```javascript
var Vue = require('vue')
var logger = require('vue-bunyan-logger')

Vue.use(logger, { name: 'my-logger' }) // bind the plugin and include the logger name

```

```javascript

import Vue from 'vue'
import logger from 'vue-bunyan-logger'

Vue.use(logger)

```

### Current logging options

```javascript
this.$log.info('this logs an info message')

this.$log.warn('this logs a warning message')

this.$log.fatal('this logs a fatal message')

this.$log.error('this logs an error message')

this.$log.error({ obj: {
  message: 'this logs an object.'
}})
```

### Todo

  * options to pass to bunyan.
