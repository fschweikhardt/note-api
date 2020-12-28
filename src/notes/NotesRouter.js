const express = require('express')
//const logger = require('./logger')
const NotesService = require('./NotesService')
const NotesRouter = express.Router()
const bodyParser = express.json()
//const xss = require('xss')

NotesRouter
    .route('/')
    .get((req,res,next) => {
        NotesService.getAllNotes(req.app.get('db'))
            .then(data => {
                res.json(data)
            })
            .catch(next)
        })

NotesRouter
    .route('/notes/:noteId')
    .get((req,res,next) => {
        const { noteId } = req.params
        NotesService.getNoteById(req.app.get('db'), noteId)
            .then(data => {
                res.json(data)
                console.log(data)
            })
            .catch(next)

    })
    .delete((req,res,next) => {
        const { noteId } = req.params
        NotesService.deleteNote(req.app.get('db'), noteId )
            //.then(console.log('note deleted'))
            //.then(res.status(204).end())
            .catch(next)
    })
    

// NotesRouter
//     .route('folder/:folderid')
//     .get((req,res,next) => {
//         const { folderid } = req.params
//         NotesService.getNotesByFolderId(req.app.get('db'), folderid)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)
//     })
    //.delete


NotesRouter
    .route('/add-note')
    .post(bodyParser, (req, res, next) => {
        //let modified = now()
        const { note_name, modified, content, folderid } = req.body
        const newNote = { note_name, modified, content, folderid }
        NotesService.addNote(req.app.get('db'), newNote)
            .then(data => {
                res.json(data)
                //console.log(data)
            })
            .catch(next)
    })

// NotesRouter
//     .route('/add-folder')
//     .post(bodyParser, (req, res, next) => {
//         //let modified = now()
//         const { title } = req.body
//         const newFolder = { title }
//         NotesService.addFolder(req.app.get('db'), newFolder)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)
//     })

module.exports = NotesRouter