import { request } from './xhr'

export const fetchData = (type, params) => {
    switch (type) {
        case 'xhr':
            return request(params)

        default:
            return request(params)
    }
}
