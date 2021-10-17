let colors = ['#C36A2D','#191A19','#E2C275','#FFA6D5','#8E0505','#1E5128','#C37B89','#091353','#77D970','#C32BAD'];

const color_code = document.querySelector(".color-code");
const btn = document.querySelector("button");
var i=0;
const body = document.body;
btn.addEventListener('click', function(){
    i=i < colors.length ? ++i : 0;
    body.style.background = colors[i];
    i ===10 ? color_code.innerText = colors[9] : color_code.innerText = colors[i];
}
    );

