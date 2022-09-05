const storeShows = [];
const createAppShows = async (i) => {
  const loopShows = `https://api.tvmaze.com/shows/${i}`;
  const response = await fetch(loopShows, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  if (data.status !== 404) {
    storeShows.push(data);
  }
  return storeShows;
};

const storeEpisodes = [];
const createAppEpisodes = async (i) => {
  const loopShows = `https://api.tvmaze.com/episodes/${i}`;
  const response = await fetch(loopShows, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  if (data.status !== 404) {
    storeEpisodes.push(data);
  }
  return storeEpisodes;
};

const storePeople = [];
const createDOMListPeople = async (i) => {
  const loopShows = `https://api.tvmaze.com/people/${i}`;
  const response = await fetch(loopShows, {
    method: 'GET',
  });
  const data = await response.json();
  storePeople.push(data);
  return storePeople;
};

export { createAppShows, createAppEpisodes, createDOMListPeople };