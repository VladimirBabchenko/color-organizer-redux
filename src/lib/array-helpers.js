const sortBy = (type, field) => {
    switch (type) {
        case "date":
            return (a, b) => new Date(b[field]) - new Date(a[field]);
        case "number":
            return (a, b) => b[field] - a[field]
        default:
            return (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1
    }
}

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        sortBy("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            sortBy("number", "rating") :
            sortBy("date", "timestamp")