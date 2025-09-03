import React, { useState } from "react";
import { TreeNode } from "../types";
import "./global.css";

type TreeViewProps = {
  data: TreeNode[];
  onLeafClick: (node: TreeNode) => void;
  icon?: React.ReactNode; // props icon optional
  level?: number; // untuk menambahkan indentasi
};

export default function TreeView({
  data,
  onLeafClick,
  icon,
  level = 0,
}: TreeViewProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <ul className="list-none pl-0 space-y-1">
      {data.map((node) => (
        <li key={node.id}>
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded p-1"
            style={{ paddingLeft: `${level * 16}px` }} // indentasi sesuai level
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
          >
            {node.children && node.children.length > 0 ? (
              <span>{expanded.includes(node.id) ? "▼" : "▶"}</span>
            ) : (
              <span className="w-4" /> // placeholder biar text tetap align
            )}
            <span>{node.name}</span>
            {icon && <span className="ml-1">{icon}</span>} {/* ikon opsional */}
          </div>

          {node.children &&
            node.children.length > 0 &&
            expanded.includes(node.id) && (
              <TreeView
                data={node.children}
                onLeafClick={onLeafClick}
                icon={icon}
                level={level + 1} // increment level untuk anak
              />
            )}
        </li>
      ))}
    </ul>
  );
}
