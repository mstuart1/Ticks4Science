const extractFromObj = (obj, keys) => {
    return keys.reduce((newObj, key) => {
        newObj[key] = obj[key]
        return newObj
    }, {})
}

export default extractFromObj