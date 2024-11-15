import React from "react";
import Image from "next/image";
const TableSearch = () => {
  return (
    <div>
      <Image src={"/search.png"} alt="" width={14} height={14}></Image>
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
