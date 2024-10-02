import { create } from "zustand";
import { filterByTag, filterOnSale } from "../utils/productFilterUtils";

export const useProductStore = create((set) => ({

    products: [],
    filteredProducts: [],
    searchQuery: "",
    
    setProducts: (products) => set({products, filteredProducts: products}),

    setFilterTag: (tag) => set((state) => ({
        filteredProducts: filterByTag(state.products, tag),
    })),
    setOnSale: () => set((state) => ({
        filteredProducts: filterOnSale(state.filteredProducts),
    })),
    setSearchQuery: (query) => set((state) => ({
        searchQuery: query,
        filteredProducts: state.products.filter((product) => 
            product.title.toLowerCase().includes(query.toLowerCase())
        ),
    })),

    clearFilter: () => set((state) => ({
        searchQuery: "",
        filteredProducts: state.products,
    })),

}));