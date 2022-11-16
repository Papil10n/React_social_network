import React from 'react';
import SocialNetworkApp from "./App";
import ReactDOM from "react-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});