import React from 'react';
import ReactDOM from 'react-dom'
import  Form from './search'

it("search in from", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form></Form>, div)
})