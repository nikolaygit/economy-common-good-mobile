Economy for the Common Good - Mobile app
==========================

Mobile app for the Economy for the Common Good (Gemeinwohl-Ökonomie): http://gemeinwohl-oekonomie.org/


## Goals

Create a mobile application to explore the [manual of the Economy for the Common Good](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#matrix) in different languages for all major mobile devices.

## Roadmap

* :white_check_mark: Create a [first prototype of the app in German](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?milestone=1&page=1&state=closed) with the indicator C1.
* :white_check_mark: Create a [prototype of the app in German](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?milestone=2&state=open) with all indicators.
* :white_check_mark: Add additional ECG information:
    * contents of the ECG
    * Vision, history
* Collaborate with the ECG movement on the further development. Ask whether it is desired to make it available to all people, through publishing it in Google Play and iPhone.
* Publish the free app in the Google Play store (Android).
* Add English language support.
* Build an iOS version.
* Embed example company balances in the mobile app.
* Receive the movement news in the application.

Last update: 01.02.2014

See [Progress](CHANGELOG.md).

See [current work](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?labels=2+-+Working&milestone=&page=1&state=open) and [open issues](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues).

## Use

### Android

* Enable installation of non-Market apps: ``Settings->Security->Unknown sources (check)``
* Download the [EconomyForTheCommonGood-debug.apk](https://github.com/sinnwerkstatt/economy-common-good-mobile/raw/master/platforms/android/bin/EconomyForTheCommonGood-debug.apk) file.
* Uplaod the file on your Android phone and open it. This will install the application on your Android phone.
* If you have problems with it, please [open a new GitHub issue](https://github.com/sinnwerkstatt/economy-common-good-mobile/issues?state=open)

Please note that the current version is test version, and maybe some functions will not work, but you will be able to read all informations in the app!

## Development

We use [jQuery Mobile](http://jquerymobile.com/) (HTML, CSS, JS) and [PhoneGap](http://phonegap.com/) (as a mobile app wrapper) to build and deploy the mobile application.

### Setup

Setup your development environment:

* [Install Cordova and the Android plattform](http://docs.phonegap.com/en/3.3.0/guide_cli_index.md.html#The%20Command-Line%20Interface).
* [Install Grunt](https://github.com/sinnwerkstatt/sinnwerkstatt-web/wiki/Grunt#wiki-install) and run:
    * ``npm install``
    * ``cd node_modules/grunt-dust-html``
    * ``npm install dustjs-helpers``

### Develop

All source files are in the ``www`` folder. All changes should be made there.

Before starting developing run:

* ``grunt build`` - to generate HTML from Dust templates with Javascript data
* ``grunt html`` - to add the generate HTML to the ``index.html``
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
