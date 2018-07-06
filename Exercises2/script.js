// <div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
var divEldest = document.getElementById('eldest-parent').children
divEldest[0].innerHTML = 'Diakses Melalui Eldest Parent'

//<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
var aChild = document.getElementById('a-child')
var previous = aChild.previousElementSibling
previous.innerHTML = 'Diakses Melalui a Child - previous'

// <div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
var next = aChild.nextElementSibling
next.innerHTML = 'Diakses Melalui a Child - next'

//<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
var parentALast = aChild.parentNode.parentNode.nextElementSibling
parentALast.innerHTML = 'Diakses Melalui a Child'