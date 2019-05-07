var dropButton = document.getElementById('drop-button');
var items = document.getElementsByClassName('item');
var dropButton2 = document.getElementById('drop-button2');
var items2 = document.getElementsByClassName('item2');

function start(){
dropButton.onclick = function(){
	for(a = 0; a < items.length; a++){
	items[a].style.display = 'block';
	dropButton.onclick = function(){
		for(b = 0; b < items.length; b++){
			items[b].style.display = 'none';
			start();
		}
	}
	}
}
}

start();


function start2(){
dropButton2.onclick = function(){
	for(a = 0; a < items2.length; a++){
	items2[a].style.display = 'block';
	dropButton2.onclick = function(){
		for(b = 0; b < items2.length; b++){
			items2[b].style.display = 'none';
			start2();
		}
	}
	}
}
}

start2();
