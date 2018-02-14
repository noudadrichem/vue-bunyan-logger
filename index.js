import {
  createLogger,
  ConsoleFormattedStream,
  stdSerializers
} from 'browser-bunyan'

const log = ({ name, level }) = createLogger({
  name: name,
  level: level,
  stream: new ConsoleFormattedStream(),
  serializers: stdSerializers,
  src: true
})

const logger = {
  install(Vue, options) {
    Vue.prototype.$log = log(options)
  }
}

export default logger
