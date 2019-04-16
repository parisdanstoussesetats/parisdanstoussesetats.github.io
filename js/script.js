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
  document.getElementById('quartier3').firstChild.data = name;
  document.getElementById('quartier6').firstChild.data = name;

}



function showFunction() {
  document.getElementById("solution_1").classList.remove('no_display')
  document.getElementById("map").classList.add('no_display')
}

function showFunctionEco() {
  document.getElementById("solution_2").classList.remove('no_display')
  document.getElementById("map_eco").classList.add('no_display')
}

function showFunctionGour() {
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

  } else {
    if (number < 1) {
      document.getElementById("demo").classList.remove('btn-danger')
      document.getElementById("demo").innerHTML = "Gagné"
      document.getElementById("demo").classList.add('btn-success');
      document.getElementById('seemore').innerHTML = "Voir les résultats"
      document.getElementById("seemore").classList.add('btn-info')

    } else {
      document.getElementById("demo").classList.remove('btn-danger')
      document.getElementById("demo").innerHTML = "Presque! "
      document.getElementById("demo").classList.add('btn-success');
      document.getElementById('seemore').innerHTML = "Voir les résultats"
      document.getElementById("seemore").classList.add('btn-info')
    }
  }
}

function gameFunctionEco(number) {
  console.log('appel fonction')
  if (number > 1) {
    document.getElementById("demo_eco").classList.remove('btn-success')
    document.getElementById("seemore_eco").classList.remove('btn-info')
    document.getElementById("demo_eco").classList.add('btn-danger')
    document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
    document.getElementById("seemore_eco").classList.add('btn-info')
    document.getElementById("demo_eco").innerHTML = "Perdu"

  } else {
    if (number < 1) {
      document.getElementById("demo_eco").classList.remove('btn-danger')
      document.getElementById("demo_eco").innerHTML = "Gagné"
      document.getElementById("demo_eco").classList.add('btn-success');
      document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
      document.getElementById("seemore_eco").classList.add('btn-info')

    } else {
      document.getElementById("demo_eco").classList.remove('btn-danger')
      document.getElementById("demo_eco").innerHTML = "Presque !"
      document.getElementById("demo_eco").classList.add('btn-success');
      document.getElementById('seemore_eco').innerHTML = "Voir les résultats"
      document.getElementById("seemore_eco").classList.add('btn-info')
    }
  }
}



function gameFunctionGour(number) {
  console.log('appel fonction')
  if (number > 1) {
    document.getElementById("demo_gour").classList.remove('btn-success')
    document.getElementById("seemore_gour").classList.remove('btn-info')
    document.getElementById("demo_gour").classList.add('btn-danger')
    document.getElementById('seemore_gour').innerHTML = "Voir les résultats"
    document.getElementById("seemore_gour").classList.add('btn-info')
    document.getElementById("demo_gour").innerHTML = "Perdu"

  } else {
    if (number < 1) {
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
    }
  }
}


function backtoQuizz() {
  document.getElementById("solution_1").classList.add('no_display')
  document.getElementById("map").classList.remove('no_display')

}

function backtoQuizzEco() {
  document.getElementById("solution_2").classList.add('no_display')
  document.getElementById("map_eco").classList.remove('no_display')

}

function backtoQuizzGour() {
  document.getElementById("solution_3").classList.add('no_display')
  document.getElementById("map_gour").classList.remove('no_display')

}
var data_cult = [['sol1_75010', 'sol1_75011', 'sol1_75020'],
['sol1_75014', 'sol1_75005', 'sol1_75015', 'sol1_75003'],
['sol1_75004', 'sol1_75016', 'sol1_75017', 'sol1_75002', 'sol1_75008', 'sol1_75018'],
['sol1_75019', 'sol1_75013'],
['sol1_75012', 'sol1_75007'],
['sol1_75008', 'sol1_75001', 'sol1_75006', 'sol1_75009']]
  ;

var data_gour = [['sol3_75009', 'sol3_75010', 'sol3_75012', 'sol3_75013', 'sol3_75019'],
['sol3_75008', 'sol3_75020', 'sol3_75003', 'sol3_75001'],
['sol3_75002', 'sol3_75015', 'sol3_75016', 'sol3_75018'],
['sol3_75014', 'sol3_75011', 'sol3_75007', 'sol3_75004'],
['sol3_75005', 'sol3_75006', 'sol3_75017']]
  ;

var data_eco = [['sol2_75001', 'sol2_75002', 'sol2_75010', 'sol2_75016'],
['sol2_75004', 'sol2_75008', 'sol2_75009', 'sol2_75014'],
['sol2_75006', 'sol2_75011', 'sol2_75018', 'sol2_75019'],
['sol2_75020', 'sol2_75005', 'sol2_75003', 'sol2_75017'],
['sol2_75015', 'sol2_75007', 'sol2_75012', 'sol2_75013']]
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
  for (var colour = 0; colour < data.length; colour++) {
    for (var country = 0; country < data[colour].length; country++) {
      colourCountry(data[colour][country], colour + 1);
    }
  }
}

function colourGreen(data) {
  for (var colour = 0; colour < data.length; colour++) {
    for (var country = 0; country < data[colour].length; country++) {
      green(data[colour][country], colour + 1);
    }
  }
}

function colourYellow(data) {
  for (var colour = 0; colour < data.length; colour++) {
    for (var country = 0; country < data[colour].length; country++) {
      yellow(data[colour][country], colour + 1);
    }
  }
}
colourCountries(data_cult)
colourGreen(data_eco)
colourYellow(data_gour)



function displayInfo(index) {
  d3.csv("../data/Culture_agg_score.csv", function (data) {

    console.log(data[0])

    document.getElementById("quartier2").innerHTML = data[index].quartier
    document.getElementById("musee").innerHTML = data[index].nb_musée
    document.getElementById("cinema").innerHTML = data[index].nb_cinema
    document.getElementById("kiosque").innerHTML = data[index].nb_kiosque
    document.getElementById("range_musee").value = data[index].nb_musée
    document.getElementById("range_cinema").value = data[index].nb_cinema
    document.getElementById("range_kiosque").value = data[index].nb_kiosque



  })
};


function displayInfoEco(index) {
  d3.csv("../data/ecolo.csv", function (data) {

    console.log(index)
    console.log(data[0])
    console.log(data[0].taux_NO2)
    document.getElementById("quartier4").innerHTML = data[index].quartier
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


function displayInfo_gour(index) {
  d3.csv("../data/gourmet.csv", function (data) {

    console.log(data[0])

    document.getElementById("quartier5").innerHTML = data[index].quartier
    document.getElementById("etoile").innerHTML = data[index].nb_restau_etoile
    document.getElementById("restau").innerHTML = data[index].nb_restau
    document.getElementById("fastfood").innerHTML = data[index].nb_fastfood
    document.getElementById("range_etoile").value = data[index].nb_restau_etoile
    document.getElementById("range_fastfood").value = data[index].nb_fastfood
    document.getElementById("range_restau").value = data[index].nb_restau



  })
};





// --------------------- Rimane charts --------------------


// <---- VARS 

const arrondissements_data = ['75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020', 'Tout Paris']

const taux_NO2 = [56.8, 65.8, 47.8, 47.8, 47.8, 47.8, 33.9, 46.0, 52.8, 59.3, 47.9, 47.9, 31.6, 72.0, 28.9, 86.9, 42.2, 38.4, 38.4, 47.9]
const EV_SA = [2.56103943285642, 0.329119132159184, 2.10242908925294, 4.0124728485138, 3.17249988671912, 1.40433770866253, 9.33610399228754, 6.29442257900673, 0.814775290607511, 1.98172141605911, 2.7430924044201, 5.28860419134265, 5.06647094663009, 9.36641853653262, 8.1929806279065, 4.61899119656841, 6.88405780318505, 5.58194146539095, 7.58080816246144, 12.6677132894373]
const dechets_jaunes = [822.7, 1592.5, 2252, 1447.7, 2626.9, 2303.1, 3271.2, 2764.3, 2422.4, 3201.5, 5447, 5650.1, 6876.5, 5200.3, 10170, 7361.9, 5186.1, 5258.5, 3951.7, 4440.4/*,82246*/]
const dechets_verts = [23891.0, 25705.0, 36675.0, 20967.0, 39867.0, 43189.0, 43761.0, 60430.0, 18068.0, 56184.0, 63854.0, 54597.0, 21175.0, 16733.0, 45002.0, 53709.0, 65937.0, 61213.0, 58073.0, 24369.0/*,833399.0*/]
const ratio = [2.006555586, 3.92262022, 6.95068636, 4.138105982, 5.567227251, 4.978649856, 6.572379104, 3.172389292, 3.41121311, 4.147372721, 5.007002828, 6.75641166, 6.612314443, 6.137256541, 7.965717237, 6.211255101, 4.612110901, 4.253112663, 3.377259947, 4.200359197]
//Charts ECO 



//Charts gastro
const restaurantsdumonde = [0.33, 0.8, 0.92, 1, 0.68, 0.57, 0.13, 0.22, 0.35, 0.29, 0.41, 0.3, 0.07, 0.55, 0.05, 0.43, 0.47, 0.31, 0.28, 0.29]
const africans = [0.03, 0, 0.15, 0, 0.07, 0, 0, 0.04, 0.03, 0.31, 0.22, 0, 0.02, 0.05, 0.02, 0, 0.31, 1, 0.34, 0.19]
const antillais = [0, 0.3, 0, 0, 0, 0.32, 0.46, 0, 0.17, 0.2, 0.86, 0.25, 0.25, 0.81, 0.18, 0.29, 0.36, 0.7, 0.32, 1]
const asiatiques = [0.56, 0.61, 0.54, 0.38, 0.47, 0.47, 0.47, 0.38, 0.51, 0.35, 0.59, 0.58, 1, 0.62, 0.67, 0.58, 0.56, 0.32, 0.57, 0.55]
const americains_sud_centrale = [0.35, 0.19, 0.32, 0.39, 0.84, 0.59, 0.14, 0.12, 0.47, 0.3, 1, 0.31, 0.23, 0.25, 0.16, 0, 0.49, 0.32, 0.29, 0.1]
const europeens = [0.6, 0.63, 0.86, 0.84, 0.85, 0.96, 1, 0.75, 0.86, 0.44, 0.82, 0.86, 0.69, 0.8, 0.92, 0.95, 0.89, 0.59, 0.62, 0.69]
const indiens_pakistanais = [0.14, 0.4, 0.13, 0.07, 0.52, 0.29, 0.3, 0.28, 0.37, 1, 0.32, 0.31, 0.31, 0.44, 0.71, 0.31, 0.42, 0.36, 0.29, 0.35]
const maghrebins = [0.15, 0.32, 1, 0.22, 0.6, 0.17, 0.16, 0.16, 0.26, 0.45, 0.66, 0.39, 0.44, 0.47, 0.53, 0.15, 0.49, 0.82, 0.45, 0.87]
//Charts gastro


//Charts culture
const electro = [2, 0, 14, 0, 1, 0, 0, 2, 0, 4, 12, 1, 3, 0, 2, 2, 0, 10, 17, 4]
const hiphop = [0, 0, 3, 0, 0, 0, 0, 0, 2, 6, 8, 5, 4, 0, 0, 0, 0, 8, 7, 8]
const jazz = [132, 1, 1, 0, 3, 7, 0, 0, 0, 15, 5, 1, 3, 36, 19, 2, 0, 2, 31, 11]
const rock = [1, 1, 6, 1, 0, 0, 2, 0, 0, 12, 17, 62, 27, 3, 1, 0, 0, 23, 32, 6]
const classique = [9, 2, 3, 10, 11, 7, 1, 39, 2, 11, 1, 3, 2, 3, 8, 18, 3, 2, 61, 0]
const monde = [1, 0, 0, 0, 2, 0, 0, 0, 0, 7, 12, 0, 2, 2, 6, 0, 0, 8, 17, 30]
const autre = [1, 0, 4, 0, 1, 1, 1, 1, 0, 12, 23, 2, 10, 12, 10, 0, 1, 15, 14, 13]
//charts culture


//charts gastro



const dataun = [{
  label: "75003",
  x: 20.98,
  y: 0
},
{
  label: "75009",
  x: 102.51,
  y: 26.55
},
{
  label: "75010",
  x: 88.06,
  y: 8.85
},
{
  label: "75012",
  x: 51.60,
  y: 17.70
},
{
  label: "75013",
  x: 45.75,
  y: 0
},
{
  label: "75015",
  x: 54.70,
  y: 26.55
},
{
  label: "75018",
  x: 71.21,
  y: 26.55

},
{
  label: "75019",
  x: 46.78,
  y: 0

},
{
  label: "75020",
  x: 38.87,
  y: 0

}];
const datadeux = [{
  label: "75011",
  x: 65.36,
  y: 35.40
},
{
  label: "75014",
  x: 33.71,
  y: 17.70
},
{
  label: "75017",
  x: 57.79,
  y: 35.40
}
];

const datatrois = [{
  label: "75002",
  x: 46.78,
  y: 70.80
},
{
  label: "75004",
  x: 18.58,
  y: 26.55
},
{
  label: "75005",
  x: 48.16,
  y: 53.10
}
];

const dataquatre = [{
  label: "75001",
  x: 40.94,
  y: 106.19
},
{
  label: "75006",
  x: 29.24,
  y: 61.95
},
{
  label: "75007",
  x: 13.42,
  y: 123.89
},
{
  label: "75008",
  x: 89.78,
  y: 247.79
},
{
  label: "75016",
  x: 35.78,
  y: 115.04
}
];



//charts gastro



//---- VARS -->

var color = Chart.helpers.color;





var optionsHistoMusic = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: 'Arrondissements'
      }
    }],

    yAxes: [
      {
        id: "occurences",
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true
        },
        stacked: true,
        position: "left",
        scaleLabel: {
          isplay: true,
          labelString: 'Nombre de concerts'
        }
      },


    ]
  }
}


var optionsStackGastro = {
  //responsive: true,
  //maintainAspectRatio: false,
  legend: {
    position: 'right',
    labels: {
      boxWidth: 40,
      fontSize: 11
    }
  },
  title: {
    display: true,
    text: 'Diversité culinaire des arrondissements parisiens:le XIème au top, le VIIIéme bon dernier',
    fontSize: 18,
    fontFamily: 'Arial'
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: 'Arrondissement'
      }
    }],

    yAxes: [
      {
        id: "restaurants_",
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true
        },
        stacked: true,
        position: "left",
        scaleLabel: {
          display: true,
          labelString: 'Score obtenu pour la diversité culinaire'
        }
      }]
  }
}


//Histogramme déchets jaune / Verts
var optionsHistoDechets = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: 'arrondissements'
      }
    }],

    yAxes: [
      {
        id: "déchets",
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true
        },
        stacked: false,
        position: "left",
        scaleLabel: {
          display: true,
          labelString: 'Tonnage déchets'
        }
      },
      {
        id: "ratio",
        gridLines: {
          display: false
        },

        ticks: {
          beginAtZero: true
        },
        position: "right",
        scaleLabel: {
          display: true,
          labelString: 'Ratio (déchets jaunes/verts)'
        }
      }

    ]
  }
}


var optionsFastfood = {
  //responsive: true,
  //maintainAspectRatio: false,
  legend: {
    position: 'right'
  },
  title: {
    display: true,
    text: 'Restaurant étoilés et Fast Food: Un marbré insipide?',
    fontSize: 20,
    fontFamily: 'Arial'
  },
  scales: {
    xAxes:
      [{
        //title: "Titre",
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Part des fast food ‰',
          labelFontWeight: "bold"
        }
      }],

    yAxes: [
      {
        id: "restaurants_",
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Part des restaurant étoilés ‰'
        }
      }]
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var serie = tooltipItem.datasetIndex;//3;//
        var label = data.labels[serie][tooltipItem.index];
        return label + '|   Étoilés: ' + tooltipItem.yLabel + ',  Fast-Food: ' + tooltipItem.xLabel;
      }
    }
  }
};


//ctx fast food

var ctxFastfood = document.getElementById('fastfoodchart').getContext('2d')
window.myChartFF = new Chart(ctxFastfood, {
  type: 'scatter',
  data: {
    labels: [["75001", "75006", "75007", "75008", "75016"], ["75002", "75004", "75005"], ["75011", "75014", "75017"], ["75003", "75009", "75010", "75012", "75013", "75015", "75018", "75019", "75020"]],
    datasets: [{
      label: '++ Ratio > 2 | 2 fois plus de restaurants étoilés!',
      data: dataquatre,
      borderColor: '#25518a',  //#1d81a2         
      backgroundColor: '#25518a',//'#003f76'ou bien transparent
      showLine: false,
      ids_arr: ["75001", "75006", "75007", "75008", "750016"],
      radius: [7.19, 6.24, 20.47, 7.52, 8.43]
    },
    {
      label: '+ Ratio > 1 | Plus de restaurants étoilés!',
      data: datatrois,
      borderColor: '#00a1fa',
      backgroundColor: '#00a1fa',
      showLine: false,
      ids_arr: ["75002", "75004", "75005"],
      radius: [5.03, 4.86, 4.21]
    },
    {
      label: '- Ratio < 1 | Plus de restauration rapide!',
      data: datadeux,
      borderColor: '#FF483A',
      backgroundColor: '#FF483A',
      showLine: false,
      ids_arr: ["75011", "75014", "75017"],
      radius: [3.8, 3.05, 3.23]
    },
    {
      label: '-- Ratio < 0.5 | 2 fois plus de restauration rapide!',
      data: dataun,
      borderColor: '#B23229',
      backgroundColor: '#B23229', //ou bien transparent
      showLine: false,
      ids_arr: ["75003", "75009", "750010", "750012", "750013", "75015", "75018", "75019", "75020"],
      radius: [2, 2.52, 2.20, 2.69, 2, 2.97, 2.75, 2, 2]
    }]
  },
  options: optionsFastfood
});


//Ctx Histo Musique
var ctxHisto3 = document.getElementById('histo3').getContext('2d');

window.myHisto3 = new Chart(ctxHisto3, {
  type: 'bar',
  data: {
    labels: arrondissements_data,
    datasets: [
      {
        label: 'Electro',
        data: electro,
        backgroundColor:
          '#E74C3C',
        fillOpacity: .3,
        borderWidth: 1,
        type: "bar",
        stacked: true,
        fill: false,
        yAxisID: "occurences"
      },

      {
        label: 'Hiphop',
        data: hiphop,
        backgroundColor:
          '#E67E22',
        borderWidth: 1,
        type: "bar",
        stacked: true,
        fill: false,
        yAxisID: "occurences"
      },

      {
        label: "Jazz",
        data: jazz,
        backgroundColor:
          '#85C1E9',
        borderWidth: 1,
        type: "bar",
        fill: false,
        yAxisID: "occurences"
      },
      {
        label: "Rock",
        data: rock,
        backgroundColor:
          '#1B4F72',
        borderWidth: 1,
        type: "bar",
        fill: false,
        yAxisID: "occurences"
      },

      {
        label: "Classique",
        data: classique,
        backgroundColor:
          '#F5B7B1',
        borderWidth: 1,
        type: "bar",
        fill: false,
        yAxisID: "occurences"
      },

      {
        label: "Monde",
        data: monde,
        backgroundColor:
          '#C39BD3',
        borderWidth: 1,
        type: "bar",
        fill: false,
        yAxisID: "occurences"
      },

      {
        label: "Autre",
        data: autre,
        backgroundColor:
          '#D5D8DC',
        borderWidth: 1,
        type: "bar",
        fill: false,
        yAxisID: "occurences"
      }

    ]
  },
  options: optionsHistoMusic
}
);

//CTX scatter Eco Pollution / Espace vert
var ctxScatter = document.getElementById('scatter').getContext('2d');
window.myScatter = Chart.Scatter(ctxScatter, {
  data: {
    datasets: arrondissements_data.map((a, i) => {
      let c = '#' + Math.random().toString(16).substr(-6);
      return {
        label: a,
        borderColor: c,
        backgroundColor: color(c).alpha(0.2).rgbString(),
        data: [{ y: taux_NO2[i], x: EV_SA[i] }]
      }

    })
  },
  options: {
    title: {
      display: true,
      text: 'Pollution VS Espaces verts'
    },
  }
});


//CTX Histo déchets Jaunes / Verts
var ctxHisto = document.getElementById('histo1').getContext('2d')
window.myHisto1 = new Chart(ctxHisto, {
  type: 'bar',
  data: {
    labels: arrondissements_data,
    datasets: [
      {
        label: 'Déchets verts (en tonnes)',
        data: dechets_verts,
        backgroundColor:
          '#27AE60',
        fillOpacity: .3,
        borderWidth: 1,
        type: "bar",
        stacked: false,
        fill: false,
        yAxisID: "déchets"
      },

      {
        label: 'Tonnage déchets jaunes (en tonnes)',
        data: dechets_jaunes,
        backgroundColor:
          '#F7DC6F',
        borderWidth: 1,
        type: "bar",
        stacked: false,
        fill: false,
        yAxisID: "déchets"
      },

      {
        label: "ratio",
        data: ratio,
        backgroundColor:
          '#7FB3D5',
        borderWidth: 1,
        type: "line",
        fill: false,
        yAxisID: "ratio"
      }
    ]
  },
  options: optionsHistoDechets
}
)


//CTX Gastro 
var ctxHisto2 = document.getElementById('histo2').getContext('2d')
window.myHisto2 = new Chart(ctxHisto2, {
  type: 'bar',
  data: {
    labels: arrondissements_data,
    datasets: [
      {
        label: "Note restaurants asiatiques",
        data: asiatiques,
        backgroundColor:
          '#589FE0',
        borderWidth: 1,
        type: "bar",
        fill: false
      },
      {
        label: "Note restaurants europeens (hors France)",
        data: europeens,
        backgroundColor:
          '#1F77B4',
        borderWidth: 1,
        type: "bar",
        fill: false
      },
      {
        label: "Note restaurants indiens pakistanais et moyen-orientaux",
        data: indiens_pakistanais,
        backgroundColor:
          '#FFBE90',
        borderWidth: 1,
        type: "bar",
        fill: false
      },
      {
        label: "Note restaurants d'Amerique centrale et du sud",
        data: americains_sud_centrale,
        backgroundColor:
          '#00DCA6',
        borderWidth: 1,
        type: "bar",
        fill: false
      },
      {
        label: "Note restaurants maghrebins",
        data: maghrebins,
        backgroundColor:
          '#FF483A',
        borderWidth: 1,
        type: "bar",
        fill: false
      },
      {
        label: 'Note restaurants africains',
        data: africans,
        backgroundColor:
          '#FA8C00',
        fillOpacity: .3,
        borderWidth: 1,
        type: "bar",
        stacked: true,
        fill: false
      },
      {
        label: 'Note restaurants du monde ',
        data: restaurantsdumonde,
        backgroundColor:
          '#8471B0',
        borderWidth: 1,
        type: "bar",
        stacked: true,
        fill: false
      },
      {
        label: "Note restaurants antillais",
        data: antillais,
        backgroundColor:
          '#D10047',
        borderWidth: 1,
        type: "bar",
        fill: false
      }
    ]
  },
  options: optionsStackGastro
}
);



;
