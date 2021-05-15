import React from 'react';
import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';

describe('AddCategory.test.js', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('should show AddCategory', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test('should change input text', () => {
    //     const event = {target: {value: 'va'}};
    //     const input = wrapper.find('input').simulate('change', event);
        
    //     // expect(input.prop('value')).toBe('va');
    // });

    test('should dont set date onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}} )

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories & clean inputText', () => {
        const event = {target: {value: 'demo'}};
        wrapper.find('input').simulate('change', event);
        wrapper.find('form').simulate('submit', {preventDefault(){}} )

        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})