const NotesService = { 

    getAllNotes(knex) {
        return knex.select('*').from('notes_table')
    },
    getNoteById(knex, id) {
        return knex.select('*').from('notes_table').where('id', id).first()
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
    editNote(knex, id, updateNote) {
        return knex('notes_table').where({ id }).update(updateNote)
    }
}

module.exports = NotesService