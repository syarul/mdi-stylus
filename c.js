//extra tools to write variables closer to stylus format from a json file, need the git submodules, some conversion is not correct
var fs = require('fs')

fs.readFile('./font/mdi.json', 'utf8', function(err, file){

	var data = JSON.parse(file)
	var res = data.map(function(f){
		var o = {}
		o[f.name] = f.codeName
		return o
	})

	fs.writeFile("./output.txt", JSON.stringify(res), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});
})