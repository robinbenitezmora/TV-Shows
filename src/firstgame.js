const firstGame = async () => {
  let identityGame = [];
  const gameIdResult = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'First Game',
    }),
  });
  const gameIdJson = await gameIdResult.json();
  identityGame = (gameIdJson.result).split(' ');
  return identityGame;
};

module.exports = firstGame;
