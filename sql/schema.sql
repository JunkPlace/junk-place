drop table [Chat];
drop table [User];
drop table [Message];

create table [User] (
    id int default AUTOINCREMENT,
    name text, 
    avatarUrl text,
    primary key (id)
);

create table [Chat] (
    id int default AUTOINCREMENT, 
    createdAt timestamp default current timestamp, 
    primary key (id), 
    foreign key (creator) references [User],
    subject text
);

create table [Message] (
    id int default AUTOINCREMENT, 
    createdAt timestamp default current timestamp, 
    primary key (id), 
    foreign key (creator) references [User],
    foreign key (chat) references [Chat],
    body text
);

