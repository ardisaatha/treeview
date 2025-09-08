export type TreeNode = {
  id: string;
  name: string;
  children?: TreeNode[];
};

export type TreeContentLayoutProps = {
  fetchLeftData: () => Promise<TreeNode[]>;
  fetchRightData: (parentId: string) => Promise<TreeNode[]>;
  onRightLeafClick: (node: TreeNode) => void;
};
