export const request = async(params = {}) => {
    if (!params.url) {
        throw new Error('url not supplied')
    }
    const response = await fetch(params.url)
    return response.json()
}
