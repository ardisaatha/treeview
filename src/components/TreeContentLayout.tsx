import React, { useEffect, useState } from "react";
import { TreeNode, TreeContentLayoutProps } from "../types";
import TreeView from "./Treeview";

export default function TreeContentLayout({
  fetchLeftData,
  fetchRightData,
  onRightLeafClick,
}: TreeContentLayoutProps) {
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
    <div className="flex gap-4 p-4">
      {/* Left Card */}
      <div className="w-1/3 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-lg mb-2">Left Tree</h2>
        <TreeView data={leftData} onLeafClick={handleLeftClick} />
      </div>

      {/* Right Card */}
      {selectedNode && (
        <div className="w-1/3 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-2">
            Right Tree: {selectedNode.name}
          </h2>
          <TreeView data={rightData} onLeafClick={handleRightClick} />
        </div>
      )}
    </div>
  );
}
