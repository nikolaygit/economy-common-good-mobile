Economy for the Common Good - Mobile app
==========================

Mobile app for the Economy for the Common Good (Gemeinwohl-Ökonomie): http://gemeinwohl-oekonomie.org/


## Goals

Create a mobile application to explore the
[manual of the Economy for the Common Good](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#matrix)
in different languages for all major mobile devices.

## Roadmap

* :white_check_mark: Create a [first prototype of the app in German](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?milestone=1&page=1&state=closed) with the indicator C1.
* :arrow_right: Create a [prototype of the app in German](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?milestone=2&state=open) with all indicators.
* Add additional ECG information:
    * contents of the ECG
    * Vision, history
    * Join, donate
* Publish the free app in the Google Play store (Android).
* Add English language support.
* Receive the movement news in the application.

Last update: 01.02.2014

See [Progress](CHANGELOG.md).

See [current work](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?labels=2+-+Working&milestone=&page=1&state=open).

## Development

We use [PhoneGap](http://phonegap.com/) and [jQuery Mobile](http://jquerymobile.com/)
to build and deploy the mobile application.

### Setup

Setup your development environment:

* [Install Cordova and the Android plattform](http://docs.phonegap.com/en/3.3.0/guide_cli_index.md.html#The%20Command-Line%20Interface).
* [Install Grunt](https://github.com/sinnwerkstatt/sinnwerkstatt-web/wiki/Grunt#wiki-install) and run ``npm install``

### Develop

All source files are in the ``www`` folder. All changes should be made there.

Before starting developing run:

* ``grunt`` - for compiling *.scss files into CSS and livereload.

### Build

* Run ``cordova build`` to build the Android application. The file ``EconomyForTheCommonGood-debug.apk`` will be generated in the ``platforms/android/bin`` folder.

## Contribute

### Send a bug or propose new features
If you want to send a bug, or want a new feature for the mobile application, please:

* [Create a new issue here](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues/new) (you will need a GitHub account)
* [Help with (comment on) the current issues](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues/).
* You can write in English or German.

### Contribute to the source code
* Fork, improve it and send a pull request.

## Learn more
 * Visit the official [Gemeinwohl-Ökonomie website](http://www.gemeinwohl-oekonomie.de/).

## License

* Source code is under the MIT License.