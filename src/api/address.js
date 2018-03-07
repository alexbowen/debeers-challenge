import { formatTime } from './mapping'

export const api = {
    endpoint: 'http://localhost:4000/api/address/',
    mapping: transaction => {
        return {
            value: transaction.inputs[0].prev_out.value,
            time: formatTime(transaction.time)
        }
    }
}
