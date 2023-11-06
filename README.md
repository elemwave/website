## Elemwave website

*This site is hosted in Github Pages using Jekyll - a static site generator written in Ruby.*

---

In order to test the site on local, just run:

```bash
docker-compose up
```

And navigate to [http://0.0.0.0:4000](http://0.0.0.0:4000)

### Theme

The site uses a **remote theme** called `minimal-mistakes`.

Please refer to their documentation in order to check how to customise the website and use layouts.

**Useful documentation**

- [Github pages docs](https://docs.github.com/en/pages)
- [Jekyll docs](https://jekyllrb.com/docs/)
- [Minimal mistakes docs](https://mmistakes.github.io/minimal-mistakes/)

As a side note, **minimal-mistakes** provides different skins.

You can easily change this at `_config.yml`, updating `minimal_mistakes_skin` var.

[More about skins](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#skin)

### Overriding content

Custom bits of the code should be at `/_includes`.

- In order to **add** a line at the top of the footer, create `_includes/footer/custom.html`.
- In order to **override** theme's footer, create `_includes/footer.html`.
- In order to **override** theme's header, create `_includes/masthead.html`.
- In order to **add** new `<head>` content, create `_includes/head/custom.html`.

### Adding new pages

In case you want to add new pages with their own path:

1. Create a new markdown file at root - such as `about.md`.
2. Add any configuration at the top of the file following
[Jekyll](https://jekyllrb.com/docs/pages/) and [minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/) docs.
3. As an important note, you should override `permalink` var to something like `permalink: /about/`.
4. Also, it's a good idea to override the `title` var as well - such as `title: About`.

### Adding blog content

In case you want to add a blog section into the site:

1. Create a `_posts` folder at root.
2. Add your posts as `2021-11-17-welcome-to-jekyll.md`.
3. Add any configuration at the top of the file following
[Jekyll](https://jekyllrb.com/docs/posts/) and [minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/) docs.
4. At `_config.yml`, set up your `permalink` var as you want - [more info](https://jekyllrb.com/docs/permalinks/).
5. At `_config.yml`, set `atom_feed.hide` to `false`.

### Deployment of the web page

- Here is the [documentation](/Docs/pagedeployment.md) about the deployment of the page on GitHub pages.

### How we developed the project

- Here is the [documentation](/Docs/workflow.md) about how we work in the project during development.