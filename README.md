# Angular 2 Webpack

An Angular 2 starter kit with [Webpack](https://webpack.github.io/)

## Getting Started

### Dependencies
* [Node](https://nodejs.org/) (>= 6.9.1)

### Setup
1. `git clone https://github.com/bellizio/angular2-webpack.git`
1. `cd angular2-webpack`
1. `npm install`

## Overview

This is an Angular 2 Webpack starter kit based on the official [Angular Webpack guide](https://angular.io/docs/ts/latest/guide/webpack.html). It includes everything detailed in the guide with a few modifications in order to incorporate the following:

* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html)
* [Ahead-of-Time Compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
* Sass

## Scripts

### Development

```npm start``` - builds and serves the app at localhost:8080

### Production

```npm run build:prod``` - builds the app for production

```npm run serve:prod``` - builds the app for production and starts a local server at localhost:8080

### Testing

```npm test``` - runs all unit tests
