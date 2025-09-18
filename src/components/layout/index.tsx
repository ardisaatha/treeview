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
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

  // useEffect(() => {
  //   fetchLeftData().then(setLeftData);
  // }, [fetchLeftData]);

  const handleLeftClick = async (node: TreeNode) => {
    setSelectedNode(node);
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
    <div className="tw-flex tw-w-full tw-h-screen" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Modern Clean Sidebar */}
      <motion.div
        initial={{ width: "280px" }}
        animate={{ width: selectedNode ? "280px" : "280px" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="tw-flex tw-flex-col tw-overflow-hidden tw-border-r"
        style={{ 
          backgroundColor: 'var(--bg-sidebar)',
          borderColor: 'var(--border-sidebar)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {/* Modern Header with Brand */}
        <div className="tw-p-6 tw-border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="tw-flex tw-items-center tw-gap-3">
            <div 
              className="tw-w-10 tw-h-10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-white tw-text-sm"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              MGR
            </div>
            <div className="tw-flex tw-flex-col">
              <h2 
                className="tw-font-semibold tw-text-xl tw-leading-tight"
                style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                FOMEMA
              </h2>
              <p 
                className="tw-text-xs tw-mt-0.5"
                style={{ color: 'var(--text-muted)' }}
              >
                Management System
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="tw-flex-1 tw-overflow-hidden tw-p-4">
          <div className="tw-space-y-2">
            <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
              <h3 
                className="tw-text-sm tw-font-medium tw-px-2"
                style={{ 
                  color: 'var(--text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                Navigation Menu
              </h3>
              <div 
                className="tw-w-2 tw-h-2 tw-rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              ></div>
            </div>
            
            <div className="tw-max-h-[calc(100vh-220px)] tw-overflow-y-auto modern-scrollbar">
              <TreeView
                iconClose={iconLeftClose}
                iconOpen={iconLeftOpen}
                data={leftData}
                onLeafClick={handleLeftClick}
              />
            </div>
          </div>
        </div>

        {/* Footer with subtle branding */}
        <div 
          className="tw-p-4 tw-border-t tw-text-center"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p 
            className="tw-text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            TreeView Package v1.0
          </p>
        </div>
      </motion.div>

      {/* Modern Main Content Area */}
      <div className="tw-flex-1 tw-flex tw-flex-col tw-overflow-hidden">
        {/* Clean Top Navigation */}
        <div 
          className="tw-border-b tw-px-8 tw-py-6"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-color)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-4">
              <div>
                <h1 
                  className="tw-text-2xl tw-leading-tight"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: 'var(--font-weight-bold)'
                  }}
                >
                  Dashboard
                </h1>
                <p 
                  className="tw-text-sm tw-mt-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Welcome to your management system
                </p>
              </div>
              {selectedNode && (
                <div 
                  className="tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium"
                  style={{ 
                    backgroundColor: 'var(--bg-accent)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Active: {selectedNode.name}
                </div>
              )}
            </div>
            
            <div className="tw-flex tw-items-center tw-gap-3">
              <button 
                className="tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-font-medium tw-transition-all tw-duration-200 hover:tw-scale-105"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                New Item
              </button>
              <button 
                className="tw-p-2 tw-rounded-lg tw-transition-all tw-duration-200 hover:tw-scale-105"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  border: `1px solid var(--border-color)`
                }}
              >
                ⚙️
              </button>
            </div>
          </div>
        </div>

        {/* Modern Content Area */}
        <div 
          className="tw-flex-1 tw-overflow-auto tw-p-8"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          {selectedNode ? (
            <div 
              className="tw-rounded-xl tw-p-6 tw-h-full"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-md)',
                border: `1px solid var(--border-color)`
              }}
            >
              {children}
            </div>
          ) : (
            <div className="tw-flex tw-items-center tw-justify-center tw-h-full">
              <div className="tw-text-center tw-max-w-md">
                <div 
                  className="tw-w-20 tw-h-20 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6"
                  style={{ 
                    backgroundColor: 'var(--bg-accent)',
                    color: 'var(--color-primary)'
                  }}
                >
                  <svg className="tw-w-10 tw-h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
                <h3 
                  className="tw-text-xl tw-mb-3"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}
                >
                  Select an item to get started
                </h3>
                <p 
                  className="tw-text-base tw-leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Choose an item from the navigation menu to view its details and manage your content effectively.
                </p>
                <div className="tw-mt-6">
                  <button 
                    className="tw-px-6 tw-py-3 tw-rounded-lg tw-text-sm tw-font-medium tw-transition-all tw-duration-200 hover:tw-scale-105"
                    style={{ 
                      backgroundColor: 'var(--bg-accent)',
                      color: 'var(--color-primary)',
                      border: `1px solid var(--color-primary-light)`
                    }}
                  >
                    Browse Navigation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionLayout;
