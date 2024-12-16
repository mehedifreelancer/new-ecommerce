"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  // Function to go back to the previous page
  const goBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto h-[50vh] flex justify-center items-center">
      <h1 className="text-xl font-bold text-gray-700">
        Not Found
        {/* Go Back Button */}
        <button
          onClick={goBack}
          className="bg-teal-600 rounded text-white p-2 ml-4 hover:bg-teal-700"
        >
          Go Back
        </button>
        {/* Alternatively, you can use Link */}
        {/* <Link className="bg-teal-600 rounded text-white p-2 ml-4" href="/">Go Back</Link> */}
      </h1>
    </div>
  );
};

export default NotFound;
