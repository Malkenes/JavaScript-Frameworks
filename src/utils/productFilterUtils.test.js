import { describe, it, expect } from "vitest";
import {
  filterOnSale,
  filterByTag,
  getRandomProduct,
  getProductById,
} from "./productFilterUtils";

const mockProducts = [
  { id: 1, title: "Product A", price: 20, discountedPrice: 10, tags: ["tagA"] },
  {
    id: 2,
    title: "Product B",
    price: 30,
    discountedPrice: 10,
    tags: ["tagA", "tagB"],
  },
  { id: 3, title: "Product C", price: 20, discountedPrice: 20, tags: ["tagB"] },
  { id: 4, title: "Product D", price: 50, discountedPrice: 30, tags: ["tagC"] },
  {
    id: 5,
    title: "Product E",
    price: 10,
    discountedPrice: 10,
    tags: ["tagA", "tagB", "tagC"],
  },
];

describe("product filters", () => {
  it("should filter products on sale", () => {
    const result = filterOnSale(mockProducts);
    expect(result).toEqual([
      {
        id: 1,
        title: "Product A",
        price: 20,
        discountedPrice: 10,
        tags: ["tagA"],
      },
      {
        id: 2,
        title: "Product B",
        price: 30,
        discountedPrice: 10,
        tags: ["tagA", "tagB"],
      },
      {
        id: 4,
        title: "Product D",
        price: 50,
        discountedPrice: 30,
        tags: ["tagC"],
      },
    ]);
  });

  it("should filter products by tag", () => {
    const result = filterByTag(mockProducts, "tagB");
    expect(result).toEqual([
      {
        id: 2,
        title: "Product B",
        price: 30,
        discountedPrice: 10,
        tags: ["tagA", "tagB"],
      },
      {
        id: 3,
        title: "Product C",
        price: 20,
        discountedPrice: 20,
        tags: ["tagB"],
      },
      {
        id: 5,
        title: "Product E",
        price: 10,
        discountedPrice: 10,
        tags: ["tagA", "tagB", "tagC"],
      },
    ]);
  });

  it("should filter products by tag but exclude a product", () => {
    const result = filterByTag(mockProducts, "tagB", {
      id: 2,
      title: "Product B",
      price: 30,
      discountedPrice: 10,
      tags: ["tagA", "tagB"],
    });
    expect(result).toEqual([
      {
        id: 3,
        title: "Product C",
        price: 20,
        discountedPrice: 20,
        tags: ["tagB"],
      },
      {
        id: 5,
        title: "Product E",
        price: 10,
        discountedPrice: 10,
        tags: ["tagA", "tagB", "tagC"],
      },
    ]);
  });

  it("should return a product", () => {
    const result = getRandomProduct(mockProducts);
    expect(result).toBeDefined();
    expect(mockProducts).toContainEqual(result);
  });

  it("should retun a product by its ID", () => {
    const result = getProductById(mockProducts, 3);
    expect(result).toEqual({
      id: 3,
      title: "Product C",
      price: 20,
      discountedPrice: 20,
      tags: ["tagB"],
    });
  });
});
