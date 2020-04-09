# Punny

> Not very funny

A joke generator using [this API](https://github.com/Sv443/JokeAPI), thank you for the content.  
Build as a demo project for showing the different rendering modes of [Nuxt.js](https://nuxtjs.org). 

## Before anything

Please install your dependencies with npm

```bash
# install dependencies
$ npm install

```

## Single page application 

Build a single page application.
Turn off javascript. White page. 

```bash
# build static files to /dist
$ npm run build-spa 

# serve static files 
$ cd dist
$ npx serve
```

## Generate html on build 

Generate a prerendered application, this however only happens on build. 
Turn off javascript. See a page, but always the same page, because this done on build. 

```bash
# prerender
$ npm run generate

# serve static files 
$ cd dist
$ npx serve
```

## Run node.js server to have true universal rendering

Run in node.js to have true universal page rendering. 
Turn off javascript. Everything still works. 

```bash
# build for production and launch server
$ npm run build
$ npm run start
```

## Dev mode

If you want to do some development.

```
# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
