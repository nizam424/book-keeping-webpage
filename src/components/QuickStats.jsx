import React from "react";

const QuickStats = () => {
  const stats = [
    { icon: "💰", bgColor: "bg-blue-100", title: "Total Revenue", value: "$24,890" },
    { icon: "📄", bgColor: "bg-green-100", title: "Pending Invoices", value: "12" },
    { icon: "👥", bgColor: "bg-purple-100", title: "Active Clients", value: "48" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className={`rounded-full ${stat.bgColor} p-3 mr-4`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div>
              <p className="text-gray-600">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
