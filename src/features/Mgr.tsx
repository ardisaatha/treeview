import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreeContentLayoutProps, TreeNode } from "../types";
import TreeView from "../components/Treeview";
import Tabs from "../components/tab";

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
      content: <p>This is a second tab with some information.</p>,
    },
    {
      label: "List Coverage",
      content: <p>This is a second tab with some information.</p>,
    },
    {
      label: "List Status Master",
      content: <p>This is a second tab with some information.</p>,
    },
    {
      label: "Condition",
      content: <p>This is a second tab with some information.</p>,
    },
  ];

  return (
    <div className="flex gap-4 w-full">
      {/* Left Card */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: selectedNode ? "20%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white rounded-xl shadow p-4 overflow-hidden"
      >
        <div className="mb-2 flex items-center gap-1">
          <div className="w-1 h-4 rounded-full bg-gray-500"></div>
          <div className="font-semibold text-lg">Left Tree</div>
        </div>

        <div className="space-y-4">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="button"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
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
            className="bg-white rounded-xl shadow p-4"
          >
            <div className="mb-2 flex items-center gap-1">
              <div className="w-1 h-4 rounded-full bg-indigo-500"></div>
              <div className="font-semibold text-lg">
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
