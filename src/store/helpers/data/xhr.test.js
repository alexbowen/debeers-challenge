import { request } from './xhr';
import fetchMock from 'fetch-mock'

describe('XHR store data helper', () => {
    it('should return JSON response', () => {
        fetchMock.get('http://test.com', { "london": "hot" })

        return request({ url: 'http://tests.com' })
            .then((forecast) => {
                expect(forecast).toEqual({ "london": "hot" })
            })
    })

    it('should throw error if url not supplied', async() => {
        fetchMock.restore()

        await expect(request()).rejects.toThrowError('url not supplied')
    })
})