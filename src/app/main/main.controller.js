export class MainController {

  constructor (webDevTec, toastr, $window) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1492174405906;
    this.toastr = toastr;

    this.activate(webDevTec);

    this.storedText = $window.localStorage.getItem('text') || 'Empty localStorage';

  }

  activate(webDevTec) {
    this.getWebDevTec(webDevTec);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

}
