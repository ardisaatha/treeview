import DataTable from "../../components/datatable";

type Product = {
  id: number;
  name: string;
  color: string;
  category: string;
  price: number;
};

const sampleData: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: 2999,
  },
  { id: 2, name: "iPhone 15", color: "Black", category: "Phone", price: 1299 },
  {
    id: 3,
    name: "iPad Pro",
    color: "Space Gray",
    category: "Tablet",
    price: 899,
  },
];

const PayorSection = () => {
  const handleSelectionChange = (rows: Product[]) => {
    console.log("✅ Selected rows:", rows);
    // 👉 You can store this in state, send to API, etc.
  };

  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-4">
      <DataTable
        title="List Payor"
        columns={[
          { key: "name", header: "Product name" },
          { key: "color", header: "Color" },
          { key: "category", header: "Category" },
          { key: "price", header: "Price", render: (val) => `$${val}` },
        ]}
        data={sampleData}
        onSelectionChange={handleSelectionChange}
      />
      <DataTable
        title="List Payor"
        columns={[
          { key: "name", header: "Product name" },
          { key: "color", header: "Color" },
          { key: "category", header: "Category" },
          { key: "price", header: "Price", render: (val) => `$${val}` },
        ]}
        data={sampleData}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default PayorSection;
