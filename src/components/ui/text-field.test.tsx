import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { render, screen } from "@testing-library/react";

import { TextField } from "./text-field";

describe("TextField", () => {
  it("associates its label, hint and error with the control", () => {
    render(
      <TextField
        error="Ingresá un email válido"
        hint="Usaremos este email para responder"
        id="email"
        label="Email"
        name="email"
      />,
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    assert.equal(input.getAttribute("aria-invalid"), "true");
    assert.equal(input.getAttribute("aria-describedby"), "email-hint email-error");
    assert.equal(screen.getByRole("alert").textContent, "Ingresá un email válido");
  });
});
