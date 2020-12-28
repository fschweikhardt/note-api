const express = require('express')
//const logger = require('./logger')
const FoldersService = require('./FoldersService')
const FoldersRouter = express.Router()
const bodyParser = express.json()
//const xss = require('xss')

FoldersRouter
    .route('/api/folders')
    .get((req,res,next) => {
        FoldersService.getAllFolders(req.app.get('db'))
            .then(data => {
                res.json(data)
            })
            .catch(next)
        })

// NotefulRouter
//     .route('/notes/:noteId')
//     .get((req,res,next) => {
//         const { noteId } = req.params
//         NotefulService.getNoteById(req.app.get('db'), noteId)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)

//     })
//     .delete((req,res,next) => {
//         const { noteId } = req.params
//         NotefulService.deleteNote(req.app.get('db'), noteId )
//             .then(console.log('note deleted'))
//             .then(res.status(204).end())
//             .catch(next)
//     })
    

FoldersRouter
    .route('api/folders/:folderid')
    .get((req,res,next) => {
        const { folderid } = req.params
        FoldersService.getNotesByFolderId(req.app.get('db'), folderid)
            .then(data => {
                res.json(data)
                console.log(data)
            })
            .catch(next)
    })
    //.delete


// NotefulRouter
//     .route('/add-note')
//     .post(bodyParser, (req, res, next) => {
//         //let modified = now()
//         const { note_name, modified, content, folderid } = req.body
//         const newNote = { note_name, modified, content, folderid }
//         NotefulService.addNote(req.app.get('db'), newNote)
//             .then(data => {
//                 res.json(data)
//                 console.log(data)
//             })
//             .catch(next)
//     })

FoldersRouter
    .route('/add-folder')
    .post(bodyParser, (req, res, next) => {
        //let modified = now()
        const { title } = req.body
        const newFolder = { title }
        FoldersService.addFolder(req.app.get('db'), newFolder)
        //     .then(data => {
        //         //res.json(data)
        //         //console.log(data)
        //    })
            .catch(next)
    })

module.exports = FoldersRouter