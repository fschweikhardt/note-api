DROP TABLE IF EXISTS folders_table;
CREATE TABLE folders_table (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL, 
);

DROP TABLE IF EXISTS notes_table;
CREATE TABLE notes_table (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    note_name TEXT NOT NULL, 
    modified TEXT NOT NULL
    content TEXT 
    folderId INTEGER REFERENCES folders_table(id) NOT NULL
);