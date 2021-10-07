module.exports = {
  create(require, response) {
    let roomId = 123456;
    response.redirect(`/room/${roomId}`);
  },
};
