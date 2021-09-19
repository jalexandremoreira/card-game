import random from "./random";

export default function (array, length) {
  let randomizedArray = [];

  hanlfLength = Math.floor(length / 2);

  for (let i = 0; i < hanlfLength; i++) {
    randomizedArray = [...randomizedArray, random(array, 0.4)];
  }

  randomizedArray = [...randomizedArray, { type: "home", img: "" }];

  for (let i = 0; i < hanlfLength; i++) {
    randomizedArray = [...randomizedArray, random(array, 0.4)];
  }

  return randomizedArray;
}
