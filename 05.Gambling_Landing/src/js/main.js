// Custom scripts
//Switcher
function togglePrice(){
const billing = document.querySelector('.billing')
const billingItems = document.querySelectorAll('.billing__item')
billing.addEventListener('click',()=>{
    billing.classList.toggle('active')
    if (!billing.classList.contains('active')){
        billingItems[0].classList.add('active')
        billingItems[2].classList.remove('active')
    }else{
        billingItems[2].classList.add('active')
        billingItems[0].classList.remove('active')
    }
})
}
togglePrice()