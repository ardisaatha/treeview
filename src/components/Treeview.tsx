import React, { useState } from "react";
import { TreeNode } from "../types";
import { DocumentIcon, FolderIcon, FolderOpenIcon } from "./icon";

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

  const textIndent = (lvl: number): React.CSSProperties => ({
    paddingLeft: `${lvl * 16}px`, // indentasi level
  });

  return (
    <ul className="tw-list-none tw-p-0 tw-m-0">
      {data.map((node, i) => (
        <li key={node.id} className={i > 0 ? "tw-mt-1" : ""}>
          <div
            className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-rounded tw-p-1 tw-transition-colors tw-duration-200 tw-ease-in-out hover:tw-bg-gray-100"
            style={textIndent(level)}
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
                        className="tw-text-blue-500"
                      />
                    ) : (
                      <FolderIcon
                        width={24}
                        height={24}
                        className="tw-text-blue-500"
                      />
                    )}
                  </span>
                ) : (
                  <span className="tw-ml-1">
                    {expanded.includes(node.id) ? iconOpen : iconClose}
                  </span>
                )}
              </>
            ) : (
              <span className="tw-inline-block tw-w-4">
                <DocumentIcon />
              </span> // placeholder biar text tetap align
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
