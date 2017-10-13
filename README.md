# d3-plugin-boilerplate

> A ready-to-dine boilerplate for d3-plugins

![alt text](img/icon.png)

This ready-to-dine boilerplate for d3-plug-ins is designed, so you'll be able to immediately start working on your plug-in's core implementation. You only require a fork! The boilerplate targets D3v4 and applies the best practices from:

- [Mike Bostock](https://twitter.com/@mbostock) – [Towards Reusable Charts](https://bost.ocks.org/mike/chart/)
- [Mike Bostock's d3-shape source code](https://github.com/d3/d3-shape)
- [Rob Moore](https://twitter.com/@robmoo_re) – [Towards updatable D3.js Charts](https://www.toptal.com/d3-js/towards-reusable-d3-js-charts)

## Getting started

- [Fork this repository](https://github.com/BastiTee/d3-plugin-boilerplate#fork-destination-box)
- Clone your fork
- Change to the repositories folder
- Run `npm install`
- Start the example, e.g., by running `python -m SimpleHTTPServer` or `http-server` after `node install -g http-server`.
- Open browser at <http://localhost:8000/example/index.html>

## Content

The plug-in implemented in this boilerplate doesn't do much obviously. It basically creates a rectangle per dataset in [`example/data.csv`](example/data.csv) and the given width and height.

- [`package.json`](package.json) – Plug-in definition for node package manager (npm)
- [`index.js`](index.js) – Your plug-in's export manifest
- [`src/index.js`](src/index.js) – Your plug-in implementation requiring d3v4
- [`test/main-test.js`](test/main-test.js) – A test suite for your plug-in
- [`example/index.html`](example/index.html) – Simple HTML page demonstrating your plug-in
- [`example/data.csv`](example/data.csv) – Some sample data
- [`img/`](img/) – A resource folder ignored during all npm/build processes

See individual files for more documentation. After you've built the plug-in with `npm install` or `npm run prepublish` you'll find the shippable artifacts inside the `build/` folder.

## Scripts

Using `npm run` the following scripts are available:

- `pretest` – Pre-testing script that bundles your plug-in into a single file to `build/` so you'll be able to test using `example/`
- `test` – Runs your test suite against the plug-in implementation
- `prepublish` – Bundles your plug-in into a single file and its minified version to `build/`

Additionally the following scripts are available:

- `run-example-linux.sh` – Starts a simple HTTP server so you'll be able to check out the example implementation on <http://localhost:8000/example/index.html>

## To-Do's

- [x] Select a license
- [x] Generalize package.json
- [x] Include some library for demonstration
- [x] Document content of repository
- [x] Document the pretest, prepublish, test scripts
- [ ] Reestablish a post-publish npm script

## License

Code is licensed under [Apache License Version 2.0](LICENSE).

Icon made by [Freepik](http://www.freepik.com) from [Flaticon](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/) a
