import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <Card
          title="Total Balance"
          amount="₹0"
          bgColor="bg-blue-500"
        />

        <Card
          title="Income"
          amount="₹0"
          bgColor="bg-green-500"
        />

        <Card
          title="Expenses"
          amount="₹0"
          bgColor="bg-red-500"
        />

        <Card
          title="Savings"
          amount="₹0"
          bgColor="bg-purple-500"
        />

      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Recent Transactions
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-2">
            <span>Food</span>
            <span className="text-red-500">- ₹500</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Shopping</span>
            <span className="text-red-500">- ₹1200</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Salary</span>
            <span className="text-green-600">+ ₹25,000</span>
          </div>

          <div className="flex justify-between">
            <span>Electricity Bill</span>
            <span className="text-red-500">- ₹1500</span>
          </div>

        </div>

      </div>

      {/* Expense Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Expense Overview
        </h2>

        <div className="h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">

          <p className="text-gray-500 text-lg">
            Chart Coming Soon
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;