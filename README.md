# vue-log

Vue.js plugin for clear and understandable console logs. <br>
It displays nice logs based on the component
written. It makes your logs clear and organized.

## Installation

```bash
yarn add https://github.com/wearelucid/vue-log.git#1.0.4
```

## Integration & Usage

```javascript
// import
import Vue from 'vue'
import { Log } from 'vue-log'

Vue.use(Log)
```
```javascript
// You are now able to use it in your components in your Project. Like this:

export default {
  name: 'MyComponent',
  data: () => ({
    variable: 'foo'
  }),
  mounted () {
    this.log('string') // logs "MyComponent // string"
    this.log(this.variable) // logs "MyComponent // foo"
    this.log('string', this.variable) // logs "MyComponent // string, foo"
  }
}
```

### Integration with Nuxt.js
```javascript

// Create following file in your plugins folder. and Add
'plugins/vue-log.js'

// Then add the plugin to your 'nuxt.config.js'
plugins: [
  '~/plugins/vue-log'
]
```
