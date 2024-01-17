const db = require("../models");
const quiz = require("../models/quiz");
const Quiz = db.quizzes;

// CREATE
exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created succesfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// READ
exports.getAll = async(req, res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved suc cessfully.",
            data: quizzes,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

// UPDATE
exports.update = async(req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null
        })
    }
}

// DELETE
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        })
    }
}

// GET ONE
exports.findOne = async(req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quizzes retrieved successfully with id=${id}.`,
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        })
    }
}

// GET BY CATEGORY ID
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with categoryId=${id}`,
        data: quizzes,
    })
}

// GET BY LEVEL ID
exports.getByLevelId = async(req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id,
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId=${id}.`,
        data: quizzes,
    })
}