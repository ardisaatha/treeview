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
  const barStyle: React.CSSProperties = {
    height: "1px",
    backgroundColor: "#cc141d",
    transformOrigin: "left",
  };

  return (
    <motion.div
      style={barStyle}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: loading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
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

  // Styles
  const containerStyle: React.CSSProperties = {
    paddingTop: "0.75rem",
    borderBottom: "1px solid #e5e7eb", // gray-200
    position: sticky ? "sticky" : "static",
    top: sticky ? 0 : undefined,
  };

  const tabListStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "-1px",
    fontSize: "0.75rem",
    fontWeight: 400,
    textAlign: "center",
  };

  const tabItemStyle: React.CSSProperties = {
    marginRight: "1rem",
    position: "relative",
  };

  const tabButtonBase: React.CSSProperties = {
    display: "inline-block",
    paddingBottom: "0.625rem",
    borderBottom: "2px solid transparent",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    outline: "none",
  };

  const tabContentStyle: React.CSSProperties = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    borderRadius: "0.5rem",
    color: "#6b7280", // gray-500
    width: "100%",
  };

  const activeTabTextColor = "#3b82f6"; // primary
  const inactiveTabTextColor = "#6b7280"; // gray-500

  const activeTabUnderlineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: activeTabTextColor,
  };

  return (
    <>
      <div style={containerStyle} className={className}>
        <ul style={tabListStyle} role="tablist">
          {tabs.map((item) => (
            <li key={item.label} style={tabItemStyle} role="presentation">
              <motion.button
                onClick={() => handleSelect(item.label)}
                style={{
                  ...tabButtonBase,
                  color: tabKey === item.label ? activeTabTextColor : inactiveTabTextColor,
                }}
                type="button"
                role="tab"
                aria-selected={tabKey === item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>

              {tabKey === item.label && <motion.div layoutId="activeTabUnderline" style={activeTabUnderlineStyle} />}
            </li>
          ))}
        </ul>
        <LocalProgressBar loading={loading} />
      </div>

      <div>
        {tabs.map((tab) => (
          <div
            key={tab.label}
            style={{
              ...tabContentStyle,
              display: tabKey === tab.label ? "block" : "none",
            }}
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
