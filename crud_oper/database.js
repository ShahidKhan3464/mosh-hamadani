const createCourse = async () => {
    const model = {
        book: 'C++',
        author: 'Robert Lafore',
        type: 'Programming'
    }

    const savedDocument = await model.save() // To save the document in DB
    console.log(savedDocument)
}

const getCourse = async () => {
    const allDocument = await model.find() // To get all the documents from the DB
    const specificDocument = await model
        .find({ author: 'Robert Lafore' }) // This is filtering will retrieve the document with given author
        .limit(10) // applying limit to the documents to be retrieved
}

const updateCourse = async (id) => {
    // const updateDocument = await model.findById(id)
    // if (!updateDocument) return;

    // updateDocument.isPublished = true
    // updateDocument.author = 'shahid khan'

    // const res = await updateDocument.save()

    // Second Method
    const updateDocument = await model.update({ _id: id }, {
        $set: {
            author: 'shahid khan'
        }
    })
}

const deleteCourse = async (id) => {
    const deleteDocument = await model.findByIdAndRemove(id)
    console.log(deleteDocument)
}

const comparisonOperator = async () => {
    // These all are operators

    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greaater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    const document = await model
        .find({ price: { $gte: 10, $lte: 20 } })
        .find({ price: { $in: [10, 15, 20] } })

}

const logicalOperator = async () => {
    // or
    // and

    const document = await model
        .find()
        .or([{ author: 'Robert Lafore' }, { isPublished: true }])
}

createCourse() // To create the document
getCourse()  // To retrieve the documents
updateCourse(123) // To update the documents
deleteCourse(123) // To delete the documents
comparisonOperator() // Some operators used to filtering the documents from DB
logicalOperator()