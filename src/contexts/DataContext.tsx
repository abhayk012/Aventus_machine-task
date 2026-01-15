import { createContext, useContext, type ReactNode } from "react";
import { products, userProfile } from "../data/mockData";
import type { Product, UserProfile } from "../config/types";

interface DataContextValue {
  products: Product[];
  userProfile: UserProfile;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
  const value: DataContextValue = {
    products,
    userProfile,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within DataProvider");
  }
  return context;
}
