
// SVGs paths
const moonPath = "M19 29C19 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 19 12.9837 19 29Z";
const sunPath = "M58 29C58 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 58 12.9837 58 29Z";

const lightMode = document.querySelector('#light_mode');


let toggle = false;

lightMode.addEventListener('click', () =>{
// set up timeline
	const timeline = anime.timeline({
		duration: 750,
		easing: "easeOutExpo"
	});
// Animate from sun to moon
	timeline.add({
		targets:".sun",
		d: [{value: toggle ? sunPath : moonPath}]
	})

	.add({
		targets: ".number__6", 
		backgroundColor: toggle ? "rgb(94, 230, 235)" : "rgb(24, 10, 10)"
	}, '-=700');
	// Sun goes back when clicking on the moon
	if(!toggle){
		toggle:false;
	}else{
		toggle:true;
	}

	//Toggle text Light to Dark
	function toggleText() {
		let text =document.querySelector('#text');
		if (text.innerHTML === "Light Mode") {
		  text.innerHTML = "Dark Mode";
		} else {
		  text.innerHTML = "Light Mode";
		}
	  }
	  toggleText();

});


