import React, { useState } from 'react';
import TreeContentLayout, { TreeNode } from './src'; // Adjust the import path
import './src/components/global.css';

const App = () => {
  const [modalNode, setModalNode] = useState<TreeNode | null>(null);

  const fetchLeftData = async (): Promise<TreeNode[]> => {
    // Replace with your actual data fetching logic
    return [
      { id: '1', name: 'Root 1', children: [{ id: '1.1', name: 'Leaf 1.1' }] },
      { id: '2', name: 'Root 2', children: [{ id: '2.1', name: 'Leaf 2.1' }] },
    ];
  };

  const fetchRightData = async (parentId: string): Promise<TreeNode[]> => {
    // Replace with your actual data fetching logic
    console.log('Fetching right data for parent:', parentId);
    return [
      { id: '1.1.1', name: 'Right Leaf 1' },
      { id: '1.1.2', name: 'Right Leaf 2' },
    ];
  };

  const handleRightLeafClick = (node: TreeNode) => {
    console.log('Right leaf clicked:', node);
    setModalNode(node);
  };

  const handleModalConfirm = () => {
    if (modalNode) {
      console.log('Modal confirmed for:', modalNode.name);
      // Perform action
    }
    setModalNode(null);
  };

  const handleModalCancel = () => {
    console.log('Modal canceled');
    setModalNode(null);
  };

  return (
    <div>
      <TreeContentLayout
        fetchLeftData={fetchLeftData}
        fetchRightData={fetchRightData}
        onRightLeafClick={handleRightLeafClick}
      />

      {modalNode && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">
              Action for {modalNode.name}
            </h3>
            <p className="mb-4 text-gray-600">
              This modal is now handled by the parent project.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                onClick={handleModalCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleModalConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;