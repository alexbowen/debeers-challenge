import { formatTime } from './mapping'

export const api = {
    endpoint: 'wss://ws.blockchain.info/inv',
    message: JSON.stringify({"op": "unconfirmed_sub"}), // eslint-disable-line
    mapping: transaction => {
        return {
            address: transaction.inputs[0].prev_out.addr,
            value: transaction.inputs[0].prev_out.value,
            time: formatTime(transaction.time)
        }
    }
}
