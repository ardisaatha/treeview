"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Mgr: () => Mgr_default,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/features/Mgr.tsx
var import_react3 = require("react");
var import_framer_motion2 = require("framer-motion");

// src/components/Treeview.tsx
var import_react = require("react");

// src/components/icon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FolderIcon({ width, height, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                strokeDasharray: 64,
                strokeDashoffset: 64,
                d: "M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.2s",
                    values: "64;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("path", { d: "M12 7h-9v0c0 0 0.45 0 1 0h6z", opacity: 0, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "animate",
                {
                  fill: "freeze",
                  attributeName: "d",
                  begin: "0.2s",
                  dur: "0.2s",
                  values: "M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("set", { fill: "freeze", attributeName: "opacity", begin: "0.2s", to: 1 })
            ] })
          ]
        }
      )
    }
  );
}
function FolderOpenIcon({ width, height, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                strokeDasharray: 64,
                strokeDashoffset: 64,
                d: "M3 8h18c0.55 0 1 0.45 1 1v9c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1z",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.2s",
                    values: "64;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("path", { d: "M3 8l3-3h6l2 2h7", opacity: 0, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "animate",
                {
                  fill: "freeze",
                  attributeName: "d",
                  begin: "0.2s",
                  dur: "0.3s",
                  values: "M3 8l3-3h6l2 2h7;\r\n                    M3 5l3-3h6l2 2h7"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("set", { fill: "freeze", attributeName: "opacity", begin: "0.2s", to: 1 })
            ] })
          ]
        }
      )
    }
  );
}
function DocumentIcon({ width, height, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                strokeDasharray: 64,
                strokeDashoffset: 64,
                d: "M13 3l6 6v12h-14v-18h8",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.2s",
                    values: "64;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                strokeDasharray: 14,
                strokeDashoffset: 14,
                strokeWidth: 1,
                d: "M12.5 3v5.5h6.5",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "0.2s",
                    dur: "0.2s",
                    values: "14;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeDasharray: 6, strokeDashoffset: 6, d: "M9 13h4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                begin: "0.4s",
                dur: "0.2s",
                values: "6;0"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeDasharray: 8, strokeDashoffset: 8, d: "M9 16h6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                begin: "0.6s",
                dur: "0.2s",
                values: "8;0"
              }
            ) })
          ]
        }
      )
    }
  );
}

// src/components/Treeview.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function TreeView({
  data,
  onLeafClick,
  iconOpen,
  iconClose,
  level = 0
}) {
  const [expanded, setExpanded] = (0, import_react.useState)([]);
  const toggleExpand = (id) => {
    setExpanded(
      (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const textIndent = (lvl) => ({
    paddingLeft: `${lvl * 16}px`
    // indentasi level
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "list-none p-0 m-0", children: data.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: i > 0 ? "mt-1" : "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "flex items-center gap-2 cursor-pointer rounded p-1 transition-colors duration-200 ease-in-out hover:bg-gray-100",
        style: textIndent(level),
        onClick: () => node.children && node.children.length > 0 ? toggleExpand(node.id) : onLeafClick(node),
        children: [
          node.children && node.children.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: !iconClose && !iconOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: expanded.includes(node.id) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            FolderOpenIcon,
            {
              width: 24,
              height: 24,
              className: "text-blue-500"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            FolderIcon,
            {
              width: 24,
              height: 24,
              className: "text-blue-500"
            }
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-1", children: expanded.includes(node.id) ? iconOpen : iconClose }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "inline-block w-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DocumentIcon, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: node.name })
        ]
      }
    ),
    node.children && node.children.length > 0 && expanded.includes(node.id) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      TreeView,
      {
        data: node.children,
        onLeafClick,
        iconClose,
        iconOpen,
        level: level + 1
      }
    )
  ] }, node.id)) });
}

// src/components/tab/index.tsx
var import_react2 = require("react");
var import_framer_motion = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
var toCamelCase = (str) => {
  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()
  ).replace(/\s+/g, "");
};
var getLabelFromParam = (param, tabs) => {
  return tabs.find((tab) => toCamelCase(tab.label) === param)?.label || tabs[0].label;
};
var LocalProgressBar = ({ loading }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_framer_motion.motion.div,
    {
      className: "h-[1px] bg-[#cc141d] origin-left",
      initial: { scaleX: 0 },
      animate: { scaleX: loading ? 1 : 0 },
      transition: { duration: 0.3 },
      style: {
        transformOrigin: "left",
        transform: loading ? "scaleX(1)" : "scaleX(0)"
      }
    }
  );
};
var Tabs = ({ tabs, defaultKey, queryKey, sticky, className }) => {
  const [tabKey, setTabKey] = (0, import_react2.useState)(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(queryKey);
    return param ? getLabelFromParam(param, tabs) : defaultKey ?? tabs[0].label;
  });
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const handleSelect = async (label) => {
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
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: `pt-3 border-b border-gray-200 ${sticky ? "sticky top-0 " : ""} ${className ?? ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "ul",
            {
              className: "flex flex-wrap -mb-px text-xs font-normal text-center",
              role: "tablist",
              children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: "me-4 relative", role: "presentation", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_framer_motion.motion.button,
                  {
                    onClick: () => handleSelect(item.label),
                    className: `inline-block pb-2.5 border-b-2 rounded-t-lg focus:outline-none ${tabKey === item.label ? "border-transparent text-primary" : "border-transparent text-gray-500"}`,
                    type: "button",
                    role: "tab",
                    "aria-selected": tabKey === item.label,
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: item.label
                  }
                ),
                tabKey === item.label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_framer_motion.motion.div,
                  {
                    layoutId: "activeTabUnderline",
                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  }
                )
              ] }, item.label))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LocalProgressBar, { loading })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: `py-2 rounded-lg text-gray-500 ${tabKey === tab.label ? "w-full" : "hidden"}`,
        role: "tabpanel",
        children: tab.content
      },
      tab.label
    )) })
  ] });
};
var tab_default = Tabs;

// src/features/Mgr.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Mgr = ({
  fetchLeftData,
  fetchRightData,
  onRightLeafClick,
  iconLeftClose,
  iconLeftOpen,
  iconRightClose,
  iconRightOpen
}) => {
  const [leftData, setLeftData] = (0, import_react3.useState)([]);
  const [rightData, setRightData] = (0, import_react3.useState)([]);
  const [selectedNode, setSelectedNode] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    fetchLeftData().then(setLeftData);
  }, [fetchLeftData]);
  const handleLeftClick = async (node) => {
    if (node.children && node.children.length > 0) return;
    setSelectedNode(node);
    const data = await fetchRightData(node.id);
    setRightData(data);
  };
  const handleRightClick = (node) => {
    if (node.children && node.children.length > 0) return;
    onRightLeafClick(node);
  };
  const tabs = [
    {
      label: "Payor and Corporate",
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This is a second tab with payor and customer information." })
    },
    {
      label: "List Coverage",
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This is a second tab with list coverage information." })
    },
    {
      label: "List Status Master",
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This is a second tab with list status member information." })
    },
    {
      label: "Condition",
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This is a second tab with condition information." })
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex gap-4 w-full", children: [
    "asu",
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_framer_motion2.motion.div,
      {
        initial: { width: "100%" },
        animate: { width: selectedNode ? "20%" : "100%" },
        transition: { duration: 0.4, ease: "easeInOut" },
        className: "bg-white rounded-xl shadow p-4 overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mb-2 flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-1 h-4 rounded-full bg-gray-500" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "font-semibold text-lg", children: "Left Tree" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "label",
              {
                htmlFor: "search",
                className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
                children: "Search"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "svg",
                {
                  className: "w-4 h-4 text-gray-500 dark:text-gray-400",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "path",
                    {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "input",
                {
                  type: "search",
                  id: "search",
                  className: "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  placeholder: "Search",
                  required: true
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  className: "text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  children: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              TreeView,
              {
                iconClose: iconLeftClose,
                iconOpen: iconLeftOpen,
                data: leftData,
                onLeafClick: handleLeftClick
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_framer_motion2.AnimatePresence, { children: selectedNode && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_framer_motion2.motion.div,
      {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, width: "80%" },
        exit: { opacity: 0, x: 50 },
        transition: { duration: 0.4, ease: "easeInOut" },
        className: "bg-white rounded-xl shadow p-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mb-2 flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-1 h-4 rounded-full bg-indigo-500" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "font-semibold text-lg", children: [
              "Right Tree: ",
              selectedNode.name
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            tab_default,
            {
              tabs,
              queryKey: "tab",
              defaultKey: "Payor and Corporate",
              sticky: true
            }
          )
        ]
      },
      "right-card"
    ) })
  ] });
};
var Mgr_default = Mgr;

// src/index.ts
var index_default = Mgr_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Mgr
});
