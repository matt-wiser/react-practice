import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from "../About";
import Nav from "../Nav";

afterEach(cleanup);

describe("About component", () => {
    // First test
    it("renders", () => {
        render(<About/>);
        
    });

    // Second test
    it("Matches snapshot DOM node stucture", () => {
        const {asFragment} = render(<About/>);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Nav component", () => {
    // First test
    it("renders", () => {
        render(<Nav/>);
        
    });

    // Second test
    it("Matches snapshot DOM node stucture", () => {
        const {asFragment} = render(<Nav/>);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Emoji is visible", () => {
    it("Inserts emoji into the h2 tag", () => {
        const { getByLabelText } = render(<Nav/>);
    
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe("Links are visible", () => {
    it("Inserts text into the link tags", () => {
        const { getByTestId } = render(<Nav/>);
    
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});