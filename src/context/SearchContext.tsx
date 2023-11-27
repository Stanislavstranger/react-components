import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useState, useContext, ReactNode } from 'react';
import { Animals } from '../models';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  animals: Animals[];
  setAnimals: Dispatch<SetStateAction<Animals[]>>;
  selectedAnimal: Animals;
  setSelectedAnimal: Dispatch<SetStateAction<Animals>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const [animals, setAnimals] = useState<Animals[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animals>(Object);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        animals,
        setAnimals,
        selectedAnimal,
        setSelectedAnimal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
