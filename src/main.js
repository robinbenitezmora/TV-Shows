import './style.css';
import { createAppShows } from './addlike';
import {
  createItem,
  getLikes,
} from './app';
import { popup, UpdatePopUp } from './modules/popup';

let getShowsList;

const showsLocalStorage = [
  {
    82: 'fstVG2OXrbsfvV5ER8q7',
  },
  {
    2: '4yUZ7i9O9v5vnr6nKA07',
  },
  {
    32: 'KAVZboVLCM7iah67rlPv',
  },
  {
    40: 'puDjKAyOOlNg6c3yVNBE',
  },
  {
    29: 'osNCc1WKvX2xBjHSoI12',
  },
  {
    61: '9R0CGe7uyZ6KYHeM5nI2',
  },
];

const createDOMList = ((event) => {
  if (event === 'first' || event === 'load') {
    for (let i = 1; i <= 6; i += 1) {
      const getIdFromArr = Number(Object.keys(showsLocalStorage[i - 1]));
      getShowsList = createAppShows(getIdFromArr);
    }
    getShowsList.then((data) => {
      const sortObj = data.sort((a, b) => {
        const rest = b.rating.average - a.rating.average;
        return rest;
      });
      for (let i = 0; i < 6; i += 1) {
        const setIdShow = Number(Object.keys(showsLocalStorage[i]));
        const getStrFromArr = Object.values(showsLocalStorage[i]);
        const imageBestShows = sortObj[i].image.medium;
        const nameBestShows = sortObj[i].name;
        const ratingBestShows = sortObj[i].rating.average;
        const craeteComment = 'Comments';
        const craeteReserv = 'Reservations';
        const getParentNode = document.getElementById('show_cont');
        const countLikes = 0;
        // const createIDShow = `Api${(i + 1)}`;
        const createClassName = `count_likes${i + 1}`;
        const createTemplate = `
        <div class="line" style="background-image: url(${imageBestShows});"></div>
        <div class="title">${nameBestShows}</div>
        <div class="rating">Rating: ${ratingBestShows}</div>
        <div class="like_cont">
          <div class="${createClassName}">${countLikes} Likes</div>
          <div class="material-symbols-outlined">
            favorite
          </div>
        </div>
        <button class="comments">${craeteComment}</button>
        <button class="reserves">${craeteReserv}</button>
      `;
        const createParentEl = document.createElement('div');
        createParentEl.classList.add('show');
        createParentEl.setAttribute('id', setIdShow);
        createParentEl.innerHTML = createTemplate;
        getParentNode.appendChild(createParentEl);
        let getElement = document.getElementsByClassName('like_cont')[i];
        getElement = getElement.childNodes;
        const newElement = getElement[1];
        newElement.setAttribute('id', getStrFromArr);
        const selectIdSort = getStrFromArr;
        const response = getLikes(selectIdSort);
        response.then((like) => {
          const getStatus = like;
          if (getStatus !== false && !getStatus.error) {
            const getLikes = like[0].likes;
            const getLikesId = like[0].item_id;
            const likeString = `${getLikes} Likes`;
            let getElement = document.getElementsByClassName('like_cont')[i];
            getElement = getElement.childNodes;
            const newElement = getElement[1];
            newElement.setAttribute('id', getLikesId);
            document.getElementById(getLikesId).innerHTML = likeString;
          } else if (getStatus === false) {
            let getElement = document.getElementsByClassName('like_cont')[i];
            getElement = getElement.childNodes;
            const newElement = getElement[1];
            newElement.setAttribute('id', selectIdSort);
          }
        });
      }
      const getParentCount = document.getElementById('show_cont').childElementCount;
      const showNumber = `Shows ${getParentCount}`;
      document.getElementsByClassName('shows')[0].innerText = showNumber;
    });
  }
});

document.getElementsByClassName('shows')[0].addEventListener('click', () => {
  const validateRule = document.getElementById('show_cont').childElementCount;
  document.getElementById('show_cont').style.display = 'grid';
  document.getElementById('episode_cont').style.display = 'none';
  document.getElementById('people_cont').style.display = 'none';
  document.getElementsByClassName('shows')[0].style.textDecoration = 'underline';
  document.getElementsByClassName('shows')[0].style.fontWeight = 'bold';
  if (validateRule === 0) {
    createDOMList('first');
  }
});

document.getElementsByClassName('episodes')[0].addEventListener('click', () => {

});

document.getElementsByClassName('people')[0].addEventListener('click', () => {

});

document.addEventListener('click', (event) => {
  const getEventType = event.target.className;
  const getIDFromEvent = event.target.parentElement.firstElementChild.id;
  if (getEventType === 'material-symbols-outlined') {
    createItem(getIDFromEvent);
  }
});

document.addEventListener('click', (event) => {
  const getEventType = event.target.className;
  if (getEventType === 'comments') {
    const showListId = event.target.parentElement.id;
    document.getElementsByClassName('container')[0].style.display = 'none';
    UpdatePopUp(showListId);
    popup(showListId);
  }
});

window.addEventListener('load', () => {
  if (showsLocalStorage.length > 0) {
    const queryString = window.location.hash;
    const splitQuery = queryString.split('#')[1];
    switch (splitQuery) {
      case 'shows':
        document.getElementById('show_cont').style.display = 'none';
        document.getElementById('episode_cont').style.display = 'none';
        document.getElementById('people_cont').style.display = 'none';
        document.getElementsByClassName('shows')[0].style.textDecoration = 'underline';
        document.getElementsByClassName('shows')[0].style.fontWeight = 'bold';
        document.getElementById('show_cont').style.display = 'grid';
        createDOMList('load');
        break;
      case 'episodes':
        document.getElementById('show_cont').style.display = 'none';
        document.getElementById('episode_cont').style.display = 'grid';
        document.getElementById('people_cont').style.display = 'none';
        break;
      default:
        document.getElementById('show_cont').style.display = 'none';
        document.getElementById('episode_cont').style.display = 'none';
        document.getElementById('people_cont').style.display = 'grid';
        break;
    }
  } else if (showsLocalStorage.length <= 0) {
    document.getElementById('show_cont').style.display = 'none';
    document.getElementById('episode_cont').style.display = 'none';
    document.getElementById('people_cont').style.display = 'none';
  }
});
