module.exports = (app) => {
    const user = require('../../core/usuario/usuarioController');

    app.route('/user').post(user.insert);

    app.route('/user').get(user.select);
    //
    // app.route('/user').put(authController.authorize, user.change);
    //
    // app.route('/user').delete(authController.authorize, user.remove);
};
