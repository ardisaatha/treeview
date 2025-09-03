import React, { useState, CSSProperties } from "react";
import { TreeNode } from "../types";

// Styles for TreeView
const treeViewStyles: { [key: string]: CSSProperties } = {
  ul: {
    listStyleType: "none",
    paddingLeft: "0.5rem",
    margin: 0,
  },
  li: {
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
  },
  node: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
    padding: "0.25rem",
  },
  nodeHover: {
    backgroundColor: "#f3f4f6", // hover color
  },
};

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
    <ul style={treeViewStyles.ul}>
      {data.map((node) => (
        <li key={node.id} style={treeViewStyles.li}>
          <div
            style={treeViewStyles.node}
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                treeViewStyles.nodeHover.backgroundColor!)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
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
