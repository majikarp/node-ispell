//takes a file,
//1. splits every word and stores it in array
//2. iterates through array and does levenstein check
//3. builds a return array of incorrect words to suggestions
//4. write the cli
const levenshtein = require('./levenshtein');
const TernarySearchTree = require('./ternary-search');
const fs = require('fs');

exports.ispell = function(file) {

}

function ispell() {

  //gets the file to amend
  var args = process.argv.slice(2);
  var file_name = args[0];
  var text = fs.readFileSync(file_name, "utf8");
  var words = text.split(/\r?\n/);
  words = words.map(function (word) { return word.trim().split(" ")});
  words = words.filter(function (word) { return word.length > 0 });
  var words_input = [].concat.apply([], words);

  //gets all english words
  var all_words = "words.txt";
  var text_all_words = fs.readFileSync(all_words, "utf8");
  var words_output = text_all_words.split(/\r?\n/);
  words_output = words_output.map(function (word_output) { return word_output.trim()});
  words_output = words_output.filter(function (word_output) { return word_output.length > 0 });

  //turns list into ternary tree
  var tst = new TernarySearchTree();
  tst.addMany(words_output);

  //finds incorrect words
  for(var i = 0; i < words_input.length;i++){
      console.log(tst.contains(words_input[i]));
    }


  //provides suggestions


  //returns

}

ispell();
