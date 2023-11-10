const form = document.querySelector('form');
const error = document.querySelector('span');
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', function(e){
    e.preventDefault();
    error.classList.remove('show')
    inputs.forEach(input => {
            input.classList.remove('error')
        if (input.value == ''){
            input.classList.add('error')
        }
        })
        if (!this.checkValidity()){
            error.classList.add('show')
    }

})