import React, { useState } from "react";

export interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
}

export interface TreeViewProps {
  data: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
  renderLabel?: (node: TreeNode) => React.ReactNode;
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TreeView: React.FC<TreeViewProps> = ({
  data,
  onNodeClick,
  renderLabel,
  expandIcon = "➕",
  collapseIcon = "➖",
  className,
  style,
}) => {
  const [expanded, setExpanded] = useState<Set<string | number>>(new Set());

  const toggleNode = (id: string | number) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const renderTree = (nodes: TreeNode[]) => (
    <ul className="list-none pl-4">
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0;
        const isExpanded = expanded.has(node.id);

        return (
          <li key={node.id} className="mb-1">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                if (hasChildren) toggleNode(node.id);
                if (onNodeClick) onNodeClick(node);
              }}
            >
              {hasChildren && (
                <span className="mr-1">
                  {isExpanded ? collapseIcon : expandIcon}
                </span>
              )}
              <span>{renderLabel ? renderLabel(node) : node.label}</span>
            </div>
            {hasChildren && isExpanded && renderTree(node.children!)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={className} style={style}>
      {renderTree(data)}
    </div>
  );
};

export default TreeView;
