import path from 'path';
const filePath = path.join(process.cwd(), 'src', 'text.txt');
const projectPath = path.join(process.cwd(), 'src');
// console.log(filePath);

// import fs from 'fs';

// const fileContent = fs.readFileSync('text.txt');

// const fileContentAsync = fs.readFile('text.txt', (err, fileContent) => {
//   console.log(fileContent);
// });

import fs from 'fs/promises';

// ........Read file
// const fileContentPromises = await fs.readFile(filePath);

// console.log(fileContentPromises);
// console.log(fileContentPromises.toString('utf-8'));

(async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

// ........Write file перезаписує файл

(async () => {
  try {
    const text = 'I learn Node.js';
    await fs.writeFile(path.join(projectPath, 'output.txt'), text, 'utf-8');
    console.log('successfully');
  } catch (error) {
    console.log(error);
  }
})();

// const writeFile = async () => {
// };
// writeFile();

// ......Append file додає в кінець

(async () => {
  try {
    const text = 'My name is Petro';
    await fs.appendFile(path.join(projectPath, 'output.txt'), text, 'utf-8');
    console.log('successfully append');
  } catch (error) {
    console.log(error);
  }
})();

// .......Rename перейменовує імя файлу

(async () => {
  try {
    await fs.rename(
      path.join(projectPath, 'output.txt'),
      path.join(projectPath, 'data.txt'),
    );
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

// .......Unlink видаляє файл

// (async () => {
//   try {
//     await fs.unlink(path.join(projectPath, 'text.txt'));
//     console.log('Файл успішно видалено.');
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// })();

// ..... Readdir показує список файлів і папок в каталозі(папці)

(async () => {
  try {
    const files = await fs.readdir(projectPath);
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();

// ........Access доступність до файлу

(async () => {
  const path = projectPath;
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();
