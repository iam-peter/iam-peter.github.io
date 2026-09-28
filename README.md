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

The projects are not stored in this repository. They are fetched from the
GitHub API (`api.github.com/users/iam-peter/repos`) every time the site is
built. Archived repositories and forks are hidden. Adjust `[params.github]`
in `hugo.toml` to add forks (`include`) or hide repositories (`exclude`).

The workflow also rebuilds the site every night so new repositories appear
without a push. If the API is unreachable, the CI build fails and the
previous deployment stays online.

## Local preview

```sh
hugo server
```

Then open <http://localhost:1313>. Without network access the projects list
is empty, but the build still works. Set `HUGO_GITHUB_TOKEN` to a GitHub
token if you hit the API rate limit of 60 requests per hour.

## Deployment

`.github/workflows/hugo.yml` builds with Hugo and deploys to GitHub Pages. In
the repository settings, set *Pages → Build and deployment → Source* to
**GitHub Actions** once.
