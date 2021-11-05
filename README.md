# Logg.ng App for Cloudflare

Install from the Cloudflare app store.

<a href="https://www.cloudflare.com/apps/loggng/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install Logg.ng with Cloudflare"
    border="0"
    width="150">
</a>

## Cloudflare Worker

If you don't want to use the Cloudflare app or you want to customize how logs are sent from Cloudlfare to Logg.ng see ./workers/worker.js and add a custom worker to your Cloudflare account.

## Dev Setup

Install the dependencies with `yarn install` then build the project with `yarn build` (or `npm run build`).
