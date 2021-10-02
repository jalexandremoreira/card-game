import random from './random';

export default function (array, length, rows) {
  let randomizedArray = [];

  const halfLength = Math.floor(length / 2);

  let rowCount = 0;
  let colCount = 0;

  for (let i = 0; i < halfLength; i++) {
    const randomItem = random(array, 0.4);

    rowCount < 15 ? (rowCount += 1) : (rowCount = 1);
    rowCount === 1 ? (colCount += 1) : null;

    randomizedArray = [
      ...randomizedArray,
      {
        type: randomItem.type,
        rowLocation: rowCount,
        columnLocation: colCount,
      },
    ];
  }

  randomizedArray = [...randomizedArray, { type: 'home', img: '' }];
  rowCount += 1;

  for (let i = 0; i < halfLength; i++) {
    const randomItem = random(array, 0.4);

    rowCount < 15 ? (rowCount += 1) : (rowCount = 1);
    rowCount === 1 ? (colCount += 1) : null;

    randomizedArray = [
      ...randomizedArray,
      {
        type: randomItem.type,
        rowLocation: rowCount,
        columnLocation: colCount,
      },
    ];
  }

  return randomizedArray;
}
