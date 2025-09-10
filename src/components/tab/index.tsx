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
      className="tw-h-[1px] tw-bg-[#cc141d] tw-origin-left"
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
        className={`tw-pt-3  ${sticky ? "tw-sticky tw-top-0 " : ""} ${
          className ?? ""
        }`}
      >
        <ul
          style={{ borderBottom: "1px solid #e5e7eb" }}
          className="tw-flex tw-list-none tw-p-0 tw-border-b tw-border-gray-200 tw-flex-wrap tw--mb-px tw-text-xs tw-font-normal tw-text-center"
          role="tablist"
        >
          {tabs.map((item) => (
            <li
              key={item.label}
              className="tw-me-4 tw-relative"
              role="presentation"
            >
              <motion.button
                onClick={() => handleSelect(item.label)}
                className={`tw-inline-block tw-pb-2.5 tw-px-0 tw-pt-0 tw-bg-transparent tw-border-none tw-rounded-t-lg focus:tw-outline-none ${
                  tabKey === item.label
                    ? "tw-text-[#cc141d]"
                    : "tw-text-gray-500"
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
                  className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-0.5 tw-bg-[#cc141d]"
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
            className={`tw-py-2 tw-rounded-lg tw-text-gray-500 ${
              tabKey === tab.label ? "tw-w-full" : "tw-hidden"
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
