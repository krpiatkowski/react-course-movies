import React from "react"
import ReactDOM from "react-dom"

import Stars from "./Stars"
import { mount } from 'enzyme';


it('can render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stars />, div);
})

it('has "max" stars', () => {
    let stars = mount(<Stars max={10}/>)
    expect(stars.text()).toEqual("☆☆☆☆☆☆☆☆☆☆")
})

it('has a "score"', () => {
    let stars = mount(<Stars score={5} max={10}/>)
    expect(stars.text()).toEqual("★★★★★☆☆☆☆☆")
})

it('can click on star', () => {
    let stars = mount(<Stars score={1} max={10}/>)    
    stars.childAt(0).childAt(3).simulate('click')
    expect(stars.text()).toEqual("★★★★☆☆☆☆☆☆")
})

it('can hover on star', () => {
    let stars = mount(<Stars score={1} max={10}/>)    
    stars.childAt(0).childAt(1).simulate('mouseOver')
    expect(stars.text()).toEqual("★★☆☆☆☆☆☆☆☆")
})

it('can click-hover on star', () => {
    let stars = mount(<Stars score={1} max={10}/>)    
    stars.childAt(0).childAt(3).simulate('click')
    stars.childAt(0).childAt(8).simulate('mouseOver')    
    stars.childAt(0).childAt(8).simulate('mouseOut')    
    expect(stars.text()).toEqual("★★★★☆☆☆☆☆☆")
})
