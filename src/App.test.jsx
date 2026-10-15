import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("Admin App", () => {
  it("renders the VOQYRA admin design-system foundation", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Commerce operations",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Today's operations",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Operational queues",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "View storefront",
      }),
    ).toBeInTheDocument();
  });
});
