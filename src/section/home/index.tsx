import Tabs from "../../components/tab";
import SectionLayout from "../../components/layout";
import PayorSection from "../../features/Mgr/PayorSection";

const Home = () => {

  const tabs = [
    {
      label: "Payor and Corporate",
      content: <PayorSection />,
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
    <SectionLayout
      children={
        <Tabs
          tabs={tabs}
          queryKey="tab"
          defaultKey="Payor and Corporate"
          sticky
        />
      }
    />
  );
};

export default Home;
