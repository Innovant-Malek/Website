## Next.js 
## What is Next.js?
It is a React framework that allows creating pre-rendered React applications either as Server Side Rendering (SSR) or Static Site Generation (SSG).

SSR: React components are rendered into HTML pages on the server after a page request comes from the browser.

SSG: Components are rendered into HTML pages at build time. In other words, after deploying the web pages, Javascript bundles it to web.

## Why use it?
React without Next.js renders components in the browser (client-side rendering.)

With Next.js, our React components are already rendered into HTML pages by the time they reach the browser, so the application behaves as a SPA (Simple Page Application) and all routes can be handled on the client-side. The benefits of SSR and SSG are improvement of performance because components are pre-rendered, meaning less work in the browser. Also results in better SEO (Search Engine Optimization) than the traditional SPA because the response from the server is a fully rendered HTML page rather than the blank one returned from a regular React application without Next.js.

## Initial Settings
In our terminal type:
npx create-next-app nextSample
