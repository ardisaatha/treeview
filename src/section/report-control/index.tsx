import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../../components/tab";
import TreeView from "../../components/treeview";
import { TreeContentLayoutProps, TreeNode } from "../../components/types";
import PayorSection from "../../features/payor-corpoprate";
import SectionLayout from "../../components/layout";
import RichTextWithContextMenu from "../../components/rich-text";

const ReportControl = () => {
  const [value, setValue] = useState("");
  const tabs = [
    {
      label: "Payor and Corporate",
      content: <PayorSection />,
    },
  ];

  return (
    <SectionLayout
      children={
        <div className="">
          <h1 className="tw-text-xl tw-font-bold tw-mb-4">
            Custom Rich Text with Context Menu
          </h1>

          <RichTextWithContextMenu
            // initialText="Hello! Select some text and right-click."
            onChange={setValue}
            // actions={["copy", "paste", "edit"]}
          />

          <p className="tw-mt-4 tw-text-gray-600">Editor value: {value}</p>
        </div>
      }
    />
  );
};

export default ReportControl;
