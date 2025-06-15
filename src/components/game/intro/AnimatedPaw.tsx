import { useEffect, useState } from "react";
import { Position } from "./IntroScreen";

const AnimatedPaw = (props: {
  delay: number;
  pawImage: string;
  position: Position;
}) => {
  const { delay = 0, pawImage, position } = props;
  const [visible, setVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(getRandomRotation());

    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <img
      src={pawImage}
      alt="animated-paw"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: 100,
        height: 100,
        opacity: visible ? 1 : 0,
        transform: `scale(${visible ? 1 : 0.5}) rotate(${rotation}deg)`,
        transition: "all 0.6s ease-out",
      }}
    />
  );
};

export default AnimatedPaw;

const getRandomRotation = () => Math.floor(Math.random() * 360);
