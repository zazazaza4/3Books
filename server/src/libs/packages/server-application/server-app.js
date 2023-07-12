import fastify from 'fastify';

import { socketService } from '#libs/packages/socket/socket.js';

class ServerApp {
  #app;

  #api;

  #config;

  #database;

  constructor({ config, options, api, database }) {
    this.#config = config;

    this.#app = this.#initApp(options);

    this.#api = api;
    this.#database = database;
  }

  get app() {
    return this.#app;
  }

  get database() {
    return this.#database;
  }

  #initApp = options => {
    const app = fastify(options);
    socketService.initializeIo(app.server);

    return app;
  };

  initialize = async () => {
    this.#database.connect();

    return this;
  };

  start = async () => {
    try {
      await this.#app.listen({ port: this.#config.ENV.APP.PORT });
    } catch (error) {
      this.#app.log.error(error);
    }
  };
}

export { ServerApp };
