-- create database icecreams
-- use icecreams 
-- go

CREATE TABLE category(
	id int primary key,
	icecream_type VARCHAR ( 25 ) NOT NULL
);

create table icecreams(
	id int primary key,
	category_id int,
	name varchar(40) not null,
	descr varchar(100),
	info varchar(1000),
	weight float,
	time int,
	img_path varchar(60),
	imgs jsonb,
	turul jsonb,
	constraint category_in_icecreams foreign key(category_id) references category(id) on delete cascade 
);


-- create table turul(
-- 	icecream_id int,
-- 	turul varchar(30),
--     constraint turul foreign key(icecream_id) references icecreams(id) on delete cascade 
-- );
-- create table imgs(
-- 	icecream_id int,
-- 	path varchar(60),
-- 	constraint imgs foreign key(icecream_id) references icecreams(id) on delete cascade 
-- );
-- drop table imgs;
-- drop table turul;
drop table icecreams;
drop table category;

INSERT INTO category
VALUES (1,'МӨНХ ТУНХ');

INSERT INTO category
VALUES (2,'ЖИМСТЭЙ ЗАЙРМАГ');

INSERT INTO category
VALUES (3,'ШОКОЛАДТАЙ ЗАЙРМАГ');

INSERT INTO category
VALUES (4,'MOCKTAIL');

INSERT INTO category
VALUES (5,'ААРЦТАЙ ЗАЙРМАГ');

INSERT INTO category
VALUES (6,'АЯГАТАЙ ЗАЙРМАГ');

INSERT INTO category
VALUES (7,'ЦӨЦГИЙТЭЙ ЗАЙРМАГ');

INSERT INTO category
VALUES (8,'ГЭР БҮЛИЙН ЗАЙРМАГ');

SELECT*
FROM CATEGORY

INSERT INTO icecreams
VALUES (1,1,'MUNH','Анх хараад л идэх хүсэл төрүүлнэ шоколад, цөцгийтэй MUNH','Хүүхэд багачуудад үлгэрээр дамжуулан шинэ санаа, шилдэг сургамжийг өгч, Монгол аж ахуйг танин мэдүүлж, хүүхдүүдийн хүмүүжилд эерэгээр нөлөөлж байгаа Мөнх Тунх хүүхэлдэйн кино гараад нэлээдгүй хугацаа өнгөрчээ. Эхний ангиасаа л хүүхдүүдийн сонирхлыг татаж шинэ дугаар бүрд өөр өөр санааг өгүүлж Монгол ардын үлгэрүүдийг орчин цагт хөрвүүлэн сонирхолтой содон байдлаар үзүүлдэг нь тухайн анимешний онцлог тал юм. Мөн бяцхан дүү нартаа хүүхэлдэйн киноноос гадна амин дэмээр баялаг шүүс болон Мөнх Тунх зайрмагийг хүргэж эхэллээ. Мөнх Тунх зайрмаг нь хоёр төрөлтэй бөгөөд бусад зайрмагаас Сахарын агууламж бага гэдгээрээ онцлог талтай юм. Хүүхэд бүр чихэрлэг зүйлд дуртай бөгөөд түүнийгээ ихээр идэх нь биед ямар нэгэн байдлаар сөрөг талтай байдаг бол Айсмарк компани Монголдоо анх удаа сахарын агууламж бага бүтээгдэхүүнийг бяцхан дүү нартаа зориулан үйлдвэрлэж эхэллээ.',65,6,'pictures_bvteegdehvvniitanilcuulga/м.webp','["pictures_bvteegdehvvniitanilcuulga/tus_munh.jpg","pictures_bvteegdehvvniitanilcuulga/tus_munh.png","pictures_bvteegdehvvniitanilcuulga/м.webp"]','["ШОКОЛАД ЦӨЦГИЙТЭЙ"]');
INSERT INTO icecreams
VALUES (2,1,'TUNH','Солонго шиг амттай гүзээлзгэнэ, цөцгийтэй сахарын агууламжгүй TUNH','Хүүхэд багачуудад үлгэрээр дамжуулан шинэ санаа, шилдэг сургамжийг өгч, Монгол аж ахуйг танин мэдүүлж, хүүхдүүдийн хүмүүжилд эерэгээр нөлөөлж байгаа Мөнх Тунх хүүхэлдэйн кино гараад нэлээдгүй хугацаа өнгөрчээ. Эхний ангиасаа л хүүхдүүдийн сонирхлыг татаж шинэ дугаар бүрд өөр өөр санааг өгүүлж Монгол ардын үлгэрүүдийг орчин цагт хөрвүүлэн сонирхолтой содон байдлаар үзүүлдэг нь тухайн анимешний онцлог тал юм. Мөн бяцхан дүү нартаа хүүхэлдэйн киноноос гадна амин дэмээр баялаг шүүс болон Мөнх Тунх зайрмагийг хүргэж эхэллээ. Мөнх Тунх зайрмаг нь хоёр төрөлтэй бөгөөд бусад зайрмагаас Сахарын агууламж бага гэдгээрээ онцлог талтай юм. Хүүхэд бүр чихэрлэг зүйлд дуртай бөгөөд түүнийгээ ихээр идэх нь биед ямар нэгэн байдлаар сөрөг талтай байдаг бол Айсмарк компани Монголдоо анх удаа сахарын агууламж бага бүтээгдэхүүнийг бяцхан дүү нартаа зориулан үйлдвэрлэж эхэллээ.',65,6,'pictures_bvteegdehvvniitanilcuulga/tus_tunh.webp','["pictures_bvteegdehvvniitanilcuulga/tus_tunh.webp","pictures_bvteegdehvvniitanilcuulga/tus_tunh1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_tunh2.jpg"]','["ГҮЗЭЭЛЗГЭНЭ ЦӨЦГИЙТЭЙ"]');
INSERT INTO icecreams
VALUES (3,2,'IBERRY','Инээмсэглэл бэлэглэх амт, байгалийн зэрлэг жимс IBERRY.','Инээмсэглэл бэлэглэх байгалийн амт уриатай Iberry зайрмаг нь 2010 оноос эхлэн зах зээлд нэвтэрч хэрэглэгчдийнхээ таашаалыг хэдийнээ хүлээсэн бүтээгдэхэүүн юм. Монгол улсын нөхөн сэргээгддэг нөөц болох байгалийн зэрлэг жимс чацаргана, нэрс аньс жимсийг ашиглан энэхүү бүтээгдэхүүнийг үйлдвэрлэдэг. Худалдаанд гарсан цагаасаа эхлэн нийгэмд эрэлт хэрэгцээг бий болгосон уг зайрмаг 2019 онд сав баглаа боодлоо шинэчлэн өөрчилж аягатай төрлийн мөн нэмж гаргасан юм.',65,6,'pictures_bvteegdehvvniitanilcuulga/iberry.webp','["pictures_bvteegdehvvniitanilcuulga/iberry_tus_1.jpg","pictures_bvteegdehvvniitanilcuulga/iberry_tus_2.jpg","pictures_bvteegdehvvniitanilcuulga/iberry_tus_3.jpg","pictures_bvteegdehvvniitanilcuulga/iberry_tus_4.jpg","pictures_bvteegdehvvniitanilcuulga/iberry_tus_5.jpg","pictures_bvteegdehvvniitanilcuulga/iberry_tus_6.jpg"]','["АНЬС","НЭРС","ЧАЦАРГАНА"]');
INSERT INTO icecreams
VALUES (4,2,'MELLO','MELLO киви, гүзээлзгэнэ, черриний дур булаам амт.','Өөрийгөө хөглөе! Хөгжилтэй хөгтэй дүрсгүй дурсамжийг бүтээх шинэ сэргэх мэдрэмж түгээх #Mello зайрмаг',70,6,'pictures_bvteegdehvvniitanilcuulga/mello1.webp','["pictures_bvteegdehvvniitanilcuulga/tus_mello1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mello2.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mello3.jpg","pictures_bvteegdehvvniitanilcuulga/mello.jpg"]','["STRAWBERRY","MANGO","CHERRY","KIWI"]');
INSERT INTO icecreams
VALUES (5,3,'VENUS','Хайр дурлалын амт VENUS','ХАЙР ДУРЛАЛЫН АМТ УРИАТАЙ АНХ ГАРЧ БАЙСАН ВЕНУС ЗАЙРМАГ ЗАЛУУЧУУДЫН ХАМГИЙН ИХ ИДЭХ ДУРТАЙ БҮТЭЭГДЭХҮҮНЭЭР ШАЛГАРСАН ЮМ. 2019 ОНД УГ ЗАЙРМАГТ ШИНЭЧЛЭЛТ ХИЙЖ “МЭДРЭМЖЭЭ ЧӨЛӨӨЛ” УРИАТАЙГААР ДАХИН ЗАЛУУЧУУДЫН ДУНД ТРЭНД БОЛЖ ТЭСРЭЛТ ХИЙЖ ЧАДСАН БҮТЭЭГДЭХҮҮН ЮМ. УГ ЗАЙРМАГ НЬ ШОКОЛАДТАЙ, ИРИСТЭЙ, САМАРТАЙ ГЭСЭН ҮНДСЭН ГУРВАН ТӨРӨЛТЭЙГӨӨР ХУДАЛДААЛАГДАЖ БАЙНА.',70,6,'pictures_bvteegdehvvniitanilcuulga/IMG_8548.webp','["pictures_bvteegdehvvniitanilcuulga/tus_venus2.jpg","pictures_bvteegdehvvniitanilcuulga/tus_venus3.jpg","pictures_bvteegdehvvniitanilcuulga/tus_venus4.jpg","pictures_bvteegdehvvniitanilcuulga/tus_venus5.jpg"]','["ШОКОЛАД САМАРТАЙ","ЦАГААН ШОКОЛАД ГҮЗЭЭЛЗГЭНЭТЭЙ","ЦАГААН ШОКОЛАДТАЙ","ИРИС ШОКОЛАДТАЙ","ШОКОЛАДТАЙ"]');
INSERT INTO icecreams
VALUES (6,3,'ICEMARK','Төсөөллөөс ч илүү гүзээлзгэнэ, шоколадтай зайрмаг ICEMARK','2019 онышинэ бүтээгдэхүүн Айсмарк зайрмаг нь өөртөө итгэлтэй, өнгөлөг, шинийг санаачлагч хэн бүхэнд зориулсан бренд бүтээгдэхүүн юм. Монголдоо анх удаа шинэчлэгдсэн технилогоор 3D, 4D зайрмагийг үйлдвэрлэснээс гадна, аарцтай, чацарганатай, нэрстэй, крем брюле гээд хэрэглэгчдийн дуртай олон амтыг багтаасан уг зайрмаг нь үйлдвэрлэгдэн гарсан цагаасаа эхлэн нийгэмд хэдийнээ өөрийн байр сууриа олоод эхэлсэн юм.',70,6,'pictures_bvteegdehvvniitanilcuulga/3d,4d_icemarkzairmag.webp','["pictures_bvteegdehvvniitanilcuulga/tus_icemark.png","pictures_bvteegdehvvniitanilcuulga/tus_icemark2.png","pictures_bvteegdehvvniitanilcuulga/tus_icemark1.png","pictures_bvteegdehvvniitanilcuulga/tus_icemark3.png","pictures_bvteegdehvvniitanilcuulga/tus_icemark4.png"]','["4D","3D","ААРЦТАЙ","КРЕМ БРЮЛЕ","НЭРСТЭЙ","ЧАЦАРГАНАТАЙ"]');
INSERT INTO icecreams
VALUES (7,4,'MOCKTAIL','Зөвхөн чамтай л энэ төгс амтыг хуваалцмаар MOCKTAIL','Мэргэжлийн бартендраас гаргасан жороор Mocktail Icecream 4 төрлийг санал болгож байна: - Cosmopolitan🍒 - Blue Ocean 🌊 - Mojito🍸 - Pina Colada🍍',65,6,'pictures_bvteegdehvvniitanilcuulga/mocktai;.webp','["pictures_bvteegdehvvniitanilcuulga/tus_mock.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mock1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mock2.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mock3.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mock4.jpg","pictures_bvteegdehvvniitanilcuulga/tus_mock5.jpg"]','["PINOCOLADA","MOJITO","BLUE OCEAN","COSMOPOLITAN"]');
INSERT INTO icecreams
VALUES (8,5,'BAMBAR','Дархлаа дэмжигч аарцтай, чацарганатай, гүзээлзгэнэтэй BAMBAR','Монголын уламжлалт хүнс болох аарцыг орчин үеийн технологитой хослуулан гаргасан анхны бүтээгдэхүүн юм. Тус зайрмаг нь 2003 онд үйлдвэрлэгдэж эхэлснээс хойш өнөөдрийг хүртэл хэрэглэгчдийн таашаалт нийцсэн бүтээгдэхүүн хэвээр байсаар байна. Өнөөдрийн байдлаар Аарцтай, чацаргана аарцтай, тоглоомтой бамбар гэсэн үндсэн гурван төрөлтэйгээр худалдаалагддаг.',65,5,'pictures_bvteegdehvvniitanilcuulga/бамбар.webp','["pictures_bvteegdehvvniitanilcuulga/tus_bambar1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_bambar2.jp","pictures_bvteegdehvvniitanilcuulga/tus_bambar3.jpg","pictures_bvteegdehvvniitanilcuulga/tus_bambar4.jpg"]','["ТОГЛООМТОЙ БАМБАР","ЧАЦАРГАНАТАЙ БАМБАР","ААРЦТАЙ"]');
INSERT INTO icecreams
VALUES (9,6,'TESO','Иристэй цөцгий аягатай TESO','The packing with easy-to-use cup and single-serve spoon is the main quality of Teso ice cream and the ice cream is enriched with perfect combination of caramel and cream. Caramel is the one of the main ingredient of this ice cream, which is imported from Russia. Teso is one of the most satisfying and enjoyable ice creams since its introduction to the market as a new member of our products.',65,6,'pictures_bvteegdehvvniitanilcuulga/teso_ice.webp','["pictures_bvteegdehvvniitanilcuulga/tus_teso4.jpg","pictures_bvteegdehvvniitanilcuulga/tus_teso1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_teso2.jpg"]','["ИРИСТЭЙ"]');
INSERT INTO icecreams
VALUES (10,6,'ELITE','Дур булаам амт, аягатай ELITE.','Тус зайрмаг нь цөцгийтэй зайрмаг бөгөөд нэмэлт орцонд нь самар жимс ордог болно. 570 граммийн савалгаатай тул та бүхэн гэр бүлээрээ болон олуулаа найз нөхдөөрөө идэхэд хамгийн тохиромжтой. Түүнээс гадна үйлчилгээний газрууд энэхүү зайрмагийг өөрсдийн дессертэнд хамгийн өргөнөөр ашиглан хэрэглэж байна.',550,6,'pictures_bvteegdehvvniitanilcuulga/элитэ.webp','["pictures_bvteegdehvvniitanilcuulga/eliteice.webp","pictures_bvteegdehvvniitanilcuulga/элитэ.webp","pictures_bvteegdehvvniitanilcuulga/tus_elitw.jpg"]','["ELITE"]');
INSERT INTO icecreams
VALUES (11,6,'MOCHA','Ногоон цайтай зайрмаг таныг таргалуулахгүй',NULL,65,6,'pictures_bvteegdehvvniitanilcuulga/mocha.webp',NULL,NULL);
INSERT INTO icecreams
VALUES (12,6,'YOGURT ICECREAM','Эрүүл мэндийн зайрмаг YOGURT ICECREAM',NULL,65,6,'pictures_bvteegdehvvniitanilcuulga/иогурт.webp',NULL,NULL);
INSERT INTO icecreams
VALUES (13,7,'ALYASKA','Амтат цөцгий эрүүл амттан ALYASKA','ХЭРЭГЛЭГЧДИЙН ДУНД ХЭЗЭЭНИЙ ӨӨРИЙН БАЙР СУУРИЙГ ОЛЖ ҮНЭНЧ ХЭРЭГЛЭГЧДЭЭ ТАТАЖ ЧАДСАН АЛЯСКА ЗАЙРМАГ НЬ ЦЭВЭР ЦӨЦГИЙГ АШИГЛАН ХИЙДЭГ БӨГӨӨД ЦӨЦГИЙТЭЙ, ШОКОЛАДТАЙ , ЖИМСТЭЙ ГЭСЭН ҮНДСЭН ГУРВАН ТӨРӨЛТЭЙ ЮМ. АМАНД ОРООД Л ХАЙЛАН УРСАЖ, ЗӨӨЛӨН АМТЫГ МЭДРЭХ ДУРТАЙ ХЭН БҮХЭНД АЛЯСКА ЗАЙРМАГИЙГ ЗОРИУЛАН ҮЙЛДВЭРЛЭЖ БАЙНА.',65,6,'pictures_bvteegdehvvniitanilcuulga/alyaskaface.webp','["pictures_bvteegdehvvniitanilcuulga/tus_alyaska1.jpg","pictures_bvteegdehvvniitanilcuulga/tus_alyaska4.png","pictures_bvteegdehvvniitanilcuulga/tus_alyaska2.png"]','["ЦӨЦГИЙТЭЙ","ЖИМСТЭЙ","ШОКОЛАДТАЙ"]');
INSERT INTO icecreams
VALUES (14,7,'STANDART','Уруул дурлам аз жаргалын амт STANDART',NULL,65,6,'pictures_bvteegdehvvniitanilcuulga/standartface.webp',NULL,NULL);
INSERT INTO icecreams
VALUES (15,7,'PLOMBIR','Цөцгий, самар, ирсисний төгс хослол PLOMBIR','Plombir ice cream is for everyone who enjoys a variety of taste such as creamy nuts, creamy raisin and chocolate nuts. Our customers satisfy with this ice cream which has own unique taste in the ice cream market.',70,6,'pictures_bvteegdehvvniitanilcuulga/тус_.webp','["pictures_bvteegdehvvniitanilcuulga/тус_.webp","pictures_bvteegdehvvniitanilcuulga/тус_пло1.png","pictures_bvteegdehvvniitanilcuulga/tus_plo3.jpg"]','["ИРИСТЭЙ"]');
INSERT INTO icecreams
VALUES (16,8,'IMPERIA CAKE ICECREAM','Хайртдаа өгөх хамгийн гоё бэлэг IMPERIA зайрмаган бялуу.','Монголд хамгийн анх удаа Айсмарк компани орос технологиор Монголд анх удаа тортон зайрмаг үйлдвэрлэж 2016 онд зах зээлд нэвтрүүлсэн. Тус зайрмаг нь гэр бүл хамт олон найз нөхөдтэйгээ хамт олуулаа идэхэд хамгийн тохиромжтой бөгөөд сав баглаа боодлын хувьд ч хүнд бэлэглэхэд нэн тохирох бүтээгдэхүүн юм. Худалдаанд гарцсан цагаас нь хойш хэрэглэгчид өнөөдрийг хүртэл төрсөн өдөр шинэ жил гэх мэт баярын ширээнд ашиглах зорилгоор хамгийн ихээр худалдан авсаар байна. Тус зайрмаг нь 850 граммтайгаар савлагдсан.',850,6,'pictures_bvteegdehvvniitanilcuulga/империа.webp','["pictures_bvteegdehvvniitanilcuulga/tus_imperia1.png","pictures_bvteegdehvvniitanilcuulga/tus_imperia2.jpg","pictures_bvteegdehvvniitanilcuulga/tus_imperia3.jpg"]','["ИМПЕРИЯ ТОРТОН ЗАЙРМАГ"]');
INSERT INTO icecreams
VALUES (17,8,'MINI SHOCK','Аз жаргалын амтаа хамтдаа хуваалцах хамгийн шилдэг амттан бол MINI SHOCK','Нэг дор дөрвөн төрлийн амттанг цуглуулсан Мини шок зайрмаг нь гэр бүлээрээ болон найз нөхдөөрөө идэхэд хамгийн тохиромжтой бүтээгдэхүүн юм. Хэн нэгэнд баярын бэлэг болгож өгөх, хайр сэтгэлээ илэрхийлэх, найз нөхдийн нандин холбоогоо бататгаж аз жаргалын амтаа хамтдаа хуваалцах хамгийн шилдэг амттан бол Мини шок зайрмаг юм.',420,6,'pictures_bvteegdehvvniitanilcuulga/IMG_8549.webp','["pictures_bvteegdehvvniitanilcuulga/venus_shock.jpg","pictures_bvteegdehvvniitanilcuulga/venus_shock2.jpg","pictures_bvteegdehvvniitanilcuulga/venus_shock3.jpg"]','["САМАРТАЙ ШОКОЛАДТАЙ","ШОКОЛАДТАЙ","ЦАГААН ШОКОЛАДТАЙ"]');

-- insert into turul
-- values(1,'ШОКОЛАД ЦӨЦГИЙТЭЙ');


-- insert into turul
-- values(2,'ГҮЗЭЭЛЗГЭНЭ ЦӨЦГИЙТЭЙ');

-- insert into turul
-- values(3,'АНЬС');

-- insert into turul
-- values(3,'НЭРС');

-- insert into turul
-- values(3,'ЧАЦАРГАНА');

-- insert into turul
-- values(4,'STRAWBERRY');
-- insert into turul
-- values(4,'MANGO');
-- insert into turul
-- values(4,'CHERRY');
-- insert into turul
-- values(4,'KIWI');


-- insert into turul
-- values(5,'ШОКОЛАД САМАРТАЙ');
-- insert into turul
-- values(5,'ЦАГААН ШОКОЛАД ГҮЗЭЭЛЗГЭНЭТЭЙ');
-- insert into turul
-- values(5,'ЦАГААН ШОКОЛАДТАЙ');
-- insert into turul
-- values(5,'ИРИС ШОКОЛАДТАЙ');
-- insert into turul
-- values(5,'ШОКОЛАДТАЙ');



-- insert into turul
-- values(6,'4D');
-- insert into turul
-- values(6,'3D');
-- insert into turul
-- values(6,'ААРЦТАЙ');
-- insert into turul
-- values(6,'КРЕМ БРЮЛЕ');
-- insert into turul
-- values(6,'НЭРСТЭЙ');
-- insert into turul
-- values(6,'ЧАЦАРГАНАТАЙ');



-- insert into turul
-- values(7,'PINOCOLADA');
-- insert into turul
-- values(7,'MOJITO');
-- insert into turul
-- values(7,'BLUE OCEAN');
-- insert into turul
-- values(7,'COSMOPOLITAN');
-- insert into turul
-- values(8,'ТОГЛООМТОЙ БАМБАР');
-- insert into turul
-- values(8,'ЧАЦАРГАНАТАЙ БАМБАР');
-- insert into turul
-- values(8,'ААРЦТАЙ');
-- insert into turul
-- values(9,'ИРИСТЭЙ');
-- insert into turul
-- values(10,'ELITE');
-- insert into turul
-- values(13,'ШОКОЛАДТАЙ');
-- insert into turul
-- values(13,'ЖИМСТЭЙ');
-- insert into turul
-- values(13,'ЦӨЦГИЙТЭЙ');
-- insert into turul
-- values(15,'ИРИСТЭЙ');
-- insert into turul
-- values(16,'ИМПЕРИЯ ТОРТОН ЗАЙРМАГ');
-- insert into turul
-- values(17,'САМАРТАЙ ШОКОЛАДТАЙ');
-- insert into turul
-- values(17,'ШОКОЛАДТАЙ');
-- insert into turul
-- values(17,'ЦАГААН ШОКОЛАДТАЙ');
-- insert into imgs 
-- values(1,'pictures_bvteegdehvvniitanilcuulga/tus_munh.jpg');
-- insert into imgs 
-- values(1,'pictures_bvteegdehvvniitanilcuulga/tus_munh.png');
-- insert into imgs 
-- values(1,'pictures_bvteegdehvvniitanilcuulga/м.webp');
-- insert into imgs 
-- values(2,'pictures_bvteegdehvvniitanilcuulga/tus_tunh.webp');
-- insert into imgs 
-- values(2,'pictures_bvteegdehvvniitanilcuulga/tus_tunh1.jpg');
-- insert into imgs 
-- values(2,'pictures_bvteegdehvvniitanilcuulga/tus_tunh2.jpg');
-- insert into imgs 
-- values(4,'pictures_bvteegdehvvniitanilcuulga/tus_mello1.jpg');
-- insert into imgs 
-- values(4,'pictures_bvteegdehvvniitanilcuulga/tus_mello2.jpg');
-- insert into imgs 
-- values(4,'pictures_bvteegdehvvniitanilcuulga/tus_mello3.jpg');
-- insert into imgs 
-- values(4,'pictures_bvteegdehvvniitanilcuulga/mello.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_1.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_2.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_3.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_4.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_5.jpg');
-- insert into imgs 
-- values(3,'pictures_bvteegdehvvniitanilcuulga/iberry_tus_6.jpg');
-- insert into imgs 
-- values(5,'pictures_bvteegdehvvniitanilcuulga/tus_venus2.jpg');
-- insert into imgs 
-- values(5,'pictures_bvteegdehvvniitanilcuulga/tus_venus3.jpg');
-- insert into imgs 
-- values(5,'pictures_bvteegdehvvniitanilcuulga/tus_venus4.jpg');
-- insert into imgs 
-- values(5,'pictures_bvteegdehvvniitanilcuulga/tus_venus5.jpg');
-- insert into imgs 
-- values(6,'pictures_bvteegdehvvniitanilcuulga/tus_icemark.png');
-- insert into imgs 
-- values(6,'pictures_bvteegdehvvniitanilcuulga/tus_icemark2.png');
-- insert into imgs 
-- values(6,'pictures_bvteegdehvvniitanilcuulga/tus_icemark1.png');
-- insert into imgs 
-- values(6,'pictures_bvteegdehvvniitanilcuulga/tus_icemark3.png');
-- insert into imgs 
-- values(6,'pictures_bvteegdehvvniitanilcuulga/tus_icemark4.png');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock.jpg');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock1.jpg');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock2.jpg');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock3.jpg');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock4.jpg');
-- insert into imgs 
-- values(7,'pictures_bvteegdehvvniitanilcuulga/tus_mock5.jpg');
-- insert into imgs 
-- values(8,'pictures_bvteegdehvvniitanilcuulga/tus_bambar1.jpg');
-- insert into imgs 
-- values(8,'pictures_bvteegdehvvniitanilcuulga/tus_bambar2.jpg');
-- insert into imgs 
-- values(8,'pictures_bvteegdehvvniitanilcuulga/tus_bambar3.jpg');
-- insert into imgs 
-- values(8,'pictures_bvteegdehvvniitanilcuulga/tus_bambar4.jpg');
-- insert into imgs 
-- values(9,'pictures_bvteegdehvvniitanilcuulga/tus_teso4.jpg');
-- insert into imgs 
-- values(9,'pictures_bvteegdehvvniitanilcuulga/tus_teso1.jpg');
-- insert into imgs 
-- values(9,'pictures_bvteegdehvvniitanilcuulga/tus_teso2.jpg');
-- insert into imgs 
-- values(10,'pictures_bvteegdehvvniitanilcuulga/eliteice.webp');
-- insert into imgs 
-- values(10,'pictures_bvteegdehvvniitanilcuulga/элитэ.webp');
-- insert into imgs 
-- values(10,'pictures_bvteegdehvvniitanilcuulga/tus_elitw.jpg');
-- insert into imgs 
-- values(13,'pictures_bvteegdehvvniitanilcuulga/tus_alyaska1.jpg');
-- insert into imgs 
-- values(13,'pictures_bvteegdehvvniitanilcuulga/tus_alyaska4.png');
-- insert into imgs 
-- values(13,'pictures_bvteegdehvvniitanilcuulga/tus_alyaska2.png');
-- insert into imgs
-- values(15,'pictures_bvteegdehvvniitanilcuulga/тус_.webp');
-- insert into imgs
-- values(15,'pictures_bvteegdehvvniitanilcuulga/тус_пло1.png');
-- insert into imgs
-- values(15,'pictures_bvteegdehvvniitanilcuulga/tus_plo3.jpg');
-- insert into imgs
-- values(16,'pictures_bvteegdehvvniitanilcuulga/tus_imperia1.png');
-- insert into imgs
-- values(16,'pictures_bvteegdehvvniitanilcuulga/tus_imperia2.jpg');
-- insert into imgs
-- values(16,'pictures_bvteegdehvvniitanilcuulga/tus_imperia3.jpg');
-- insert into imgs
-- values(17,'pictures_bvteegdehvvniitanilcuulga/venus_shock.jpg');
-- insert into imgs
-- values(17,'pictures_bvteegdehvvniitanilcuulga/venus_shock2.jpg');
-- insert into imgs
-- values(17,'pictures_bvteegdehvvniitanilcuulga/venus_shock3.jpg');
-- select imgs, turul,time,weight,info,name,icecream_type
-- from icecreams as i, category as c
-- where c.id=i.category_id and i.name like 'MUNH'
