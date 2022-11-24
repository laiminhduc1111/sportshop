var sizes = document.querySelectorAll('.size')
sizes.forEach(function(size){
    size.onclick = function(){
        
            document.querySelector('.size.size-choose').classList.remove('size-choose')
            this.classList.add('size-choose')
    }
})

function cong(){
    var t = document.querySelector('input[name="quantity-selector"]').value
    document.querySelector('input[name="quantity-selector"]').value =parseInt (t)+1
}
function tru(){
    var v = document.querySelector('input[name="quantity-selector"]').value
   if(parseInt(v)>1){
    document.querySelector('input[name="quantity-selector"]').value =parseInt (v) -1
   }
}