## Description

7Shifts Technical Interview

I bootstrapped this project with NestJS
The main code to focus on is in 'string-calculator.service.ts' and 'string-calculator.service.spec.ts'
most of the rest of the project was bootstrapped


## Installation

```bash
$ npm install
```

## Running the app

# watch mode
```bash
$ npm run start:dev
```

you then have 2 options - 

1. use cURL and adjust the "numbers" input

curl --location --request POST 'http://localhost:3000/string-calculator/' \
--header 'Content-Type: application/json' \
--data-raw '{
"numbers": "//;;,@,%%\n1;;4@7%%14"
}'

2. Edit the code in "hardCodedAdd" to whatever input you want
   const numbers = `//;;,@,%%\n1;;4@7%%14`;
  
Then navigate to http://localhost:3000/string-calculator in your browswer


# tests
```bash
$ npm run test
```


## License

Nest is [MIT licensed](LICENSE).
