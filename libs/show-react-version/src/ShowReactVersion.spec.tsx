import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShowReactVersion } from "./ShowReactVersion";

it("react version is displayed", () => {
  render(<ShowReactVersion />);
  expect(screen.queryByText("React: 18.2.0")).not.toBeNull();
});
