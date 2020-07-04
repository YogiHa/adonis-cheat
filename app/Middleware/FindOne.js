"use strict";

class FindOne {
  async handle({ request, response }, next) {
    let { name } = request.post();
    if (!name) {
      return response.status(404).json("stop here");
    }
    // request.body.name = name
    await next();
  }
}

module.exports = FindOne;
