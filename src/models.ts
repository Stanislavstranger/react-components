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
