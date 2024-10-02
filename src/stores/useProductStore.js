import { create } from "zustand";
import { filterByTag, filterOnSale } from "../utils/productFilterUtils";

export const useProductStore = create((set) => ({

    products: [],
    filteredProducts: [],
    
    setProducts: (products) => set({products, filteredProducts: products}),

    setFilterTag: (tag) => set((state) => ({
        filteredProducts: filterByTag(state.products, tag),
    })),
    setOnSale: () => set((state) => ({
        filteredProducts: filterOnSale(state.filteredProducts),
    })),
    clearFilter: () => set((state) => ({
        filteredProducts: state.products,
    })),

}));