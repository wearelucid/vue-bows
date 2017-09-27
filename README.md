# vue-log

Vue.js plugin for clear and understandable console logs.
It displays nice logs based on the component
written. It makes your logs clear and organized.

## Installation

```bash
yarn add git+ssh://git@github.com:wearelucid/vue-log#1.0.0
```

## Integration & Usage

```javascript
// imort
import log from '~/plugins/vue-log'

// Usage
this.log('string')
this.log(variable)
this.log('string', variable)
```

The output in the console will look like this:

```bash
  // ComponentName 'your log', yourVariable
```
