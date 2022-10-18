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

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const playerFigure = getFigure(lang);
      const computerFigure = lang[getRandomIntInclusive()];

      console.log(`${playerFigure} ${computerFigure}`);

      if (language === 'EN' || language === 'ENG') {
        if (computerFigure === 'rock' && playerFigure === 'paper' ||
          computerFigure === 'scissors' && playerFigure === 'rock' ||
          computerFigure === 'paper' && playerFigure === 'scissors') {
          alert(`computer: ${computerFigure}
            player: ${playerFigure}
            player win`.trim());
          result.player += 1;
        }

        if (computerFigure === 'rock' && playerFigure === 'scissors' ||
          computerFigure === 'scissors' && playerFigure === 'paper' ||
          computerFigure === 'paper' && playerFigure === 'rock') {
          alert(`computer: ${computerFigure}
            player: ${playerFigure}
            computer win`.trim());
          result.computer += 1;
        }

        if (computerFigure === playerFigure) {
          alert(`computer: ${computerFigure}
            player: ${playerFigure}
            draw`.trim());
        }

        if (confirm('again?')) {
          return start();
        } else {
          if (confirm('are you sure?')) {
            alert(`Result:
            Computer: ${result.computer}
            Player: ${result.player}`.trim());
            return;
          } else {
            return start();
          }
        }
      } else {
        if (computerFigure === 'камень' && playerFigure === 'бумага' ||
          computerFigure === 'ножницы' && playerFigure === 'камень' ||
          computerFigure === 'бумага' && playerFigure === 'ножницы') {
          alert(`компьютер: ${computerFigure}
            игрок: ${playerFigure} 
            игрок выиграл`.trim());
          result.player += 1;
        }

        if (computerFigure === 'камень' && playerFigure === 'ножницы' ||
          computerFigure === 'ножницы' && playerFigure === 'бумага' ||
          computerFigure === 'бумага' && playerFigure === 'камень') {
          alert(`компьютер: ${computerFigure}
            игрок: ${playerFigure}
            компьютер выиграл`.trim());
          result.computer += 1;
        }

        if (computerFigure === playerFigure) {
          alert(`компьютер: ${computerFigure}
            игрок: ${playerFigure}
            ничья`.trim());
        }

        if (confirm('ещё?')) {
          return start();
        } else {
          if (confirm('вы уверены?')) {
            alert(`Результат:
            Компьютер: ${result.computer}
            Игрок: ${result.player}`.trim());
            return;
          } else {
            return start();
          }
        }
      }
    };
  };

  window.rps = game;
})();
