# package-json-files

These are the package.json files which will be required to run pnpm install. Follow the longer guide here for more information: https://github.com/pj1301/make-react-app-template.

## Local Updates

### Minor Updates and Patches
To include minor updates and patches in local builds, include `^` inside the version number to make pnpm update the package version (no major build releases). E.g.: 
```
"react": "^16.11.0",
"react-dom": "^16.11.0",
"react-redux": "^7.1.1",
```

### Major Updates
To capture major updates, it's necessary to use `npm-check-updates`. If not already downloaded, run `npm i -g npm-check-updates`. This is a global npm package that is necessary to install to the local machine (i.e. don't run as a pnpm package).

Next run `ncu -u` inside the project root which includes the package.json file to be updated. This will analyse the versions of the packages inside the file against the latest versions available via npm and will update the values where necessary without installing any packages. 

The process is now complete. Upon running pnpm again, the most recent packages will be installed and used in the new build.
