const express = require('express')
//const logger = require('./logger')
const NotesService = require('./NotesService')
const NotesRouter = express.Router()
const bodyParser = express.json()
//const xss = require('xss')

NotesRouter
    .route('/api/notes')
    .get((req,res,next) => {
        NotesService.getAllNotes(req.app.get('db'))
            .then(data => {
                res.json(data)
            })
            .catch(next)
        })

NotesRouter
    .route('/api/notes/:noteId')
    .get((req,res,next) => {
        const { noteId } = req.params
        NotesService.getNoteById(req.app.get('db'), noteId)
            .then(data => {
                res.json(data)
            })
            .catch(next)

    })
    .delete((req,res,next) => {
        const { noteId } = req.params
        NotesService.deleteNote(req.app.get('db'), noteId )
            .catch(next)
    })

NotesRouter
    .route('/api/add-note')
    .post(bodyParser, (req, res, next) => {
        //let modified = now()
        const { note_name, modified, content, folderid } = req.body
        const newNote = { note_name, modified, content, folderid }
        NotesService.addNote(req.app.get('db'), newNote)
            .catch(next)
    })

module.exports = NotesRouter