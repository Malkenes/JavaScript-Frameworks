import { describe, it, expect } from "vitest";
import { useProductStore } from "./useProductStore";

describe("product store", () => {
  it("should add a product", () => {
    const { setProducts } = useProductStore.getState();
    setProducts([{ id: 1, title: "Product A" }]);

    const { products } = useProductStore.getState();
    expect(products).toHaveLength(1);
    expect(products[0]).toEqual({ id: 1, title: "Product A" });
  });

  it("should add multiple products", () => {
    const { setProducts } = useProductStore.getState();
    setProducts([
      { id: 1, title: "Product A" },
      { id: 2, title: "Product B" },
    ]);

    const { products } = useProductStore.getState();
    expect(products).toHaveLength(2);
    expect(products).toEqual([
      { id: 1, title: "Product A" },
      { id: 2, title: "Product B" },
    ]);
  });

  it("should set filtered products based on tag", () => {
    const { setProducts, setFilterTag } = useProductStore.getState();
    setProducts([
      { id: 1, title: "Product A", tags: ["tagA"] },
      { id: 2, title: "Product B", tags: ["tagB"] },
    ]);
    setFilterTag("tagA");

    const { products, filteredProducts } = useProductStore.getState();
    expect(products).toHaveLength(2);
    expect(filteredProducts).toHaveLength(1);
    expect(filteredProducts).toEqual([
      { id: 1, title: "Product A", tags: ["tagA"] },
    ]);
  });

  it("should set filtered products based on sale", () => {
    const { setProducts, setOnSale } = useProductStore.getState();
    setProducts([
      {
        id: 1,
        title: "Product A",
        tags: ["tagA"],
        price: 10,
        discountedPrice: 10,
      },
      {
        id: 2,
        title: "Product B",
        tags: ["tagB"],
        price: 10,
        discountedPrice: 5,
      },
    ]);
    setOnSale();

    const { products, filteredProducts } = useProductStore.getState();
    expect(products).toHaveLength(2);
    expect(filteredProducts).toHaveLength(1);
    expect(filteredProducts).toEqual([
      {
        id: 2,
        title: "Product B",
        tags: ["tagB"],
        price: 10,
        discountedPrice: 5,
      },
    ]);
  });

  it("should set filtered products based on query string", () => {
    const { setProducts, setSearchQuery } = useProductStore.getState();

    setProducts([
      { id: 1, title: "Product A" },
      { id: 2, title: "Product B" },
    ]);
    setSearchQuery("B");

    const { filteredProducts } = useProductStore.getState();
    expect(filteredProducts).toHaveLength(1);
    expect(filteredProducts).toEqual([{ id: 2, title: "Product B" }]);
  });

  it("should clear filtered products", () => {
    const { setProducts, setSearchQuery, clearFilter } =
      useProductStore.getState();

    setProducts([
      { id: 1, title: "Product A" },
      { id: 2, title: "Product B" },
    ]);
    setSearchQuery("B");
    clearFilter();

    const { filteredProducts } = useProductStore.getState();
    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toEqual([
      { id: 1, title: "Product A" },
      { id: 2, title: "Product B" },
    ]);
  });
});
