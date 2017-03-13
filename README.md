AF Code Test
=============================

## Requirements

To use this you'll need the following installed:

+ [NodeJS](http://nodejs.org) - use the installer
+ [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp`

## Setup

1. `$ git clone git@github.com:macphersonj/af-test.git`
2. Run `$ npm install`

## Usage

1. To start the browser syncing and file watching, just run `$ gulp` in the project directory.

## Build

The static site lives in the `/dist` folder.

1. Run `$ gulp build`

+ Processes SASS to CSS
+ Concats + minifies JS/CSS
+ Optimises assets
+ Outputs to `/dist`
