import { useEffect, useState } from "react";
import { ButtonProps } from "./props";
import { ButtonStyles as styles } from "./styles";

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ ...styles.root, ...(isHovered ? styles.rootHover : null) }}
    >
      {title}
    </button>
  );
};
