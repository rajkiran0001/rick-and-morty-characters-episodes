import React from "react";
import { shallow, mount } from "enzyme";
import Details from "./Details";
import Spinner from '../../Spinner';

describe("Details Page Snapshot ", () => {
  let mountWrapper;
  beforeEach(() => {
      mountWrapper = mount(<Details />);
  })

  afterEach(() => {
      mountWrapper.unmount();
  })

  it("renders Correctly", () => {
      expect(mountWrapper).toMatchSnapshot();
  })
});

describe("Details Page rendering of element", () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<Details />);
  })

  afterEach(() => {
      wrapper.unmount();
  })
  
  it("Renders one Spinner React Compount", ()=> {
      expect(wrapper.find(Spinner).render())
  })
});