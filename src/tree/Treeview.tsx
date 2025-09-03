import * as React from "react";
import type { Id, TreeNode, TreeViewProps } from "./types";

function isLeaf<T>(n: TreeNode<T>) {
  return !n.children || n.children.length === 0;
}

export function TreeView<T = unknown>({
  data,
  defaultExpandedIds = [],
  onSelect,
  renderNode,
  expandOnClick = true,
  selectLeavesOnly = true,
  indent = 16,
  className,
  itemClassName,
}: TreeViewProps<T>) {
  const [expanded, setExpanded] = React.useState(
    () => new Set<Id>(defaultExpandedIds)
  );

  const toggle = React.useCallback((id: Id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleSelect = React.useCallback(
    (node: TreeNode<T>, path: Id[]) => {
      onSelect?.(node, path);
    },
    [onSelect]
  );

  const render = (node: TreeNode<T>, level: number, path: Id[]) => {
    const leaf = isLeaf(node);
    const exp = expanded.has(node.id);

    const baseProps = {
      style: { paddingLeft: level * indent },
      className: `rtv-item ${itemClassName ?? ""}`.trim(),
    } as const;

    const doToggle = () => toggle(node.id);
    const doSelect = () => handleSelect(node, path);

    const onClick = () => {
      if (!leaf && expandOnClick) doToggle();
      if (!selectLeavesOnly || leaf) doSelect();
    };

    const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
      if (e.key === "ArrowRight" && !leaf && !exp) {
        e.preventDefault();
        doToggle();
      }
      if (e.key === "ArrowLeft" && !leaf && exp) {
        e.preventDefault();
        doToggle();
      }
    };

    if (renderNode) {
      return (
        <li key={String(node.id)} role="treeitem">
          {renderNode({
            node,
            level,
            isExpanded: exp,
            isLeaf: leaf,
            toggle: doToggle,
            select: doSelect,
          })}
        </li>
      );
    }

    return (
      <li key={String(node.id)} role="treeitem" aria-expanded={!leaf ? exp : undefined}>
        <div
          tabIndex={0}
          role="button"
          onClick={onClick}
          onKeyDown={onKeyDown}
          {...baseProps}
        >
          {!leaf && (
            <span
              aria-hidden
              className="rtv-caret"
              style={{
                display: "inline-block",
                transform: exp ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 120ms",
              }}
            >
              ▶
            </span>
          )}
          <span className="rtv-label" style={{ marginLeft: 6 }}>
            {node.label}
          </span>
        </div>
        {!leaf && exp && (
          <ul role="group" className="rtv-ul">
            {node.children!.map((c) => render(c, level + 1, [...path, c.id]))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul role="tree" className={`rtv ${className ?? ""}`.trim()}>
      {data.map((n) => render(n, 0, [n.id]))}
    </ul>
  );
}
