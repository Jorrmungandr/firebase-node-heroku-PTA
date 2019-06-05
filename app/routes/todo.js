module.exports = (app) => {
  const db = require('../../config/db');

  app.get('/', (req, res) => {
    res.render('todo');
  });

  app.get('/todoget', (req, res) => {
    db.ref('/to-do').once('value').then((data) => {
      res.send(data.val());
    });
  });

  app.post('/', (req, res) => {
    db.ref('/to-do').push(req.body);
    res.redirect('/');
  });

}