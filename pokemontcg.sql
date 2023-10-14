-- SQLite3
-- Create table

CREATE TABLE requests(
  id integer primary key autoincrement,
  search_text text not null,
  pokemon char(20),
  sets text,
  ip_address text,
  uuid char(50)
  );