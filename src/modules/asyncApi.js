const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const structData = [];

const getComments = async (ID) => {
  const involvmentApi = `${urlComments}/${ID}/comments?item_id=${ID}`;
  const responseGet = await fetch(involvmentApi, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  try {
    const dataGet = await responseGet.json();
    const getComment = dataGet[0].comment;
    const getDate = dataGet[0].creation_date;
    const getUserName = dataGet[0].username;
    const joinStr = `${getComment},${getDate},${getUserName}`;
    structData.push(joinStr);
    return dataGet;
  } catch (e) {
    return false;
  }
};

const createComments = async (ID, name, message) => {
  const response = await fetch(`${urlComments}/${ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: ID,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.status === 201) {
    const data = await response.text();
    return data;
  }
  return false;
};

const catchComments = async () => {
  const response = await fetch(urlComments, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.status === 201) {
    const data = await response.text();
    return data;
  }
  return false;
};

export { catchComments, createComments, getComments };
