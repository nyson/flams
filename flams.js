function rndE(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function newAmbetsman() {
    var name = document.getElementById("name");
    var job = document.getElementById("job");

    name.textContent = rndE(lists.name) + " " + rndE(lists.surname);
    job.textContent = rndE(lists.job) + rndE(lists.surjob);
}

window.onload = function() {
    newAmbetsman();

    document.getElementById("generateAmbetsman").onclick = function() {
	var previous = document.createElement("h3");
	previous.textContent = document.getElementById("name").textContent
	 + ": " + document.getElementById("job").textContent;

	document.getElementById("prev").insertBefore(
	    previous,
	    document.getElementById("prev").firstChild
	);
	
	newAmbetsman();
    }
}
