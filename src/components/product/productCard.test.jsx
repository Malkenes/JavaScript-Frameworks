import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "./productCard";

describe("ProductCard", () => {
  it("should display information correctly", () => {
    const mockData = {
      title: "Test Product",
      rating: 3.4,
      price: 100,
      discountedPrice: 10,
      image: {
        url: "https://this.mockImage.isfake/3",
        alt: "this is text for an image",
      },
    };
    render(<ProductCard data={mockData} />);
    expect(screen.getByText("10.00 kr"));
    expect(screen.getByText("100.00 kr"));
    expect(screen.getByText("Test Product"));
    expect(screen.getAllByTestId("star-icon").length).toBe(5);
    expect(
      screen.getByRole("img", {
        url: "https://this.mockImage.isfake/3",
        alt: "this is text for an image",
      }),
    );
  });
});
