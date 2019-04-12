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
   document.getElementById('quartier3').firstChild.data = name;
   document.getElementById('quartier4').firstChild.data = name;
   document.getElementById('quartier5').firstChild.data = name;
   
   
} 



function showFunction(){
    document.getElementById("solution_1").classList.remove('no_display')
    document.getElementById("map").classList.add('no_display')
}

function showFunctionEco(){
    document.getElementById("solution_2").classList.remove('no_display')
    document.getElementById("map_eco").classList.add('no_display')
}

function showFunctionGour(){
    document.getElementById("solution_3").classList.remove('no_display')
    document.getElementById("map_gour").classList.add('no_display')
}

function gameFunction(number) {
    if (number > 1) {
        document.getElementById("demo").classList.remove('btn-success')
        document.getElementById("seemore").classList.remove('btn-info')
        document.getElementById("demo").classList.add('btn-danger')
        document.getElementById('seemore').innerHTML = "Voir les résultats"
        document.getElementById("seemore").classList.add('btn-info')
        document.getElementById("demo").innerHTML = "Perdu"
    
  } else { if (number<1) {
    document.getElementById("demo").classList.remove('btn-danger')
    document.getElementById("demo").innerHTML = "Gagné"
    document.getElementById("demo").classList.add('btn-success');
    document.getElementById('seemore').innerHTML = "Voir les résultats"
    document.getElementById("seemore").classList.add('btn-info')

  } else { document.getElementById("demo").classList.remove('btn-danger')
    document.getElementById("demo").innerHTML = "Gagné"
    document.getElementById("demo").classList.add('btn-success');
    document.getElementById('seemore').innerHTML = "Voir les résultats"
    document.getElementById("seemore").classList.add('btn-info')
         }}}

function gameFunctionEco(number){
    console.log('appel fonction')
       if (number > 1) {
        document.getElementById("demo_eco").classList.remove('btn-success')
        document.getElementById("seemore_eco").classList.remove('btn-info')
        document.getElementById("demo_eco").classList.add('btn-danger')
        document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
        document.getElementById("seemore_eco").classList.add('btn-info')
        document.getElementById("demo_eco").innerHTML = "Perdu"
    
  } else { if (number<1) {
    document.getElementById("demo_eco").classList.remove('btn-danger')
    document.getElementById("demo_eco").innerHTML = "Gagné"
    document.getElementById("demo_eco").classList.add('btn-success');
    document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
    document.getElementById("seemore_eco").classList.add('btn-info')

} else {  document.getElementById("demo_eco").classList.remove('btn-danger')
    document.getElementById("demo_eco").innerHTML = "Presque !"
    document.getElementById("demo_eco").classList.add('btn-success');
    document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
    document.getElementById("seemore_eco").classList.add('btn-info')
}}}



function gameFunctionGour(number){
    console.log('appel fonction')
       if (number > 1) {
        document.getElementById("demo_gour").classList.remove('btn-success')
        document.getElementById("seemore_gour").classList.remove('btn-info')
        document.getElementById("demo_gour").classList.add('btn-danger')
        document.getElementById('seemore_gour').innerHTML = "Voir les résultats"
        document.getElementById("seemore_gour").classList.add('btn-info')
        document.getElementById("demo_gour").innerHTML = "Perdu"
    
  } else { if (number < 1) {
    document.getElementById("demo_gour").classList.remove('btn-danger')
    document.getElementById("demo_gour").innerHTML = "Gagné"
    document.getElementById("demo_gour").classList.add('btn-success');
    document.getElementById('seemore_gour').innerHTML = "Voir les résultats"
    document.getElementById("seemore_gour").classList.add('btn-info')

} else {
      
   document.getElementById("demo_gour").classList.remove('btn-danger')
    document.getElementById("demo_gour").innerHTML = "Presque ! "
    document.getElementById("demo_gour").classList.add('btn-success');
    document.getElementById('seemore_gour').innerHTML = "Voir les résultats"
    document.getElementById("seemore_gour").classList.add('btn-info')
     }}}


function backtoQuizz(){
   document.getElementById("solution_1").classList.add('no_display')
   document.getElementById("map").classList.remove('no_display')
   
}
   
function backtoQuizzEco(){
   document.getElementById("solution_2").classList.add('no_display')
   document.getElementById("map_eco").classList.remove('no_display')
   
}
   
function backtoQuizzGour(){
   document.getElementById("solution_3").classList.add('no_display')
   document.getElementById("map_gour").classList.remove('no_display')
   
}
var data_cult = [['sol1_75010', 'sol1_75011','sol1_75020'],
             ['sol1_75014', 'sol1_75005','sol1_75015','sol1_75003'],
             ['sol1_75004', 'sol1_75016', 'sol1_75017','sol1_75002','sol1_75008','sol1_75018'],
             ['sol1_75019', 'sol1_75013'],
             ['sol1_75012', 'sol1_75007'],
            ['sol1_75008', 'sol1_75001','sol1_75006','sol1_75009']]
             ;

var data_gour =  [['sol3_75009', 'sol3_75010','sol3_75012','sol3_75013','sol3_75019'],
             ['sol3_75008', 'sol3_75020','sol3_75003','sol3_75001'],
             ['sol3_75002', 'sol3_75015', 'sol3_75016','sol3_75018'],
             ['sol3_75014', 'sol3_75011','sol3_75007','sol3_75004'],
             ['sol3_75005', 'sol3_75006','sol3_75017']]
             ;
              
var data_eco = [['sol2_75001', 'sol2_75002','sol2_75010','sol2_75016'],
             ['sol2_75004', 'sol2_75008','sol2_75009','sol2_75014'],
             ['sol2_75006', 'sol2_75011', 'sol2_75018','sol2_75019'],
             ['sol2_75020', 'sol2_75005','sol2_75003','sol2_75017'],
             ['sol2_75015', 'sol2_75007','sol2_75012','sol2_75013']]
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
      green(data[colour][country], colour + 1);
    }
  }
}

function colourYellow(data) {
  for (var colour = 0; colour < data.length; colour++){    
    for (var country = 0; country < data[colour].length; country++){
      yellow(data[colour][country], colour + 1);
    }
  }
}
colourCountries(data_cult)
colourGreen(data_eco)
colourYellow(data_gour)



function displayInfo(index){
   d3.csv("../data/Culture_agg_score.csv",function(data) {

   console.log(data[0])
  
   document.getElementById("quartier").innerHTML = index + 1
   document.getElementById("musee").innerHTML = data[index].nb_musée
   document.getElementById("cinema").innerHTML = data[index].nb_cinema
   document.getElementById("kiosque").innerHTML = data[index].nb_kiosque
   document.getElementById("range_musee").value = data[index].nb_musée
   document.getElementById("range_cinema").value = data[index].nb_cinema
   document.getElementById("range_kiosque").value = data[index].nb_cinema
      
      
     
})
};


function displayInfoEco(index){
   d3.csv("../data/ecolo.csv",function(data) {

   console.log(data[0])
  console.log(data[0].taux_NO2)
   document.getElementById("quartier2").innerHTML = index + 1
   document.getElementById("no2").innerHTML = data[index].taux_NO2
   document.getElementById("dechet").innerHTML = data[index].ratio_dechet
   document.getElementById("espace").innerHTML = data[index].ratio_parcs
   document.getElementById("bio").innerHTML = data[index].pour_mag_bio
   document.getElementById("range_no2").value = data[index].taux_NO2
   document.getElementById("range_dechet").value = data[index].ratio_dechet
   document.getElementById("range_parcs").value = data[index].ratio_parcs
   document.getElementById("range_bio").value = data[index].pour_mag_bio
      
     
})
};


function displayInfo_gour(index){
   d3.csv("../data/gourmet.csv",function(data) {

   console.log(data[0])
  
   document.getElementById("quartier3").innerHTML = index + 1
   document.getElementById("etoile").innerHTML = data[index].nb_restau_etoile
   document.getElementById("fastfood").innerHTML = data[index].nb_fastfood
   document.getElementById("range_etoile").value = data[index].nb_restau_etoile
   document.getElementById("range_fastfood").value = data[index].nb_fastfood

      
     
})
};
