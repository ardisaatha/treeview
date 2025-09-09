import Tabs from "../components/tab";
import { TreeContentLayoutProps } from "../components/types";
import Mgr from "./Mgr";

const Feature = ({
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
  const menu = [
    {
      label: "Home",
      content: (
        <Mgr
          fetchLeftData={fetchLeftData}
          fetchRightData={fetchRightData}
          onRightLeafClick={onRightLeafClick}
        />
      ),
    },
    {
      label: "Report Control",
      content: <p>This is a second tab with list Report Control.</p>,
    },
    {
      label: "Add & Config User",
      content: <p>This is a second tab with list status config user.</p>,
    },
    {
      label: "Report Misc",
      content: <p>This is a second tab with report misc.</p>,
    },
    {
      label: "Report AGR",
      content: <p>This is a second tab with report agr.</p>,
    },
  ];
  return <Tabs tabs={menu} queryKey="page" defaultKey="Home" sticky />;
};

export default Feature;
