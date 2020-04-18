const {APP_NAME='APP', PORT=8080} = process.env;
if(!APP_NAME || !PORT){
    console.log('Please set environment variables APP_NAME and PORT ');
    process.exit(1);
}
const app = require("./common/app")(APP_NAME, PORT);
const routes = require('./routes');
app.use(routes);

module.exports = app;