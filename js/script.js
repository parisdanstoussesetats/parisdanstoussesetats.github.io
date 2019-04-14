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
      document.getElementById("demo").innerHTML = "Gagné"
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

    document.getElementById("quartier").innerHTML = index + 1
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


function displayInfo_gour(index) {
  d3.csv("../data/gourmet.csv", function (data) {

    console.log(data[0])

    document.getElementById("quartier3").innerHTML = index + 1
    document.getElementById("etoile").innerHTML = data[index].nb_restau_etoile
    document.getElementById("restau").innerHTML = data[index].nb_restau
    document.getElementById("fastfood").innerHTML = data[index].nb_fastfood
    document.getElementById("range_etoile").value = data[index].nb_restau_etoile
    document.getElementById("range_fastfood").value = data[index].nb_fastfood
    document.getElementById("range_restau").value = data[index].nb_restau



  })
};





// Rimane charts

const arrondissements_data = ['75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020', 'Tout Paris']

const taux_NO2 = [56.82468561, 65.81789773, 47.82171567, 47.81195784, 47.83147349, 47.83147349, 33.87887842, 46.04457733, 52.76969464, 59.29379618, 47.88241371, 47.95286957, 31.58626907, 72.02735606, 28.85429765, 86.86003937, 42.22422073, 38.40386414, 38.40386414, 47.92468723]
const EV_SA = [2.56103943285642, 0.329119132159184, 2.10242908925294, 4.0124728485138, 3.17249988671912, 1.40433770866253, 9.33610399228754, 6.29442257900673, 0.814775290607511, 1.98172141605911, 2.7430924044201, 5.28860419134265, 5.06647094663009, 9.36641853653262, 8.1929806279065, 4.61899119656841, 6.88405780318505, 5.58194146539095, 7.58080816246144, 12.6677132894373]
const dechets_jaunes = [822.7, 1592.5, 2252, 1447.7, 2626.9, 2303.1, 3271.2, 2764.3, 2422.4, 3201.5, 5447, 5650.1, 6876.5, 5200.3, 10170, 7361.9, 5186.1, 5258.5, 3951.7, 4440.4/*,82246*/]
const dechets_verts = [23891.0, 25705.0, 36675.0, 20967.0, 39867.0, 43189.0, 43761.0, 60430.0, 18068.0, 56184.0, 63854.0, 54597.0, 21175.0, 16733.0, 45002.0, 53709.0, 65937.0, 61213.0, 58073.0, 24369.0/*,833399.0*/]
const ratio = [2.006555586, 3.92262022, 6.95068636, 4.138105982, 5.567227251, 4.978649856, 6.572379104, 3.172389292, 3.41121311, 4.147372721, 5.007002828, 6.75641166, 6.612314443, 6.137256541, 7.965717237, 6.211255101, 4.612110901, 4.253112663, 3.377259947, 4.200359197]


var color = Chart.helpers.color;







var scatterChartData = {
  datasets: arrondissements_data.map((a, i) => {
    let c = '#' + Math.random().toString(16).substr(-6);
    return {
      label: a,
      borderColor: c,
      backgroundColor: color(c).alpha(0.2).rgbString(),
      data: [{ y: taux_NO2[i], x: EV_SA[i] }]
    }

  })
};

//Histogramme déchets jaune / Verts
var optionsHisto = {
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
          isplay: true,
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


  var ctxScatter = document.getElementById('scatter').getContext('2d');
  window.myScatter = Chart.Scatter(ctxScatter, {
    data: scatterChartData,
    options: {
      title: {
        display: true,
        text: 'Pollution VS Espaces verts'
      },
    }
  });

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
            '#27AE60  ',
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
            '#F7DC6F  ',
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
    options: optionsHisto
  }
  );
