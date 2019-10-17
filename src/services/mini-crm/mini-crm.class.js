/* eslint-disable no-unused-vars */
exports.MiniCrm = class MiniCrm {
  constructor(options) {
    this.options = options || {};
  }

  async get(id, params) {
    const fs = require('fs');
    const path = require('path');

    let data = {};

    try {
      let rawData = fs.readFileSync(path.join(__dirname, `../../content/${id}.json`), "utf8");
      data = JSON.parse(rawData);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }

    return {id, data}
  }
};
