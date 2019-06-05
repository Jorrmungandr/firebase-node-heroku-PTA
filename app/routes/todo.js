module.exports = (app) => {
  const db = require('../../config/db');

  app.get('/todo', (req, res) => {
    res.render('todo');
  });

  app.get('/todoget', (req, res) => {
    db.ref('/to-do').once('value').then((data) => {
      res.send(data.val());
    });
  });

  app.post('/todo', (req, res) => {
    db.ref('/to-do').push(req.body);
    res.redirect('/todo');
  });

}