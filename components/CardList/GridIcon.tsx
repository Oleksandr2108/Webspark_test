type Props = {
  active?: boolean;
  onClick: () => void;
};

export function GridIcon({ active, onClick }: Props) {
  const fill = !active ? "#C8C7C7" : "#3d8eda";

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      {[0, 8, 16].map((y) =>
        [0, 8, 16].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="6"
            height="6"
            fill={fill}
          />
        ))
      )}
    </svg>
  );
}
