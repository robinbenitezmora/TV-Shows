import './index.css';
import postScore from './send.js';
import reload from './reload.js';

document.getElementById('data-submit').addEventListener('submit', postScore);
document.querySelector('.show-scores__button').addEventListener('click', reload);
