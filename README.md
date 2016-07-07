# My GitHub pages site

This is a microsite that I often use to test out GitHub pages stuff.

## Local Setup

To preview the website locally:

1. Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/) if you don't have them already.

2. Install the [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) gem:
```
$ gem install jekyll-redirect-from
```

1. `cd` to the repository directory and run the following command:

```
$ cd crandmck.github.io
$ bundle install
```

Bundler will look in the Gemfile for which gems to install. The `github-pages` gem includes the same version of Jekyll and other dependencies as used by GitHub Pages, so that your local setup mirrors GitHub Pages as closely as possible.

Run Jekyll using the following command:

```
$ bundle exec jekyll serve
```

Then, load [http://localhost:4000/](http://localhost:4000/) on your browser.

## Formatting

Jekyll uses a variant of Markdown known as [Kramdown](http://kramdown.gettalong.org/quickref.html).

Jekyll uses the [Liquid template engine](http://liquidmarkup.org/) for templating.

You can use [http://kramdown.gettalong.org/parser/gfm.html](GFM) fenced code blocks for JavaScript; for example:

```js
var express = require('express');
var app = express();
app.listen(3000);
```

The default GitHub Pages syntax highlighting has been disabled in `_config.yml to allow highlighting with prism.js.
