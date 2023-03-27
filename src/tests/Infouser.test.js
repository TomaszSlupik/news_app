import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Infouser from "../components/Infouser/Infouser";

describe("Infouser Components", () => {
  it("Should render infouser component", () => {
    render(
      <IntlProvider locale="en">
        <Infouser />
      </IntlProvider>
    );
    screen.debug()
  });
});