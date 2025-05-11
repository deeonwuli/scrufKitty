type IconButtonProps = {
  alt: string;
  disabled?: boolean;
  icon: string;
  position?: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  };
  onClick: () => void;
};

export function IconButton(props: IconButtonProps) {
  const { alt, disabled, icon, position, onClick } = props;

  return (
    <button
      style={{
        position: "absolute",
        zIndex: 1,
        top: position?.top,
        left: position?.left,
        bottom: position?.bottom,
        right: position?.right,
        border: "none",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        style={{
          height: "4rem",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        src={icon}
        alt={alt}
      />
    </button>
  );
}
