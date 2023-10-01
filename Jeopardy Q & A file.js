const categories = [
    {
        category: 'Ancient Civilizations',
        clues: [
            { question: 'This city was founded in 750 B.C. by two brothers, Remus and Romulus.', answer: 'Rome' },
            { question: 'Located in Mexico, this civilization made a calendar that ended in 2012.', answer: 'Mayan' },
            { question: 'This civilization invented the first writing system.', answer: 'Sumerian' },
            { question: 'Democracy comes from this civilization.', answer: 'Greek' },
            { question: 'This civilization is known for making the first code of laws.', answer: 'Babylonian' },
            { question: 'This civilization in Mexico had its capital in Tenochtitlan, modern-day Mexico City.', answer: 'Aztec' },
            { question: 'The hieroglyphic writing system comes from this ancient civilization.', answer: 'Egyptian' },
            { question: 'The island of Crete was home to this civilzation during the Bronze Age, before the Greeks.', answer: 'Minoan' },
            { question: 'This civilization occupied Italy until it was conquered by the Romans in the late 4th century BC.', answer: 'Etruscan' },
            { question: 'This empire fell to the Spanish in 1572. Its capital was Cusco, Peru.', answer: 'Incan' }
        ]
    },
    {
        category: 'U.S. History',
        clues: [
            { question: 'He was the first U.S. president.', answer: 'George Washington' },
            { question: 'This president freed the slaves in 1865.', answer: 'Abraham Lincoln' },
            { question: 'This president was in a wheelchair due to polio.', answer: 'Franklin Roosevelt' },
            { question: 'This territory was bought from Russia in 1867.', answer: 'Alaska' },
            { question: 'This city was the first capital of the U.S.', answer: 'Philadelphia' },
            { question: 'This settlement was the first successful colony in the New World.', answer: 'Jamestown' },
            { question: 'This document was the start of the American Revolution.', answer: 'The Declaration Of Independence' },
            { question: 'The issue of slavery divided the nation and started this war.', answer: 'The Civil War' },
            { question: 'The purchase of this territory form the French in 1803 doubled the size of the U.S.', answer: 'Louisiana' },
            { question: 'This state gained its independence from Mexico in 1836, but didn\'t become a state until 1845.', answer: 'Texas' }
        ]
    },
    {
        category: 'The Solar System',
        clues: [
            { question: 'This planet is the closest to the sun.', answer: 'Mercury' },
            { question: 'This planet has a big red spot that is a storm.', answer: 'Jupiter' },
            { question: 'This planet is red due to iron oxide.', answer: 'Mars' },
            { question: 'This planet spins backward compared to the other planets.', answer: 'Venus' },
            { question: 'This planet has the most water in the solar system.', answer: 'Earth' },
            { question: 'This planet has the highest number of moons: 145.', answer: 'Saturn' },
            { question: 'Comets revolve in an elliptical orbit around this body.', answer: 'The sun' },
            { question: 'This lies between Mars and Jupiter.', answer: 'The asteroid belt' },
            { question: 'The sun is fueled by nuclear fusion combining hydrogen into this element.', answer: 'Helium' },
            { question: 'Earth\'s ocean tides are caused by this astronomical body.', answer: 'The moon' }
        ]
    },
    {
        category: 'Geography',
        clues: [
            { question: 'This country has 11 time zones.', answer: 'Russia' },
            { question: 'This country has a canal that connects the Atlantic and Pacific oceans.', answer: 'Panama' },
            { question: 'This asian country is made up of over 17,000 islands', answer: 'Indonesia' },
            { question: 'This country is completely situated between Russia and China.', answer: 'Mongolia' },
            { question: 'This African river is the longest in the world.', answer: 'The Nile' },
            { question: 'What is the capital of France?', answer: 'Paris' },
            { question: 'Addis Ababa is the capital of this country.', answer: 'Ethiopia' },
            { question: 'Reykjavik is the capital of this country.', answer: 'Iceland' },
            { question: 'This southeast asian country used to be called Burma.', answer: 'Myanmar' },
            { question: 'This country near India used to be called Ceylon.', answer: 'Sri Lanka' }
        ]
    },
    {
        category: 'Pop Culture',
        clues: [
            { question: 'She sang Party In The U.S.A.', answer: 'Miley Cyrus' },
            { question: 'Leonardo DiCaprio and Kate Winslet starred in this movie.', answer: 'Titanic' },
            { question: 'Robert Downey Jr played this Marvel superhero.', answer: 'Iron Man' },
            { question: 'Matt Damon played this spy.', answer: 'Jason Bourne' },
            { question: 'John Krasinski played this action hero.', answer: 'Jack Ryan' },
            { question: 'Real name Stefani Germanotta, she sang Bad Romance.', answer: 'Lady Gaga' },
            { question: 'Before defeating aliens, he was the Fresh Prince.', answer: 'Will Smith' },
            { question: 'She was supposed to play Blanche, but instead got the part of Rose in The Golden Girls.', answer: 'Betty White' },
            { question: 'This sitcom featured a father and son running a junk business.', answer: 'Sandford And Son' },
            { question: 'This actor did the voice of both Darth Vader and The <i>Lion King\'s</i> Mufasa', answer: '' }
        ]
    },
    {
        category: 'Art',
        clues: [
            { question: 'In 1498 this scientist, engineer, architecht, and artist painted the last supper of Jesus.', answer: 'Leonardo Da Vinci' },
            { question: 'Starting in 1508 it took this Italian artist 4 years to paint the Sistine Chapel.', answer: 'Michelangelo' },
            { question: 'This Dutch artist painted the Starry Night in 1889.', answer: 'Vincent van Gogh' },
            { question: 'The Thinker was sculpted by this man.', answer: 'Auguste Rodin' },
            { question: 'He painted the Nymphéas, also known as the Water Lillies.', answer: 'Claude Monet' },
            { question: 'This Dutch artist painted The Night Watch in 1642', answer: 'Rembrandt' },
            { question: 'This Spanish artist painted Shirley Temple as a sphinx in 1939.', answer: 'Salvador Dali' },
            { question: 'This French Impressionist artist painted many dances, including The Ballet Class in 1874.', answer: 'Edgar Degas' },
            { question: 'In 1804, he sculpted a statue of Perseus holding the head of the Medusa.', answer: 'Antonio Canova' },
            { question: 'This Spanish Artist painted Child With A Dove in 1901.', answer: 'Pablo Picasso' }
        ]
    },
    {
        category: 'Literature',
        clues: [
            { question: 'He wrote "A Christmas Carol" in 1843.', answer: 'Charles Dickens' },
            { question: 'He wrote "War And Peace" in 1867.', answer: 'Leo Tolstoy' },
            { question: 'He wrote "Les Misérables" in 1862.', answer: 'Victor Hugo' },
            { question: 'He worte "From The Earth To The Moon" in 1865.', answer: 'Jules Verne' },
            { question: 'She wrote "Pride And Prdjudice" in 1813.', answer: 'Jane Austen' },
            { question: 'Sir James Barrie wrote this childrens tale of a boy who doesn\'t want to grow up.', answer: 'Peter Pan' },
            { question: 'Lewis Carrol wrote this story of a girl who falls through a rabbit hole.', answer: 'Alice In Wonderland' },
            { question: 'Rudyard Kipling wrote this story about a boy who grows up in the jungle.', answer: 'The Jungle Book' },
            { question: 'Louisa May Alcott wrote this novel in 1868 about 4 sisters growing up.', answer: 'Little Women' },
            { question: 'Samuel Clemens is the real name of this Tom Saywer author.', answer: 'Mark Twain' }
        ]
    },
    {
        category: 'Chemistry',
        clues: [
            { question: 'Two atoms of oxygen and one atom of hydrogen make this molecule.', answer: 'Water' },
            { question: 'One atom of carbon and two atoms of oxygen make this molecule.', answer: 'Carbon dioxide' },
            { question: 'Protons and neutrons make up the nucleus, while these orbit the nucleus.', answer: 'Electrons' },
            { question: 'An atom that can have a varying number of neutrons is called this.', answer: 'Isotope' },
            { question: 'An atom with a different number of protons than electrons is called this.', answer: 'Ion' },
            { question: 'This explosive element was used in blimps. Now helium is used.', answer: 'Hydrogen' },
            { question: 'Potassium nitrate is a component of this explosive substance used in guns.', answer: 'Gunpowder' },
            { question: 'Copper and tin are combined to make this historically significant alloy.', answer: 'Bronze' },
            { question: 'This element is used in making computer chips.', answer: 'Silicon' },
            { question: 'This toxic metal is a liquid at room temperature.', answer: 'Mercury' }
        ]
    },
    {
        category: 'Harry Potter',
        clues: [
            { question: 'Harry\'s parents were murdered by this dark wizard.', answer: 'Voldemort' },
            { question: 'The train for Hogwarts departs from this platform number.', answer: '9 3/4' },
            { question: 'This potion will allow you to transform into someone else.', answer: 'Polyjuice potion' },
            { question: 'This boy at school is Harry\'s rival.', answer: 'Draco Malfoy' },
            { question: 'Harry, along with the other students, gets his wand from this store.', answer: 'Olivander\'s' },
            { question: 'The elder wand, the resurrection stone, and the invisibility cloak are refferrd to as these.', answer: 'The Deathly Hallows' },
            { question: 'He is the gamekeeper for Hogwarts', answer: 'Hagrid' },
            { question: 'The Chamber Of Secrets was the home of this beast.', answer: 'Basilisk' },
            { question: 'This man was Harry\'s godfather, as well as his father\'s close friend.', answer: 'Sirius Black' },
            { question: 'The dementors are the guardians for this prison.', answer: 'Azkaban' }
        ]
    }
];
