const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, "client")))
app.use(bodyParser.json());


const publicVapidKey = "BChT5HHAZuc3zvzr5VjcGCJyjB5YrvETiH6vEfYXaJH-jGQ3LH2SQKkIx6DHYCQpliub5z431qCMAPPG0kUhv9E";

const privateVapidKey = "DO0CPZJZoB9osX8I-UNFcsgW-LxTCuCo4nPFzo8J3wE";
webpush.setVapidDetails("mailto:kavya@test.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Thanks for visiting our page" });
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});