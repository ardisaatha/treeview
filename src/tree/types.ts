import * as React from "react";

export type Id = string | number;

export type TreeNode<T = unknown> = {
  id: Id;
  label: React.ReactNode;
  children?: TreeNode<T>[];
  data?: T;
  disabled?: boolean;
};

export type TreeViewProps<T = unknown> = {
  data: TreeNode<T>[];
  defaultExpandedIds?: Id[];
  onSelect?: (node: TreeNode<T>, path: Id[]) => void;
  renderNode?: (args: {
    node: TreeNode<T>;
    level: number;
    isExpanded: boolean;
    isLeaf: boolean;
    toggle: () => void;
    select: () => void;
  }) => React.ReactNode;
  expandOnClick?: boolean;
  selectLeavesOnly?: boolean;
  indent?: number;
  className?: string;
  itemClassName?: string;
};
