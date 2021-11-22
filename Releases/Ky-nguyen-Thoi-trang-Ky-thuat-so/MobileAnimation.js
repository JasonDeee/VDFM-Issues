// Sec4 Shopping_Illus
const DepthBackGround = document.querySelector("#sec4 .DepthBackGround");
const Shopping_Illus = document.querySelector("#sec4 .Shopping_Illus");

var DepthCanvas = new PIXI.Application({
  width: DepthBackGround.clientWidth,
  height: DepthBackGround.clientHeight,
});
DepthBackGround.prepend(DepthCanvas.view);

var BackGroundIMG = new PIXI.Sprite.from("./Images/DeptPic/room.jpg");
BackGroundIMG.width = DepthBackGround.clientWidth;
BackGroundIMG.height = DepthBackGround.clientHeight;
DepthCanvas.stage.addChild(BackGroundIMG);

var depthMap = new PIXI.Sprite.from("./Images/DeptPic/depht.jpg");
depthMap.width = DepthBackGround.clientWidth;
depthMap.height = DepthBackGround.clientHeight;

DepthCanvas.stage.addChild(depthMap);

var displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
DepthCanvas.stage.filters = [displacementFilter];

// const CanvasUpdate = () => {
//   depthMap.width = DepthBackGround.getBoundingClientRect().width;
//   depthMap.height = DepthBackGround.getBoundingClientRect().height;

//   BackGroundIMG.width = DepthBackGround.getBoundingClientRect().width;
//   BackGroundIMG.height = DepthBackGround.getBoundingClientRect().height;
// };

const Shopping_Illus_Ani = (e) => {
  let OffsetX =
    e.pageX -
    DepthBackGround.getBoundingClientRect().left -
    DepthBackGround.getBoundingClientRect().width / 2;

  let PercentX = Math.abs(
    OffsetX / (DepthBackGround.getBoundingClientRect().width / 2)
  );

  displacementFilter.scale.x = OffsetX / 5;
};

Shopping_Illus.addEventListener("mousemove", Shopping_Illus_Ani);
