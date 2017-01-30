(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('statusPage.config', [])
      .value('statusPage.config', {
          debug: true
      });

  // Modules
  angular.module('statusPage.services', []);
  angular.module('statusPage',
      [
          'statusPage.config',
          'statusPage.services',
          'ngResource'
      ]);

})(angular);
