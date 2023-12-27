import React from "react";

export type Color = {
  name: string;
  code: string;
};

type ColorBlockListProps = {
  colors: Color[];
};

export default function ColorBlockList({ colors }: ColorBlockListProps) {
  return (
    <ul className="flex gap-x-1.5 xl:gap-x-2.5">
      {colors.map((color) => (
        <React.Fragment key={color.name}>
          <li
            className="border-stylish-gray-lightest h-3 w-3 border xl:h-6 xl:w-6"
            style={{ backgroundColor: `#${color.code}` }}
          />
        </React.Fragment>
      ))}
    </ul>
  );
}
