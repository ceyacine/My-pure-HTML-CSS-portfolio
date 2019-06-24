function scrollAppear(){
	var intro = document.querySelector('.thrd-div'),
		introPosition = intro.getBoundingClientRect().top;
		screenPosition = window.innerHeight;
	if(introPosition < screenPosition){
		intro.classList.add('intro-appear');
	}	
}
window.addEventListner('scroll', scrollAppear);