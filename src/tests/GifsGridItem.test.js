
import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('GifsGridItem.tets.js', () => {
    let wrapper = shallow(<GifGridItem/>);

    const title = 'titleXD';
    const url = 'urlXD';

    beforeEach(() => {
        wrapper = shallow(<GifGridItem url={url} title={title}/>);
    });

    test('should show GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should get text(title) from paragraph', () => {
        const p = wrapper.find('p').text();
        expect(p).toBe(title);
    });

    test('should img get URL', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should className card animate__animated animate__headShake', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__headShake')).toBe(true)
    })
    
});