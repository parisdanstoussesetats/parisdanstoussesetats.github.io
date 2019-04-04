   /*
var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image polygon')
var lists = map.querySelectorAll('.map__list li')

paths.forEach(function(path){
    path.addEventListener('mouseenter',function(e) {
        var id = this.id
        map.querySelectorAll('.is-active').forEach( function(item){
            item.classList.remove('is-active')
        })
        document.querySelector('#list_'+id).classList.add("is-active")
    })
    
})
*/

function displayName(name) {
    document.getElementById('quartier').firstChild.data = name;
}

function gameFunction(number) {
    if (number > 0) {
        document.getElementById("demo").classList.remove('btn-success')
        document.getElementById("seemore").classList.remove('btn-info')
        document.getElementById("demo").classList.add('btn-danger')
        document.getElementById("demo").innerHTML = "Perdu"
    
  } else {
    document.getElementById("demo").classList.remove('btn-danger')
    document.getElementById("demo").innerHTML = "Gagné"
    document.getElementById("demo").classList.add('btn-success');
    document.getElementById('seemore').innerHTML = "Voir les résultats"
    document.getElementById("seemore").classList.add('btn-info')

  }}

var data1 = [['75001', '75002','75008'],
             ['75003', '75009', '75010'],
             ['75012', '75004','75006'],
             ['75005', '75013', '75020','75011'],
             ['75015', '75017', '75018'],
             ['75019', '75016','75007','75014']]
             ;

function colourCountry(name, colour) {
    var country = document.getElementById(name);
    document.getElementById(name).classList.add('colour' + colour);
}



function colourCountries(data) {
  for (var colour = 0; colour < data.length; colour++){    
    for (var country = 0; country < data[colour].length; country++){
      colourCountry(data[colour][country], colour + 1);
    }
  }
}
colourCountries(data1)
