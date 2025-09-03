import TreeContentLayout from "./components/TreeContentLayout";
import "./components/global.css";

// Default export (biar bisa `import TreeContentLayout from ...`)
export default TreeContentLayout;

// Named export (biar bisa `import { TreeContentLayout } from ...`)
export { TreeContentLayout };

// Kalau ada types juga di-export
export * from "./types";
