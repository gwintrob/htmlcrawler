
# htmlcrawler

  A simpler API for web crawling. this uses raw requests and cheerio to offer fast performance with low memory footprint, but does not execute javascript or handle sessions like [scraper](https://github.com/tedjt/scraper).

## Installation

    $ npm install tedjt/htmlcrawler

## Example

### Create a Crawler

```js
var Crawler = require('htmlcrawler');

// options
// { headers : { } };
var crawler = new Crawler(options);
```

### Load a page and return cheerio object

```js
crawler.load(url, options, function (err, $) {
  // open a page with disguised headers ..
  $('#someSelector').text();
});
### Node.JS

### Crawler([options])

  Creates a Crawler instance, with defaulted `options`:

```
{
  headers: { // disguise headers
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'accept-language' :'en-US,en;q=0.8',
    'cache-control' :'max-age=0'
  }
}
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
