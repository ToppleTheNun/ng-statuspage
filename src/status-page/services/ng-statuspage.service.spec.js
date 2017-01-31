'use strict';

describe('StatusPageService', function() {
  var $httpBackend;
  var StatusPageService;
  beforeEach(module('ng-statuspage.services'));
  beforeEach(inject(function(_$httpBackend_, _StatusPageService_) {
    $httpBackend = _$httpBackend_;
    StatusPageService = _StatusPageService_;
  }));

  it('exists', function() {
    expect(StatusPageService).toBeDefined();
  });

  describe('.getStatusPageEndpoint', function() {
    it('exists', function() {
      expect(StatusPageService.getStatusPageEndpoint).toBeDefined();
    });

    describe('page id is falsey', function() {
      beforeEach(function() {
        StatusPageService.setPageId('');
      });

      it('throws an error', function() {
        expect(function() {
          var endpoint = StatusPageService.getStatusPageEndpoint('foobar');
          expect(endpoint).not.toBeDefined();
        }).toThrow();
      });
    });

    describe('page id is not falsey', function() {
      beforeEach(function() {
        StatusPageService.setPageId('foobar');
      });

      it('returns a valid string', function() {
        var endpoint = StatusPageService.getStatusPageEndpoint('foobar');
        expect(endpoint).toBe('https://foobar.statuspage.io/api/v2/foobar.json');
      });
    });
  });

  describe('.getSummary', function() {
    beforeEach(function() {
      $httpBackend.whenGET('https://foobar.statuspage.io/api/v2/summary.json');
    });

    it('exists', function() {
      expect(StatusPageService.getSummary).toBeDefined();
    });

    describe('page id is falsey', function() {
      beforeEach(function() {
        StatusPageService.setPageId('');
      });

      it('throws an error', function() {
        expect(function() {
          var response = StatusPageService.getSummary();
          expect(response).not.toBeDefined();
        }).toThrow();
      });
    });

    xdescribe('page id is not falsey', function() {
      beforeEach(function() {
        StatusPageService.setPageId('foobar');
      });

      it('gets data', function(done) {
          StatusPageService.getSummary().then(function(data) {
            expect(data).toBeDefined();
            done();
          });
          $httpBackend.flush();
      });
    });
  });
});
