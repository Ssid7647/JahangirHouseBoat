import React, { useRef, useEffect } from 'react';

const Snowflake = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const snowflakes = [];

    const createSnowflakes = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 4 + 1;
      const density = Math.random() * 2;

      snowflakes.push({ x, y, radius, density });
    };

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.beginPath();
      snowflakes.forEach(snowflake => {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
      });
      ctx.fill();
      updateSnowflakes();
    };

    const updateSnowflakes = () => {
      snowflakes.forEach(snowflake => {
        snowflake.y += Math.pow(snowflake.density, 2) + 1;
        if (snowflake.y > canvas.height) {
          snowflake.y = 0;
          snowflake.x = Math.random() * canvas.width;
        }
      });
    };

    const animateSnowflakes = () => {
      drawSnowflakes();
      requestAnimationFrame(animateSnowflakes);
    };

    for (let i = 0; i < 100; i++) {
      createSnowflakes();
    }

    animateSnowflakes();
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default Snowflake;
