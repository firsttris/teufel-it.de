# teufel-it.de

teufel-it.de created with [Bootstraps 4](https://v4-alpha.getbootstrap.com/), [Vue.js 2](https://vuejs.org/) and [Webpack 2](https://webpack.github.io/) running on a [Express](http://expressjs.com/de/) node with server-side rendering.

based on [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## Demo

[Live Demo](https://teufel-it.de/)

## Features

- Server Side & Client Side Rendering
- Client-side state & DOM hydration
- Automatically inlines CSS used by rendered components only
- Hot-reload in development
- Docker Image
  
## Performance

Run [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=teufel-it.de) :100:

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

## Docker
``` bash
# build docker image
docker build -t node/teufel-it.de .

# create & run docker container
docker run \
--name teufel-it-de \
--restart=always \
-d node/teufel-it.de
```

## Sources

[vue-ssr-demo](https://github.com/doabit/vue-ssr-starter-kit)   
[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## Donate
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KEAR9ZC228YCL)

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
