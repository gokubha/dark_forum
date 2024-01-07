const Category = require('./CategoryModel')

const addcategory = async (req, res) => {
    let validation = ''
    if (!req.body.CategoryName)
        validation += "Category Name is required \n"

    if (!!validation)
        res.send({ status: 500, success: false, message: validation })
    else {
        Category.findOne({ CategoryName: req.body.CategoryName })
            .then(async data => {
                if (data == null) {
                    let total = await Category.countDocuments().exec();
                    var newCategory = new Category({
                        categoryId: total + 1
                    })
                    newCategory.CategoryName = req.body.CategoryName
                    newCategory.save()
                        .then((saveddata) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Category added successfully",
                                data: saveddata
                            })
                        })
                }
                else {
                    res.send({
                        success: false,
                        status: 500,
                        message: "Category already exist"
                    })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

const getall = (req, res) => {
    Category.find(req.body)
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "All Category listed",
                total: data.length,
                data: data
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}


const getsingle = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation = "_id is required"
    if (!!validation)
        res.send({
            success: false,
            status: 500,
            message: validation
        })
    else {
        Category.findOne({ _id: req.body._id })
            .then((data) => {
                if (data != null)
                    res.send({
                        success: true,
                        status: 200,
                        message: "Single Category Loaded",
                        data: data
                    })
                else {
                    res.send({
                        success: false,
                        status: 409,
                        message: "Category not found"
                    })
                }
            })
            .catch((err) => {
                res.send({
                    success: true,
                    status: 500,
                    message: err.message
                })
            })
    }
}

const updatecategory = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is required"
        if (!req.body.CategoryName)
        validation += "CategoryName is required"
    if (!!validation)
        res.send({
            success: false,
            status: 500,
            message: validation
        })
    else {
        Category.findOne({ _id: req.body._id })
            .then(async (data) => {
                if (data == null)
                    res.send({
                        success: false,
                        status: 403,
                        message: 'Categoy not found'
                    })
                else
                data.save()
                    .then((saveddata) => {
                        res.send({
                            success: true,
                            status: 200,
                            message: "Category updated successfully",
                            data: saveddata
                        })
                    })
                    .catch(err => {
                        res.send({
                            success: false,
                            status: 500,
                            message: err.message
                        })
                    })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
}

const changestatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += "_id is required"
    if (!req.body.Status)
        validation += "Status is required"
    if (!!validation)
        res.send({
            status: 403, success: false, message: validation
        })
    else {
        Category.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({
                        success: false, status: 403, message: "Category not found"
                    })
                }
                else {
                    if (!!req.body.Status)
                        data.Status = req.body.Status
                    data.save()
                        .then((saveddata) => {
                            res.send({
                                success: true, status: 200, data:saveddata,message: "Category status updated successfully"
                            })
                        })
                        .catch((err) => {
                            res.send({
                                success: false, status: 500, message: err.message
                            })
                        })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

const updateCategoryName =
    module.exports = { addcategory, getall, getsingle, updatecategory, changestatus }
