const MessageService = require('./message.class');
const hooks = require('./message.hooks');

module.exports = function setupService() {
    const app = this;
    const messageService = new MessageService();
    app.use('/message', messageService);
    const service = app.service('message')
    service.hooks(hooks);

}