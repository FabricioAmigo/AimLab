const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const startScreen = document.getElementById('startScreen');
    const endScreen = document.getElementById('endScreen');
    const finalScoreElement = document.getElementById('finalScore');
    let score = 0;
    const gameTimeInSeconds = 30;
    let remainingTime = gameTimeInSeconds;
    const numberOfTargets = 5;
    const gameAreaWidth = window.innerWidth;
    const gameAreaHeight = window.innerHeight;

    function createTarget() {
      const target = document.createElement('div');
      target.className = 'target';
      target.style.left = Math.random() * (gameAreaWidth - 50) + 'px';
      target.style.top = Math.random() * (gameAreaHeight - 50) + 'px';
      document.body.appendChild(target);
      target.addEventListener('click', () => {
        score++;
        scoreElement.textContent = 'Pontos: ' + score;
        document.body.removeChild(target);
        createTarget();
      });
    }

    function startGame() {
      startScreen.style.display = 'none';
      scoreElement.style.display = 'block';
      timerElement.style.display = 'block';
      score = 0;
      remainingTime = gameTimeInSeconds;
      scoreElement.textContent = 'Pontos: ' + score;
      timerElement.textContent = 'Tempo: ' + remainingTime + 's';
      for (let i = 0; i < numberOfTargets; i++) {
        createTarget();
      }
      const gameInterval = setInterval(() => {
        remainingTime--;
        timerElement.textContent = 'Tempo: ' + remainingTime + 's';
        if (remainingTime <= 0) {
          clearInterval(gameInterval);
          endGame();
        }
      }, 1000);
    }

    function endGame() {
      const targets = document.querySelectorAll('.target');
      targets.forEach(target => document.body.removeChild(target));
      finalScoreElement.textContent = 'Sua pontuação: ' + score;
      endScreen.style.display = 'flex';
      timerElement.style.display = 'none';
    }

    function resetGame() {
      endScreen.style.display = 'none';
      startScreen.style.display = 'flex';
      scoreElement.style.display = 'none';
      timerElement.style.display = 'none';
    }