import React, { useState } from "react";
import { TreeNode } from "../types";

type TreeViewProps = {
  data: TreeNode[];
  onLeafClick: (node: TreeNode) => void;
  iconClose?: React.ReactNode;
  iconOpen?: React.ReactNode;
  level?: number;
};

export default function TreeView({
  data,
  onLeafClick,
  iconOpen,
  iconClose,
  level = 0,
}: TreeViewProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const ulStyle: React.CSSProperties = {
    listStyle: "none", // list-none
    paddingLeft: 0, // pl-0
    margin: 0,
  };

  const liStyle: React.CSSProperties = {
    marginTop: "0.25rem", // space-y-1 (≈4px)
  };

  const rowStyle: React.CSSProperties = {
    display: "flex", // flex
    alignItems: "center", // items-center
    gap: "0.5rem", // gap-2
    cursor: "pointer", // cursor-pointer
    borderRadius: "0.25rem", // rounded
    padding: "0.25rem", // p-1
    transition: "background-color 0.2s ease",
  };

  const textIndent = (lvl: number): React.CSSProperties => ({
    paddingLeft: `${lvl * 16}px`, // indentasi level
  });

  const ml1: React.CSSProperties = {
    marginLeft: "0.25rem", // ml-1
  };

  const w4: React.CSSProperties = {
    display: "inline-block",
    width: "1rem", // w-4
  };

  return (
    <ul style={ulStyle}>
      {data.map((node, i) => (
        <li key={node.id} style={i > 0 ? liStyle : undefined}>
          <div
            style={{ ...rowStyle, ...textIndent(level) }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.backgroundColor = "#f3f4f6")) // hover:bg-gray-100
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.style.backgroundColor = "transparent"))
            }
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
          >
            {node.children && node.children.length > 0 ? (
              <>
                <span>{expanded.includes(node.id) ? "▼" : "▶"}</span>
                <span style={ml1}>
                  {expanded.includes(node.id) ? iconOpen : iconClose}
                </span>
              </>
            ) : (
              <span style={w4} /> // placeholder biar text tetap align
            )}
            <span>{node.name}</span>
          </div>

          {node.children &&
            node.children.length > 0 &&
            expanded.includes(node.id) && (
              <TreeView
                data={node.children}
                onLeafClick={onLeafClick}
                iconClose={iconClose}
                iconOpen={iconOpen}
                level={level + 1}
              />
            )}
        </li>
      ))}
    </ul>
  );
}
