
function progressBar(){
  let progressBar = document.querySelector('.progress-bar .proceeding');
  let scrollHeight, scrolled;
  
  scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // 현재 보고있는 웹페이지 높이
  scrolled = parseInt((window.scrollY/scrollHeight)*100);
  progressBar.style.width = scrolled+'%';
  document.querySelector('.test').innerHTML = `현재 스크롤 위치는 : ${scrolled}`;
}
document.addEventListener('scroll',progressBar)