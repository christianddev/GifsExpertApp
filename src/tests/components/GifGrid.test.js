import React from 'react';
import { shallow } from "enzyme"
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('GifGrid.js', () => {
    const category = 'dragon';
    useFetchGifs.mockReturnValue({
        data: [], 
        loading: true
    });
    let wrapper = shallow(<GifGrid category={category}/>);
    
    beforeEach(() => {
        useFetchGifs.mockReturnValue({
            data: [], 
            loading: true
        });
        wrapper = shallow(<GifGrid category={category}/>);
    });

    test('should show GifGrid', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show some item when load images', () => {
        const gifs= [{
            id: 'id',
            title: 'img.title',
            url: 'img.images.downsized_medium.url'
        },{
            id: 'id',
            title: 'img.title',
            url: 'img.images.downsized_medium.url'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs, 
            loading: false
        });
        wrapper = shallow(<GifGrid category={category}/>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})