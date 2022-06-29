// Using References -> CONSISTENCY
let author = {
    name: 'shahid khan'
}

let course = {
    author: 'id'
}

// Using Embedded Documents -> PERFORMANCE
let course = {
    author: {
        name: 'shahid khan'
    }
}

// Hybrid Approach
let author = {
    name: 'Shahid'
    // 50 other properties
}

let course = {
    author: {
        id: 'Ref',
        name: 'shahid'
    }
}