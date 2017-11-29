# JSON Crunch

Provides methods for removing whitespace from JSON files to save space.

## Installation

You can install JSON Crunch using npm:

```bash
npm install json-crunch
```

or

```bash
npm install --save-dev json-crunch
```

## Usage

JSON Crunch has two methods: `crunch` and `crunchToFile`

- `jsonCrunch.crunch(filename, encoding="utf8")` - Crunches contents of specified file and returns it in string form. (Returns a promise)
- `jsonCrunch.crunchToFile(sourceFile, destFile, encoding="utf8")` - Crunches contents of file and writes result to another file. (Returns a promise)

### Example

```javascript

const jc = require('json-crunch');

jc.crunchToFile("./source.json", "./source.min.json", "utf8").then(() = > {
	console.log("Successfully crunched file");
}).catch((e) => {
	console.log("Error occured: " e);
});
```

## License

Released under MIT license