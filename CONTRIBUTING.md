# Contributing

Please read this carefully if you want to add anything to the website 😊

## General setup of this website

The website is optimized for posts, with some additional static content.
So before editing a static site (everything outside of `_posts/`) think whether
a post might also serve your needs.

We are using [jekyll](https://jekyllrb.com) for almost everything. Their
website might be a good place to look for general answers to the technical
questions.


## Writing/Editing Content

### Posts

All posts reside within the directory `_posts/`.
To create new posts you just need to create a new markdown or html file in the
`_posts` directory. There already are some examples, if you want to check
what these files look like.

The filename needs to follow the scheme
```
YYYY-MM-DD-your-title.md
```

These markdown files contain a `yaml` header for meta data on top.
Have a look into the existing posts to get an idea. In general each file
begins like that:
``` YAML
---
categories:
  - absolventenfeier
  - veranstaltungen
  - special  # 👀 Look below for this special category
title: A Post!
image: images/some-fancy-image.jpeg

# These variables are less important
special-subtitle: Its a post about how to post posts
---
Your content goes here
```
- **categories (mandatory)**:
  This one is important! The listet categories are used to fill the pages within
  e.g. "Vereinsleben" Each post must have at least one category.  Furthermore the
  badges (icons below each post) will be defined by these categories
  automatically.
  There is one special category, called *special* 😅 . If you
  add this category to the list, the post will be shown on the `index.html` site.
  See [section "Special Posts"](#special-posts) for more details.
- **title**:
  If you dont set this variable, the posts name slug will be used. For example
  A post with file `_posts/2016-07-24-your-title.md` would give "Your Title".
- **image**:
  You can (and should) add a nice image
  with an aspect ratio of about 2x1 and
  a size smaller than 1MB
- **author**:
  Your name could go here! If you dont remember, just leave it out.


#### Special Posts
Adding the `special` category to the list of categories enables additional
variables within the yaml header. The special behaviour is:
- the four most recent posts will be shown on the landing page
- the `special-image` of the latest `special` post will be used as
  background image on the landing page
- a subtitle can be displayed on the landing page
- a button (nothing more than a link) can be added to the latest `special`
  post (see `special-action` below)

Following variables will be used
- **special-title**:
  If defined, this is used instead of the `title` variable. The title will
  be shown prominently on the landing page.
- **special-subtitle**:
  You can add a subtitle which will be shown in a smaller font below the title on
  the main page. This should be longer than the title but still short enough to
  fit in ~one line.
- **special-action**:
  If you set this, a button referencing to the post will be generated. The
  buttons title will be this value.

### Links
All links to internal pages must use the absolute URL, without leading slash.
Furthermore links to pages end with `.html`, no matter if they reference a
markdown or a html file.

For example, the URL of the `vereinsleben/mitmachen.md`-page, would always
look like
```
vereinsleben/mitmachen.html
```
The whole Link within a markdown page would look like
``` markdown
[Mitmachen, klick hier](vereinsleben/mitmachen.html)
```
and produces: [Mitmachen, klick hier](vereinsleben/mitmachen.html) (This link
will obviously not work within this readme).

External links and links to documents work the same way, guess what this will do:
``` markdown
[its-a-searchengine](https://google.com)
```
or this (keep in mind the absolute, no-leading-slash URL):
``` markdown
[a-file](documents/an-important-pdf.pdf)
```

You could always tell the browser to open links in a new tab/window either by
appending `{:target="_blank"}` to the markdown-link or writing a plain-old html
`<a target="_blank" href="blaa">Link</a>`-tag.

### Images
To upload an image to the website, add it somewhere inside the
`images/`-directory. Within a markdown-file the image can be included with
``` markdown
![An Image (the image-alias here)](images/stuff/a-nice-image.jpeg)
```
This almost looks like a Link :) And just as within a link, the image-URL must
be absolute, without leading slash.
An example: (this works, since the `images/`-directory is the same in the
repo and in production.)

![Just a Test](images/contributing/image-example.jpg)

### A note about markdown
By default jekyll uses
[kramdown](http://kramdown.gettalong.org/syntax.html) to render
markdown-files. On top of the neat markdown-syntax, kramdown adds more
features, like [markdown inside html
blocks](http://kramdown.gettalong.org/syntax.html#html-blocks).
