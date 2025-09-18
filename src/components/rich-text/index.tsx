import React, { useState, useRef } from "react";
import Tooltip from "../tooltip";


interface RichTextWithContextMenuProps {
  initialText?: string;
  onChange?: (text: string) => void;
}

const RichTextWithContextMenu: React.FC<RichTextWithContextMenuProps> = ({
  initialText = "Masih bug ges",
  onChange,
}) => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const editorRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const handleInput = () => {
    if (editorRef.current && onChange) {
      onChange(editorRef.current.innerText);
    }
  };

  const handleCopy = async () => {
    if (editorRef.current) {
      await navigator.clipboard.writeText(editorRef.current.innerText);
    }
    setMenu(null);
  };

  const handlePaste = async () => {
    if (!editorRef.current) return;
    const clip = await navigator.clipboard.readText();
    document.execCommand("insertText", false, clip);
    onChange?.(editorRef.current.innerText); // 🔑 send value to parent
    setMenu(null);
  };

  const handleEdit = () => {
    if (!editorRef.current) return;
    const replacement = prompt("Edit text:", editorRef.current.innerText);
    if (replacement !== null) {
      editorRef.current.innerText = replacement;
      onChange?.(replacement); // 🔑 send value to parent
    }
    setMenu(null);
  };

  return (
    <div className="tw-relative tw-w-full">
      {/* Editable div */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="tw-p-4 tw-border tw-rounded-md tw-bg-white tw-shadow-sm tw-min-h-[150px] tw-cursor-text tw-whitespace-pre-wrap focus:tw-outline-none"
        onContextMenu={handleContextMenu}
        onInput={handleInput}
      >
        {initialText}
      </div>

      {/* Context Menu */}
      <Tooltip
        open={!!menu}
        x={menu?.x}
        y={menu?.y}
        placement="bottom"
        onClose={() => setMenu(null)}
      >
        <button
          className="tw-block tw-w-full tw-text-left tw-px-3 tw-py-1 hover:tw-bg-gray-100"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className="tw-block tw-w-full tw-text-left tw-px-3 tw-py-1 hover:tw-bg-gray-100"
          onClick={handlePaste}
        >
          Paste
        </button>
        <button
          className="tw-block tw-w-full tw-text-left tw-px-3 tw-py-1 hover:tw-bg-gray-100"
          onClick={handleEdit}
        >
          Edit
        </button>
      </Tooltip>
    </div>
  );
};

export default RichTextWithContextMenu;
