/* import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";
import { Provider } from 'react-redux'

const ReduxProvider = ({ children, reduxStore }) => (

    test("renders Navbar component", () => {
        render(<Navbar />);
      
        // Example assertions
        const logoElement = screen.getByAltText("Tanta innovative");
        expect(logoElement).toBeInTheDocument();
      
        const companyButton = screen.getByRole("button", { name: "Company" });
        expect(companyButton).toBeInTheDocument();
      
        const servicesButton = screen.getByRole("button", { name: "Services" });
        expect(servicesButton).toBeInTheDocument();
      })

  <Provider store={reduxStore}>{children}</Provider>
) */

import React from "react";
import {render} from "../../jest.setup";
import Navbar from "./navbar";

it("renders Navbar unchanged", () => {
    const {container} = render(<Navbar/>);
    expect(container).toMatchSnapshot();
});
