
var assert = require('assert');
var Crawler = require('..');

describe('scraper', function () {
  this.timeout(5000); // booting up phantom can take a second

  it('should be able to open a page', function (done) {
    var crawler = new Crawler();
    var url = 'http://google.com';
    crawler.load(url, function (err, $) {
      if (err) return done(err);
      assert($('#gbqfsa').text() === 'Google Search');
      done();
    });
  });

});
