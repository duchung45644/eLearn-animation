const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



// Lấy height màn hình,  chỉ lấy phẩn bên trong, ko tính toolbar, taskbar
var height = window.innerHeight   

function isInScreen(element){

    var rec = element.getBoundingClientRect()

    if(rec.bottom < 0 || rec.top > height){
        //ben ngoai
        return false
    }
    else{
        //ben trong
        return true
    }
}

// Lấy khoảng cách top
function topScreen(element){
    var rec = element.getBoundingClientRect();

    if(rec.top > 0){
        return rec.top
    }
    else{
        return 0;
    }
}

// Sleep
function Sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms)
    })
}

// Couter up
function counterUp(element, from=0, step=1, to) {
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			element.innerText = to
		} else {
			element.innerText =from
		}
	}, 20)
}


var ratingCouter = $('.rating-couter span')
var studentCouter = $('.student-couter span')

// counterUp(studentCouter, 0, 0.1, 4.8)
// counterUp(ratingCouter, 0, 1, 20)


var showOnScroll = $$('.show-on-scroll')

function loop(){
    showOnScroll.forEach(element => {
        if(isInScreen(element)){
            element.classList.add('start')
        }
        // else
        //     element.classList.remove('start')
    });
}

loop()

window.onscroll = function(){
    loop()
}