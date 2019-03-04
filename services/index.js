const fs = require('fs');
const path = require('path');

const getDirectories = (directoryPath) => 
    fs.readdirSync(directoryPath).filter((file) => fs.statSync(path.join(directoryPath,file)).isDirectory());

const serviceDirectories = getDirectories(path.resolve(__dirname,'./'))
const services = serviceDirectories.map((service) => require(`./${service}/${service}.service.js`));

module.exports = function setupService() {
    const app = this;
    services.forEach((service) => app.configure(service));
};