CREATE DATABASE blog_db;
use blog_db;

SELECT*
FROM posts;

SELECT*
FROM tags;

 SELECT *
        FROM tags
        JOIN post_tag
        ON tags.id = post_tag.tag_id
        WHERE post_tag.post_id = 2;