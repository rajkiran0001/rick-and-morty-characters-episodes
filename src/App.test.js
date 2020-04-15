import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import  Search  from './components/search/Search'
import  Details  from './components/details/Details'

describe('App component', () => {
  it('test heading', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Home');
  });

  it("should render Search and Details", () => {
    const wrapper = shallow(<App />)
    const search = wrapper.find(Search)
    const details = wrapper.find(Details)
    expect(search.exists()).toBe(true)
    expect(details.exists()).toBe(true)
  })
});