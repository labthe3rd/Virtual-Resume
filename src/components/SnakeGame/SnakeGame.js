// /src/components/SnakeGame/SnakeGame.js

import { useRef, useEffect, useState } from "react";

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 20, y: 20 }]);
  const [food, setFood] = useState({ x: 100, y: 100 });
  const dirRef = useRef(null); // Declare useRef
  const snakeLength = useRef(0); //Track the snake length properly
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  function draw(ctx, snake, food) {
    // Clear the canvas
    ctx.clearRect(0, 0, 400, 400);

    // Draw each snake part
    for (let part of snake) {
      ctx.fillStyle = "green";
      ctx.fillRect(part.x, part.y, 20, 20);
    }

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
  }

  function randomPosition() {
    return {
      x: Math.floor(Math.random() * 20) * 20,
      y: Math.floor(Math.random() * 20) * 20,
    };
  }

  function handleKeyDown(e) {
    console.log("Key Pressed: ", e.key, " Current Direction: ", dirRef.current);
    switch (e.key) {
      case "ArrowUp":
        if (
          dirRef.current !== "UP" &&
          (dirRef.current !== "DOWN" || snakeLength.current == 0)
        ) {
          console.log("Setting dir to UP");
          dirRef.current = "UP";
        } else {
          console.log(e.key, " Already Active");
        }
        break;
      case "ArrowDown":
        if (
          dirRef.current !== "DOWN" &&
          (dirRef.current !== "UP" || snakeLength.current == 0)
        ) {
          dirRef.current = "DOWN";
        } else {
          console.log(e.key, " Already Active");
        }
        break;
      case "ArrowLeft":
        if (
          dirRef.current !== "LEFT" &&
          (dirRef.current !== "RIGHT" || snakeLength.current == 0)
        ) {
          console.log("Setting dir to LEFT");
          dirRef.current = "LEFT";
        } else {
          console.log(e.key, " Already Active");
        }
        break;
      case "ArrowRight":
        if (
          dirRef.current !== "RIGHT" &&
          (dirRef.current !== "LEFT" || snakeLength.current == 0)
        ) {
          dirRef.current = "RIGHT";
        } else {
          console.log(e.key, " Already Active");
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    draw(ctx, snake, food);
  }, [snake, food]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isGameOver) {
      console.log("Game over detected");
      return;
    }
    const gameInterval = setInterval(() => {
      const newHead = { ...snake[0] };
      switch (dirRef.current) {
        case "UP":
          newHead.y -= 20;
          break;
        case "DOWN":
          newHead.y += 20;
          break;
        case "LEFT":
          newHead.x -= 20;
          break;
        case "RIGHT":
          newHead.x += 20;
          break;
        default:
          break;
      }

      // Wall collision detection
      if (
        newHead.x < 0 ||
        newHead.x >= 400 ||
        newHead.y < 0 ||
        newHead.y >= 400
      ) {
        clearInterval(gameInterval);
        setIsGameOver(true);
        return;
      }

      // Self collision detection
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
          clearInterval(gameInterval);
          setIsGameOver(true);
          return;
        }
      }

      const newSnake = [newHead, ...snake];

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(randomPosition());
        // Copy the last tail segment and add it to the snake array
        const newTail = { ...snake[snake.length - 1] };
        newSnake.push(newTail);
        setScore((prevScore) => prevScore + 1);
        snakeLength.current += 1;
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, 100);

    return () => clearInterval(gameInterval);
  }, [snake]);

  return (
    <div className="flex justify-center items-center h-full flex-col">
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        className="border-2 border-gray-900"
      ></canvas>
      {isGameOver && (
        <div className="text-2xl mt-4">
          <p>Game Over</p>
          <p>Score: {score}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => {
              // Reset game
              setSnake([{ x: 20, y: 20 }]);
              console.log("Snake length is now ", snake.length);
              setFood({ x: 100, y: 100 });
              dirRef.current = "RIGHT";
              setIsGameOver(false);
              snakeLength.current = 0;
              setScore(0);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
