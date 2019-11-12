const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/test-get', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/test-post', (req, res) => {
//   res.send({ body: req.body });
// });

app.post('/api/send-email', (req, res) => {

  // https://app.sendgrid.com/

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'conor@conor-ui.com',
    from: req.body.email,
    subject: 'message from conor-ui.com',
    text: req.body.message,
    html: `<p>${ req.body.message }</p>`
  };
  sgMail.send(msg);
  res.send('sent')
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${ port }`));

//https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
