const NotesService = { 

    getAllData(knex) {
        //return knex.select('*').from('folders_table').from('notes_table')
        //return knex.join('folders_table', 'notes_table').select('*')
        let notes = knex.select('*').from('notes_table')
        let folders = knex.select('*').from('folders_table')
        return notes.concat(folders)  
    },

    getAllNotes(knex) {
        return knex.select('*').from('notes_table')
    },
    getNoteById(knex, id) {
        return knex.select('*').from('notes_table').where('id', id).first()
    },
    getAllFolders(knex) {
        return knex.select('*').from('folders_table')
    },
    getNotesByFolderId(knex, folderid) {
        return knex.select('*').from('notes_table').where('folderid', folderid)
    }, 
    deleteNote(knex, id) {
        return knex.select('*').from('notes_table').where('id', id).delete()
    }, 
    addNote(knex, newNote) {
        return knex.insert(newNote).into('notes_table').returning('*')
            .then(rows => {
                return rows[0] 
            })
    }, 
    addFolder(knex, newFolder) {
        return knex.insert(newFolder).into('folders_table').returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = NotesService