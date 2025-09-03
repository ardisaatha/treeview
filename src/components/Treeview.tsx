import React, { useState } from "react";
import { TreeNode } from "../types";
import "./global.css";

export default function TreeView({
  data,
  onLeafClick,
}: {
  data: TreeNode[];
  onLeafClick: (node: TreeNode) => void;
}) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <ul className="list-none pl-2 space-y-1">
      {data.map((node) => (
        <li className="pl-2" key={node.id}>
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded p-1"
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
          >
            {node.children && node.children.length > 0 && (
              <span>{expanded.includes(node.id) ? "▼" : "▶"}</span>
            )}
            <span>{node.name}</span>
          </div>
          {node.children &&
            node.children.length > 0 &&
            expanded.includes(node.id) && (
              <TreeView data={node.children} onLeafClick={onLeafClick} />
            )}
        </li>
      ))}
    </ul>
  );
}
