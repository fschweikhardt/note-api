const express = require('express')
//const logger = require('./logger')
const NotefulService = require('./NotefulService')
const NotefulRouter = express.Router()
const bodyParser = express.json()
//const xss = require('xss')

NotefulRouter
    .route('/')
    .get((req,res,next) => {
        NotefulService.getAllNotes(req.app.get('db'))
            .then(data => {
                res.json(data)
            })
            .catch(next)
        })

NotefulRouter
    .route('/notes/:noteId')
    .get((req,res,next) => {
        const { noteId } = req.params
        NotefulService.getNoteById(req.app.get('db'), noteId)
            .then(data => {
                res.json(data)
                console.log(data)
            })
            .catch(next)

    })
    .delete((req,res,next) => {
        const { noteId } = req.params
        NotefulService.deleteNote(req.app.get('db'), noteId )
            //.then(console.log('note deleted'))
            //.then(res.status(204).end())
            .catch(next)
    })
    

// NotefulRouter
//     .route('folder/:folderid')
//     .get((req,res,next) => {
//         const { folderid } = req.params
//         NotefulService.getNotesByFolderId(req.app.get('db'), folderid)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)
//     })
    //.delete


NotefulRouter
    .route('/add-note')
    .post(bodyParser, (req, res, next) => {
        //let modified = now()
        const { note_name, modified, content, folderid } = req.body
        const newNote = { note_name, modified, content, folderid }
        NotefulService.addNote(req.app.get('db'), newNote)
            .then(data => {
                res.json(data)
                //console.log(data)
            })
            .catch(next)
    })

// NotefulRouter
//     .route('/add-folder')
//     .post(bodyParser, (req, res, next) => {
//         //let modified = now()
//         const { title } = req.body
//         const newFolder = { title }
//         NotefulService.addFolder(req.app.get('db'), newFolder)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)
//     })

module.exports = NotefulRouter