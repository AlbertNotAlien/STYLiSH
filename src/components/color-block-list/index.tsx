import React from "react";
import ColorBlock from "./color-block";

export type Color = {
  name: string;
  code: string;
};

type ColorBlockListProps = {
  colors: Color[];
};

export default function ColorBlockList({ colors }: ColorBlockListProps) {
  return (
    <ul className="flex gap-x-2.5">
      {colors.map((color) => (
        <React.Fragment key={color.name}>
          <ColorBlock color={color.code} />
        </React.Fragment>
      ))}
    </ul>
  );
}
