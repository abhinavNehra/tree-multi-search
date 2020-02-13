function checkChildrenKeys(child, childrenKeyArray) {
    var keys = childrenKeyArray.filter(childrenKey => {
        return (child && child[childrenKey] && child[childrenKey].length)
    })
    return keys
}

function checkMatchedKeys(child, matchedKeyArray, searchText) {
    var matchedKeys =  matchedKeyArray.filter(key => {
        return (child && child[key] &&  child[key].includes(searchText))
    })
    return matchedKeys
}

function searchMultiple(tree, searchText, matchedKeyArray, childrenKeyArray) {
    var selected = []
    tree.forEach(function(child) {
        var childrenkeys = checkChildrenKeys(child, childrenKeyArray)
        var matchedKeys = checkMatchedKeys(child, matchedKeyArray, searchText)

        if (childrenkeys && childrenkeys.length) {
            if (matchedKeys && matchedKeys.length) {
                selected.push(child)
            } else {
                var loopKeys = {}
                var exists = false
                childrenkeys.forEach(function(key) {
                    loopKeys[key] = searchMultiple(child[key], searchText, matchedKeyArray, childrenKeyArray)
                    if (loopKeys[key] && loopKeys[key].length) {
                        exists = true
                    }
                })

                if (exists) {
                    var obj = child
                    for (var key in loopKeys) {
                        obj[key] = loopKeys[key]
                    }
                    selected.push(obj)
                }
            }
        } else if (matchedKeys && matchedKeys.length) {
            selected.push(child)
        }
    })
    return selected
}
 
function search(tree, searchText, keyName, childrenKey, caseSensitive) {
    var text = searchText
    if (caseSensitive) {
        text = searchText.toLowerCase()
    }
    return searchMultiple(tree, text, keyName, childrenKey)    
}

export  {
    search
}