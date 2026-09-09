---
layout: post
# Required, YYYY-MM-DD via filename (no date: key)
title:  "Welcome to Jekyll"  # Required, string
---
This site is built with Jekyll, a free and open-source static site generator for personal websites.

Your website includes a blog and collections for image or photo galleries and archives in json, csv or yaml formats as provided by online platforms.

## Setup guide

### Desktop Environment

#### Linux

Install `git` and a C build toolchain via your distro's package manager (e.g. on Debian/Ubuntu, `sudo apt install git build-essential`), then install [rbenv](https://github.com/rbenv/rbenv) following its own instructions for your distro. The project is free and open-source - clone it to get started:

```
git clone https://github.com/your-username/jekyllme2
```

#### macOS

Install [Homebrew](https://brew.sh/) if you don't already have it, then:

```
brew install git rbenv ruby-build
```

```
git clone https://github.com/your-username/jekyllme2
```

### Toolchain

Install [rbenv](https://github.com/rbenv/rbenv), then run `rbenv install` to pick up the Ruby version pinned in `.ruby-version`. From the project root, run `bundle install` to install the gems listed in `Gemfile`.

### Running locally

`bundle exec jekyll serve` starts a local server at `http://localhost:4000`. The site rebuilds automatically as you edit files, except `_config.yml` - restart the server after changing that.

### Site-wide config

`_config.yml` holds the settings you'll want to change first: `title`, `description`, `avatar_path`, and `url`/`baseurl` (used for links and the site's canonical address once deployed).

### Blog posts

Add a file to `blog/_posts/` named `YYYY-MM-DD-title.markdown`. The date comes from the filename, not a front matter field. Required front matter: `layout: post` and `title`.

### Archives collection

Add a file to `_archives/` with front matter: `weight` (controls ordering), `title`, `source`, and `time-period`. Then add a matching data file at `_data/<slug>/<slug>.json`, an array of `{"content": "..."}` entries.

### Galleries collection

Add a file to `_galleries/` with front matter: `weight`, `title`, `location`, `time-period`, and `images` (a list of filenames). Drop the matching image files into `img/galleries/<slug>/`.

### Navigation

Edit `_data/nav-links.yml` to add, remove, or reorder items in the site's nav.

### Deployment

#### GitHub Pages

Publish via GitHub Pages at its default project URL (`https://username.github.io/reponame/`). In `_config.yml`, set `baseurl` to `/reponame` (every internal link and asset path is prefixed with it) and `url` to `https://username.github.io`.

#### Custom domain

To serve the site at your own domain instead:

1. Add a `CNAME` file at the project root containing just the domain, e.g. `example.com`.
2. At your domain registrar, point DNS at GitHub Pages: an apex domain (`example.com`) needs A records to GitHub Pages' IP addresses (see GitHub's Pages docs for the current list); a subdomain (`www.example.com`) needs a CNAME record to `username.github.io`.
3. In `_config.yml`, set `baseurl` back to `""` - a custom domain is served from the root, not a subpath - and `url` to `https://example.com`.
4. Wait for DNS to propagate, then enable "Enforce HTTPS" for the custom domain in the repository's GitHub Pages settings.
