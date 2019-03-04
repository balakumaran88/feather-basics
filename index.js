const api = require('./api');

api.listen('3000', (err,resp) => {
    if(!err) {
        console.log(`server is running on port: 3000`);
    }
})