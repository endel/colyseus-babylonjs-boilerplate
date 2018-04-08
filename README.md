# BabylonJS + Colyseus (multiplayer boilerplate)

This boilerplate is intended to be used for the [BabylonJS 2.5 Challenge](http://www.html5gamedevs.com/topic/26874-celebrating-25-babylonjs-challenge-is-back/)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) | [Live demo](https://babylonjs-multiplayer.herokuapp.com/)

**Requires [NodeJS v8.0.0+](https://nodejs.org/en/download/)**

## How to use

Check out this repository.

```
git clone https://github.com/endel/babylonjs-multiplayer-boilerplate.git
```

Inside this repository, there's two separate applications. The client (babylonjs + colyseus client) and the server (nodejs + colyseus server).

### Client application

To be able to build the client application, you'll need to enter in the folder,
and install its dependencies first.

```
cd babylonjs-multiplayer-boilerplate/client
npm install
```

Now you can build and run it by running:

```
npm start
```

It will spawn the `webpack-dev-server`, listening on [http://localhost:8080](http://localhost:8080).


### Server application

For the server, the steps are exacly the same. Install the dependencies:

```
cd babylonjs-multiplayer-boilerplate/client
npm install
```

Now you can build and run it by running:

```
npm start
```

It will spawn a web socket server, listening on [ws://localhost:2657](ws://localhost:2657).

## Documentation

- [BabylonJS documentation](https://doc.babylonjs.com/)
- [Colyseus documentation](http://colyseus.io/docs/)

## Tooling

This project is configured to use the following libraries and tools:

- [webpack](https://github.com/webpack/webpack)
- [typescript](https://github.com/Microsoft/TypeScript)
- [babylonjs](https://github.com/BabylonJS/Babylon.js)
- [colyseus](https://github.com/gamestdio/colyseus)


## License

Apache License 2.0