import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: number;
  colGap?: number;
  rowGap?: number;
  margin?: number;
  className?: string;
};

export const Grid = ({
  children,
  columns = 12,
  colGap = 8,
  rowGap = 16,
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

  return (
    <div
      className={`grid ${colClass} w-full px-4 lg:px-[var(--desktop-margin)] ${className}`}
      style={{
        columnGap: `${colGap}px`,
        rowGap: `${rowGap}px`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["--desktop-margin" as any]: `${margin}px`,
      }}
    >
      {children}
    </div>
  );
};
