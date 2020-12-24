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
