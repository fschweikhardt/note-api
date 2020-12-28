const FoldersService = { 

    getAllFolders(knex) {
        return knex.select('*').from('folders_table')
    },
    getNotesByFolderId(knex, id) {
        return knex.select('*').from('folders_table').where('id', id).first()
    }, 
    addFolder(knex, newFolder) {
        return knex.insert(newFolder).into('folders_table').returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = FoldersService