import { formatTime } from './mapping'

describe('Mapping', () => {
    it('should format timestamp', () => {
        expect(formatTime('1519983952')).toEqual('2018-3-2 09:45:52')
    })
})
