-- Program at a Glance
-- Railway MySQL 테이블이다. public 스키마, RLS, anon 키는 없다.
-- 홈페이지는 이 테이블에 직접 접속하지 않는다.
-- 홈페이지 서버는 GET /service/glance.json.php?year=2027 을 읽고
-- year, rooms, days, timeSlots, sessions 로 시간표를 만든다.
-- 기본키는 code나 id 단독이 아니라 (year, code), (year, id)다.
-- 시간표 칸은 program_sessions(복수)다. program_session(단수)은 연자 관리용이라 시간표 칸이 아니다.
-- 비어 있는 글은 NULL로 저장한다.
-- floor, label, venue_name, time_label, title, content, topic, href, label, color,
-- column_span, row_span, sort_order 이름은 그대로다.

CREATE TABLE IF NOT EXISTS program_rooms (
  year smallint NOT NULL,
  code varchar(40) NOT NULL,
  floor varchar(80) NOT NULL,
  label varchar(120) NOT NULL,
  venue_name varchar(120) DEFAULT NULL,
  sort_order int NOT NULL,
  PRIMARY KEY (year, code),
  KEY program_rooms_sort_order_idx (year, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS program_days (
  year smallint NOT NULL,
  id varchar(80) NOT NULL,
  label varchar(160) NOT NULL,
  sort_order int NOT NULL,
  PRIMARY KEY (year, id),
  KEY program_days_sort_order_idx (year, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS program_time_slots (
  year smallint NOT NULL,
  id varchar(80) NOT NULL,
  day_id varchar(80) NOT NULL,
  time_label varchar(80) NOT NULL,
  sort_order int NOT NULL,
  PRIMARY KEY (year, id),
  KEY program_time_slots_day_id_idx (year, day_id, sort_order),
  CONSTRAINT fk_program_time_slots_day
    FOREIGN KEY (year, day_id) REFERENCES program_days (year, id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS program_sessions (
  year smallint NOT NULL,
  id varchar(80) NOT NULL,
  slot_id varchar(80) NOT NULL,
  room_code varchar(40) NOT NULL,
  column_span int NOT NULL DEFAULT 1,
  row_span int NOT NULL DEFAULT 1,
  title varchar(255) DEFAULT NULL,
  content text,
  topic varchar(255) DEFAULT NULL,
  href varchar(500) DEFAULT NULL,
  label varchar(80) DEFAULT NULL,
  color varchar(20) NOT NULL DEFAULT 'none',
  sort_order int NOT NULL,
  PRIMARY KEY (year, id),
  KEY program_sessions_slot_id_idx (year, slot_id, sort_order),
  CONSTRAINT fk_program_sessions_slot
    FOREIGN KEY (year, slot_id) REFERENCES program_time_slots (year, id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_program_sessions_room
    FOREIGN KEY (year, room_code) REFERENCES program_rooms (year, code)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT chk_program_sessions_span CHECK (column_span >= 1 AND row_span >= 1),
  CONSTRAINT chk_program_sessions_color CHECK (
    color IN (
      'gray',
      'light-green',
      'purple',
      'light-blue',
      'green',
      'red',
      'orange',
      'indigo',
      'pink',
      'dark-yellow',
      'mint',
      'blue',
      'none'
    )
  )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 룸은 sort_order 오름차순으로 왼쪽부터 놓인다. 같은 floor가 연속이면 헤더에서 한 칸으로 합쳐진다.
-- 시간은 sort_order 오름차순으로 위에서 아래로 쌓인다.
-- 세션의 room_code는 시작 룸이다. column_span, row_span이 오른쪽 룸과 아래 시간을 덮는다.
-- content에 글이 있고 href가 있으면 그 글이 밑줄 링크가 된다. href가 NULL이면 일반 텍스트다.
-- 빈 시간은 program_sessions를 넣지 않는다. 시간 행만 있으면 화면은 흰 칸으로 그린다.

INSERT INTO program_rooms (year, code, floor, label, venue_name, sort_order)
VALUES
  (2027, 'A', '2F', 'Room A', 'Crystal 1', 1),
  (2027, 'B', '2F', 'Room B', 'Crystal 2', 2),
  (2027, 'C', '2F', 'Room C', 'Crystal 3', 3),
  (2027, 'D', '2F', 'Room D', 'Emerald', 4),
  (2027, 'E', '3F', 'Room E', 'Sapphire', 5)
AS new
ON DUPLICATE KEY UPDATE
  floor = new.floor,
  label = new.label,
  venue_name = new.venue_name,
  sort_order = new.sort_order;

-- INSERT INTO program_days (year, id, label, sort_order)
-- VALUES (2027, 'april-23', 'April 23 (Thu)', 1);
--
-- INSERT INTO program_time_slots (year, id, day_id, time_label, sort_order)
-- VALUES (2027, 'apr23-0800', 'april-23', '08:00-08:50', 1);
--
-- INSERT INTO program_sessions (
--   year, id, slot_id, room_code, column_span, row_span,
--   title, content, topic, href, label, color, sort_order
-- ) VALUES (
--   2027, 'apr23-mv01', 'apr23-0800', 'A', 1, 1,
--   'MV01', 'Master Video Session 1', 'LGI/Hernia',
--   '/2027/en/scientific-program#mv01', NULL, 'light-green', 1
-- );
