function search_pornstars() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	console.log(input);

	let pornstarName = document.getElementsByClassName('pornstarName');
	let pornstarTags = document.getElementsByClassName('pornstarTags');
	
	for (i = 0; i < pornstarName.length; i++) {
		if (!pornstarName[i].innerHTML.toLowerCase().includes(input)&&!pornstarTags[i].innerHTML.toLowerCase().includes(input)) {
			pornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			pornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}

}

//  ------------Japanese pornstar search------------- 
function search_japanesepornstars() {
	let input = document.getElementById('japanesesearchbar').value
	input=input.toLowerCase();
	console.log(input);

	let japanesepornstarName = document.getElementsByClassName('japanesepornstarName');
	
	for (i = 0; i < japanesepornstarName.length; i++) {
		if (!japanesepornstarName[i].innerHTML.toLowerCase().includes(input)) {
			japanesepornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			japanesepornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}

//  ------------Shemale pornstar search------------- 
function search_shemalepornstars() {
	let input = document.getElementById('shemalesearchbar').value
	input=input.toLowerCase();
	console.log(input);

	let shemalepornstarName = document.getElementsByClassName('shemalepornstarName');
	
	for (i = 0; i < shemalepornstarName.length; i++) {
		if (!shemalepornstarName[i].innerHTML.toLowerCase().includes(input)) {
			shemalepornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			shemalepornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}

//  ------------male pornstar search------------- 
function search_malepornstars() {
	let input = document.getElementById('malesearchbar').value
	input=input.toLowerCase();
	console.log(input);

	let malepornstarName = document.getElementsByClassName('malepornstarName');
	
	for (i = 0; i < malepornstarName.length; i++) {
		if (!malepornstarName[i].innerHTML.toLowerCase().includes(input)) {
			malepornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			malepornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}

//  ------------cuckold search------------- 
function search_cuckold() {
	let inputCuckold = document.getElementById('cuckoldsearchbar').value
	inputCuckold=inputCuckold.toLowerCase();

	let cuckoldName = document.getElementsByClassName('cuckoldName');
	
	for (i = 0; i < cuckoldName.length; i++) {
		if (!cuckoldName[i].innerHTML.toLowerCase().includes(inputCuckold)) {
			cuckoldName[i].parentNode.parentNode.style.display="none";
		}
		else {
			cuckoldName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}

//  ------------Some porn site search------------- 
function search_sitepornstars() {
	let input = document.getElementById('sitesearchbar').value
	input=input.toLowerCase();
	console.log(input);

	let sitepornstarName = document.getElementsByClassName('sitepornstarName');
	
	for (i = 0; i < sitepornstarName.length; i++) {
		if (!sitepornstarName[i].innerHTML.toLowerCase().includes(input)) {
			sitepornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			sitepornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}

//  ------------Onlyfan pornstar search------------- 
function search_ofpornstars() {
	let input = document.getElementById('ofsearchbar').value
	input=input.toLowerCase();
	console.log(input);

	let ofpornstarName = document.getElementsByClassName('ofpornstarName');
	
	for (i = 0; i < ofpornstarName.length; i++) {
		if (!ofpornstarName[i].innerHTML.toLowerCase().includes(input)) {
			ofpornstarName[i].parentNode.parentNode.style.display="none";
		}
		else {
			ofpornstarName[i].parentNode.parentNode.style.display="flex";	
		}
	}
}
