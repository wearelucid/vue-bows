# vue-bows

Vue.js plugin for clear and understandable console logs. <br>
It displays nice logs based on the component
written. It makes your logs clear and organized.

## Installation

```bash
yarn add vue-bows
```

## Integration & Usage

```javascript
// import
import Vue from 'vue'
import Log from 'vue-bows'

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
### Usage outside of components
```javascript
import { createLogger } from 'vue-bows'

const log = createLogger('nameOfTheLogger') // replace name with something meaningful

log('Log this')
```


### Integration with Nuxt.js
```javascript

// Create following file in your plugins folder. and Add
'plugins/vue-bows.js'

// Then add the plugin to your 'nuxt.config.js'
plugins: [
  '~/plugins/vue-bows'
]
```

### Enable your browser

First you must enable it in your browsers console: Type localStorage.debug = true in your browser's console to activate it.
