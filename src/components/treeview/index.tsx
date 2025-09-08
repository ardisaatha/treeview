import React, { useState } from "react";
import { TreeNode } from "../types";
import { DocumentIcon, FolderIcon, FolderOpenIcon } from "../icon";

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

  // Styles
  const ulStyle: React.CSSProperties = {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  };

  const liStyle: React.CSSProperties = {
    marginTop: "0.25rem",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
    padding: "0.25rem",
    transition: "background-color 0.2s ease",
  };

  const rowHoverStyle: React.CSSProperties = {
    backgroundColor: "rgba(243, 244, 246, 1)", // gray-100
  };

  const iconStyle: React.CSSProperties = {
    marginLeft: "0.25rem",
    display: "inline-block",
    width: "1rem",
  };

  const textIndent = (lvl: number): React.CSSProperties => ({
    paddingLeft: `${lvl * 16}px`,
  });

  return (
    <ul style={ulStyle}>
      {data.map((node, i) => (
        <li key={node.id} style={i > 0 ? liStyle : undefined}>
          <div
            style={{ ...rowStyle, ...textIndent(level) }}
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                rowHoverStyle.backgroundColor!)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                "transparent")
            }
          >
            {node.children && node.children.length > 0 ? (
              <>
                {!iconClose && !iconOpen ? (
                  expanded.includes(node.id) ? (
                    <FolderOpenIcon width={24} height={24} color="rgb(59 130 246)" />
                  ) : (
                    <FolderIcon width={24} height={24} color="rgb(59 130 246)" />
                  )
                ) : (
                  <span style={iconStyle}>
                    {expanded.includes(node.id) ? iconOpen : iconClose}
                  </span>
                )}
              </>
            ) : (
              <span style={iconStyle}>
                <DocumentIcon />
              </span>
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
