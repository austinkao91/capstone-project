# Schema Information

## restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
address     | text      | not null
phone number| integer   | not null
## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
rating      | intger    | not null
description | text      |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
taggings_id | integer   | not null, foreign key (references users), indexed
description | integer   | not null, foreign key (references notes), indexed

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
restaurant_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
