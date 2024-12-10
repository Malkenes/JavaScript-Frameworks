import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "./contactForm";

describe("ContactForm", () => {
  it("should render the form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should update input value on change", () => {
    render(<ContactForm />);
    const fullNameInput = screen.getByLabelText("Full Name");
    const subjectInput = screen.getByLabelText("Subject");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");

    fireEvent.change(fullNameInput, { target: { value: "Ola Normann" } });
    fireEvent.change(subjectInput, { target: { value: "No delivery" } });
    fireEvent.change(emailInput, {
      target: { value: "OlaNormann@stud.noroff.no" },
    });
    fireEvent.change(messageInput, {
      target: { value: "I was promised my products by now, where is it?" },
    });

    expect(fullNameInput.value).toBe("Ola Normann");
    expect(subjectInput.value).toBe("No delivery");
    expect(emailInput.value).toBe("OlaNormann@stud.noroff.no");
    expect(messageInput.value).toBe(
      "I was promised my products by now, where is it?",
    );
  });

  it("should display matching error when inputs are invalid", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(
        screen.getByText("Name must be at least 3 characters"),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Subject must be at least 3 characters"),
      ).toBeInTheDocument();
      expect(
        screen.getByText("emailAddress is a required field"),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Message must be at least 3 characters"),
      ).toBeInTheDocument();
    });

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, {
      target: { value: "OlaNormannatstud.noroff.no" },
    });

    await waitFor(() => {
      expect(screen.getByText("Invalid email format")).toBeInTheDocument();
    });
  });

  it("should submit the form with valid data", async () => {
    const consoleSpy = vi.spyOn(console, "log");
    render(<ContactForm />);

    const fullNameInput = screen.getByLabelText("Full Name");
    const subjectInput = screen.getByLabelText("Subject");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");

    fireEvent.change(fullNameInput, { target: { value: "Ola Normann" } });
    fireEvent.change(subjectInput, { target: { value: "No delivery" } });
    fireEvent.change(emailInput, {
      target: { value: "OlaNormann@stud.noroff.no" },
    });
    fireEvent.change(messageInput, {
      target: { value: "I was promised my products by now, where is it?" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith({
        fullName: "Ola Normann",
        subject: "No delivery",
        emailAddress: "OlaNormann@stud.noroff.no",
        body: "I was promised my products by now, where is it?",
      });
    });

    consoleSpy.mockRestore();
  });
});
