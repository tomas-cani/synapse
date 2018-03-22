import { getRandomElement, fillWithRandomElements, shuffleArray } from '../shared/utils';

export default class SubjectData {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  getOptions(initialOption) {
    const randomOptions = fillWithRandomElements(initialOption, this.dataStore, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  getRandomQuestion(max) {
    const correctOption = getRandomElement(this.dataStore, max);
    const options = this.getOptions([correctOption]);
    return { correctOption, options };
  }
}
