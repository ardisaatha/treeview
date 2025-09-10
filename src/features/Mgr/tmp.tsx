import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../../components/tab";
import TreeView from "../../components/treeview";
import { TreeContentLayoutProps, TreeNode } from "../../components/types";
import PayorSection from "./PayorSection";
import SectionLayout from "../../components/layout";

const Tmp = () => {

  const tabs = [
    {
      label: "Payor and Corporate",
      content: <PayorSection />,
    },
  ];

  return (
    <SectionLayout
      children={
        <>
        oke nih
        </>
      }
    />
  );
};

export default Tmp;
