import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: Tab[];
  defaultKey?: string;
  queryKey: string;
  sticky?: boolean;
  className?: string;
};

// Convert a string to camelCase (e.g., "Tab One" => "tabOne")
const toCamelCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
};

// Get original label from camelCase param
const getLabelFromParam = (param: string, tabs: Tab[]) => {
  return (
    tabs.find((tab) => toCamelCase(tab.label) === param)?.label || tabs[0].label
  );
};

const LocalProgressBar = ({ loading }: { loading: boolean }) => {
  return (
    <motion.div
      className="h-[1px] bg-[#cc141d] origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: loading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        transformOrigin: "left",
        transform: loading ? "scaleX(1)" : "scaleX(0)",
      }}
    />
  );
};

const Tabs = ({ tabs, defaultKey, queryKey, sticky, className }: TabProps) => {
  const [tabKey, setTabKey] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(queryKey);
    return param ? getLabelFromParam(param, tabs) : defaultKey ?? tabs[0].label;
  });

  const [loading, setLoading] = useState(false);

  const handleSelect = async (label: string) => {
    if (label === tabKey) return;

    setLoading(true);

    // Simulate loading delay (or replace with real async logic)
    await new Promise((resolve) => setTimeout(resolve, 400));

    setTabKey(label);
    const params = new URLSearchParams(window.location.search);
    params.set(queryKey, toCamelCase(label));
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
    setLoading(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(queryKey);

    if (!param) {
      const defaultLabel = defaultKey ?? tabs[0].label;
      params.set(queryKey, toCamelCase(defaultLabel));
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
      setTabKey(defaultLabel);
    } else {
      setTabKey(getLabelFromParam(param, tabs));
    }
  }, [defaultKey, tabs, queryKey]);

  return (
    <>
      <div
        className={`pt-3 border-b border-gray-200 ${
          sticky ? "sticky top-0 " : ""
        } ${className ?? ""}`}
      >
        <ul
          className="flex flex-wrap -mb-px text-xs font-normal text-center"
          role="tablist"
        >
          {tabs.map((item) => (
            <li key={item.label} className="me-4 relative" role="presentation">
              <motion.button
                onClick={() => handleSelect(item.label)}
                className={`inline-block pb-2.5 border-b-2 rounded-t-lg focus:outline-none ${
                  tabKey === item.label
                    ? "border-transparent text-primary"
                    : "border-transparent text-gray-500"
                }`}
                type="button"
                role="tab"
                aria-selected={tabKey === item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>

              {tabKey === item.label && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </li>
          ))}
        </ul>
        <LocalProgressBar loading={loading} />
      </div>

      <div>
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`py-2 rounded-lg text-gray-500 ${
              tabKey === tab.label ? "w-full" : "hidden"
            }`}
            role="tabpanel"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
