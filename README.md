## Reactron (Lite)

This is the least-magical app I could set up that would integrate both React and Electron. The goal is a platform to write such apps while allowing me to reason with even a modicum of insight into the transpile/build toolchain.

It updates packages and pares down code from Brad Traversy's [simple-electron-react](https://github.com/bradtraversy/electron-course-files/tree/master/buglogger-react-ui) repo (itself a customized version of Alex Devero's [electron-react-webpack-boilerplate](https://github.com/alexdevero/electron-react-webpack-boilerplate) repo.)

I've tried to make it as unopinionated as possible, hence the absence of component and test libraries.

**To run in development:** In one terminal, run `npx react-devtools`; in the other, `npm run start`

**To build a package:** First follow the two instructions in `dist/index.html`, then run `npm run package`