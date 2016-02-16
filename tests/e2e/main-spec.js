
var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');
var testUtils = require('../../testUtils/utils').e2e
var testConfig = require('./test-config.json');

var url = testUtils.getUrl(testConfig);

var NORMAL_VIEWPORT_WIDTH = 1280;
var NORMAL_VIEWPORT_HEIGHT = 800;

describe('frost-object-browser e2e tests using ' + url, function () {

    var client, commonScreenshots;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

    beforeEach(function () {
        commonScreenshots = {
            name: 'content',
            elem: 'html',
        };

        client = testUtils.init(webdriverio, webdrivercss, testConfig);

        client
            .setViewportSize({width: NORMAL_VIEWPORT_WIDTH, height: NORMAL_VIEWPORT_HEIGHT})
            .url(url);

    });

    afterEach(function (done) {
      client.end(done);
    });


    it('main-page renders appropriately', function (done) {
        client
            .pause(1000)
            .verifyScreenshots('main-page', [commonScreenshots], function () {
              client.call(done);
            });
    });

});
