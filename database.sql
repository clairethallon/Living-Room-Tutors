-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "tutees" (
	"id" serial NOT NULL,
	"student_first_name" varchar(255) NOT NULL,
	"student_last_name" varchar(255) NOT NULL,
	"pronouns" varchar(255),
	"student_or_guardian" varchar(255) NOT NULL,
	"email_guardian" varchar(255) NOT NULL,
	"email_student" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"grade_level" varchar(255) NOT NULL,
	"school" varchar(255) NOT NULL,
	"language_tutee_id" integer NOT NULL,
	"subject_1" integer NOT NULL,
	"subject_2" integer NOT NULL,
	"subject_3" integer NOT NULL,
	"subject_other" varchar(10000),
	"subject_details" varchar(10000),
	"misc_info" varchar(10000),
	"submission_timestamp" TIMESTAMP NOT NULL,
    "active_tutee" BOOLEAN NOT NULL DEFAULT true,
	"matched" BOOLEAN NOT NULL,
	CONSTRAINT "tutees_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tutors" (
	"id" serial NOT NULL,
	"tutor_first_name" varchar(255) NOT NULL,
	"tutor_last_name" varchar(255) NOT NULL,
	"pronouns" varchar(255),
	"email" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"grade_level" varchar(255) NOT NULL,
	"school" varchar(255) NOT NULL,
	"mentoring_grade_id" integer NOT NULL,
	"language_tutor_id" integer NOT NULL,
	"subjects_id" integer NOT NULL,
	"misc_info" varchar(10000),
	"submission_timestamp" TIMESTAMP NOT NULL,
    "active_tutor" BOOLEAN NOT NULL DEFAULT true,
	"matched" BOOLEAN NOT NULL,
	CONSTRAINT "tutors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "matches" (
	"id" serial NOT NULL,
	"tutor_id" integer NOT NULL,
	"tutee_id" integer NOT NULL,
	"match_timestamp" TIMESTAMP NOT NULL,
	"emails_sent" BOOLEAN NOT NULL,
	CONSTRAINT "matches_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "mentoring_grade" (
	"id" serial NOT NULL,
	"prek_kindergarten" BOOLEAN NOT NULL,
	"1st" BOOLEAN NOT NULL,
	"2nd" BOOLEAN NOT NULL,
	"3rd" BOOLEAN NOT NULL,
	"4th" BOOLEAN NOT NULL,
	"5th" BOOLEAN NOT NULL,
	"6th" BOOLEAN NOT NULL,
	"7th" BOOLEAN NOT NULL,
	"8th" BOOLEAN NOT NULL,
	"9th" BOOLEAN NOT NULL,
	"10th" BOOLEAN NOT NULL,
	"11th" BOOLEAN NOT NULL,
	"12th" BOOLEAN NOT NULL,
	CONSTRAINT "mentoring_grade_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects_tutors" (
	"id" serial NOT NULL,
	"K5_Math" BOOLEAN NOT NULL,
	"K5_Reading" BOOLEAN NOT NULL,
	"K5_English_Writing" BOOLEAN NOT NULL,
	"K5_Science" BOOLEAN NOT NULL,
	"K5_social_studies" BOOLEAN NOT NULL,
	"6th_to_8th_language_arts" BOOLEAN NOT NULL,
	"6th_to_8th_science" BOOLEAN NOT NULL,
	"6th_to_8th_social_studies" BOOLEAN NOT NULL,
	"math_pre_algebra" BOOLEAN NOT NULL,
	"math_alg1_linear_alg" BOOLEAN NOT NULL,
	"math_alg2" BOOLEAN NOT NULL,
	"math_geom" BOOLEAN NOT NULL,
	"math_precalc_trig" BOOLEAN NOT NULL,
	"sci_bio_life" BOOLEAN NOT NULL,
	"sci_chem" BOOLEAN NOT NULL,
	"sci_physics" BOOLEAN NOT NULL,
	"sci_comp_sci" BOOLEAN NOT NULL,
	"lang_chinese" BOOLEAN NOT NULL,
	"lang_spanish" BOOLEAN NOT NULL,
	"lang_french" BOOLEAN NOT NULL,
	"lang_german" BOOLEAN NOT NULL,
	"hist_world" BOOLEAN NOT NULL,
	"hist_us" BOOLEAN NOT NULL,
	"ap_bio" BOOLEAN NOT NULL,
	"ap_chem" BOOLEAN NOT NULL,
	"ap_physics" BOOLEAN NOT NULL,
	"ap_calc_AB" BOOLEAN NOT NULL,
	"ap_calc_BC" BOOLEAN NOT NULL,
	"ap_stats" BOOLEAN NOT NULL,
	"ap_comp_sci" BOOLEAN NOT NULL,
	"ap_english_lit_comp" BOOLEAN NOT NULL,
	"ap_lang_comp" BOOLEAN NOT NULL,
	"ap_macro_econ" BOOLEAN NOT NULL,
	"ap_micro_econ" BOOLEAN NOT NULL,
	"ap_psyc" BOOLEAN NOT NULL,
	"ap_hist_us" BOOLEAN NOT NULL,
	"ap_gov_politics_us" BOOLEAN NOT NULL,
	"ap_human_geog" BOOLEAN NOT NULL,
	"sat_subject_tests" BOOLEAN NOT NULL,
	"sat_prep" BOOLEAN NOT NULL,
	"act_prep" BOOLEAN NOT NULL,
	"other" varchar(255),
	CONSTRAINT "subjects_tutors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects_tutees" (
	"id" serial NOT NULL,
	"subject" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "subjects_tutees_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "language" (
	"id" serial NOT NULL,
	"Spanish" BOOLEAN NOT NULL,
	"Somali" BOOLEAN NOT NULL,
	"Arabic" BOOLEAN NOT NULL,
	"Chinese" BOOLEAN NOT NULL,
	"Tagalog" BOOLEAN NOT NULL,
	"French" BOOLEAN NOT NULL,
	"Vietnamese" BOOLEAN NOT NULL,
	"Hmong" BOOLEAN NOT NULL,
	"Other" varchar(255),
	CONSTRAINT "language_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "admin" (
	"id" serial NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" integer NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "admin_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "tutees" ADD CONSTRAINT "tutees_fk0" FOREIGN KEY ("subject_1") REFERENCES "subjects_tutees"("id");
ALTER TABLE "tutees" ADD CONSTRAINT "tutees_fk1" FOREIGN KEY ("subject_2") REFERENCES "subjects_tutees"("id");
ALTER TABLE "tutees" ADD CONSTRAINT "tutees_fk2" FOREIGN KEY ("subject_3") REFERENCES "subjects_tutees"("id");
ALTER TABLE "tutees" ADD CONSTRAINT "tutees_fk3" FOREIGN KEY ("language_tutee_id") REFERENCES "language"("id");

ALTER TABLE "tutors" ADD CONSTRAINT "tutors_fk0" FOREIGN KEY ("mentoring_grade_id") REFERENCES "mentoring_grade"("id");
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_fk1" FOREIGN KEY ("subjects_id") REFERENCES "subjects_tutors"("id");
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_fk2" FOREIGN KEY ("language_tutor_id") REFERENCES "language"("id");

ALTER TABLE "matches" ADD CONSTRAINT "matches_fk0" FOREIGN KEY ("tutor_id") REFERENCES "tutors"("id");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk1" FOREIGN KEY ("tutee_id") REFERENCES "tutees"("id");


INSERT INTO "subjects_tutees" ("subject") VALUES
('K5_Math'),		 
('K5_Reading'),	 
('K5_English_Writing'),	 
('K5_Science'),	 
('K5_social_studies'),
('6th_to_8th_language_arts'),	 
('6th_to_8th_science'),	 
('6th_to_8th_social_studies'),
('math_pre_algebra'),
('math_alg1_linear_alg'),
('math_alg2'),
('math_geom'), 
('math_precalc_trig'),
('sci_bio_life'),	 
('sci_chem'),
('sci_physics'), 
('sci_comp_sci'),	 
('lang_chinese'),	 
('lang_german'),
('lang_spanish'),
('lang_french'),
('hist_world'),
('hist_us'),
('ap_bio'),	 
('ap_chem'), 
('ap_physics'), 
('ap_calc_AB'),	 
('ap_calc_BC'),	 
('ap_stats'),	 
('ap_comp_sci'), 
('ap_english_lit_comp'),
('ap_lang_comp'),
('ap_macro_econ'),
('ap_micro_econ'), 
('ap_psyc'), 
('ap_hist_us'), 
('ap_gov_politics_us'),	 
('ap_human_geog'),
('sat_subject_tests'),
('sat_prep'),	 
('act_prep'),	 
('other');

--MOCK DATA INSERTS FOR TUTOR

INSERT INTO "language" ( "Spanish", "Somali", "Arabic", "Chinese", "Tagalog", "French", "Vietnamese", "Hmong" )
VALUES ( false, false, false, false, false, false, false, false);

INSERT INTO "subjects_tutors" ( "K5_Math", "K5_Reading", "K5_English_Writing", "K5_social_studies", "K5_Science", "6th_to_8th_language_arts", "6th_to_8th_science", "6th_to_8th_social_studies", "math_pre_algebra", "math_alg1_linear_alg", "math_alg2", "math_geom", "math_precalc_trig", "sci_bio_life", "sci_chem", "sci_physics", "sci_comp_sci", "lang_chinese", "lang_spanish", "lang_french","lang_german", "hist_world", "hist_us", "ap_bio", "ap_chem", "ap_physics", "ap_calc_AB", "ap_calc_BC", "ap_stats", "ap_comp_sci", "ap_english_lit_comp", "ap_lang_comp", "ap_macro_econ", "ap_micro_econ", "ap_psyc", "ap_hist_us", "ap_gov_politics_us", "ap_human_geog", "sat_subject_tests", "sat_prep", "act_prep")
	VALUES ( true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true );

INSERT INTO "mentoring_grade" ( "prek_kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th" )
VALUES ( true, true, true, true, true, true, true, false, false, false, false, false, false );

INSERT INTO "tutors" ("tutor_first_name", "tutor_last_name", "pronouns", "phone", "email", "grade_level", "school", "mentoring_grade_id", "language_tutor_id", "subjects_id", "misc_info", "submission_timestamp", "matched"  ) VALUES
('Jinglin', 'Li', 'she/her', '5075174954', 'tutee.lrtmatching@gmail.com', 'In College', 'UMN Twin Cities', 
--MENTORING_GRADE.ID GOES HERE, 
--LANGUAGE_TUTOR.ID GOES HERE, 
--SUBJECTS.ID GOES HERE, 
NULL, '1/9/2022 15:15:01', false );

--MOCK DATA INSERTS FOR TUTEE

INSERT INTO "language" ( "Spanish", "Somali", "Arabic", "Chinese", "Tagalog", "French", "Vietnamese", "Hmong" )
VALUES ( true, false, false, true, false, false, false, false);

INSERT INTO "tutees" ("student_first_name", "student_last_name", "pronouns", "student_or_guardian", "email_guardian", "email_student", "phone", "grade_level", "school", "language_tutee_id", "subject_1", "subject_2", "subject_3", "subject_other", "subject_details", "misc_info", "submission_timestamp", "active_tutee", "matched"  ) VALUES
('Emilis', 'Terrell', 'she/her', 'student', '123@gmail',  'tutee.lrtmatching@gmail.com', '5075174954','Pre-K/Kindergarten', 'Central High School', 
--LANGUAGE TABLE ID GOES HERE,
7, 9, 1, NULL, NULL, NULL, 
'1/9/2022 15:15:01', true, false );