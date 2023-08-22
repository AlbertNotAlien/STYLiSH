import React from "react";
import ColorBlock from "./color-block";

const COLOR_BLOCK_LIST = [
  { color: "#FFF" },
  { color: "#DFB" },
  { color: "#CCC" },
];

export default function ColorBlockList() {
  return (
    <li className="flex gap-x-2.5">
      {COLOR_BLOCK_LIST.map((block) => (
        <React.Fragment key={block.color}>
          <ColorBlock color={block.color} />
        </React.Fragment>
      ))}
    </li>
  );
}
