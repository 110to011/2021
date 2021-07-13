function convertImagetoGray() {
  let cvsWidth = 400;
  let cvsHeight = 300;
  let myCanvas = document.getElementById("canvas");
  myCanvas.style.display = "inline-block";
  myCanvas.style.verticalAlign = "middle";

  console.log('canvas>', myCanvas);
  let ctx = myCanvas.getContext("2d");
  let imgData = ctx.getImageData(0, 0, cvsWidth, cvsHeight);
  for (let i = 0; i < imgData.data.length; i += 4) {
    let R = imgData.data[i]; //R(0-255)
    let G = imgData.data[i + 1]; //G(0-255)
    let B = imgData.data[i + 2]; //G(0-255)
    let Alpha = imgData.data[i + 3]; //Alpha(0-255)
    //浮点算法
    let gray = R * 0.299 + G * 0.587 + B * 0.114;
    //整数算法
    //  var gray = (R*299 + G*587 + B*114 + 500) / 1000;　
    //移位算法
    //  var gray =(R*76+G*151+B*28)>>8;
    //平均值算法
    //   var gray = (R+G+B)/3;
    //仅取绿色
    //  var gray=G;
    imgData.data[i] = gray;
    imgData.data[i + 1] = gray;
    imgData.data[i + 2] = gray;
    imgData.data[i + 3] = Alpha;
  }
  ctx.putImageData(imgData, 0, 0);
}