function Drill(drillBit, chargeStatus, rotationDirection) {
  this.drillBit = function (bitType) {
    switch (this.bitType) {
        case "HSS":
          return "Use on wood, metal, and plastic";
        case "Brad Point":
          return "Use on wood and some platics";
        case "Masonry":
          return "Use on brick, concrete, or stone";
        default:
          return "Unidentified bit type";
      }
    };
  }
  this.chargeStatus = function(status) {
    if (this.status === true) {
      console.log("Ready to use!");
    }
    else {
      console.log("Please charge");
    }
  }
}
  this.rotationDirection = rotationDirection
}
//basic prototype/properties above

//methods
