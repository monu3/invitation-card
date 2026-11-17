import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AudioPlayer from "@/components/AudioPlayer";

describe("AudioPlayer", () => {
  const originalPlay = HTMLMediaElement.prototype.play;
  const originalPause = HTMLMediaElement.prototype.pause;
  let paused = true;

  beforeEach(() => {
    paused = true;

    Object.defineProperty(HTMLMediaElement.prototype, "paused", {
      configurable: true,
      get: () => paused,
    });

    HTMLMediaElement.prototype.play = vi.fn(function (this: HTMLMediaElement) {
      paused = false;
      this.dispatchEvent(new Event("play"));
      return Promise.resolve();
    }) as unknown as HTMLMediaElement["play"];

    HTMLMediaElement.prototype.pause = vi.fn(function (this: HTMLMediaElement) {
      paused = true;
      this.dispatchEvent(new Event("pause"));
    }) as unknown as HTMLMediaElement["pause"];
  });

  afterEach(() => {
    HTMLMediaElement.prototype.play = originalPlay;
    HTMLMediaElement.prototype.pause = originalPause;
    vi.restoreAllMocks();
  });

  it("starts the music automatically when the page opens", async () => {
    await act(async () => {
      render(<AudioPlayer />);
    });

    await waitFor(() =>
      expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true")
    );
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("pauses and resumes when the button is tapped", async () => {
    await act(async () => {
      render(<AudioPlayer />);
    });

    const button = screen.getByRole("button");
    await waitFor(() => expect(button).toHaveAttribute("aria-pressed", "true"));

    await act(async () => {
      fireEvent.click(button);
    });
    expect(button).toHaveAttribute("aria-pressed", "false");

    await act(async () => {
      fireEvent.click(button);
    });
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
