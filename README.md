# PZ Cheeseria

## Running the dev server

1. Pull the repository
2. `pnpm install`
3. `pnpm dev`
4. Navigate to http://localhost:3000 for the app
5. Navigate to http://localhost:3000/api-doc for the swagger endpoint

## What is included

- [x] Angular or React or Vue (front end)
- [x] NodeJS or .Net Core or Java (back end)
- [x] Swagger / Open API
- [ ] Unit Tests
- [x] Dockerfile
- [x] Calculator that shows total price based on weight
- [x] Docker build pipeline

## Limitations or potential features

- Due to time constraints, I have foregone writing integration tests. However, my approach will likely be to use playwright codegen.
- Swagger end point is bootstrapped using `next-swagger-doc`.
- The displayed data is stored as a `cheeses.json` file. This can be replaced with a database solution.
- No favicon.
- Can use cookies to allow state to persist across different sessions.
- As per requirements, this application only displays cheeses and a price calculator. It does not facilitate online purchases.

## Extras

- The app has a responsive and can be viewed from a mobile screen.
- Dark mode.