export interface SearchPageState {
  searchTerm: string;
  animals: Animals[];
  loading: boolean;
  error: Error | null;
  showError: boolean;
  searched: boolean;
}

export interface Animals {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
}

export interface Data {
  page: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    firstPage: boolean;
    lastPage: boolean;
  };
  animals: Animals[];
  sort: object;
}
