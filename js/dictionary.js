// Aero Chord - Surface
function getFocus() {
    var elem = document.getElementById("topBarInput");
    var isFocused = (document.activeElement == elem);
    if (!isFocused) {
        elem.focus();
    }
}

function searchWord() {
    var word = document.getElementById("topBarInput").value;
    var bdword = "https://www.bdword.com/index.php?keyb=1&q=" + word;
    var merriam = "https://www.merriam-webster.com/dictionary/" + word;
    var dictionary = "http://www.dictionary.com/browse/" + word + "?s=t";
    var cambridge = "http://dictionary.cambridge.org/dictionary/english/" + word;
    var e2b = "http://www.english-bangla.com/dictionary/" + word;
    var vocabulary = "https://www.vocabulary.com/dictionary/" + word;
    var yourdictionary = "http://sentence.yourdictionary.com/" + word;
    var listSrc = {
        "bdword": bdword,
        "merriam": merriam,
        "dictionary": dictionary,
        "cambridge": cambridge,
        "e2b": e2b,
        "vocabulary": vocabulary,
        "yourdictionary": yourdictionary
    };
    for (var props in listSrc) {
        document.getElementById(props).src = listSrc[props];
        document.getElementById(props).addEventListener("load", getFocus);
    }

}