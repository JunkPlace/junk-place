export class MainController {

  constructor(toastr, socket) {
    'ngInject';

    this.toastr = toastr;
    this.messageText = null;
    this.socket = socket;
    this.messages = [];

    socket.on('message', message => {

      message.date = new Date();

      this.messages.push(message);

      toastr.info(message.text, `From: #${message.from}`);

    });

  }

  onSubmit() {

    let text = this.messageText;

    this.socket.emit('info', text, () => {
      this.messages.push({
        from: 'me',
        text: text,
        date: new Date()
      });
    });

    this.messageText = '';

  }

}
