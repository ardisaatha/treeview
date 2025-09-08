import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../components/tab";
import TreeView from "../components/treeview";
import { TreeContentLayoutProps, TreeNode } from "../components/types";

const Mgr = ({
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
}) => {
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

  const tabs = [
    {
      label: "Payor and Corporate",
      content: <p>This is a second tab with payor and customer information.</p>,
    },
    {
      label: "List Coverage",
      content: <p>This is a second tab with list coverage information.</p>,
    },
    {
      label: "List Status Master",
      content: <p>This is a second tab with list status member information.</p>,
    },
    {
      label: "Condition",
      content: <p>This is a second tab with condition information.</p>,
    },
  ];

  // Styles
  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    width: "100%",
  };

  const cardBaseStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    padding: "1rem",
    overflow: "hidden",
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  };

  const headerBarStyle: React.CSSProperties = {
    width: "0.25rem",
    height: "1rem",
    borderRadius: "9999px",
    backgroundColor: "#6b7280", // gray-500
  };

  const headerTextStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: "1.125rem", // lg
  };

  const searchContainerStyle: React.CSSProperties = {
    position: "relative",
    marginBottom: "1rem",
  };

  const searchInputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.5rem 1rem 0.5rem 2.5rem",
    fontSize: "0.875rem",
    color: "#111827", // gray-900
    border: "1px solid #d1d5db", // gray-300
    borderRadius: "0.5rem",
    backgroundColor: "#f9fafb", // gray-50
    outline: "none",
  };

  const searchIconWrapperStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.75rem",
    pointerEvents: "none",
  };

  const searchButtonStyle: React.CSSProperties = {
    position: "absolute",
    right: "0.625rem",
    bottom: "0.625rem",
    backgroundColor: "#1d4ed8", // blue-700
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: 500,
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Left Card */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: selectedNode ? "20%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={cardBaseStyle}
      >
        <div style={headerStyle}>
          <div style={headerBarStyle}></div>
          <div style={headerTextStyle}>Left Tree</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label htmlFor="search" style={{ display: "none" }}>
            Search
          </label>
          <div style={searchContainerStyle}>
            <div style={searchIconWrapperStyle}>
              <svg
                style={{ width: "1rem", height: "1rem", color: "#6b7280" }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              placeholder="Search"
              required
              style={searchInputStyle}
            />
            <button type="button" style={searchButtonStyle}>
              Search
            </button>
          </div>

          <TreeView
            iconClose={iconLeftClose}
            iconOpen={iconLeftOpen}
            data={leftData}
            onLeafClick={handleLeftClick}
          />
        </div>
      </motion.div>

      {/* Right Card */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            key="right-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, width: "80%" }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={cardBaseStyle}
          >
            <div style={headerStyle}>
              <div
                style={{ ...headerBarStyle, backgroundColor: "#6366f1" }} // indigo-500
              ></div>
              <div style={headerTextStyle}>
                Right Tree: {selectedNode.name}
              </div>
            </div>
            <Tabs
              tabs={tabs}
              queryKey="tab"
              defaultKey="Payor and Corporate"
              sticky
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mgr;
