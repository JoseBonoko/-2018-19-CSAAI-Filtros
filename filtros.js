function main(){
  var foto = document.getElementById('foto')
  var canvas = document.getElementById('display')
  var redlizador = document.getElementById('redlizador')
  var redvalue = document.getElementById('redvalue')
  var bluelizador = document.getElementById('bluelizador')
  var bluevalue = document.getElementById('bluevalue')
  var greenlizador = document.getElementById('greenlizador')
  var greenvalue = document.getElementById('greenvalue')
  var grises = document.getElementById('grises')

  canvas.width = foto.width;
  canvas.height = foto.height;
  var ctx = canvas.getContext("2d");

  ctx.drawImage(foto, 0,0);

  redlizador.oninput = () => {
    redvalue.innerHTML = redlizador.value
    ctx.drawImage(foto, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > redlizador.value){
        data[i] = redlizador.value;
      }
      if (data[i+1] > bluelizador.value){
        data[i+1] = bluelizador.value;
      }
      if (data[i+2] > greenlizador.value){
        data[i+2] = greenlizador.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  bluelizador.oninput = () => {
    bluevalue.innerHTML = bluelizador.value
    ctx.drawImage(foto, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > bluelizador.value){
        data[i+1] = bluelizador.value;
      }
      if (data[i] > redlizador.value){
        data[i] = redlizador.value;
      }
      if (data[i+2] > greenlizador.value){
        data[i+2] = greenlizador.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  greenlizador.oninput = () => {
    greenvalue.innerHTML = greenlizador.value
    ctx.drawImage(foto, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > bluelizador.value){
        data[i+1] = bluelizador.value;
      }
      if (data[i] > redlizador.value){
        data[i] = redlizador.value;
      }
      if (data[i+2] > greenlizador.value){
        data[i+2] = greenlizador.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  grises.onclick = () => {
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
  }
}
