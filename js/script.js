const length = document.querySelector('.length');

length.addEventListener('click', function(){
    const userInput = prompt('length는 몇일까요?');
    const userNumber = Number(userInput);
    if(userNumber === 5){
        alert('정답입니다!');
    }else{
        alert('오답입니다!');
    }
})