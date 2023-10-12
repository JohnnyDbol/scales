export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 20;

// Create the initial game stage (grid)
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"]),
  );

// Check for collision
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};

// Rotate the tetromino
export const rotate = (matrix, dir) => {
  // Make the rows to become cols (transpose)
  const rotatedTetro = matrix.map((_, index) =>
    matrix.map((col) => col[index]),
  );
  // Reverse each row to get a rotated matrix
  if (dir > 0) return rotatedTetro.map((row) => row.reverse());
  return rotatedTetro.reverse();
};
