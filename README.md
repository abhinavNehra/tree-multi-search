# Tree search
This module used to search the child node or text in the tree. This module will return all tree with from parent to the search child if the search text exist in the tree

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


## Example

if we have tree

```
const Search = require("search-tree-child")

const tree = [{
        "name": "abhinav",
        "text": "asdf",
        "node" : [
            {"name": "arjun"},
            {"name": "ankur"}
          ],
        "tree": [
            {"name": "arjun", "text": "nujra"},
            {"name": "ankur", "text": "rukna"},
            {
                "name": "ankit",
                "text": "tikna",
                "tree": [
                    {"name": "akshay"},
                    {"name": "jainnode"}
                ]
            },{"name": "abhay",
             "tree": [
                {"name": "akshit"},
                {"name": "pratyush"},
                {
                  "name": "uday",
                  "tree": [
                      {"name": "amit",
                        "node": [{ "text": "nodesearch"}]
                      },
                      {"name": "akilesh",
                        "text": "asdf",
                        "tree" : [{ "name": "search"}]
                      }
                  ]
                }
              ]
            }
          ]
   },
    {
        "name": "neeraj",
        "tree": [
            {"name": "bana"}
        ]
    }
] 
console.log('-----', JSON.stringify(Search(tree, 'node', ["name","text"], ["tree", "node"], true)))

//This will return 
[
   {
      "name":"abhinav",
      "text":"asdf",
      "node":[],
      "tree":[
         {
            "name":"ankit",
            "text":"tikna",
            "tree":[
               {
                  "name":"jainnode"
               }
            ]
         },
         {
            "name":"abhay",
            "tree":[
               {
                  "name":"uday",
                  "tree":[
                     {
                        "name":"amit",
                        "node":[
                           {
                              "text":"nodesearch"
                           }
                        ]
                     }
                  ]
               }
            ]
         }
      ]
   }
]

if you search for word that don't exist in the tree then it will return blank array

like 
console.log('-----', JSON.stringify(Search(tree, 'sanker', ["name","text"], ["tree", "node"], true)))

will return 
--- []
```

# node
const search = require("search-tree-child")

# react 
import {search} from 'search-tree-child'

# tree search
# tree child search
# tree child search react
# tree child saerch javascript
