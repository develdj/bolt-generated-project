const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    const player = {
      x: canvas.width / 2,
      y: canvas.height - 30,
      width: 50,
      height: 10,
      speed: 7
    };

    let keys = {
      right: false,
      left: false
    };

    document.addEventListener('keydown', function(e) {
      if (e.code === 'ArrowRight') keys.right = true;
      if (e.code === 'ArrowLeft') keys.left = true;
    });

    document.addEventListener('keyup', function(e) {
      if (e.code === 'ArrowRight') keys.right = false;
      if (e.code === 'ArrowLeft') keys.left = false;
    });

    function drawPlayer() {
      ctx.fillStyle = '#0f0';
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function updatePlayer() {
      if (keys.right && player.x + player.width < canvas.width) {
        player.x += player.speed;
      }
      if (keys.left && player.x > 0) {
        player.x -= player.speed;
      }
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updatePlayer();
      drawPlayer();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();
