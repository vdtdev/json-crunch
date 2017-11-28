/*
 * json-crunch by vdtdev.prod@gmail.com
 * Released under MIT license
 * http://github.com/vdt/json-crunch
 */

const fs=require('fs');

/**
 * JSON Crunch module
 * Provides methods to compress/minify JSON files
 * @module
 */
var jsonCrunch = {
	/**
	 * Crunch JSON file contents and return string
	 *
	 * @method crunchToFile
	 * @param {String} source The source filename
	 * @param {String} encoding The encoding type (optional, default is "utf8")
	 * @return {Promise} Promise resolving to a string or rejecting to an error object
	 */
	crunch: function(source, encoding){
		var encoding = defineDef(encoding, "utf8");
		return new Promise((resolve,reject) => {
			loadJSON(source, encoding).then((d) => {
				resolve(JSON.stringify(JSON.parse(d)));
			}).catch((e) => {
				reject(e);
			});
		});
	},
	/**
	 * Crunch JSON file contents and save to a file
	 *
	 * @method crunchToFile
	 * @param {String} source The source filename
	 * @param {String} dest The destination filename
	 * @param {String} encoding The encoding type (optional, default is "utf8")
	 * @return {Promise} Promise resolving if successful or rejecting with error on error
	 */
	crunchToFile: function(source, dest, encoding){
		var errors = [];
		var encoding = defineDef(encoding, "utf8");
		return new Promise((resolve,reject) => {
			jsonCrunch.crunch(source, encoding).then((data) => {
				fs.writeFile(dest, data, {encoding: encoding}, (e) => {
					if(e !== null){
						reject(e);
					} else {
						resolve();
					}
				});
			});
		});
	}
};

/**
 * Use default value if a variable is undefined
 *
 * @method defineDef
 * @param {Object} variable The variable to test
 * @param {Object} defaultValue The default value to use if undefined
 * @return {Object} Variable's value if defined, default otherwise
 */
function defineDef(variable, defaultValue){
	var defaultValue = (typeof defaultValue == "undefined")? null : defaultValue;
	return (typeof variable == "undefined")? defaultValue : variable;
};

function loadJSON(filename, encoding){
	var encoding = defineDef(encoding, "utf8");
	return new Promise((resolve,reject) => {
		fs.readFile(filename,{encoding: encoding}, (err,data) => {
			if(err !== null){
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

module.exports = jsonCrunch;