function floskelText() {
    var p = 3; // + Math.floor(Math.Random()*7);
    var parent = document.getElementById("text");

    while(parent.firstChild) {
	parent.removeChild(parent.firstChild);
    }
    
    for(var i = 0; i < p; i++) {
	var paragraph = document.createElement("p");
	paragraph.textContent
	    = floskel(parseFloskel(rndE(floskeltexter)));
	parent.appendChild(paragraph);
    }

    console.debug(parent);
}

function floskList(arg) {
    switch(arg) {
    case "adj":
	return flosk.adjectives;
    case "desc":
	return flosk.descriptions;
    case "noun":
	return flosk.nouns;
    case "verb":
	return flosk.verbs;
    case "us":
	return flosk.unsorted;
    default:
	return ["[INVALID ARGUMENT]"];
    }

}

function parseFloskel(indata) {
    var floskelarray = [];
    var buffer = "";
    var argmode = false;
    var argre = /[a-z]/;
    
    for(i in indata) {
	if(argmode) {
	    if(indata[i].match(argre)) {
		buffer += indata[i];
	    } else {
		floskelarray.push(floskList(buffer));
		buffer = indata[i];
		argmode = false;
	    }
	} else if(indata[i] == "%") {
	    floskelarray.push(buffer);
	    buffer = "";
	    argmode = true;
	} else {
	    buffer += indata[i];
	}
    }

    if(buffer != "") {
	if(argmode) {
	    buffer = floskList(buffer);
	}
	floskelarray.push(buffer);
    }

    return floskelarray;
}

function floskel(fs) {
    var out = "";
    for(i in fs) {
	if(typeof(fs[i]) == "string") {
	    out += fs[i];
	} else if (typeof(fs[i]) == "object"){
	    out += rndE(fs[i]);
	} else {
	    out += "{ERR: "+ fs[i] +"}";
	}
    }

    return out;
}

var adj = flosk.adjectives;
var desc = flosk.descriptions;
var floskeltexter = [
    "Vi söker dig som är en %adj, %adj och %adj %desc",
    "Du ska %verb för våran organisation och ha %noun"
];
