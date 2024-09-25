// console.log(1);

// setTimeout(() => {
//   Promise.resolve().then(() => {
//     console.log(2);
//   });
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
//   console.log(4);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(5);
// });

// console.log(6);
// ----------------------------------------------

// path.join(...paths[])
// process.cwd();- Шлях до кореневої директорії

import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
console.log(pathToWorkDir);

const somePath = path.join('some_folder', 'some_file.txt');
console.log(somePath);

const pathToFile = path.join(pathToWorkDir, 'spetiale_folder', 'file.txt');

console.log(pathToFile);

// path.parse(path);

path.parse(pathToFile);
const parcePath = path.parse(pathToFile);
console.log(parcePath);
