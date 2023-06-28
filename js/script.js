const $ = document;
// main
const main = $.querySelector('.main')
const photo = $.querySelector('.photo')
const succsess = $.querySelector('.succsess')
const mailBox = $.querySelector('.mailBox')
const notifError = $.querySelector('.notifError')
const emailAddress = $.querySelector('.emailAddress')
const mailBtn = $.querySelector('.mailBtn')
const successBtn = $.querySelector('.successBtn')




// event
mailBtn.addEventListener('click', function(event){
    event.preventDefault()
    if(mailBox.checkValidity() && mailBox.value != ''){
        main.classList.add('active')
        photo.classList.add('active')
        notifError.style.display = 'none'
        mailBox.style.backgroundColor = ''
        succsess.classList.add('active')
        emailAddress.innerHTML = mailBox.value
    }else{
        notifError.style.display = 'block'
        mailBox.style.backgroundColor = 'hsla(4, 100%, 67%, 0.52)'
    }
})

successBtn.addEventListener('click', function(event){
        main.classList.remove('active')
        photo.classList.remove('active')
        notifError.style.display = 'none'
        mailBox.style.backgroundColor = ''
        succsess.classList.remove('active')

        mailBox.value = ''
})

mailBox.addEventListener('input', function(){
    if(!mailBox.checkValidity()){
        
        notifError.style.display = 'block'
        mailBox.style.backgroundColor = 'hsla(4, 100%, 67%, 0.52)'
    }else{
        notifError.style.display = 'none'
        mailBox.style.backgroundColor = ''
    }
})