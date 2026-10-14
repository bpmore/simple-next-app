# Simple NextJs App 
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=518159665&machine=standardLinux32gb&location=EastUs)

Deploy to GitHub Pages using the new Actions Workflow ✨ 

You can now use GitHub Actions to deploy your app to GitHub Pages using 
ANY Static Site Generator 💃🏽 

Follow along as I show you how to use [GitHub's CLI](https://cli.github.com/) with this repo! ✨ 
You can find the link to the talk about using the CLI [here](will add link once live)!

## Preview the Pages deployment

Use Node 22 (`nvm use`) and install with `npm ci`. Run `npm run build` to
produce the static `out/` directory; `next export` is no longer a separate step.
For a project site, set `NEXT_PUBLIC_BASE_PATH=/simple-next-app` when building
and running `npm test`. The Pages workflow supplies its configured base path.
Serve the exported files under that same path to check scripts, styles, and icons.

`nextjs.yml` deploys pushes to `main`. `pages.yml` is a manual alternative that
retains the optional Twilio notification; do not run both for one deployment.
Static hosting does not serve `pages/api/hello.js`; it requires a Next.js server.
