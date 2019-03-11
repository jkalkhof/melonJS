melonJS
=======
[![Build Status](https://travis-ci.org/melonjs/melonJS.svg)](https://travis-ci.org/melonjs/melonJS)
[![Dependencies](https://img.shields.io/david/melonjs/melonJS.svg)](https://david-dm.org/melonjs/melonJS)
[![Inline docs](http://inch-ci.org/github/melonjs/melonJS.svg?branch=master)](http://inch-ci.org/github/melonjs/melonJS)

A fresh & lightweight HTML5 game engine
-------------------------------------------------------------------------------
![melonJS](http://melonjs.org/media/alex4-github.png)

Copyright (C) 2011 - 2019 Olivier Biot

[melonJS](http://melonjs.org/) is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

About melonJS
-------------------------------------------------------------------------------

[melonJS](http://melonjs.org/) is the result of our enthusiasm & experiments with Javascript,
and currently features :

- A fresh & lightweight 2D sprite-based engine
- Standalone library (does not rely on anything else, except a HTML5 capable browser)
- Compatible with most major browsers (Chrome, Safari, Firefox, Opera, IE) and mobile devices
- Fast Canvas and WebGL rendering on desktop and mobile devices
- High DPI resolution & canvas auto scaling
- Multi-channel HTML5 audio support and Web Audio on supported devices
- Lightweight physics implementation to ensure low cpu requirements
- Polygon (SAT) based collision algorithm for accurate detection and response
- Fast Broad-phase collision detection using spatial partitioning
- 3rd party tools support for physic body definition (PhysicEditor, Physic Body Editor)
- Advanced math API for Vector and Matrix
- Tween Effects
- Transition effects
- A basic set of Object Entities (to be extended)
- Object Pooling
- Basic Particle System
- Basic animation management
- Standard spritesheet, single and multiple Packed Textures (Texture Packer, ShoeBox) support
- A state manager (to easily manage loading, menu, options, in-game state)
- Tiled map format version +0.9.x integration for easy level design
    - Uncompressed Plain, Base64, CSV and JSON encoded XML tilemap loading
    - Orthogonal, Isometric, Hexagonal and Perspective tilemap support
    - Multiple layers (multiple background/foreground, collision and Image layers)
    - Multiple Tileset support
    - Tileset Transparency settings
    - Layers Alpha settings
    - Rectangle, Ellipse, Polygon and Polyline objects support
    - Tiled Objects
    - Flipped & rotated Tiles
    - Dynamic Layer and Object/Group ordering
    - Dynamic Entity loading
    - Shape based Tile collision support
- System & bitmap fonts
- Mouse and Touch device support (with mouse emulation)
- Device motion & accelerometer support
- Built-in support for [CocoonJS](https://www.ludei.com/cocoonjs/) and [Ejecta](https://github.com/melonjs/melonJS/wiki/How-to-build-your-game-for-tvOS-(or-iOS)-using-Ejecta)
- Asynchronous messaging support (minPubSub)
- Basic GUI elements included
- Customizable loader

Using melonJS
-------------------------------------------------------------------------------

* [API Documentation](http://melonjs.github.io/melonJS/docs/) ([offline](https://github.com/melonjs/melonJS/archive/gh-pages.zip) version under the `docs` directory)
* [Examples](http://melonjs.github.io/melonJS/)

For your first time using melonJS, follow these tutorials :

- [Platformer](http://melonjs.github.io/tutorial-platformer/) Step by Step Tutorial.
- [Space Invaders](http://melonjs.github.io/tutorial-space-invaders/) Step by Step Tutorial.

You may find it useful to skim the overview found at the wiki [Details & Usage](https://github.com/melonjs/melonJS/wiki#details--usage)

When starting your own projects, checkout the [boilerplate](https://github.com/melonjs/boilerplate)


Building melonJS
-------------------------------------------------------------------------------
For most users, all you probably want is to use melonJS, and all you need then is just to download the latest pre-built [release](https://github.com/melonjs/melonJS/releases) to get started. The only time you should need to build melonJS is if you want to contribute to the project and start developing on it.

To build your own version of melonJS you will need to install :

- The [Node.js](http://nodejs.org/) JavaScript runtime and the [NPM](https://npmjs.org/) package manager

Once Node.js and NPM have been installed, you need to install build dependencies,
by executing the following in the folder where you cloned the repository :

    $ [sudo] npm install

Then build the melonJS source by running:

    $ npm run build

The generated library will be available under the `build` directory.

Building the documentation
-------------------------------------------------------------------------------
Similarly, you can build your own copy of the docs locally by running :

    $ npm run doc

The generated documentation will be available in the `docs` directory

Testing
-------------------------------------------------------------------------------

To run melonJS tests in node simply run the following:

    $ npm run test

This will run the jasmine spec tests with the output displayed on the shell. Do
note that the latest Chrome version is required, as the test unit will run the
Browser in a headless mode (in case of failed tests, upgrade your browser).

WIP Builds
-------------------------------------------------------------------------------
melonJS uses Travis-CI for automated testing and build uploads. The latest build
artifacts can be downloaded from the [melonjs-builds](https://melonjs-builds.s3.amazonaws.com/index.html?prefix=artifacts/)
bucket.

Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
* [melonJS developer forum](http://www.html5gamedevs.com/forum/32-melonjs/)
* [gitter web chat](https://gitter.im/melonjs/public)
* [melonJS wikipage](https://github.com/melonjs/melonJS/wiki)

For any other non technical related questions, feel free to also send us an [email](mailto:contact@melonjs.org).
