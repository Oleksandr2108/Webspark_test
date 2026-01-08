type Props = {
  active?: boolean;
  onClick: () => void;
};

export function ListIcon({ active, onClick }: Props) {
  const fill = !active ? "#C8C7C7" : "#3d8eda";

  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      className="cursor-pointer"
      onClick={onClick}
    >
      <rect
        width="6"
        height="6"
        fill={fill}
      />
      <rect
        y="8"
        width="6"
        height="6"
        fill={fill}
      />
      <rect
        y="16"
        width="6"
        height="6"
        fill={fill}
      />
      <rect
        x="9"
        y="2"
        width="15"
        height="2"
        fill={fill}
      />
      <rect
        x="9"
        y="10"
        width="15"
        height="2"
        fill={fill}
      />
      <rect
        x="9"
        y="18"
        width="15"
        height="2"
        fill={fill}
      />
    </svg>
  );
}
