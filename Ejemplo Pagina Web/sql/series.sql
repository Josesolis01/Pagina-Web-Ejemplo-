DROP TABLE IF EXISTS Series;

CREATE TABLE Series (
    photoId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    platform VARCHAR(256) NOT NULL,
    releaseDate DATE NOT NULL,
    numSeasons INT NOT NULL,
    imageUrl VARCHAR(512) NOT NULL
);


INSERT INTO Series (title, platform, releaseDate, numSeasons, imageUrl)
VALUES
    ('Succession', 'HBO', '2018-06-03', 3, 'https://upload.wikimedia.org/wikipedia/commons/7/73/SuccessionTV.png'),
    ('Paquita Salas', 'Netflix', '2016-07-06', 3, 'https://upload.wikimedia.org/wikipedia/en/2/25/Paquita_Salas.png'),
    ('Sense8', 'Netflix', '2015-06-05', 2, 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Sense8_Title.png'),
    ('Game of Thrones', 'HBO', '2011-04-17', 8, 'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg'),
    ('The Office', 'NBC', '2005-03-24', 9, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/The_Office_US_logo.svg/2560px-The_Office_US_logo.svg.png'),
    ('Fullmetal Alchemist: Brotherhood', 'Netflix', '2009-08-26', 1, 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png'),
    ('The Witcher', 'Netflix', '2019-12-20', 2, 'https://upload.wikimedia.org/wikipedia/en/2/23/The_Witcher_Title_Card.png');