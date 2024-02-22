const renameKeys = (obj, stringToReplace, stringReplacement) => Object
    .keys(obj)
    .reduce((acc, key) => ({
        ...acc,
        ...{ [key.replace(stringToReplace, stringReplacement)]: obj[key] }
    }), {});

export default renameKeys