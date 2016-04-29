# Contributing

Please read this carefully if you want to add anything to the website 😊

## General setup of this website

The website is optimized for posts, with some additional static content.
So before editing a static site (everything outside of `_posts/`) think whether
a post might also serve your needs.

We are using [jekyll](https://jekyllrb.com) for almost everything. The website
might be a good place to look for general answers to the technical stuff.

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
image: /images/some-fancy-image.jpeg

# These variables are less important
special-subtitle: Its a post about how to post posts
---
Your content goes here
```
##### categories (mandatory)
This one is important! The listet categories are used to fill the pages within
e.g. "Vereinsleben" Each post must have at least one category.  Furthermore the
badges (icons below each post) will be defined by these categories
automatically

##### title
If you dont set this variable, the posts name slug will be used. For example
A post with file `_posts/2016-07-24-your-title.md` would give "Your Title".

##### image
You can (and should) add a nice image
with an aspect ratio of about 2x1 and
a size smaller than 1MB

##### special
This one is special 😅 If you assign this category, the post will be shown
on the `index.html` site. Furthermore the image of the latest special-post
will be used as the header image of the `index.html` page. So make sure
to add an image which looks good at this position.

##### special-subtitle
You can add a subtitle which will be shown in a smaller font below the title on
the main page. This should be longer than the title but still short enough to
fit in ~one line.

##### special-action
If you set this, a button referencing to the post will be generated. The
buttons title will be this value.

##### author
Your name could go here! If you dont remember, just leave it out.
