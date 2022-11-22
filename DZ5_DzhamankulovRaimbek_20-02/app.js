let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        const styles=e.currentTarget.classList;
        if (styles.contains('decrease')){
            if (count > 0){
                count--;
            }
        }else if (styles.contains('increase')){
            count++;
        }else {
            count = 0;
        }
        value.textContent = count;
    });
});


console.log(buttons)
