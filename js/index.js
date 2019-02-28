window.onload = function init(){

	// init fitting heights for portrait pictures
	Array.from(document.querySelectorAll(".box-content"))
    .forEach(e=>{
        
        // looking if width is small than height of the picture
        let ratio = e.naturalHeight / e.naturalWidth;
        
        if (isNaN(ratio)) {
            
            // default image when not found
            e.src = "https://amp.ampifyme.com/no_image_placeholder.png";
            e.title = "Image Not Found";
            ratio = 566/680;
            // make random image color
            e.style.backgroundColor = `rgb(${Array(3).fill(1).map(e=>Math.random()*256 >> 0)})`;
        }
        // if (e.parent.getAttribute("ratio")) {
        //     e.parent.style = (e.parent.style || "").replace(/\-\-box\-ratio\s*\:\s*\d+\.?\d*\;?/, "")
        //     e.parent.style = e.parent.style + "; --box-ratio:" + (ratio) + ";";
        // }
        
        // fix widdth mobile
        if (ratio > 1 && window.innerWidth > 774) e.classList.add("fit-height");
        // fix width disktops
        else if (ratio <= 1 && window.innerWidth < 774) e.classList.add("fit-height");
    });
    
    // re-size a full height of side contents width
    let h = document.body.clientHeight;
    if (h <= window.innerHeight)
        document.querySelector(".side").style.height = h+"px";
    // console.log(h, document.querySelector(".side"));
    
}
