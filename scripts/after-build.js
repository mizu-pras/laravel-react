'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const file = resolveApp('public_laravel/index.php')
const target = resolveApp('public/index.php')

fs.copyFile(file, target, (err) => {
    if (err) {
        console.log("Error Found:", err);
    }
    else {
      console.log("\nFile Contents of copied_file:");
    }
});
