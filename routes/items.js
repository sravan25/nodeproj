const express = require('express');
const router = express.Router();
const request = require('request');

router.get("/",(req ,res) => {
    let body = {
        "userID": "demouser1",
        "password": "12345",
        __type: "urn:inin.com:connection:icAuthConnectionRequestSettings",
        applicationName: "ICWS"
    }
    request({
            uri: "http://192.168.1.230:8018/icws/connection",
            method: "POST",
            body: body,
            headers:{
                "Accept-Language":"en-US"
            },
            json: true
        },
        function (error, response, body) {
            console.log(error, response, body);

            res.json({
                status:response.status,
                response:response.body,
                headers:response.headers,
                body:body
            })
        });
});
module.exports = router;
