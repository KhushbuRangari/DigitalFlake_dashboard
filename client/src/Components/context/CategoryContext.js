import { createContext, useContext } from "react";
import useCategory from "../hooks/useCategory";

const CategoryContext = createContext();

const useCatContext = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const category = useCategory();

  return <CategoryContext.Provider value={category}>{children}</CategoryContext.Provider>;
};

export { useCatContext, CategoryProvider };
