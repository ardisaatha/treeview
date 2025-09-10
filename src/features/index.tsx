import Tabs from "../components/tab";
import { TreeContentLayoutProps } from "../components/types";
import Home from "../section/home";
import Mgr from "./Mgr";
import Tmp from "./Mgr/tmp";

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
      content: <Home />,
    },
    {
      label: "Report Control",
      content: <Tmp />,
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
  return <Tabs tabs={menu} queryKey="page" defaultKey="Home" />;
};

export default Feature;
