import React, { useEffect, useState } from "react";
import { TreeNode, TreeContentLayoutProps } from "../types";
import TreeView from "./Treeview";

export default function TreeContentLayout({
  fetchLeftData,
  fetchRightData,
  onRightLeafClick,
  iconLeftClose,
  iconLeftOpen,
  iconRightClose,
  iconRightOpen,
}: TreeContentLayoutProps & {
  iconLeftClose?: React.ReactNode;
  iconLeftOpen?: React.ReactNode;
  iconRightClose?: React.ReactNode;
  iconRightOpen?: React.ReactNode;
}) {
  const [leftData, setLeftData] = useState<TreeNode[]>([]);
  const [rightData, setRightData] = useState<TreeNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

  useEffect(() => {
    fetchLeftData().then(setLeftData);
  }, [fetchLeftData]);

  const handleLeftClick = async (node: TreeNode) => {
    if (node.children && node.children.length > 0) return;
    setSelectedNode(node);
    const data = await fetchRightData(node.id);
    setRightData(data);
  };

  const handleRightClick = (node: TreeNode) => {
    if (node.children && node.children.length > 0) return;
    onRightLeafClick(node);
  };

  return (
    <div className="tw-flex tw-gap-4">
      {/* Left Card */}
      <div className="tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow tw-p-4">
        <div className="tw-mb-2 tw-flex tw-items-center tw-gap-1">
          <div className="tw-w-1 tw-h-4 tw-rounded-full tw-bg-gray-500"></div>
          <div className="tw-font-semibold tw-text-lg">Left Tree</div>
        </div>
        <TreeView
          iconClose={iconLeftClose}
          iconOpen={iconLeftOpen}
          data={leftData}
          onLeafClick={handleLeftClick}
        />
      </div>

      {/* Right Card */}
      {/* {selectedNode && ( */}
      <div className="tw-w-3/4 tw-bg-white tw-rounded-xl tw-shadow tw-p-4">
        <div className="tw-mb-2 tw-flex tw-items-center tw-gap-1">
          <div className="tw-w-1 tw-h-4 tw-rounded-full tw-bg-[oklch(62.3%_.214_259.815)]"></div>
          <div className="tw-font-semibold tw-text-lg">Right Tree:</div>
        </div>
        {/* <TreeView
            iconClose={iconRightClose}
            iconOpen={iconRightOpen}
            data={rightData}
            onLeafClick={handleRightClick}
          /> */}
      </div>
      {/* )} */}
    </div>
  );
}
