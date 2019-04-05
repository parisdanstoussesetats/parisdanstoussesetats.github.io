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
    
}) */




function displayName(name) {
    document.getElementById('quartier').firstChild.data = name;
} 



function showFunction(){
    document.getElementById("solution_1").classList.remove('no_display')
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

var data1 = [['sol_75001', 'sol_75002','sol_75008'],
             ['sol_75003', 'sol_75009', 'sol_75010'],
             ['sol_75012', 'sol_75004','sol_75006'],
             ['sol_75005', 'sol_75013', 'sol_75020','sol_75011'],
             ['sol_75015', 'sol_75017', 'sol_75018'],
             ['sol_75019', 'sol_75016','sol_75007','sol_75014']]
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

d3.csv("../data/culture.csv",function(data) {
   
   
console.log(data)
console.log(data[0])
console.log(data[0].quartier)
console.log(data[0].evenement)



function displayInfo(){
   console.log("working")
   document.getElementById("quartier").innerHTML = data[0].quartier
   document.getElementById("evenements").innerHTML = data[0].evenement
}
});
