import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("App component", () => {
  it("Loading the character", () => {
    const wrapper = shallow(<Search />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Loading...");
  });

  it("map function", () => {
    const wrapper = shallow(<Search />);
    wrapper.find(".name").forEach((node) => {
      expect(node.hasClass("name")).to.equal(true);
    });
  });
});
