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

declare const Section: ({ fetchLeftData, fetchRightData, onRightLeafClick, iconLeftClose, iconLeftOpen, iconRightClose, iconRightOpen, }: TreeContentLayoutProps & {
    iconLeftClose?: React.ReactNode;
    iconLeftOpen?: React.ReactNode;
    iconRightClose?: React.ReactNode;
    iconRightOpen?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

export { Section as Mgr, type TreeContentLayoutProps, type TreeNode, Section as default };
