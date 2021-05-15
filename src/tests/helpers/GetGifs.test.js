import getGifs from '../../helpers/GetGifs';

describe('GetGifs.test.ts', () => {
    test('should get 10 elements', async() => {
        const res = await getGifs('dragon')

        expect(res.length).toBe(10)
    })
    
    test('should get 0 elements', async() => {
        const res = await getGifs('')

        expect(res.length).toBe(0)
    })
});