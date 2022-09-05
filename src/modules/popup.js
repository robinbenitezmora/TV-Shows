import { createComments, getComments } from './asyncApi';
import './index.css';

const showsLocalStorage = [
  {
    82: 'HsHpOloMfGiHINwobwBb',
  },
  {
    2: 'nJkYm8i6f1whLwKlGL2h',
  },
  {
    32: 'SFELGqpiTDY7vqa4qPP6',
  },
  {
    40: 'puDjKAyOOlNg6c3yVNBE',
  },
  {
    29: 'Z9iR2Uwc3mD5DV5Ni0ic',
  },
  {
    61: 'qit48rsQhWT2ls4pXLyV',
  },
];

const popup = (id) => {
  let i = 0;
  const body = document.querySelector('body');
  const popup = document.createElement('div');
  const popupContent = document.createElement('div');
  const popupTitle = document.createElement('h2');
  const popupRating = document.createElement('div');
  const popupScore = document.createElement('h3');
  const popupImage = document.createElement('img');
  const popupDescription = document.createElement('p');
  const popupSubTitle = document.createElement('h3');
  const popupCategory = document.createElement('p');
  const popupCommmentUl = document.createElement('ul');
  const popupForm = document.createElement('form');
  const popupTitleForm = document.createElement('h2');
  const popupNameForm = document.createElement('input');
  const popupMessageForm = document.createElement('textarea');
  const popupSubmitForm = document.createElement('button');
  const popupClose = document.createElement('div');

  popup.classList.add('popup');
  popupContent.classList.add('popup__content');
  popupTitle.classList.add('popup__title');
  popupRating.classList.add('popup__rating');
  popupScore.classList.add('popup__score');
  popupClose.classList.add('popup__close');
  popupImage.classList.add('popup__image');
  popupDescription.classList.add('popup__description');
  popupCategory.classList.add('popup__category');
  popupSubTitle.classList.add('popup__subtitle');
  popupCommmentUl.classList.add('popup__comment-ul');
  popupForm.classList.add('popup__form');
  popupTitleForm.classList.add('popup__title-form');
  popupNameForm.classList.add('popup__name-form');
  popupMessageForm.classList.add('popup__comment-form');
  popupSubmitForm.classList.add('popup__submit-form');

  popupScore.setAttribute('id', 'popupScore');
  popupSubTitle.setAttribute('id', 'popupSubTitle');
  popupTitleForm.setAttribute('id', 'popupTitleForm');
  popupNameForm.setAttribute('name', 'name');
  popupNameForm.setAttribute('placeholder', 'Name');
  popupNameForm.setAttribute('type', 'text');
  popupNameForm.setAttribute('required', '');
  popupNameForm.setAttribute('maxlength', '20');
  popupMessageForm.setAttribute('name', 'message');
  popupMessageForm.setAttribute('placeholder', 'Comment');
  popupMessageForm.setAttribute('type', 'text');
  popupMessageForm.setAttribute('required', '');
  popupMessageForm.setAttribute('maxlength', '500');
  popupSubmitForm.setAttribute('type', 'submit');
  popupClose.setAttribute('type', 'button');
  popupClose.setAttribute('id', 'popupClose');
  body.appendChild(popup);
  popup.appendChild(popupContent);
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupRating);
  popupContent.appendChild(popupScore);
  popupContent.appendChild(popupClose);
  popupContent.appendChild(popupImage);
  popupContent.appendChild(popupDescription);
  popupContent.appendChild(popupCategory);
  popupContent.appendChild(popupSubTitle);
  popupContent.appendChild(popupCommmentUl);
  popupContent.appendChild(popupForm);
  popupForm.appendChild(popupTitleForm);
  popupForm.appendChild(popupNameForm);
  popupForm.appendChild(popupMessageForm);
  popupForm.appendChild(popupSubmitForm);

  const popupInfo = async () => {
    const apiUrl = `https://api.tvmaze.com/shows/${id}`;
    const result = await fetch(apiUrl);
    const data = await result.json();

    document.querySelector('.popup__title').innerHTML = data.name;
    document.querySelector('.popup__score').textContent = `Rating: ${data.rating.average}`;
    document.querySelector('.popup__close').textContent = 'X';
    document.querySelector('.popup__image').src = data.image.original;
    document.querySelector('.popup__description').innerHTML = data.summary;
    document.querySelector('#popupSubTitle').textContent = 'Comments';
    document.querySelector('.popup__comment-ul').innerHTML = '';
    document.querySelector('.popup__title-form').textContent = 'Leave a comment';
    document.querySelector('.popup__name-form').value = '';
    document.querySelector('.popup__comment-form').value = '';

    document.querySelector('.popup__submit-form').textContent = 'Submit';

    data.genres.forEach((genre) => {
      const genreLi = document.createElement('li');
      genreLi.classList.add('genre');
      genreLi.setAttribute('id', `genre${i}`);
      document.querySelector('.popup__category').appendChild(genreLi);
      document.getElementById(`genre${i}`).innerHTML = `${genre}`;
      i += 1;
    });
  };
  popupInfo();

  const updateComments = async (id, name, message) => {
    let getValue;
    showsLocalStorage.forEach((elem) => {
      const checkVal = Object.keys(elem)[0];
      if (checkVal === id) {
        getValue = Object.values(elem);
      }
    });

    await createComments(getValue, name, message);
    const getCommentsObj = await getComments(getValue, name, message);
    const iCn = getCommentsObj.length - 1;
    const getName = getCommentsObj[iCn].username;
    const getDate = getCommentsObj[iCn].creation_date;
    const getComment = getCommentsObj[iCn].comment;

    if (getCommentsObj) {
      const commentLi = document.createElement('li');
      commentLi.classList.add('comment');
      commentLi.setAttribute('id', `comment${iCn}`);
      document.querySelector('.popup__comment-ul').appendChild(commentLi);
      document.getElementById(`comment${iCn}`).innerHTML = `${getDate} - ${getName} - ${getComment}`;
      document.querySelector('.popup__subtitle').textContent = `There are ${iCn + 1} comments`;
    } else {
      document.querySelector('.popup__subtitle').textContent = `There are ${0} comments`;
    }
  };

  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateComments(id, popupNameForm.value, popupMessageForm.value);
    popupNameForm.value = '';
    popupMessageForm.value = '';
  });

  popupClose.addEventListener('click', (e) => {
    e.preventDefault();
    popup.remove();
    document.getElementsByClassName('container')[0].style.display = 'grid';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.remove();
    }
  });
};

const UpdatePopUp = (id) => {
  let count = 0;
  let getValue;
  showsLocalStorage.forEach((elem) => {
    const checkVal = Object.keys(elem)[0];
    if (checkVal === id) {
      getValue = Object.values(elem);
    }
  });
  const getComms = async () => {
    const getCommentsObj = await getComments(getValue);
    getCommentsObj.forEach((elem) => {
      const getName = elem.username;
      const getDate = elem.creation_date;
      const getComment = elem.comment;

      if (elem) {
        const commentLi = document.createElement('li');
        commentLi.classList.add('comment');
        commentLi.setAttribute('id', `comment${count}`);
        document.querySelector('.popup__comment-ul').appendChild(commentLi);
        document.getElementById(`comment${count}`).innerHTML = `${getDate} - ${getName} - ${getComment}`;
        document.querySelector('.popup__subtitle').textContent = `There are ${count + 1} comments`;
        count += 1;
      } else {
        document.querySelector('.popup__subtitle').textContent = `There are ${0} comments`;
      }
    });
  };
  getComms();
};

window.addEventListener('load', () => {

});

export { popup, UpdatePopUp };
