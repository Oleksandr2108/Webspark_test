import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: number;
  gutter?: number;
  margin?: number;
  className?: string;
};

export const Grid = ({
  children,
  columns = 12,
  gutter = 8,
  margin = 300,
  className = "",
}: GridProps) => {
  const colClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
      12: "grid-cols-12",
    }[columns] || "grid-cols-12";

  const style = {
    gap: `${gutter}px`,
    marginLeft: `${margin}px`,
    marginRight: `${margin}px`,
  };

  return (
    <div
      className={`grid ${colClass} w-auto ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
