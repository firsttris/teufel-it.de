# teufel-it.de

A Vue.js clone built with Vue 2.0 + vue-router + vuex, with server-side rendering.

## Demo

[Live Demo](https://teufel-it.de/)

## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
- Single-file Vue Components
  - Hot-reload in development
  
## Performance

Google Page Speed :100:

[Run Page Speed Insight](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=teufel-it.de)  

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## Sources

[vue-ssr-demo](https://github.com/doabit/vue-ssr-starter-kit)   
[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## License

[MIT](http://opensource.org/licenses/MIT)
