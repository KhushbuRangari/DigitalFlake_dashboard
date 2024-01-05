import { createContext, useContext } from "react";
import useCategory from "../hooks/useCategory";

const CategoryContext = createContext();

const useCatContext = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const cat = useCategory();

  return <CategoryContext.Provider value={cat}>{children}</CategoryContext.Provider>;
};

export { useCatContext, CategoryProvider };
