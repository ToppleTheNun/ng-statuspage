(function(angular) {
  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ng-statuspage.config', [])
    .value('ng-statusPage.config', {
      debug: true,
    });

  // Modules
  angular.module('ng-statuspage.services', []);
  angular.module('ng-statuspage',
    [
      'ng-statuspage.config',
      'ng-statuspage.services',
      'ngResource',
    ]);
})(angular);

(function() {
  angular.module('ng-statuspage.services');
})();
