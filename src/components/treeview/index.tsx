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

  return (
    <ul className="list-none pl-0 m-0">
      {data.map((node, i) => (
        <li key={node.id} className={i > 0 ? "mt-1" : ""}>
          <div
            className={`flex items-center gap-2 cursor-pointer rounded p-1 hover:bg-gray-100 transition-colors`}
            style={{ paddingLeft: `${level * 16}px` }}
            onClick={() =>
              node.children && node.children.length > 0
                ? toggleExpand(node.id)
                : onLeafClick(node)
            }
          >
            {node.children && node.children.length > 0 ? (
              <>
                {!iconClose && !iconOpen ? (
                  <span>
                    {expanded.includes(node.id) ? (
                      <FolderOpenIcon
                        width={24}
                        height={24}
                        color="rgb(59 130 246)"
                      />
                    ) : (
                      <FolderIcon
                        width={24}
                        height={24}
                        color="rgb(59 130 246)"
                      />
                    )}
                  </span>
                ) : (
                  <span className="ml-1">
                    {expanded.includes(node.id) ? iconOpen : iconClose}
                  </span>
                )}
              </>
            ) : (
              <span className="inline-block w-4">
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
