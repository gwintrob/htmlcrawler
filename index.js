
var cheerio = require('cheerio');
var debug = require('debug')('scraper');
var defaults = require('defaults');
var request = require('request');

/**
 * Expose `create`.
 */

module.exports = Crawler;

/**
 * Create a new `Scraper` instance.
 *
 * @param {Phantom} phantom
 */

function Crawler (options) {
  if (!(this instanceof Crawler)) return new Crawler(options);
  this.options = defaults(options || {}, {
    headers: { // disguise headers
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'accept-language' :'en-US,en;q=0.8',
      'cache-control'   :'max-age=0'
    }
  });
}

/**
 * Open a page using the disguised headers.
 *
 * @param {string} url
 * @param {Object} options
 * @param {Function} callback
 */

//crawler.load(url, function (err, $) {
Crawler.prototype.load = function (url, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = defaults(options, this.options);

  debug('loading page %s', url);

  var req = { url: url, headers: options.headers };
  request(req, function (error, response, body) {
    if (error) return callback(error);
    if (!response) return callback(new Error('No response received'));
    if (response.statusCode != 200) return callback(new Error('bad status code %d', response.statusCode));
    debug('succesfully loaded page %s', url);

    $ = cheerio.load(body);
    callback(null, $);
  });
};
