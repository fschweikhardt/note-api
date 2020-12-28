alter table notes_table
    add column
        modified timestamp default now() not null