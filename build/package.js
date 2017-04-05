const fs = require('fs-extra')
const path = require('path')
const currentPath = path.resolve(__dirname);
console.log("Current: "+currentPath);

const dir = './app/'
fs.ensureDir(dir, err => {
  if(err) {
    console.log(err)
    return;
  }

  // Copy App
  fs.copy('./dist', './app/dist', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Copy App");
    }
  });

  // Copy Icon
  fs.copy('./public', './app/public', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Copy Icon");
    }
  });

  // Package.json
  fs.copy('./package.json', './app/package.json', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Copy Package.json");
    }
  });

  // Dockerfile
  fs.copy('./docker/Dockerfile', './app/Dockerfile', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Copy Dockerfile");
    }
  });
})


