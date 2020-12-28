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
    
FoldersRouter
    .route('/api/folders/:folderid')
    .get((req,res,next) => {
        const { folderid } = req.params
        FoldersService.getNotesByFolderId(req.app.get('db'), folderid)
            .then(data => {
                res.json(data)
            })
            .catch(next)
    })

FoldersRouter
    .route('/api/add-folder')
    .post(bodyParser, (req, res, next) => {
        //let modified = now()
        const { title } = req.body
        const newFolder = { title }
        FoldersService.addFolder(req.app.get('db'), newFolder)
            .catch(next)
    })

module.exports = FoldersRouter