export class MainController {

  constructor(toastr, socket) {
    'ngInject';

    this.toastr = toastr;
    this.messageText = null;
    this.socket = socket;
    this.messages = [];

    socket.on('message', message => {

      message.date = new Date();

      this.messages.splice(0, 0, message);

      toastr.info(message.text, `From: ${message.from}`);

    });

  }

  onSubmit() {

    let text = this.messageText;

    if (!text) return;

    this.messageText = '';

    this.socket.emit('post', text, message => {
      message.from = 'me';
      this.messages.splice(0, 0, message);
    });

  }

}
