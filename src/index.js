import './index.css';
import info from './modules/api';
import popup from './modules/popup';

const amountMovies = document.getElementsByTagName('h3');

// const updateLikes = async () => {
//   const response = await catchLikes();
//   document.querySelectorAll('.starCount').forEach((button) => {
//     for (let i = 0; i < response.length; i += 1) {
//       if (response[i].item_id === Number(button.id)) {
//         button.lastChild.textContent = response[i].likes;
//       }
//     }
//   });
// };

const cards = document.querySelector('.cards');
const createElement = async (requestUrl) => {
  cards.innerHTML = '';
  await info(requestUrl)

    .then((data) => {
      let amountElement = 0;
      const dataArray = data.embedded.episodes;
      dataArray.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const img = document.createElement('div');
        img.classList.add('cardImg');
        img.style.backgroundImage = `url(${item.image.original})`;
        const title = document.createElement('h1');
        title.classList.add('cardTitle');
        title.textContent = `S${item.season_number}E${item.episode_number} ${item.name}`;
        const description = document.createElement('p');
        description.classList.add('cardDescription');
        description.innerHTML = `Plot Summary: <br> ${item.overview}`;
        const h3 = document.createElement('h3');
        h3.classList.add('cardRuntime');
        h3.textContent = `Runtime: ${item.runtime} mins Rating: ${item.rating}`;

        const stars = document.createElement('div');
        stars.classList.add('stars');

        const starRate = document.createElement('span');
        starRate.classList.add('material-icons-round');
        starRate.classList.add('icons');
        starRate.classList.add('starRate');
        starRate.textContent = 'Rate of Stars';

        const starCount = document.createElement('span');
        starCount.classList.add('starCount');
        starCount.setAttribute('id', item.id);
        starCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', item.id);
        starBorder.classList.add('icons');

        // starBorder.addEventListener('click', () => {
        //   submitLikes(item.show.id);
        //   starBorder.classList.toggle('liked');
        //   starCount.setAttribute('disabled', true);
        //   setTimeout(updateLikes, 400);
        // });

        const commentBtn = document.createElement('button');
        commentBtn.classList.add('commentBtn');
        commentBtn.textContent = 'Comment';
        stars.append(starRate, starCount, starBorder);
        div.append(img, title, description, h3, stars, commentBtn);
        cards.append(div);
        amountElement += 1;
        amountMovies.textContent = `There are ${amountElement} movies`;
      });
    });
};
createElement('https://api.tvmaze.com/shows');

const createElementForMovies = async (requestUrl) => {
  cards.innerHTML = '';
  await info(requestUrl)
    .then((data) => {
      let amountElement = 0;
      data.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const img = document.createElement('div');
        img.classList.add('cardImg');
        img.style.backgroundImage = `url(${item.image.original})`;
        const title = document.createElement('h1');
        title.classList.add('cardTitle');
        title.textContent = `${item.title}`;

        const stars = document.createElement('div');
        stars.classList.add('stars');

        const starRate = document.createElement('span');
        starRate.classList.add('material-icons-round');
        starRate.classList.add('icons');
        starRate.classList.add('starRate');
        starRate.textContent = 'Rate of Stars';

        const starCount = document.createElement('span');
        starCount.classList.add('starCount');
        starCount.setAttribute('id', item.id);
        starCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', item.id);
        starBorder.classList.add('icons');

        // starBorder.addEventListener('click', () => {
        //   submitLikes(item.id);
        //   starBorder.classList.toggle('liked');
        //   starCount.setAttribute('disabled', true);
        //   setTimeout(updateLikes, 400);
        // });

        const commentBtn = document.createElement('button');
        commentBtn.classList.add('commentBtn');
        commentBtn.textContent = 'Comment';
        commentBtn.setAttribute('id', item.id);
        stars.append(starRate, starCount, starBorder);
        div.append(img, title, stars, commentBtn);
        cards.append(div);
        amountElement += 1;
        amountMovies.textContent = `There are ${amountElement} movies`;

        commentBtn.addEventListener('click', () => {
          popup(item.id);
        });
      });
    });
};

window.addEventListener('load', () => {
  const search = 'https://api.tvmaze.com/shows';
  createElementForMovies(search);
  // setTimeout(updateLikes, 400);
});
