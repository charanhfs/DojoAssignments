insert into users (first_name, last_name, created_at, updated_at)
values ('Don', 'John', now(), now());

insert into friendships (created_at, updated_at, users_id, friend_id)
values (now(), now(), 3, 4);

SELECT users.first_name, users.last_name, user2.first_name AS friend_first_name, user2.last_name AS friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.users_id
LEFT JOIN users as user2 ON friendships.friend_id = user2.id
order by user2.last_name;
