const randomiseArr = (arr) => {
    return arr
        .map((value) => ({ value, sort: Math.floor(Math.random() * 100000) }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

export default randomiseArr;