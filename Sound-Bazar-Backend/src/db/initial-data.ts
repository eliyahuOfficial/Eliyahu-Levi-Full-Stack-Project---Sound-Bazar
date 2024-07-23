const users = [
    {
        name: {
            first: "Admin - Eliyahu",
            middle: "",
            last: "Levi",
        },
        phone: "0507123012",
        email: "adminu@gmail.com",
        password: "Abc!123Abc",
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel aviv",
            street: "Herzel",
            houseNumber: 5,
            zip: "8920435",
        },
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound1.jpg",
            "alt": "image of something"
        },
        isBusiness: true,
        isAdmin: true,

    },
    {
        "name": {
            "first": "Smith",
            "middle": "",
            "last": "Johnson"
        },
        "phone": "0507123011",
        "email": "alice@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "NY",
            "country": "USA",
            "city": "New York",
            "street": "5th Avenue",
            "houseNumber": 3,
            "zip": "10001"
        },
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound8.jpg",
            "alt": "Ambient Spirit"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Bob",
            "middle": "",
            "last": "Lord"
        },
        "phone": "0507123022",
        "email": "bob.s@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "CA",
            "country": "USA",
            "city": "Los Angeles",
            "street": "Sunset Blvd",
            "houseNumber": 2,
            "zip": "90001"
        },
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound11.jpg",
            "alt": "Shadowed Beginnings"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Charlie",
            "middle": "",
            "last": "Brown"
        },
        "phone": "0507123033",
        "email": "charlie@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "TX",
            "country": "USA",
            "city": "Austin",
            "street": "Congress Ave",
            "houseNumber": 3,
            "zip": "73301"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound3.jpg",
            "alt": "Shadow Serenade"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "David",
            "middle": "",
            "last": "Will"
        },
        "phone": "0507123044",
        "email": "david.w@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "FL",
            "country": "USA",
            "city": "Miami",
            "street": "Ocean Drive",
            "houseNumber": 4,
            "zip": "33101"
        },
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound13.jpg",
            "alt": "Celestial Echoes"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Emma",
            "middle": "",
            "last": "Davis"
        },
        "phone": "0507123055",
        "email": "emma.d@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "IL",
            "country": "USA",
            "city": "Chicago",
            "street": "Michigan Ave",
            "houseNumber": 5,
            "zip": "60601"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound5.jpg",
            "alt": "Dark Bass Groove"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Frank",
            "middle": "",
            "last": "Miller"
        },
        "phone": "0507123066",
        "email": "frank.m@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "NV",
            "country": "USA",
            "city": "Las Vegas",
            "street": "Las Vegas Blvd",
            "houseNumber": 6,
            "zip": "89101"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound6.jpg",
            "alt": "Melodic House Spirit"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Alice",
            "middle": "",
            "last": "Johnson"
        },
        "phone": "0507123011",
        "email": "alice.j@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "NY",
            "country": "USA",
            "city": "New York",
            "street": "5th Avenue",
            "houseNumber": 2,
            "zip": "10001"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound1.jpg",
            "alt": "Vocal Vibe"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Bob",
            "middle": "",
            "last": "Smith"
        },
        "phone": "0507123022",
        "email": "bo.smi@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "CA",
            "country": "USA",
            "city": "Los Angeles",
            "street": "Sunset Blvd",
            "houseNumber": 2,
            "zip": "90001"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound2.jpg",
            "alt": "Joyful Beats"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Charlie",
            "middle": "",
            "last": "Brown"
        },
        "phone": "0507123033",
        "email": "charl.brn@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "TX",
            "country": "USA",
            "city": "Austin",
            "street": "Congress Ave",
            "houseNumber": 3,
            "zip": "73301"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound3.jpg",
            "alt": "Shadow Serenade"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "David",
            "middle": "",
            "last": "Williams"
        },
        "phone": "0507123044",
        "email": "did.wims@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "FL",
            "country": "USA",
            "city": "Miami",
            "street": "Ocean Drive",
            "houseNumber": 4,
            "zip": "33101"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound4.jpg",
            "alt": "Techno Pulse"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Emma",
            "middle": "",
            "last": "Davis"
        },
        "phone": "0507123055",
        "email": "e.davis@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "IL",
            "country": "USA",
            "city": "Chicago",
            "street": "Michigan Ave",
            "houseNumber": 5,
            "zip": "60601"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound5.jpg",
            "alt": "Dark Bass Groove"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Frank",
            "middle": "",
            "last": "Miller"
        },
        "phone": "0507123066",
        "email": "fnk.mil@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "NV",
            "country": "USA",
            "city": "Las Vegas",
            "street": "Las Vegas Blvd",
            "houseNumber": 6,
            "zip": "89101"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound6.jpg",
            "alt": "Melodic House Spirit"
        },
        "isBusiness": false,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Dave",
            "middle": "",
            "last": "Wilson"
        },
        "phone": "0507123077",
        "email": "grace.w@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "WA",
            "country": "USA",
            "city": "Seattle",
            "street": "Pike St",
            "houseNumber": 7,
            "zip": "98101"
        },
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound12.jpg",
            "alt": "Narrative Melodies"
        },
        "isBusiness": true,
        "isAdmin": false
    },
    {
        "name": {
            "first": "Grace",
            "middle": "",
            "last": "Wilson"
        },
        "phone": "0507123077",
        "email": "gra.wil@gmail.com",
        "password": "Abc!123Abc",
        "address": {
            "state": "WA",
            "country": "USA",
            "city": "Seattle",
            "street": "Pike St",
            "houseNumber": 123,
            "zip": "98101"
        },
        "image": {
            "url": "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound10.jpg",
            "alt": "Ethereal Harmonies"
        },
        "isBusiness": false,
        "isAdmin": false
    },
];
const cards = [
    {

        title: "Rave Rhythm",
        subtitle: "Unleash Your Inner Dance Floor!",
        description: "Immerse in pulsating beats with dynamic\nclarity and powerful bass\n",
        phone: "050-3211234",
        email: "raveRhythm@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound1.jpg",
            "alt": "RaveRhythm"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound1.mp3",

        },
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel Aviv",
            street: "Shoham",
            houseNumber: 5,
            zip: "8920435"
        },



    },
    {

        title: "Vocal Vibe",
        subtitle: "Harmonies that move your soul.",
        description: "Energizing EDM with captivating\nvocals and infectious dance rhythms.\n",
        phone: "050-3211235",
        email: "vocalVibe@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound2.jpg",
            "alt": "Vocal Vibe"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound2.mp3"
        },
        "address": {
            "state": "NY",
            "country": "USA",
            "city": "New York",
            "street": "5th Avenue",
            "houseNumber": 3,
            "zip": "10001"
        },



    },
    {

        title: "Joyful Beats",
        subtitle: "Feel the Happiness Within.",
        description: "Uplifting EDM with vibrant melodies and\ninfectious positive energy.\n",
        phone: "050-3211236",
        email: "joyfulBe@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound3.jpg",
            "alt": "Joyful Beats"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound3.mp3"

        },
        "address": {
            "state": "CA",
            "country": "USA",
            "city": "Los Angeles",
            "street": "Sunset Blvd",
            "houseNumber": 2,
            "zip": "90001"
        },



    },
    {

        title: "Shadow Serenade",
        subtitle: "Sultry Voices, Enigmatic Melodies.",
        description: "Darkly captivating EDM with haunting\nvocals and mysterious rhythms.\n",
        phone: "050-3211267",
        email: "shadowSe@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound4.jpg",
            "alt": "Shadow Serenade"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound4.mp3"

        },
        "address": {
            "state": "TX",
            "country": "USA",
            "city": "Austin",
            "street": "Congress Ave",
            "houseNumber": 3,
            "zip": "73301"
        },



    },
    {

        title: "Techno Pulse",
        subtitle: "Rhythmic Energy for the Soul.",
        description: "High-energy techno beats with driving\nrhythms and futuristic vibes.\n",
        phone: "050-3219436",
        email: "technoPu@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound5.jpg",
            "alt": "Techno Pulse"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound5.mp3"

        },
        "address": {
            "state": "NV",
            "country": "USA",
            "city": "Las Vegas",
            "street": "Las Vegas Blvd",
            "houseNumber": 6,
            "zip": "89101"
        },



    },
    {

        title: "Dark Bass Groove",
        subtitle: "Deep Beats for Intense Nights.",
        description: "Powerful bass-driven rhythms for\na hypnotic and atmospheric party.\n",
        phone: "050-3441236",
        email: "darkBass@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound6.jpg",
            "alt": "Dark Bass Groove"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound6.mp3"

        },
        "address": {
            "state": "IL",
            "country": "USA",
            "city": "Chicago",
            "street": "Michigan Ave",
            "houseNumber": 5,
            "zip": "60601"
        },



    },
    {

        title: "Melodic House Spirit",
        subtitle: "Elevate with Soulful Rhythms.",
        description: "Captivating melodies and uplifting rhythms\nfor a transcendent musical journey.\n",
        phone: "050-3441236",
        email: "melodic@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound7.jpg",
            "alt": "Melodic House Spirit"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound7.mp3"

        },
        "address": {
            "state": "NY",
            "country": "USA",
            "city": "New York",
            "street": "5th Avenue",
            "houseNumber": 2,
            "zip": "10001"
        },



    },
    {

        title: "Ambient Spirit",
        subtitle: "Melding Melodies, Embracing Tranquility.",
        description: "Soothing ambient melodies creating\na serene and introspective atmosphere.\n",
        phone: "050-3441236",
        email: "ambient@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound8.jpg",
            "alt": "Ambient Spirit"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound9.mp3"

        },
        "address": {
            "state": "CA",
            "country": "USA",
            "city": "Los Angeles",
            "street": "Sunset Blvd",
            "houseNumber": 2,
            "zip": "90001"
        },



    },
    {

        title: "Ethereal Harmonies",
        subtitle: "Soothing Melodies for Tranquil Moments.",
        description: "Ambient style with spirit, blending \nsoothing melodies and tranquil ambiance.\n",
        phone: "050-3441236",
        email: "ethereal@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound10.jpg",
            "alt": "Ethereal Harmonies"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound10.mp3"

        },
        "address": {
            "state": "TX",
            "country": "USA",
            "city": "Austin",
            "street": "Congress Ave",
            "houseNumber": 3,
            "zip": "73301"
        },



    },
    {

        title: "Shadowed Beginnings",
        subtitle: "Unveil the Mystery Within Darkness.",
        description: "A dark, suspenseful introduction\nsetting the tone for intrigue.\n",
        phone: "050-3461236",
        email: "shadowed@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound11.jpg",
            "alt": "Shadowed Beginnings"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound11.mp3"

        },
        "address": {
            "state": "FL",
            "country": "USA",
            "city": "Miami",
            "street": "Ocean Drive",
            "houseNumber": 4,
            "zip": "33101"
        },



    },
    {

        title: "Celestial Echoes",
        subtitle: "Harmonious Serenity in Ethereal Sounds.",
        description: "A blend of ambient melodies and\ntranquil spirit, echoing serenity.\n",
        phone: "050-3471236",
        email: "celestial@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound13.jpg",
            "alt": "Celestial Echoes"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound13.mp3"

        },
        "address": {
            "state": "IL",
            "country": "USA",
            "city": "Chicago",
            "street": "Michigan Ave",
            "houseNumber": 5,
            "zip": "60601"
        },



    },
    {

        title: "Narrative Melodies",
        subtitle: "Soothing Melodies for Tranquil Moments.",
        description: "Ambient style with spirit, blending \nsoothing melodies and tranquil ambiance.\n",
        phone: "050-3491236",
        email: "narrative@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound12.jpg",
            "alt": "Narrative Melodies"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound12.mp3"

        },
        "address": {
            "state": "NV",
            "country": "USA",
            "city": "Las Vegas",
            "street": "Las Vegas Blvd",
            "houseNumber": 6,
            "zip": "89101"
        },



    },
    {

        title: "Serene Symphony",
        subtitle: "Harmonizing Souls with Tranquil Melodies.",
        description: "blending ambient sounds with calming melodies.",
        phone: "050-3691236",
        email: "serene@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound13.jpg",
            "alt": "Serene Symphony"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound13.mp3"

        },
        "address": {
            "state": "WA",
            "country": "USA",
            "city": "Seattle",
            "street": "Pike St",
            "houseNumber": 7,
            "zip": "98101"
        },



    },
    {

        title: "Celestial Whispers",
        subtitle: "Embracing Serenity in Ethereal Soundscapes.",
        description: "Dive into ambient realms where celestial \nwhispers harmonize in tranquility.\n",
        phone: "050-3491236",
        email: "whispers@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound14.jpg",
            "alt": "Celestial Whispers"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound14.mp3"

        },
        "address": {
            "state": "WA",
            "country": "USA",
            "city": "Seattle",
            "street": "Pike St",
            "houseNumber": 12,
            "zip": "98101"
        },



    },
    {

        title: "Echoes of Eternity",
        subtitle: "Mesmerizing Vocals in Ambient Harmony.",
        description: "Enchanting ambient tracks featuring ethereal \n vocals that resonate through eternity.\n",
        phone: "050-3491236",
        email: "echoes@gmail.com",
        web: "https://www.youtube.com",
        image: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound15.jpg",
            "alt": "Echoes of Eternity"
        },
        sound: {
            url: "https://soundbazar-react.s3.eu-north-1.amazonaws.com/sound15.mp3"

        },
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel Aviv",
            street: "Shalom",
            houseNumber: 2,
            zip: "8989932"
        },



    },
];

const comments = [
    {

        text: 'Great track! Really loving the beats 🌟👏',
        createdAt: new Date(),
    },
    {

        text: 'Awesome music! 🐱‍🏍🎧💪',
        createdAt: new Date(),
    },
    {

        text: 'This is fire! Perfect for a party 🎇💖🎉',
        createdAt: new Date(),
    },
    {

        text: 'Incredible vibe, love the rhythm! ✨🙏🎶',
        createdAt: new Date(),
    },
    {

        text: 'This track is pure gold! Amazing work 😍😎🌟👏 ',
        createdAt: new Date(),
    },
];






export { users, cards, comments };