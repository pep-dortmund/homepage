towards-a-new-website [![Build Status](https://travis-ci.org/pep-dortmund/towards-a-new-website.svg?branch=master)](https://travis-ci.org/pep-dortmund/towards-a-new-website)
=====================

Development repository for a new PeP et al. website.
See [Contributing](CONTRIBUTING.md) if you want to add things.


## Testing
In order to test the site at this point, simply run

```bash
$ jekyll serve
```
The website is then served at [localhost:4000](http://localhost:4000).
Changes to the inputfiles are recognised and the website is build again,
press f5 in the browser to update.

Some updates, like changing images might require to delete the cache (ctrl + f5 in chrome).


`jekyll` is a `ruby` gem, use your favourite package manager
to install ruby.

E. g. on OS-X:

```
$ brew install ruby
```

Or arch-linux:
```
$ sudo pacman -S ruby
```

After that you can use `ruby`'s package manager `gem` to install
jekyll:

```
$ gem install jekyll
```

## Contributing

See [Contributing](CONTRIBUTING.md) for detailled explanation how to
- write new posts
- add static pages
- edit the navigation
- minified markdown intro
- other crazy things
