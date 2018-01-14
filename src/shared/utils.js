export function getRandomInt(min, max) {
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomElement(source) {
  return source[getRandomInt(0, source.length)];
}

export function fillWithRandomElements(initialElements, source, size) {
  const randomArray = [].concat(initialElements);
  while (randomArray.length < size) {
    const randomOption = getRandomElement(source);
    if (!randomArray.find(option => option.id === randomOption.id)) {
      randomArray.push(randomOption);
    }
  }
  return randomArray;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
