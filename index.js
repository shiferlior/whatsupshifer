const accountSid = 'AC54a4e2215c672f4b3527bb11b5a65ed3';
const authToken = 'cc6761ad01d9eaf4f392139d341463ad';
const client = require('twilio')(accountSid, authToken);

//Send message
client.messages
    .create({
        body: 'Amazing!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+972526010065'
    })
    .then(message => console.log(message.sid))
    .done();

//Server conversation
const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
//const session = require('express-session');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(urlencoded({ extended: false }));

//app.use(session({ secret: 'anything-you-want-but-keep-secret' }));

app.post('/messages', (req, res) => {
    // const smsCount = req.session.counter || 0;

    // let message = 'Hello, thanks for the new message.';

    // if (smsCount > 0) {
    //     message = 'Hello, thanks for message number ' + (smsCount + 1);
    // }

    // req.session.counter = smsCount + 1;
    let message = "עזוב אחי אם זה לא מאיה זה לא בא בחשבון...";

    if (req.body.Body == "מאיה") {
        switch (Math.floor(Math.random() * 10)) {
            case 0:
                message = "המדהימה";
                break;
            case 1:
                message = "הפצצת על";
                break;
            case 2:
                message = "אהבת חיי";
                break;
            case 3:
                message = "הנסיכה";
                break;
            case 4:
                message = "אין כמוה בעולם";
                break;
            case 5:
                message = "הדוגמנית";
                break;
            case 6:
                message = "הכי יפה בעולם";
                break;
            case 7:
                message = "מרהיבה";
                break;
            case 8:
                message = "עוצרת נשימה";
                break;
            case 9:
                message = "מסובבת הראשים!";
        }

    }

    const twiml = new MessagingResponse();
    twiml.message(message);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port 3000');
});
