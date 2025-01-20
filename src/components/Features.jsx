const Features = () => {
    return (
      <div id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SmartBooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Support",
              description: "Dedicated bookkeeping team available on desktop or mobile",
              icon: "👨‍💼"
            },
            {
              title: "Real-Time Updates",
              description: "Stay on top of your finances with real-time transaction tracking",
              icon: "⚡"
            },
            {
              title: "Financial Reports",
              description: "Monthly financial statements and customized reports",
              icon: "📊"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


  export default Features;