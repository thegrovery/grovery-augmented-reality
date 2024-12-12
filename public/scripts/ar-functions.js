/*===== Set Position of 3D Object =====*/
function positionSet(){
	//DOM elements
	let objectWrapper = document.querySelector('#objectWrapper');
	let controlsContainer = document.querySelector('.controls');
	let toggleButton = document.querySelector('.controlButton[data-control-button="toggle"]');
	let wallView = document.querySelector('span[data-view="wall"]');
	let flatView = document.querySelector('span[data-view="flat"]');

	//Data Variables
	//Wall settings
	let wallRotationSetting = objectWrapper?.getAttribute("data-wall-rotation");
	let wallPositionSetting = objectWrapper?.getAttribute("data-wall-position");
	//Flat settings
	let flatRotationSetting = objectWrapper?.getAttribute("data-flat-rotation");
	let flatPositionSetting = objectWrapper?.getAttribute("data-flat-position");
	//Card settings
	let cardRotationSetting = objectWrapper?.getAttribute("data-card-rotation");
	let cardPositionSetting = objectWrapper?.getAttribute("data-card-position");

	//Check URL for position parameter
	const params = new URLSearchParams(window.location.search);
	const urlPosition = params.get('position');

	if (urlPosition === 'wall') {
		console.log("URL position: wall");
		objectWrapper?.setAttribute("data-current-view", "wall");
		updateObjectWrapperSettings("wall");
	} else if (urlPosition === 'flat') {
		console.log("URL position: flat");
		objectWrapper?.setAttribute("data-current-view", "flat"); 
		updateObjectWrapperSettings("flat");
	}

	//Updates .objectWrapper element based on element's data-attribute settings
	function updateObjectWrapperSettings(viewType){
		if(viewType == "wall"){
			objectWrapper?.setAttribute("rotation", wallRotationSetting);
			objectWrapper?.setAttribute("position", wallPositionSetting);
			updateViewDisplay(viewType);
		} else if(viewType == "flat"){
			objectWrapper?.setAttribute("rotation", flatRotationSetting);
			objectWrapper?.setAttribute("position", flatPositionSetting);
			updateViewDisplay(viewType);
		} else if(viewType == "card"){
			objectWrapper?.setAttribute("rotation", cardRotationSetting);
			objectWrapper?.setAttribute("position", cardPositionSetting);
			updateViewDisplay(viewType);
		} else{
			console.log("No view type found");
		}
	}

	function updateViewDisplay(viewType) {
		if(viewType === "wall") {
			wallView?.style.setProperty("display", "inline");
			flatView?.style.setProperty("display", "none");
		} else if(viewType === "flat") {
			wallView?.style.setProperty("display", "none"); 
			flatView?.style.setProperty("display", "inline");
		}
		objectWrapper?.setAttribute("data-current-view", viewType);
		controlsContainer?.setAttribute('data-current-rotation', viewType);
	}

	toggleButton?.addEventListener('click', function() {
		const currentView = objectWrapper?.getAttribute("data-current-view") || "flat";
		const newView = currentView === "wall" ? "flat" : "wall";
		updateObjectWrapperSettings(newView);
	});

	// Initialize view display based on initial setting if no URL parameter
	if (!urlPosition) {
		updateViewDisplay(objectWrapper?.getAttribute("data-current-view") || "flat");
	}
}

function modalEvents(){
	function openModal(modalId){
		let modal = document.querySelector(`#${modalId}`);
		modal.setAttribute('data-active', 'true');
	}

	function closeModal(){
		let elements = document.querySelectorAll('.modalWrapper');
		elements.forEach(element => {
			element.setAttribute('data-active', 'false');
		});
	}

	//EventListeners
	let openButtons = document.querySelectorAll('[data-modal-open]');
	openButtons.forEach(element => {
		const modalId = element.getAttribute('data-modal-open');
		element.addEventListener('click', function() {
			openModal(modalId)
		});
	});

	let closeButtons = document.querySelectorAll('.modalClose');
	closeButtons.forEach(element => {
		element.addEventListener('click', function() {
			closeModal();
		});
	});
}



//Run functions
document.addEventListener('DOMContentLoaded', positionSet); 
document.addEventListener('DOMContentLoaded', modalEvents); 