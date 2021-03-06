const image = document.getElementById('bg');

// global settings!!!!! XD
let config = {
  src: "",
  scale: 1,
  fitmode: "cover",
  rendering: "pixelated"
}

function refreshWallpaper() {
  // for now, simply update image properties with config
  image.style.imageRendering=config.rendering
  image.style.objectFit=config.fitmode
  image.src=config.src
}

function livelyPropertyListener(name, val) {
    switch(name){
      case "imgSelect":
        config.src = val
      break;
      case "fitSelect":
        switch(val){
          case 0: // "fill"
            config.fitmode="cover"
          break;
          case 1: // "fit"
            config.fitmode="contain"
          break;
          case 2: // 1:1
            config.fitmode="none"
          break;
        }
      break;
      case "scalingSelect":
        switch(val){
          case 0: // pixelated
            config.rendering = "pixelated"
          break;
          case 1: // crispy
            config.rendering = "-webkit-optimize-contrast"
          break;
        }
      break;
    }
    // refresh screen every time listener is called
    refreshWallpaper();
}