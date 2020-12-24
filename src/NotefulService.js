const NotefulService = { 
    getNotesandFolders(knex) {
        //return knex.select('*').from('notes_table','folders_table')
        return knex.join('notes_table', 'folders_table').select('*')
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
    getFolderById(knex, folderid) {
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

module.exports = NotefulService