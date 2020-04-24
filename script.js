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


//Copied modal window

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


