// styles.ts
export const styles = {
  // Modal
  container: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "0.75rem",
    boxShadow:
      "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    padding: "1rem",
    width: "33.3333%",
  },
  title: {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2 rgba(0, 0, 0, 0.05)',
    padding: '1.5rem',
    width: '24rem',
  },
  modalHeader: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  modalText: {
    color: '#4b5563',
    marginBottom: '1rem',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  },
  buttonCancel: {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#e5e7eb',
    cursor: 'pointer',
  },
  buttonCancelHover: {
    backgroundColor: '#d1d5db',
  },
  buttonConfirm: {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonConfirmHover: {
    backgroundColor: '#1d4ed8',
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },

  // Tree
  treeUl: {
    listStyleType: 'none',
    paddingLeft: '0.5rem',
    margin: 0,
  },
  treeLi: {
    paddingLeft: '0.5rem',
    marginBottom: '0.25rem',
  },
  treeNode: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.25rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
  treeNodeHover: {
    backgroundColor: '#f3f4f6',
  },
};
