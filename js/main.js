(() => {

const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let puzzleBoard = document.querySelector(".track-slot-drop-zone");
	let	puzzleSelectors = document.querySelectorAll("#soundBoxs img");

	let dropZones = document.querySelectorAll('.drop-zone');

	function initDrag() {
		puzzleSelectors.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}


	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you droped sumpin on me");

			if (zone.children.length > 0) {
				return false;
			}

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			let audio = document.querySelector(`audio[data-id="${piece}"]`);


		 if (!audio) { return; }


    	 audio.play();
    	 audio.loop = true;


		});
	});


		function playSound(e) {
		 let audio = document.querySelector(`audio[data-id="${e.dataId}"]`);


		 if (!audio) { return; }

    	 audio.play();


		let key = document.querySelector(`div[data-id="${e.dataId}"]`);
		key.classList.add('playing');

	}

    window.addEventListener('click', playSound);

	initDrag();

	function reload() {
		location.reload(); 
	}



})();
