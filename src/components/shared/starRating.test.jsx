import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import StarRating from "./starRating";

describe("StarRating", () => {
  it("should render five SVG elements", () => {
    render(<StarRating rating={3} />);

    expect(screen.getAllByTestId("star-icon").length).toBe(5);
  });

  it("should alter fill on SVG elements according to rating", () => {
    const { rerender } = render(<StarRating rating={0} />);

    let stars = screen.getAllByTestId("star-icon");
    stars.forEach((star) => {
      expect(star).toHaveAttribute("fill", "gray");
    });

    rerender(<StarRating rating={3} />);

    stars = screen.getAllByTestId("star-icon");
    stars.forEach((star, index) => {
      const expectedFill = 3 > index ? "#FACC15" : "gray";
      expect(star).toHaveAttribute("fill", expectedFill);
    });

    rerender(<StarRating rating={5} />);

    stars = screen.getAllByTestId("star-icon");
    stars.forEach((star) => {
      expect(star).toHaveAttribute("fill", "#FACC15");
    });
  });
});
