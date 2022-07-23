setInterval(()=>{
    let imgs = document.querySelectorAll('img');
    let all = document.getElementsByTagName('*');
    const url = 'https://opentown.ai/_ipx/w_375/https://mindlogic-metaverse-face.s3.ap-northeast-2.amazonaws.com/custom/33607-1637074635592.jpeg'
    imgs.forEach((item)=>{
        item.setAttribute('src',url)
    })
    // 배경이미지
    // for(let i=0; i<all.length; i++){
    //     all[i].style.backgroundImage = `url(${url})`;
    // }
},500)
