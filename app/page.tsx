export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold text-blue-400">
          WDD 430 Project
        </h1>

        <nav className="mt-8 space-y-4">
          <p className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </p>

          <p className="hover:text-blue-400 cursor-pointer">
            Invoices
          </p>

          <p className="hover:text-blue-400 cursor-pointer">
            Customers
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h2>

        <p className="mt-4 text-gray-600">
          Welcome to the WDD 430 group project dashboard.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600">
              Revenue
            </h3>
            <p className="text-2xl mt-2">$12,000</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600">
              Customers
            </h3>
            <p className="text-2xl mt-2">250</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600">
              Invoices
            </h3>
            <p className="text-2xl mt-2">48</p>
          </div>

        </div>
      </section>

    </main>
  );
}