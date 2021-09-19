const cards = [
  {
    type: "square",
    img: require(`../../assets/shapes/square.png`),
  },
  {
    type: "cirlce",
    img: require(`../../assets/shapes/circle.png`),
  },
  {
    type: "triagle",
    img: require(`../../assets/shapes/triangle.png`),
  },
  {
    type: "hexagon",
    img: require(`../../assets/shapes/hexagon.png`),
  },
];

export function getCards() {
  return cards;
}
