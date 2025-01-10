import React, { useRef, useEffect, useLayoutEffect } from "react";
import Konva from "konva";
import { Stage, Layer, Text, Shape } from "react-konva";

const FallingSnowflake = () => {
  const shapeRef = useRef();

  useLayoutEffect(() => {
    const shape = shapeRef.current;
    const stageHeight = window.innerHeight; // Высота окна
    const stageWidth = window.innerWidth;
    const startY = Math.random() * -100; // Начальная позиция над верхней границей окна
    const endY = stageHeight + 100; // Конечная позиция ниже нижней границы окна

    shape.y(startY); // Установка начальной позиции
    const shapeWidth = shape.width(); // Получаем ширину снежинки
    shape.x(Math.random() * (stageWidth - shapeWidth));

    const anim = new Konva.Animation((frame) => {
      shape.y(shape.y() + 2); // Увеличиваем y координату на 2 пикселя каждый кадр

      // Если снежинка вышла за пределы окна, сбрасываем её
      if (shape.y() > endY) {
        shape.y(startY); // Сбрасываем на случайную начальную позицию
      }
    }, shape.getLayer());

    anim.start();

    // Очищаем анимацию при размонтировании компонента
    return () => anim.stop();
  }, []);

  return (
    <Shape
      ref={shapeRef}
      width={100}
      height={100}
      sceneFunc={(context, shape) => {
        const width = shape.width();
        const height = shape.height();
        const centerX = width / 2;
        const centerY = height / 2;
        const branchesCount = 6; // Количество "веток" снежинки
        const branchLength = 50; // Длина ветки

        context.beginPath();

        for (let i = 0; i < branchesCount; i++) {
          const angle = (i * Math.PI) / 3; // Угол для каждой ветки

          // Начальная точка ветки
          const startX = centerX + Math.cos(angle) * branchLength;
          const startY = centerY + Math.sin(angle) * branchLength;

          // Рисуем ветку
          context.moveTo(centerX, centerY);
          context.lineTo(startX, startY);

          // Рисуем дополнительные детали на ветках
          for (let j = 1; j <= 3; j++) {
            const angleOffset = (Math.PI / 2) * j; // Угол для дополнительных ответвлений

            const branchOffsetX =
              startX + Math.cos(angle + angleOffset) * (branchLength / 3);
            const branchOffsetY =
              startY + Math.sin(angle + angleOffset) * (branchLength / 3);

            context.moveTo(startX, startY);
            context.lineTo(branchOffsetX, branchOffsetY);
          }
        }

        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="#00D2FF"
      stroke="#00D2FF"
      strokeWidth={7}
    />
  );
};

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a star" />
        {[...Array(10)].map(() => (
          <FallingSnowflake />
        ))}
      </Layer>
    </Stage>
  );
};

export default App;
