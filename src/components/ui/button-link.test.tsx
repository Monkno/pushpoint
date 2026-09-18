import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { fireEvent, render, screen } from "@testing-library/react";

import { ButtonLink } from "./button-link";

describe("ButtonLink", () => {
  it("prevents navigation and leaves the tab order when disabled", () => {
    render(
      <ButtonLink disabled href="/contacto">
        Contactar
      </ButtonLink>,
    );

    const link = screen.getByRole("link", { name: "Contactar" });
    const clickWasHandled = fireEvent.click(link);

    assert.equal(clickWasHandled, false);
    assert.equal(link.getAttribute("aria-disabled"), "true");
    assert.equal(link.getAttribute("tabindex"), "-1");
  });
});
