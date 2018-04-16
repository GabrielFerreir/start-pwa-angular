const webpush = require('web-push');

function pushNotification(req, res) {

    const options = {
        vapidDetails: {
            subject: 'http://127.0.0.1:8080',
            publicKey: 'BAjDL342V7SFFfe5iEzj54Lg2di3SJaUMyRqf8XdrFwO4p7D2pxnqDXj3i8s6SFeH6QIzTYsmJc_q8vmjnVK3EA',
            privateKey: 'Lcv7wLntpNJpq5crkepaeSW8VAXrUYTAUgSCyU9rB7E'
        },
        TTL: 5000
    }

    const pushSubscription = req.body.push;

    const payload = JSON.stringify({
        notification: {
            title: 'Funcionou KRL',
            body: 'VAI TOMAR NO CU!',
            icon: 'https://static.meionorte.com/uploads/imagens/2015/11/19/39361e68-9841-43a6-b0de-b889695b1a15.jpg',
            data: 'additional data'
        }
    });

    webpush.sendNotification(
        pushSubscription,
        payload,
        options
    );


    console.log(req.body);
    return res.status(200).json({
        "message": "Success",
        "content": req.body
    });

}

module.exports = {
    pushNotification
}