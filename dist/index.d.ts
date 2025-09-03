import * as react_jsx_runtime from 'react/jsx-runtime';

type TreeNode = {
    id: string;
    name: string;
    children?: TreeNode[];
};
type TreeContentLayoutProps = {
    fetchLeftData: () => Promise<TreeNode[]>;
    fetchRightData: (parentId: string) => Promise<TreeNode[]>;
    onModalConfirm: (node: TreeNode) => void;
    onModalCancel: () => void;
};

declare function TreeContentLayout({ fetchLeftData, fetchRightData, onModalConfirm, onModalCancel, }: TreeContentLayoutProps): react_jsx_runtime.JSX.Element;

export { TreeContentLayout, type TreeContentLayoutProps, type TreeNode, TreeContentLayout as default };
