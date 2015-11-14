var Ctrl = require('./friend.server.controller');

module.exports = function (app) {  //this is wehere we are 'plugging it""
//everything friends need is in the friends folder. Good way to organize 'by feature'
    app.route('/api/friends')
        .post(Ctrl.postFriend)
        .get(Ctrl.getFriends);

    app.route('/api/friends/:id')
        .get(Ctrl.getOneFriend)
        .put(Ctrl.putFriend)
        .delete(Ctrl.deleteFriend);
};