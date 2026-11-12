# henning

Personal site built with [Hugo](https://gohugo.io/): a list of my GitHub
projects and a collection of notes and how-tos.

## Writing a note

```sh
hugo new content notes/my-new-note.md
```

Edit the file, add a few `tags`, then commit and push to `main`. GitHub
Actions builds and deploys the site.

## Projects

The projects page shows every project in one Masonry wall, newest first,
with buttons to filter it by kind. `/projects/#university`, `#web` and
`#github` open it with a filter selected. There are three kinds:

- **University projects and theses** and **web projects** are page bundles
  in `content/projects/<name>/`, with `category: academic` or `category: web`
  in the front matter. List the images in `images`; the first one is the
  cover and the large picture at the top of the project page, the rest form
  its gallery. An entry can also be a map with `src` and `caption`. Images
  open full size in a viewer. `summary` is the line under the title. Other
  fields such as `period`, `institution`, `supervisors`, `participants`,
  `tools`, `website` and `publications` are optional.

- **Open source on GitHub** is not stored in this repository. It is fetched
  from the GitHub API (`api.github.com/users/iam-peter/repos`) every time the
  site is built. Archived repositories and forks are hidden. Adjust
  `[params.github]` in `hugo.toml` to add forks (`include`) or hide
  repositories (`exclude`).

  A repository's card gets a cover image when its README has a
  screenshot: the first PNG, JPEG, GIF or WebP, in Markdown or an `<img>`
  tag. SVG files are skipped, so logos and badges never become a cover.
  To change a repository's cover, put the image you want first in its
  README.

The workflow also rebuilds the site every night so new repositories appear
without a push. If the API is unreachable, the CI build fails and the
previous deployment stays online.

## Home page

The home page shows your name, the `role` line from `content/_index.md` and
a wall of images: the cover of every project, newest first. Each image
links to the project page, or to a repository's homepage (its GitHub page
if it has none). The title shows on hover, and under the image on touch
screens.

## Design notes

- Both walls use [Masonry](https://masonry.desandro.com/) 4.2.2, vendored in
  `assets/js/vendor/`. Without JavaScript the images flow in plain rows.
- Images are served as WebP in two sizes, so high-resolution screens get a
  sharp one. In dark mode they are dimmed slightly until hovered.
- Headings use Space Grotesk (SIL Open Font License, in `static/fonts/`),
  hosted here rather than on a font service.
- Every page has Open Graph tags, so shared links show the project image.
- Footer contact links come from `[params.contact]` in `hugo.toml`; an empty
  value hides that link.

## Local preview

```sh
hugo server
```

Then open <http://localhost:1313>. Without network access the projects list
is empty, but the build still works. Set `HUGO_GITHUB_TOKEN` to a GitHub
token if you hit the API rate limit of 60 requests per hour. Each build makes
one request for the repository list and one per repository README.

## Deployment

`.github/workflows/hugo.yml` builds with Hugo and deploys to GitHub Pages. In
the repository settings, set *Pages → Build and deployment → Source* to
**GitHub Actions** once.
