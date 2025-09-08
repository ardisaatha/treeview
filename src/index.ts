import "./components/global.css";
import Mgr from "./features/Mgr";

// Default export (biar bisa `import TreeContentLayout from ...`)
export default Mgr;

// Named export (biar bisa `import { TreeContentLayout } from ...`)
export { Mgr };

// Kalau ada types juga di-export
export * from "./types";
