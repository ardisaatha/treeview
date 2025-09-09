import React, { useState, useMemo, useEffect } from "react";

type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode; // custom cell rendering
};

type DataTableProps<T> = {
  title?: string;
  columns: Column<T>[];
  data: T[];
  rowsPerPageOptions?: number[];
  onSelectionChange?: (selected: T[]) => void; // callback for parent
};

function DataTable<T extends { id: string | number }>({
  title,
  columns,
  data,
  rowsPerPageOptions = [5, 10, 20],
  onSelectionChange,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string | number>>(new Set());

  // 🔹 Notify parent when selection changes
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = data.filter((row) => selected.has(row.id));
      onSelectionChange(selectedRows);
    }
  }, [selected, data, onSelectionChange]);

  // 🔹 Filter data by global search
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.key] ?? "")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [data, search, columns]);

  // 🔹 Paginate data
  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  // 🔹 Checkbox handling
  const toggleRow = (id: string | number) => {
    setSelected((prev) => {
      const newSelected = new Set(prev);
      newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
      return newSelected;
    });
  };

  const toggleAll = () => {
    if (paginatedData.every((row) => selected.has(row.id))) {
      setSelected((prev) => {
        const newSelected = new Set(prev);
        paginatedData.forEach((row) => newSelected.delete(row.id));
        return newSelected;
      });
    } else {
      setSelected((prev) => {
        const newSelected = new Set(prev);
        paginatedData.forEach((row) => newSelected.add(row.id));
        return newSelected;
      });
    }
  };

  return (
    <div className="tw-shadow-md tw-p-4 sm:tw-rounded-lg tw-space-y-4">
      {title && <h2 className="tw-text-lg tw-font-semibold">{title}</h2>}

      {/* Toolbar */}
      <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-gap-4">
        {/* Global Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="tw-w-full sm:tw-w-64 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500"
        />

        {/* Rows per page */}
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setPage(1);
          }}
          className="tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500"
        >
          {rowsPerPageOptions.map((opt) => (
            <option key={opt} value={opt}>
              Show {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500">
          <thead className="tw-bg-gray-50 tw-text-xs tw-uppercase tw-text-gray-700">
            <tr>
              <th className="tw-p-3">
                <input
                  type="checkbox"
                  checked={
                    paginatedData.length > 0 &&
                    paginatedData.every((row) => selected.has(row.id))
                  }
                  onChange={toggleAll}
                  className="tw-w-4 tw-h-4 tw-rounded-sm"
                />
              </th>
              {columns.map((col) => (
                <th key={String(col.key)} className="tw-px-4 tw-py-2">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="tw-text-center tw-py-4"
                >
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className="tw-bg-white tw-border-b hover:tw-bg-gray-50"
                >
                  <td className="tw-p-3">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="tw-w-4 tw-h-4 tw-rounded-sm"
                    />
                  </td>
                  {columns.map((col) => (
                    <td key={String(col.key)} className="tw-px-4 tw-py-2">
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="tw-flex tw-justify-between tw-items-center tw-pt-2">
        <span className="tw-text-sm">
          Page {page} of {Math.ceil(filteredData.length / rowsPerPage) || 1}
        </span>
        <div className="tw-space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="tw-px-3 tw-py-1 tw-text-sm tw-border tw-rounded-lg disabled:tw-opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setPage((p) =>
                Math.min(Math.ceil(filteredData.length / rowsPerPage), p + 1)
              )
            }
            disabled={page === Math.ceil(filteredData.length / rowsPerPage)}
            className="tw-px-3 tw-py-1 tw-text-sm tw-border tw-rounded-lg disabled:tw-opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
