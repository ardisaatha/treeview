import * as react_jsx_runtime from 'react/jsx-runtime';

type TreeNode = {
    id: string;
    name: string;
    children?: TreeNode[];
};
type TreeContentLayoutProps = {
    fetchLeftData: () => Promise<TreeNode[]>;
    fetchRightData: (parentId: string) => Promise<TreeNode[]>;
    onRightLeafClick: (node: TreeNode) => void;
};

declare function TreeContentLayout({ fetchLeftData, fetchRightData, onRightLeafClick, }: TreeContentLayoutProps): react_jsx_runtime.JSX.Element;

export { TreeContentLayout, type TreeContentLayoutProps, type TreeNode, TreeContentLayout as default };
