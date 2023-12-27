import React from "react";

interface ColorBlockType {
  color: string;
}

// how to use variable in tailwind?
export default function ColorBlock({ color }: ColorBlockType) {
  return (
    <ul
      className="h-6 w-6 border border-gray-bright"
      style={{ backgroundColor: color }}
    />
  );
}
