'use strict'

const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version

const date = new Date();
const utc = date.getTime() + date.getTimezoneOffset() * 60000
const upTime = new Date(utc + 3600000 * +5.5)

const jsonData = {
    version: appVersion,
    upTime: upTime,
    test: 1
}

var jsonContent = JSON.stringify(jsonData)

fs.writeFile('./dist/meta.json', jsonContent, 'utf8', function(error) {
    if(error){
        console.log(error);
    }
})