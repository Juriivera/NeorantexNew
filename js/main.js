const wow = new WOW({
    boxClass: 'wow', /* класс, который необходим для работы wow.js */
    animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
    offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
    mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
    live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
  })
  wow.init(); /* Инициализация плагина с установленными выше свойствами */

  const numberBlock = document.getElementById("numbers");
  const endPoint = 40;
  const speed = 5; // скорость, время за которое нужно произвести анимацию в сек
  var scores = {
    score1: { score: 0,  end: 56 },
    score2: { score: 0,  end: 100 },
    score3: { score: 0,  end: 17 }
  };
  
  window.addEventListener('scroll', function() {
    const numberBlockPos = numberBlock.offsetTop,
          winHeight = window.innerHeight;
    let winScrollTop = window.scrollY,
        scrollToElem = winScrollTop + winHeight,
        anamatedNumbers = false;
    
    if( (scrollToElem - 300 > numberBlockPos) && !anamatedNumbers) {
      TweenMax.to(scores.score1, speed, {score: scores.score1.end, onUpdate: updateHandler, onUpdateParams: [1]});
      TweenMax.to(scores.score2, speed, {score: scores.score2.end, onUpdate: updateHandler, onUpdateParams: [2]});
      TweenMax.to(scores.score3, speed, {score: scores.score3.end, onUpdate: updateHandler, onUpdateParams: [3]});
    }
  });
  
  function updateHandler(index) {
    let numberBlock = document.querySelector('.col[data-target="' + index  + '"] div');
    numberBlock.innerHTML = scores[`score${index}`].score.toFixed(0);
  }
   


  