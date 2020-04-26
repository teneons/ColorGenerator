let outColor = document.getElementById('outColor')
let btnCopy = document.getElementById('btnCopy')

const generateColor = () => {

    //generate random fom 16m. colors, and convert to hex
    const color = Math.floor(Math.random()*16777215).toString(16)

    //apply to html
    document.body.style.backgroundColor = `#${color}`;
    //out color
    outColor.value = `#${color}`;

}
document.getElementById('btnG').addEventListener('click', generateColor)


//Copied data from container
function showCopy() { document.getElementById('modalCopied').style.visibility = 'visible'; }
function hideCopy() { document.getElementById('modalCopied').style.visibility = 'hidden'; }

//copy color
outColor.addEventListener('click', () => {
    outColor.select();
    document.execCommand('copy');

    setTimeout(() => {
        showCopy()
    }, 50)

    setTimeout(() => {
        hideCopy()
    }, 300)
})


//Move container
const containerContent = document.getElementById('containerContent');

containerContent.onmousedown = function(event) {

  let shiftX = event.clientX - containerContent.getBoundingClientRect().left;
  let shiftY = event.clientY - containerContent.getBoundingClientRect().top;

  containerContent.style.position = 'absolute';
  //containerContent.style.zIndex = 1000;

  moveAt(event.pageX, event.pageY);

  //read XY and /2 for centr
  function moveAt(pageX, pageY) {
    containerContent.style.left = pageX - shiftX + 'px';
    containerContent.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  //move on screen
  document.addEventListener('mousemove', onMouseMove);

  //fix new XY for cantainer on new place, remove not use events
  containerContent.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    containerContent.onmouseup = null;
  };


  //pin container on screen
  containerContent.ondragstart = function() {
    return false;
  };
};
