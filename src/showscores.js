class Showscores {
  static showScores(user, score) {
    return `
      <div class="show-scores__table-row" data-id=${user}>
        <div class="show-scores__table-name" data-id=${user}>${user}</div>
        <div class="show-scores__table-name" data-id=${user}>${score}</div>
      </div>`;
  }
}

export default Showscores;
