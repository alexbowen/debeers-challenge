export const formatTime = timestamp => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString()
}
