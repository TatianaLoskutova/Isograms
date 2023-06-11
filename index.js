function isIsogram(str) {
    let res = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (res.slice(i+1).includes(str[i].toLowerCase())) {
            return false
        }
    }

    return true
}