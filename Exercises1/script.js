var pageFileName = document.getElementById('fill-name')
pageFileName.innerHTML = 'HALO!'

var pageParagraf = document.getElementsByClassName('change-all-of-me')

for(var i = 0; i < pageParagraf.length; i++){
    pageParagraf[i].innerHTML = 'HALO JUGA!'
}

var pageH2 = document.getElementsByTagName('H2')
console.log(pageH2)
pageH2[0].innerHTML = 'Apa Kabar!'


