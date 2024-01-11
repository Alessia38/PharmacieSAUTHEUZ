insert into medecin (med_nom, med_prenom, med_tel) VALUES ('CAPE', 'Andy', '06 98 74 52 14');
insert into medecin (med_nom, med_prenom, med_tel) VALUES ('GONZOLA', 'Igor', '07 45 06 78 74');
insert into medecin (med_nom, med_prenom, med_tel) VALUES ('TIM', 'Marie', '07 12 35 49 68');

insert into client (cli_nom, cli_prenom, cli_dateNaiss, cli_numSecu, cli_mutId) VALUES ('KILO', 'Sandy', DATE '1970-05-15', '2 65 07 32 046 984 06', 1);
insert into client (cli_nom, cli_prenom, cli_dateNaiss, cli_numSecu, cli_mutId) VALUES ('AROÏDE', 'Paul', DATE '2001-12-26', '1 11 29 23 123 789 10', 2);
insert into client (cli_nom, cli_prenom, cli_dateNaiss, cli_numSecu, cli_mutId) VALUES ('ERATEUR', 'Maude', DATE '1987-06-02', '2 50 06 79 456 123 58', 3);

insert into mutuelle (mutu_nom, mutu_tel, mutu_mail) values ('APICIL', '06 80 49 06 74', 'apicil.prevoyance@msn.com');
insert into mutuelle (mutu_nom, mutu_tel, mutu_mail) values ('ACTIMEL', '07 54 02 36 49', 'atimel.assurance@hotmail.fr');
insert into mutuelle (mutu_nom, mutu_tel, mutu_mail) values ('LIORIS', '04 76 69 47 15', 'contcat@lioris.com');

insert into pathologie (path_nom) values ('Ostéoporose');
insert into pathologie (path_nom) values ('Cirrhose');
insert into pathologie (path_nom) values ('Artériosclérose');

insert into traitement (trait_ordoId, trait_qteMedi, trait_duree, trait_mediId) values (3, 6, 2, 1);
insert into traitement (trait_ordoId, trait_qteMedi, trait_duree, trait_mediId) values (2, 4, 6, 2);
insert into traitement (trait_ordoId, trait_qteMedi, trait_duree, trait_mediId) values (1, 9, 8, 3);

insert into medicament (medi_nom, medi_stock, medi_type) values ('Benefis', 69, 'comprimé');
insert into medicament (medi_nom, medi_stock, medi_type) values ('Viskaldis', 47, 'piqûre');
insert into medicament (medi_nom, medi_stock, medi_type) values ('Toutatis', 36, 'sirop');

insert into ordonnance (ordo_medId, ordo_pathId, ordo_cliId, ordo_date) values (1, 3, 2, DATE '2023-11-29');
insert into ordonnance (ordo_medId, ordo_pathId, ordo_cliId, ordo_date) values (2, 2, 3, DATE '2023-12-19');
insert into ordonnance (ordo_medId, ordo_pathId, ordo_cliId, ordo_date) values (3, 1, 1, DATE '2023-06-30');

INSERT INTO pharmacien (pharm_nom, pharm_prenom, pharm_identifiant, pharm_mdp ) VALUES ('MENTATION', 'Ali', 'AlI_MeNt', '@@@');
INSERT INTO pharmacien (pharm_nom, pharm_prenom, pharm_identifiant, pharm_mdp ) VALUES ('TIMES', 'Vincent', '20CtMeS', '2020');
INSERT INTO pharmacien (pharm_nom, pharm_prenom, pharm_identifiant, pharm_mdp ) VALUES ('VAPABIEN', 'Yves', 'YvApAb1', '159');