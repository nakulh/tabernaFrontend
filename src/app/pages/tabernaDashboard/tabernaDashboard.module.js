(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('myNewPage', {
          url: '/tabernaDashboard',
          templateUrl: 'app/pages/tabernaDashboard/tabernaDashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();
