# JSON Crunch

Provides methods for removing whitespace from JSON files to save space.

## Usage

JSON Crunch has two methods: `crunch` and `crunchToFile`

- `jsonCrunch.crunch(filename, encoding="utf8")` - Crunches contents of specified file and returns it in string form. (Returns a promise)
- `jsonCrunch.crunchToFile(sourceFile, destFile, encoding="utf8")` - Crunches contents of file and writes result to another file. (Returns a promise)

## License

Released under MIT license