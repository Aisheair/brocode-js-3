// JSON = (javascript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON file {key:value} OR [value1, value2, value3]

//        JSON.stringfy() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

const JSONnames = `["spongeboob", "Patrick", "Squidward", "Sandy"]`


const JSONperson = `{
    "name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]
};`

const JSONpeople = 
`[
    {"name": "Spongebob","age": 30,"isEmployed": true},
    {"name": "Patrick","age": 34,"isEmployed": false},
    {"name": "Squidward","age": 50,"isEmployed": true},
    {"name": "Sandy","age": 27,"isEmployed": false}
]`


const parsedData = JSON.parse(JSONnames)

console.log(parsedData);


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))



















