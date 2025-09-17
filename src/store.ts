import { create } from "zustand";

 interface GameQuery {
  searchText?: any;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

interface gameStore {
    gameQuery: GameQuery;
    setSearchText: (text: string) => void
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<gameStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}}))
}))

export default useGameStore;