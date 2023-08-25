import React from "react";

type ColorBlockProps = {
  color: string;
};

export default function ColorBlock({ color }: ColorBlockProps) {
  return (
    <li
      key={color}
      className="h-6 w-6 border border-gray-bright"
      style={{ backgroundColor: `#${color}` }}
    />
  );
}
