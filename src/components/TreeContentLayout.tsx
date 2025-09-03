import React, { useEffect, useState } from "react";
import { TreeNode, TreeContentLayoutProps } from "../types";
import TreeView from "./Treeview";
import { styles } from "../style"; // import style CSS-in-JS

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
    <div style={styles.container}>
      {/* Left Card */}
      <div style={styles.card}>
        <h2 style={styles.title}>Left Tree</h2>
        <TreeView data={leftData} onLeafClick={handleLeftClick} />
      </div>

      {/* Right Card */}
      {selectedNode && (
        <div style={styles.card}>
          <h2 style={styles.title}>Right Tree: {selectedNode.name}</h2>
          <TreeView data={rightData} onLeafClick={handleRightClick} />
        </div>
      )}
    </div>
  );
}
