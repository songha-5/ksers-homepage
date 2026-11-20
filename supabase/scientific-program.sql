-- Scientific Program
-- Railway MySQL 테이블이다. public 스키마, RLS, anon 키, Storage 버킷은 없다.
-- 홈페이지는 이 테이블에 직접 접속하지 않는다.
-- 홈페이지 서버는 GET /service/scientific.json.php?year=2027 을 읽는다.
-- 응답 키는 year, categories 이고, 세션 안에 chairs, speakers, glance_id가 있다.
-- 파일은 image_url, cv_url, abstract_url에 주소 또는 NULL로 저장한다.
-- 탭 순서는 sort_order다. free-paper는 항상 마지막이다.
-- 세션 id는 화면 앵커다. glance_id는 Program at a Glance 칸 하나와 연결된다.

CREATE TABLE IF NOT EXISTS scientific_categories (
  year smallint NOT NULL,
  id varchar(80) NOT NULL,
  label varchar(160) NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  PRIMARY KEY (year, id),
  KEY scientific_categories_sort_idx (year, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS scientific_sessions (
  year smallint NOT NULL,
  id varchar(80) NOT NULL,
  category_id varchar(80) NOT NULL,
  title varchar(255) NOT NULL,
  date_time varchar(160) DEFAULT NULL,
  language varchar(40) DEFAULT NULL,
  glance_id varchar(80) DEFAULT NULL,
  sort_order int NOT NULL DEFAULT 0,
  PRIMARY KEY (year, id),
  UNIQUE KEY scientific_sessions_glance_idx (year, glance_id),
  KEY scientific_sessions_category_idx (year, category_id, sort_order),
  CONSTRAINT fk_scientific_sessions_category
    FOREIGN KEY (year, category_id) REFERENCES scientific_categories (year, id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS scientific_chairs (
  id char(36) NOT NULL,
  year smallint NOT NULL,
  session_id varchar(80) NOT NULL,
  name varchar(255) NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY scientific_chairs_session_idx (year, session_id, sort_order),
  CONSTRAINT fk_scientific_chairs_session
    FOREIGN KEY (year, session_id) REFERENCES scientific_sessions (year, id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS scientific_speakers (
  id char(36) NOT NULL,
  year smallint NOT NULL,
  session_id varchar(80) NOT NULL,
  badge varchar(80) DEFAULT NULL,
  talk_title varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  affiliation varchar(255) DEFAULT NULL,
  description text,
  image_url varchar(500) DEFAULT NULL,
  cv_url varchar(500) DEFAULT NULL,
  abstract_url varchar(500) DEFAULT NULL,
  sort_order int NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY scientific_speakers_session_idx (year, session_id, sort_order),
  CONSTRAINT fk_scientific_speakers_session
    FOREIGN KEY (year, session_id) REFERENCES scientific_sessions (year, id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO scientific_categories (year, id, label, sort_order)
-- VALUES (2027, 'free-paper', 'Free Paper', 1);
--
-- INSERT INTO scientific_sessions
--   (year, id, category_id, title, date_time, language, glance_id, sort_order)
-- VALUES
--   (2027, 'cs01', 'co-symposium', '[Co-Symposium 1]', '4/23 (Thu), 13:00-14:20', NULL, 'apr22-cs01', 1);
--
-- Glance 칸의 href는 /2027/en/scientific-program#cs01 이다.
-- glance_id는 그 칸의 program_sessions.id 다.
