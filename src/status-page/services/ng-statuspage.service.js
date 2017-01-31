(function() {
  angular.module('ng-statuspage.services')
    .factory('StatusPageService', StatusPageService);

  /**
   * A service for interacting with the StatusPage.io REST API.
   * @param {*} $http The Angular $http service
   * @param {*} $log The Angular $log service
   * @return {StatusPageService} StatusPageService for interacting with the StatusPage.io REST API
   * @constructor
   * @ngInject
   */
  function StatusPageService($http, $log) {
    var apiKey = '';
    var pageId = '';

    /**
     * Gets and returns the API key for StatusPage.io
     * @return {string} API key
     */
    function getApiKey() {
      return apiKey;
    }

    /**
     * Gets and returns the Page ID for StatusPage.io
     * @return {string} Page ID
     */
    function getPageId() {
      return pageId;
    }

    /**
     * Sets the API key for StatusPage.io
     * @param {string} pApiKey API key
     */
    function setApiKey(pApiKey) {
      apiKey = pApiKey || '';
    }

    /**
     * Sets the Page ID for StatusPage.io
     * @param {string} pPageId Page ID
     */
    function setPageId(pPageId) {
      pageId = pPageId || '';
    }

    /**
     * Gets the summary from StatusPage.io.
     * @return {Promise<*>} Promise containing the summary from StatusPage.io
     */
    function getSummary() {
      $log.log('getSummary()');
      return handleStatusPageEndpoint({
        method: 'GET',
        url: getStatusPageEndpoint('summary'),
      });
    }

    /**
     * Gets the StatusPage.io endpoint to use for a given operation.
     * @param {string} operation Operation to use
     * @return {string} StatusPage.io endpoint
     */
    function getStatusPageEndpoint(operation) {
      if (!operation) {
        throw new Error('operation cannot be falsey');
      }
      if (!getPageId()) {
        throw new Error('#getPageId() cannot be falsey');
      }
      return 'https://' + pageId + '.statuspage.io/api/v2/' + operation + '.json';
    }

    /**
     * Uses $http to request a response from StatusPage.io.
     * @param {*} opts Config to pass to $http
     * @return {Promise<*>} Promise containing response from StatusPage.io
     */
    function handleStatusPageEndpoint(opts) {
      var options = opts || {};
      if (!options.url) {
        throw new Error('opts.url cannot be falsey');
      }
      if (!options.method) {
        throw new Error('opts.method cannot be falsey');
      }
      var extendedOptions = angular.extend({}, options, {
        headers: {
          'Authorization': 'OAuth ' + apiKey,
        },
      });
      $log.log('extendedOptions:', extendedOptions);
      return $http(extendedOptions);
    }

    return {
      getApiKey: getApiKey,
      getPageId: getPageId,
      getStatusPageEndpoint: getStatusPageEndpoint,
      getSummary: getSummary,
      setApiKey: setApiKey,
      setPageId: setPageId,
    };
  }
})();
