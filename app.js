const express = require('express');
const { get_ip: getRemoteIp } = require('ipware')();
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', function (req, res) {
    res.send({
        ip: getRemoteIp(req).clientIp,
        timestamp: (new Date()).toString()
    })
});

const port = process.env.PORT || 3000;
app.listen(port, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Server is running at port " + port);
});