const image = document.getElementById('bg');
const eBody = document.body;

// global settings!!!!! XD
let config = {
  src: "",
  scale: 1,
  fitmode: "cover",
  hPos: 50,
  vPos: 50,
  rendering: "pixelated",
  bgcolour: 0xFFFFFF
}

function refreshWallpaper() {
  // for now, simply update image properties with config
  image.style.imageRendering=config.rendering
  image.style.objectFit=config.fitmode
  image.style.objectPosition=`${config.hPos}% ${config.vPos}%`
  image.src=config.src
  eBody.style.backgroundColor = config.bgcolour
}

function livelyPropertyListener(name, val) {
    switch(name){
      case "imgSelect":
        config.src = val
      break;
      case "colourSelect":
        config.bgcolour = val
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
      case "hPosSelect":
        config.hPos = val
      break;
      case "vPosSelect":
        config.vPos = val
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