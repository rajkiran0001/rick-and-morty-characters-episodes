import React from "react";
import { shallow, mount } from "enzyme";
import Search from "./Search";
import Spinner from '../../Spinner';

describe("Search Page Snapshot ", () => {
  let mountWrapper;
  beforeEach(() => {
      mountWrapper = mount(<Search />);
  })

  afterEach(() => {
      mountWrapper.unmount();
  })

  it("renders Correctly", () => {
      expect(mountWrapper).toMatchSnapshot();
  })
  
});

describe("Search Page rendering of element", () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<Search />);
  })

  afterEach(() => {
      wrapper.unmount();
  })
  
  it("Renders Spinner React Compount", ()=> {
      expect(wrapper.find(Spinner).render())
  })

  it("loop though the map function", () => {
    const wrapper = shallow(<Search />);
    wrapper.find(".name").forEach((node) => {
      expect(node.hasClass("name")).to.equal(true);
    });
  });

});
