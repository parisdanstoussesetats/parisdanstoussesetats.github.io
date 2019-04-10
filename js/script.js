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
    document.getElementById('quartier2').firstChild.data = name;
   
} 



function showFunction(){
    document.getElementById("solution_1").classList.remove('no_display')
    document.getElementById("map").classList.add('no_display')
}

function gameFunction(number) {
    if (number > 0) {
        document.getElementById("demo").classList.remove('btn-success')
        document.getElementById("seemore").classList.remove('btn-info')
        document.getElementById("demo").classList.add('btn-danger')
        document.getElementById('seemore').innerHTML = "Voir les résultats"
        document.getElementById("seemore").classList.add('btn-info')
        document.getElementById("demo").innerHTML = "Perdu"
    
  } else {
    document.getElementById("demo").classList.remove('btn-danger')
    document.getElementById("demo").innerHTML = "Gagné"
    document.getElementById("demo").classList.add('btn-success');
    document.getElementById('seemore').innerHTML = "Voir les résultats"
    document.getElementById("seemore").classList.add('btn-info')

  }}

function backtoQuizz(){
   document.getElementById("solution_1").classList.add('no_display')
   document.getElementById("map").classList.remove('no_display')
   
}
var data1 = [['sol1_75008', 'sol1_75001','sol1_75006','sol1_75009'],
             ['sol1_75012', 'sol1_75007'],
             ['sol1_75014', 'sol1_75005','sol1_75015','sol1_75003'],
             ['sol1_75019', 'sol1_75013'],
             ['sol1_75004', 'sol1_75016', 'sol1_75017','sol1_75002','sol1_75008','sol1_75018'],
             ['sol1_75010', 'sol1_75011','sol1_75020']]
             ;

function colourCountry(name, colour) {
    var country = document.getElementById(name);
    document.getElementById(name).classList.add('colour' + colour);
}

function green(name, colour) {
    var country = document.getElementById(name);
    document.getElementById(name).classList.add('green' + colour);
}

function yellow(name, colour) {
    var country = document.getElementById(name);
    document.getElementById(name).classList.add('yellow' + colour);
}


function colourCountries(data) {
  for (var colour = 0; colour < data.length; colour++){    
    for (var country = 0; country < data[colour].length; country++){
      colourCountry(data[colour][country], colour + 1);
    }
  }
}

function colourGreen(data) {
  for (var colour = 0; colour < data.length; colour++){    
    for (var country = 0; country < data[colour].length; country++){
      colourCountry(data[colour][country], colour + 1);
    }
  }
}

function colourYellow(data) {
  for (var colour = 0; colour < data.length; colour++){    
    for (var country = 0; country < data[colour].length; country++){
      colourCountry(data[colour][country], colour + 1);
    }
  }
}
colourCountries(data1)
colourGreen(data1)
colourYellow(data1)



function displayInfo(index){
   d3.csv("../data/Culture_agg_score.csv",function(data) {

   console.log(data[0])
  
   document.getElementById("quartier").innerHTML = index + 1
   document.getElementById("evenements").innerHTML = data[index].nb_musée
   document.getElementById("cinema").innerHTML = data[index].nb_cinema
   document.getElementById("livres").innerHTML = data[index].nb_kiosque
      
     
})
};
