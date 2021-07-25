# Drupal starter theme

![Node.js CI](https://github.com/hjblokland/drupal-starter-theme/actions/workflows/node.js.yml/badge.svg)
![Drupal compatibility](https://img.shields.io/badge/Drupal%20compatibility-8.x|9.x-405b77.svg)

Drupal starter theme to kickstart your project.

- [Webpack](https://webpack.js.org/) for code compiling.
- [Browsersync](https://browsersync.io/) for synchronised browser testing.
- SVG icon system

## Installation instructions

Download and extract the source files into your project `themes/custom/THEMENAME`.

    wget https://github.com/hjblokland/drupal-starter-theme/archive/refs/heads/master.zip
    unzip master.zip
    mv drupal-starter-theme my_theme

### Give the theme a name

Where you see in these instructions `THEMENAME` you should substitute the name of your theme (e.g. `my_theme`),
using all lower case and with no spaces. Use underscores to separate words.

### Install node modules

    npm install

## Usage

By default all Stylesheets and Javascripts are bundled to `main.css` and `main.js`.
The entrypoint for these bundled files is `./src/index.js`.

### Compile for local development

    npm start

### Compile for production

    npm run build

### Linting

Lint js using eslint.

    npm run lint:js

Lint scss using stylelint.

    npm run lint:css

### Browsersync

Copy the `./config/config.js.example` file to `./config/config.js` and set
browsersyncTarget to your local environment. Don't commit this file.

Browsersync only works if the drupal/link_css module is enabled (enabled trough
dev config) and if all [drupal caching is disabled](https://www.drupal.org/node/2598914).

## File structure

### javascripts

Javascript is compiled with webpack 5.

### stylesheets

Sass (`.scss` and `.sass`) is compiled automatically.

### fonts, images

Files are emitting with `[hash][ext][query]` filename into the output directory.

### icons

Webpack automatically generates an icon sprite from the svg images in the `src/icons` 
folder. Use the following twig helper to render icons from the sprite as an inline SVG.

    {{ icon('image_id', 'image_desc') }}

### static

Things like favicons, app icons or images used directly from within the template 
should go in `src/static`, and will get copied over to `dist/static`. 
