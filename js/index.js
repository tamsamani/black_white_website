window.onload = function init(){

	// init fitting heights for portrait pictures
	Array.from(document.querySelectorAll(".box-content"))
    .forEach(e=>{
        
        // looking if width is small than height of the picture
   		if (e.width < e.height) e.classList.add("fit-height");
    });
    
    // re-size a full height of side contents width
    let h = document.body.clientHeight;
    if (h <= window.innerHeight)
        document.querySelector(".side").style.height = h+"px";
    // console.log(h, document.querySelector(".side"));
    
}
