Project archived. For an up-to-date example, please check:

- https://doc.babylonjs.com/guidedLearning/multiplayer/Colyseus
- https://github.com/colyseus/tutorial-babylonjs-client
- https://github.com/colyseus/tutorial-babylonjs-server

---

# BabylonJS + Colyseus: Multiplayer Boilerplate

This is a project setup to use BabylonJS 4.x with Colyseus 0.14.x.

<img src="screenshot.png?raw=true" />

## Tooling

- [Webpack 4.x](https://github.com/webpack/webpack)
- [TypeScript 3.x](https://github.com/Microsoft/TypeScript)
- [BabylonJS 4.x](https://github.com/BabylonJS/Babylon.js)
- [Colyseus 0.14.x](https://github.com/colyseus/colyseus)
- [Node.js 12.x+](https://nodejs.org/)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
| [Live demo](https://babylonjs-multiplayer.herokuapp.com/)

**Requires [NodeJS v12.0.0+](https://nodejs.org/en/download/)**

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

For the server, the steps are exactly the same. Install the dependencies:

```
cd babylonjs-multiplayer-boilerplate/server
npm install
```

Now you can build and run it by running:

```
npm start
```

It will spawn a web socket server, listening on [ws://localhost:2657](ws://localhost:2657).

## Documentation

- [BabylonJS documentation](https://doc.babylonjs.com/)
- [Colyseus documentation](https://docs.colyseus.io/)

## License

Apache License 2.0
