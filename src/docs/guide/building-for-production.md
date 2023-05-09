# Building for Production

## Steps

1. Build your project for production by running the following command.

```bash
npm run app:build
```

This command will execute the build script defined in your `package.json` file. Vite will generate an optimized production build and output the static files to the `dist` folder.

2. The `dist` folder now contains the static version of your application, which can be deployed to a web server or a hosting provider that supports static site hosting, such as Netlify, Vercel, or GitHub Pages.
