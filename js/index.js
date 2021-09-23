window.onload = startMove
function startMove(){
    let oDiv = document.getElementById('z');
    let bDiv = document.getElementById('j');
    let nDiv = document.getElementById('n');
    const timer = setInterval(function () {
        let speed = 5
        if (oDiv.offsetLeft < 1065) {
            oDiv.style.left = oDiv.offsetLeft + speed + 'px'
            nDiv.innerHTML = String(Math.floor((oDiv.offsetLeft + speed) / 1065 * 100))
            let bDivWidthNum
            bDivWidthNum = parseInt(bDiv.style.width.substr(0, bDiv.style.width.length - 2))
            if (bDivWidthNum === 0) {
                bDivWidthNum = 10
            }
            bDiv.style.width = (bDivWidthNum + speed) + 'px'
        }
    }, 30)
}