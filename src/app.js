const createLike = async () => {
  const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(involvmentApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.status === 201) {
    const data = await response.text();
    return [data];
  }
  return false;
};

const createLikeEpisode = async () => {
  const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(involvmentApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.text();
  return data;
};

const createItem = async (ID) => {
  const involvmentApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/likes/`;
  const responsePost = await fetch(involvmentApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: ID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const dataPost = await responsePost.text();
  if (dataPost === 'Created') {
    const responseGet = await fetch(involvmentApi, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const dataGetLikes = await responseGet.text();
    const getTheLike = JSON.parse(dataGetLikes);
    const stringLike = getTheLike[0].likes;
    document.getElementById(ID).innerText = `${stringLike} Likes`;
  }
};

const getLikes = async (ID) => {
  const involvmentApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/likes/`;
  const responseGet = await fetch(involvmentApi, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  try {
    const dataGet = await responseGet.json();
    return dataGet;
  } catch (e) {
    return false;
  }
};

export
{
  createLike,
  createItem,
  getLikes,
  createLikeEpisode,
};