import {
  createLogger,
  ConsoleFormattedStream,
  stdSerializers
} from 'browser-bunyan'

const log = createLogger({
  name: 'formatted',
  streams: [{
      level: 'info',
      stream: new ConsoleFormattedStream()
    },
    {
      level: 'warn',
      stream: new ConsoleFormattedStream()
    },
    {
      level: 'error',
      stream: new ConsoleFormattedStream()
    },
    {
      level: 'debug',
      stream: new ConsoleFormattedStream()
    },
    {
      level: 'fatal',
      stream: new ConsoleFormattedStream()
    }
  ],
  serializers: stdSerializers,
  src: true
})

const logger = {
  install(Vue, options) {
    Vue.prototype.$log = log
  }
}

export default logger
