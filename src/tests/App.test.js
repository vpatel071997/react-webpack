import React from "react";
import {
  cleanup,
  fireEvent,
  getByLabelText,
  render,
} from "@testing-library/react";
import { JSDOM } from "jsdom";

import App from "../App";

const { document } = new JSDOM().window;

global.document = document;

afterEach(cleanup);

describe("Checkbox Check/UnChecked test", () => {
  const document = render(<App />);

  it("[Initial condition] Check is root component Exists", () => {
    expect(document).not.toBe(undefined);
  });

  const { container } = render(<App />);
  it("[Initial condition] Check if checkboxes are present", () => {
    expect(container).not.toBe(undefined);
  });

  const checkbox = container.querySelectorAll("input[type='checkbox']");
  for (let i = 0; i < checkbox.length; i++) {
    const eachCheckbox = checkbox[i];
    it(`[Check condition] Checkbox ${eachCheckbox.id} state`, () => {
      expect(eachCheckbox.checked).toBe(false);
    });

    it("[Set condition] Trigger ${eachCheckbox.id} checkboxes", () => {
      fireEvent.click(eachCheckbox);
    });

    it(`[Check condition] Checkbox ${eachCheckbox.id} state`, () => {
      expect(eachCheckbox.checked).toBe(true);
    });
  }
});
