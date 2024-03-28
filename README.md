# Getting Started With saqlyng

First we need to install 
npm install -g @angular-devkit/schematics-cli

then we can use this package by commands 
ng generate saqlyng:sharedComponent
ng generate saqlyng:landingPage

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

npm run build
npm publish
```

That's it!
