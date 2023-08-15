import React from "react";
import SingleCategory from "./SingleCategory";

const CategoryPage = ({ params }) => {
  const { category } = params;
  // console.log(category);
  return (
    <>
      <SingleCategory category={category} />
    </>
  );
};

export default CategoryPage;
