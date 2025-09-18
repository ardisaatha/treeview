import React, { useState } from "react";
import { TreeNode } from "../types";
import { DocumentIcon, FolderIcon, FolderOpenIcon } from "../../assets/icon";

type TreeViewProps = {
  data: any;
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
    <ul className="tw-list-none tw-pl-0 tw-m-0 tw-h-full tw-overflow-y-auto">
      {data?.map((node: any, i: any) => (
        <li key={node.id} className={i > 0 ? "tw-mt-1" : ""}>
          <div
              className={`tw-flex tw-items-center tw-gap-3 tw-p-3 tw-rounded-lg tw-cursor-pointer tw-transition-all tw-duration-200 tw-group ${
                expanded.includes(node.id) ? "tw-bg-opacity-10" : ""
              }`}
              style={{
                paddingLeft: `${level * 16}px`,
                backgroundColor: expanded.includes(node.id) ? 'var(--color-primary-light)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (!expanded.includes(node.id)) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                }
              }}
              onMouseLeave={(e) => {
                if (!expanded.includes(node.id)) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              onClick={() =>
                node.children && node.children.length > 0
                  ? toggleExpand(node.id)
                  : onLeafClick(node)
              }
            >
            {/* Modern Folder Icon */}
            <div className="tw-flex tw-items-center tw-gap-3 tw-flex-1">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5">
                {node.children && node.children.length > 0 ? (
                  <>
                    {!iconClose && !iconOpen ? (
                      <span>
                        {expanded.includes(node.id) ? (
                          <FolderOpenIcon 
                            className="tw-w-5 tw-h-5" 
                            style={{ color: 'var(--color-primary)' }}
                          />
                        ) : (
                          <FolderIcon 
                            className="tw-w-5 tw-h-5" 
                            style={{ color: 'var(--text-secondary)' }}
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
                  <DocumentIcon 
                     className="tw-w-4 tw-h-4" 
                     style={{ color: 'var(--text-secondary)' }}
                   />
                )}
              </div>
              <span 
                className="tw-font-medium tw-transition-colors tw-duration-200"
                style={{ 
                  color: expanded.includes(node.id) ? 'var(--color-primary)' : 'var(--text-primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                {node.name}
              </span>
              {node.children && node.children.length > 0 && (
                <span 
                  className="tw-text-xs tw-px-2 tw-py-0.5 tw-rounded-full"
                  style={{ 
                    backgroundColor: 'var(--bg-accent)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {node.children.length}
                </span>
              )}
            </div>
          </div>

          {expanded.includes(node.id) && node.children && (
            <div 
              className="tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden tw-mt-1"
              style={{ 
                borderLeft: `2px solid var(--border-color)`,
                marginLeft: `${(level + 1) * 8}px`,
                paddingLeft: '12px'
              }}
            >
              <TreeView
                data={node.children}
                onLeafClick={onLeafClick}
                level={level + 1}
                iconClose={iconClose}
                iconOpen={iconOpen}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
