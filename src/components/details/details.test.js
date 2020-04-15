import React from "react";
import { shallow } from "enzyme";
import Details from "./Details";

describe("App component", () => {
  it("Loading details", () => {
    const wrapper = shallow(<Details />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Loading...");
  });

});
