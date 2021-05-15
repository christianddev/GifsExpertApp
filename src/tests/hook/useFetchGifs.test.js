import useFetchGifs from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'

describe('useFetchGifs.js', () => {
    test('should return initial state', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('dragon'));
        const {data, loading}= result.current;
        await waitForNextUpdate();
        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
    })

    test('should return array of img', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('dragon'));
        await waitForNextUpdate();
        const {data, loading}= result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
})