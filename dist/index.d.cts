import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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

declare const Mgr: ({ fetchLeftData, fetchRightData, onRightLeafClick, iconLeftClose, iconLeftOpen, iconRightClose, iconRightOpen, }: TreeContentLayoutProps & {
    iconLeftClose?: React.ReactNode;
    iconLeftOpen?: React.ReactNode;
    iconRightClose?: React.ReactNode;
    iconRightOpen?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

export { Mgr, type TreeContentLayoutProps, type TreeNode, Mgr as default };
