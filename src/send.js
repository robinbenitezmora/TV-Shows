const postScore = async (item) => {
  item.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const gameAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rB5ddO4HfUyAH1uOfTZ3/scores/';
  const result = await fetch(`${gameAddress}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const data = await result.json();
  const theName = document.querySelector('.player');
  const theScore = document.querySelector('.score');
  theName.value = '';
  theScore.value = '';
  return data;
};

export default postScore;
