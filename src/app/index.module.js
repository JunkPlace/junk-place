/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {ResizeDirective} from '../app/components/resize.directive';
import io from 'socket.io-client';

angular.module('junkPlace', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'toastr',
  'btford.socket-io',
  'angularMoment'
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('resize', ResizeDirective)

  .factory('socket', socketFactory => socketFactory({ioSocket: io.connect()}))

;
