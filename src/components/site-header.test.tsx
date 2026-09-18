import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { SiteHeader } from "./site-header";

function renderHeader() {
  try {
    return render(<SiteHeader />);
  } catch (error) {
    if (error instanceof AggregateError && error.errors.length > 0) {
      throw error.errors[0];
    }
    throw error;
  }
}

describe("SiteHeader", () => {
  it("exposes every primary destination and the project CTA", () => {
    renderHeader();

    assert.equal(
      screen.getByRole("link", { name: "Inicio" }).getAttribute("href"),
      "/",
    );
    assert.equal(
      screen
        .getByRole("link", { name: "Servicios: en preparación" })
        .getAttribute("href"),
      "/servicios",
    );
    assert.equal(
      screen
        .getByRole("link", { name: "Cómo trabajamos: en preparación" })
        .getAttribute("href"),
      "/como-trabajamos",
    );
    assert.equal(
      screen
        .getByRole("link", { name: "Trabajo: en preparación" })
        .getAttribute("href"),
      "/trabajo",
    );
    assert.equal(
      screen.getByRole("link", { name: "Contactar" }).getAttribute("href"),
      "/contacto",
    );
  });

  it("moves focus into the mobile menu and returns it on Escape", async () => {
    renderHeader();

    const toggle = screen.getByRole("button", { name: "Abrir menú principal" });
    fireEvent.click(toggle);

    const firstLink = screen.getByRole("link", { name: "Inicio" });
    await waitFor(() => assert.equal(document.activeElement, firstLink));
    assert.equal(toggle.getAttribute("aria-expanded"), "true");

    fireEvent.keyDown(window, { key: "Escape" });

    assert.equal(document.activeElement, toggle);
    assert.equal(toggle.getAttribute("aria-expanded"), "false");
    assert.equal(toggle.getAttribute("aria-label"), "Abrir menú principal");
  });

  it("closes the mobile menu when its CTA is activated", async () => {
    renderHeader();

    const toggle = screen.getByRole("button", { name: "Abrir menú principal" });
    fireEvent.click(toggle);
    await waitFor(() => assert.equal(toggle.getAttribute("aria-expanded"), "true"));

    const contactLink = screen.getByRole("link", { name: "Contactar" });
    contactLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(contactLink);

    assert.equal(toggle.getAttribute("aria-expanded"), "false");
  });
});
