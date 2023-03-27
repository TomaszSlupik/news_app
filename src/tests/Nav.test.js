import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav/Nav";

describe("Nav Components", () => {
  it("Should render Nav component", () => {
    render(
        <Nav />
    );
    
    screen.debug()
  });
});


