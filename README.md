# Tree search
This module used to search the child node or text in the tree

## Code
```
    const Search = require("search-tree-child")
    const filteredSearch = Search(tree, 'node', ["name","text"], ["tree", "node"], true))
```

## params
Search(tree, searchText, keyNames, nodekeys, caseSensitive)

#### tree
collection of nested object

#### searchText
text which you want to search

#### keyNames
Array of keys in which you want to search. dont forget to add the keys in double quotes
`"name"`

#### nodekeys
Array of keys which hold the children node.
dont forget to add the keys in double quotes
`"name"`

#### caseSensitive
true or false