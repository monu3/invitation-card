import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";

// jsdom has no canvas 2d context / IntersectionObserver; the page must degrade
// gracefully instead of throwing.
describe("Index page", () => {
  it("renders the invitation and a large scroll button without crashing", async () => {
    await act(async () => {
      render(<Index />);
    });

    expect(screen.getByRole("heading", { name: "Anant" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Gauri" })).toBeInTheDocument();

    const scrollButton = screen.getByRole("button", {
      name: /scroll down/i,
    });
    expect(scrollButton).toBeInTheDocument();
  });

  it("scrolls to the schedule section when the scroll button is used", async () => {
    const scrollIntoView = vi.fn();
    const schedule = document.createElement("section");
    schedule.id = "schedule";
    schedule.scrollIntoView = scrollIntoView;
    document.body.appendChild(schedule);

    await act(async () => {
      render(<Index />);
    });
    screen.getByRole("button", { name: /scroll down/i }).click();

    expect(scrollIntoView).toHaveBeenCalledTimes(1);

    schedule.remove();
  });
});
