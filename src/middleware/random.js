export default function (array, percentage) {
  let chance = Math.random();

  if (chance < percentage) {
    return array[Math.floor(Math.random() * array.length)];
  } else
    return {
      type: '',
    };
}
