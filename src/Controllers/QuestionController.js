module.exports = {
  index(require, response) {
    const roomId = require.params.room;
    const questionId = require.params.question;
    const actions = require.params.action;
    const password = require.body.password;

    console.log(
      `room:${roomId},questionId:${questionId},actions:${actions},password:${password}`
    );
  },
};
