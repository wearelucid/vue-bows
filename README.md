# vue-log

Vue.js plugin for clear and understandable console logs.
It displays nice logs based on the component
written. It makes your logs clear and organized.

## Installation

```bash
yarn add https://github.com/wearelucid/vue-log.git#1.0.2
```

## Integration & Usage

```javascript
// import
import Vue from 'vue'
import { Log } from 'vue-log'

Vue.use(Log)

// Then you will be able to use it globally across your Project. Usage Example:
mounted () {
  this.log('string')
  this.log(variable)
  this.log('string', variable)
}
```

### Integration with Nuxt.js
```javascript

// Create following file in your plugins folder.
'plugins/vue-log.js'

// Then add the plugin to your 'nuxt.config.js'
plugins: [
  '~/plugins/vue-log'
]
```
