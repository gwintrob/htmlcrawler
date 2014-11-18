
var assert = require('assert');
var should = require('should');
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

  it('should support a 302 if followRedirect is false', function (done) {
    var url = 'http://www.iana.org/domains/example/';
    var crawler = new Crawler();
    crawler.load(url, {extraParams: {followRedirect: false}}, function (err, $) {
      if (err) return done(err);
      $('title').text().should.equal('302 Found');
      done();
    });
  });

});
