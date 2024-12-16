const page = () => {
  return (
    <div className="  flex  justify-center">
      <div className="  rounded-lg p-6 w-full ">
        {/* Orders Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
          <div className="mt-4 space-y-4">
            {/* Order Item */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Order #12345</h4>
                <p className="text-sm text-gray-500">Placed on: Oct 15, 2024</p>
              </div>
              <p className="text-[#5caf90]">View Details</p>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Order #12344</h4>
                <p className="text-sm text-gray-500">Placed on: Sep 20, 2024</p>
              </div>
              <p className="text-[#5caf90]">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
