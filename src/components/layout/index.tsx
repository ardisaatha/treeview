import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../tab";
import TreeView from "../treeview";
import { TreeContentLayoutProps, TreeNode } from "../types";
import PayorSection from "../../features/payor-corpoprate";

const SectionLayout = ({
  iconLeftClose,
  iconLeftOpen,
  children,
  iconRightClose,
  iconRightOpen,
}: {
  children: React.ReactNode;
  iconLeftClose?: React.ReactNode;
  iconLeftOpen?: React.ReactNode;
  iconRightClose?: React.ReactNode;
  iconRightOpen?: React.ReactNode;
}) => {
  const [selectedNode, setSelectedNode] = useState(false);

  // useEffect(() => {
  //   fetchLeftData().then(setLeftData);
  // }, [fetchLeftData]);

  const handleLeftClick = async (node: TreeNode) => {
    setSelectedNode(true);
  };
  const leftData = [
    {
      id: "1",
      name: "Folder A",
      children: [
        {
          id: "1-1",
          name: "File A-1",
          children: [{ id: "1-1-1", name: "File A-1-1" }],
        },
        { id: "1-2", name: "File A-2" },
      ],
    },
    {
      id: "2",
      name: "Folder B",
      children: [{ id: "2-1", name: "File B-1" }],
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
          <input
            type="text"
            placeholder="Search..."
            // value={search}
            // onChange={(e) => {
            //   setSearch(e.target.value);
            //   setPage(1);
            // }}
            className="tw-w-full tw-p-2 tw-border-solid tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500"
          />
          <div className="tw-max-h-[75vh] tw-overflow-y-auto">
            <TreeView
              iconClose={iconLeftClose}
              iconOpen={iconLeftOpen}
              data={leftData}
              onLeafClick={handleLeftClick}
            />
          </div>
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
            className="tw-bg-white tw-rounded-xl tw-shadow tw-p-4 tw-overflow-y-auto"
          >
            <div className="tw-mb-2 tw-flex tw-items-center tw-gap-1">
              <div className="tw-w-1 tw-h-4 tw-rounded-full tw-bg-indigo-500"></div>
              <div className="tw-font-semibold tw-text-lg">Right Tree:</div>
            </div>
            <div className="tw-max-h-[75vh] tw-overflow-y-auto">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionLayout;
