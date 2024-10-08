import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Price from "./price";


describe("Price", () => {
    it("should display two price if product is on sale", () => {
        render(
            <Price
            price={100}
            discountedPrice={10}
            />
        );
        expect(screen.getByText("10.00 kr"));
        expect(screen.getByText("100.00 kr"));
    });

    it("should display only one price if discountedPrice is equal to price", () => {
        render(
            <Price
            price={100}
            discountedPrice={100}
            />
        );
        expect(screen.getByText("100.00 kr"));
    });

    it("should not exceed two decimals", () => {
        render(
            <Price
            price={100.123456}
            discountedPrice={100.98765}
            />
        );
        expect(screen.getByText("100.12 kr"));
        expect(screen.getByText("100.99 kr"));
    });

    it ("should display percentage discount", () => {
        render(
            <Price
            price={100}
            discountedPrice={10}
            />
        );
        expect(screen.getByText("90%"));
        screen.debug();
    });
});