import Showscores from './showscores.js';

const reload = async () => {
  const listScores = document.querySelector('.show-scores__table');
  listScores.innerHTML = '';
  const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rB5ddO4HfUyAH1uOfTZ3/scores/');
  const dataGame = await results.json();
  const listArray = dataGame.result;
  listArray.forEach((item) => {
    const newRow = Showscores.showScores(item.user, item.score);
    listScores.insertAdjacentHTML('beforeend', newRow);
  });
};

export default reload;