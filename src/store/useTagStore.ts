import { create } from "zustand";

type TagStore = {
    selectedTags: string[];
    toggleTag: (tag: string) => void;
    clearFilters: () => void;
};

export const useTagStore = create<TagStore>((set) => ({
    selectedTags: [],
    toggleTag: (tag) => 
        set((state) => {
            if(state.selectedTags.includes(tag)) {
                return {
                    selectedTags: state.selectedTags.filter((t) => t !== tag),
                };
            } else {
                return {
                    selectedTags: [...state.selectedTags, tag],
                };
            }
        }),
        clearFilters: () => set({ selectedTags: []}),
}));
