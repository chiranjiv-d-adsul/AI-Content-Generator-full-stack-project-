import React from "react";
import { Search } from "lucide-react";

function SearchSection({onSearchInput}:any) {
  return (
    <div className=" p-10 bg-gradient-to-br from-blue-400 via-purple-700 to-blue-600 flex  justify-center flex-col items-center gap-2 text-white">
      <h2 className="text-3xl font-bold">
        Browse All Templates as per your needs
      </h2>
      <p>
        With our wide range of templates, you can find the perfect template for
        your content
      </p>
      <div className="w-full">
        <div className=" flex gap-2 items-center p-2 border rounded-md bg-white ">
          <Search className="text-primary" />
          <input
          onChange={(event)=>onSearchInput(event.target.value)}
            className="bg-transparent outline-none w-full text-gray-500"
            type="text"
            placeholder="Search Templates"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
