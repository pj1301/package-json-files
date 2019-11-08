// This file takes in a package-json.lock file and churns out a package.json file with all listed dependencies required to make a project work with pnpm. It will save you a lot of time!!! 

// To use, rename the package-json.lock file data.json, and save in the same directory as the builder. Then run with node package_json_harvester.js. The package.json file will be created inside the same directory, ready to roll.

const data = require('./data.json');
const fs = require('fs');

const createData = (info) => {
    const newObj = {    
        "name": "my-app",
        "version": "0.0.0",
        "lockfileVersion": 1,
        "requires": true,
        "dependencies": {}
    };
    const vals = Object.keys(info.dependencies);
    for(let i = 0; i < vals.length; i++) {
        newObj["dependencies"][vals[i]] = info.dependencies[vals[i]]['version'];
    };
    return newObj;
};

const createFile = (data) => {
    const information = createData(data);
    fs.writeFile('./pnpm_package.json', JSON.stringify(information, null, 4), (error) => {
        if (error) return console.log(error);
        return console.log("File write successful!");
    });
};

createFile(data);
