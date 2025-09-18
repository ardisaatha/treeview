import Tabs from "../components/tab";
import { TreeContentLayoutProps } from "../components/types";
import Home from "./home";
import ReportControl from "./report-control";

const Section = ({
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
      content: <ReportControl />,
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
  return (
    <Tabs
      tabs={menu}
      queryKey="page"
      defaultKey="Home"
      sticky
      // scrollContainerId="myScrollContainer" // 👈 opsional, kasih kalau scroll di container
    />
  );
};

export default Section;
