const app = require('./config/server.js');

require('./app/routes/todo.js')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});