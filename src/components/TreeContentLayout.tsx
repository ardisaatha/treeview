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

  // ---- Styles ----
  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem", // gap-4
    // padding: "1rem", // p-4
  };

  const cardStyle: React.CSSProperties = {
    width: "50%", // w-1/2
    backgroundColor: "#fff", // bg-white
    borderRadius: "0.75rem", // rounded-xl
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)", // shadow
    padding: "1rem", // p-4
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 600, // font-semibold
    fontSize: "1.125rem", // text-lg
    lineHeight: "1.75rem",
  };

  const colorTitleRight: React.CSSProperties = {
    width: "4px",
    height: "16px",
    borderRadius: 9999,
    backgroundColor: "oklch(62.3% .214 259.815)",
  };
  const colorTitleLeft: React.CSSProperties = {
    width: "4px",
    height: "16px",
    borderRadius: 9999,
    backgroundColor: "gray",
  };

  const titleStyle: React.CSSProperties = {
    marginBottom: "0.5rem", // mb-2
    display: "flex",
    alignItems: "center",
    gap: "0.3rem", // gap-4
    // padding: "1rem", // p-4
  };

  return (
    <div style={containerStyle}>
      {/* Left Card */}
      <div style={cardStyle}>
        <div style={titleStyle}>
          <div style={colorTitleLeft}></div>
          <div style={headingStyle}>Left Tree</div>
        </div>
        <TreeView
          iconClose={iconLeftClose}
          iconOpen={iconLeftOpen}
          data={leftData}
          onLeafClick={handleLeftClick}
        />
      </div>

      {/* Right Card */}
      {selectedNode && (
        <div style={cardStyle}>
          <div style={titleStyle}>
            <div style={colorTitleRight}></div>
            <div style={headingStyle}>Right Tree: {selectedNode.name}</div>
          </div>
          <TreeView
            iconClose={iconRightClose}
            iconOpen={iconRightOpen}
            data={rightData}
            onLeafClick={handleRightClick}
          />
        </div>
      )}
    </div>
  );
}
