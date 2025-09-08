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

  return (
    <div className="tw-flex tw-gap-4 tw-w-full">
      {/* Left Card */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: selectedNode ? "20%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="tw-bg-white tw-rounded-xl tw-shadow tw-p-4 tw-overflow-hidden"
      >
        <div className="tw-mb-2 tw-flex tw-items-center tw-gap-1">
          <div className="tw-w-1 tw-h-4 tw-rounded-full tw-bg-gray-500"></div>
          <div className="tw-font-semibold tw-text-lg">Left Tree</div>
        </div>

        <div className="tw-space-y-4">
          <label
            htmlFor="search"
            className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only dark:tw-text-white"
          >
            Search
          </label>
          <div className="tw-relative">
            <div className="tw-absolute tw-inset-y-0 tw-start-0 tw-flex tw-items-center tw-ps-3 tw-pointer-events-none">
              <svg
                className="tw-w-4 tw-h-4 tw-text-gray-500 dark:tw-text-gray-400"
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
              className="tw-block tw-w-full tw-p-4 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="button"
              className="tw-text-white tw-absolute tw-end-2.5 tw-bottom-2.5 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
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
            className="tw-bg-white tw-rounded-xl tw-shadow tw-p-4"
          >
            <div className="tw-mb-2 tw-flex tw-items-center tw-gap-1">
              <div className="tw-w-1 tw-h-4 tw-rounded-full tw-bg-indigo-500"></div>
              <div className="tw-font-semibold tw-text-lg">
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
