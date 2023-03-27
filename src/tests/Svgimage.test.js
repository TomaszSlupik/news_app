import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Svgimage from "../components/Svgimage/Svgimage";
import { IntlProvider } from "react-intl";

test ('render text', () => {
    render(
        <IntlProvider locale="en">
            <Svgimage />
        </IntlProvider>
    )
    const myText  = screen.getByText(/Aplikacja wyświetla aktualne Newsy pobierane z publicznego API./i)
    expect(myText).toBeInTheDocument()
})