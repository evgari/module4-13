'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = () => Math.floor(Math.random() * 3);

  const getFigure = lang => {
    const str = prompt(`${lang.join(', ')}?`);
    const figure = str[0].toLowerCase();

    switch (figure) {
      case lang[0][0]:
        return lang[0];
      case lang[1][0]:
        return lang[1];
      case lang[2][0]:
        return lang[2];
      default:
        getFigure(lang);
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const instructions = {
      ru: ['игрок', 'компьютер', 'выиграл', 'ничья',
        'ещё?', 'вы уверены?', 'результат'],
      en: ['player', 'computer', 'win', 'draw',
        'again?', 'are you shure?', 'result'],
    };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    const instructionsArr = language === 'EN' || language === 'ENG' ?
      instructions.en : instructions.ru;

    return function start() {
      const player = getFigure(lang);
      const computer = lang[getRandomIntInclusive()];

      if (player === computer) {
        alert(`
          ${instructionsArr[0]}: ${player}
          ${instructionsArr[1]}: ${computer}
          ${instructionsArr[3]}
        `);
      } else if (player === lang[0] && computer === lang[1] ||
          player === lang[1] && computer === lang[2] ||
          player === lang[2] && computer === lang[0]) {
        alert(`
              ${instructionsArr[0]}: ${player}
              ${instructionsArr[1]}: ${computer}
              ${instructionsArr[0]} ${instructionsArr[2]}
            `);
        result.player += 1;
      } else {
        alert(`
          ${instructionsArr[0]}: ${player}
          ${instructionsArr[1]}: ${computer}
          ${instructionsArr[1]} ${instructionsArr[2]}
      `);
        result.computer += 1;
      }

      if (confirm(`${instructionsArr[4]}`)) {
        return start();
      } else {
        if (confirm(`${instructionsArr[5]}`)) {
          alert(`
            ${instructionsArr[6]}:
            ${instructionsArr[0]}: ${result.player}
            ${instructionsArr[1]}: ${result.computer} 
          `);
          return;
        } else {
          return start();
        }
      }
    };
  };

  window.rps = game;
})();

