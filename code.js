
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "images/kentsfence.jpeg";
images[1] = "images/fence4.jpg";
images[2] = "Images/brittfence.jpeg";
images[3] = "images/brittfence2.jpeg";
images[4] = "images/fence3.jpeg";
images[5] = "images/fence5.jpeg";
images[6] = "images/ourfence5.jpg";
images[7] = "images/Metalfence1.jpeg"
images[8] = "images/MetalFence2.jpeg"


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

