# Quick Manual

---

![Read me](/docs/Capture.JPG)

## Local setup

1.  `git clone git@github.com:kuangthien/weather-app.git`
2.  `cd weather-app`
3.  `yarn` to install the app. Sing a song and wait a bit. (\*)
4.  `yarn dev` to start local coding. It's using netlify-dev to intergrate Netlify functions into CRA development experience. It's useful to avoid issues related to CORS

_In case of having issues related to babel-eslint, please remove **global** yarn cache folder (^^ sorry I don't have much time to guide of more detail) and install again_

## Unit testing

1. Prepare data in `/src/mockTestData.js`
2. Run `yarn test`

## Build:

1. `yarn build` - it's using CRA as default bundler
2. `serve -C` - to see on browser. Normally it works with a single SPA, but when we intergrate with netlify functions, we need more some configurations, I have not tested yet.

## Deployment

Just push code to master branch. I use Netlify CI/CD and e.thing works automatically.

[https://2021-weather-app.netlify.app](https://2021-weather-app.netlify.app)
