/*

REPRENDRE LES DATA

*/

    
var ctx = document.getElementById("line-chart").getContext('2d'); 

var arrondissements = ["75008","75011"];

var rotw = ["0.5", "0.9"]

var africans = ["0.2", "1.5"]

var antillais =["0", "0.6"]

var asiatiques = ["12.9", "19.8"]

var americains_sud_centrale = ["0.2", "2.2"]

var europeens = ["9.3", "10.2"]

var indiens_pakistanais = ["2.2", "2.6"]

var maghrebins =["0.6", "2.5"]

var options = {
scales: {
    xAxes: [{
                gridLines: {
                    display:false
                },
            stacked: true,
            scaleLabel: {
                    display: true,
                    labelString: 'Arrondissements'
                }
    }],
    
    yAxes: [
            {   id: "restaurants_",
                gridLines: {
                    display:false
                }, 
                ticks: {
                     beginAtZero:true
                },
                stacked: true,
                position: "left",
                scaleLabel: {
                    display: true,
                    labelString: '% restaurants'
                }
            }]
}
}


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    	labels: arrondissements,
        datasets: [
            {
            label: "Restaurants asiatiques",
            data: asiatiques,
            backgroundColor: 
                '#589FE0',
            borderWidth: 1,
            type: "bar",
            fill: false},
            {
            label: "Restaurants Europeens (hors France)",
            data: europeens,
            backgroundColor: 
                '#1F77B4',
            borderWidth: 1,
            type: "bar",
            fill: false},
            {
            label: "Restaurants Indiens Pakistanais et Moyen Orientaux",
            data: indiens_pakistanais,
            backgroundColor: 
                '#FFBE90',
            borderWidth: 1,
            type: "bar",
            fill: false},
            {
            label: "Restaurants d'Amerique centrale et du Sud",
            data: americains_sud_centrale,
            backgroundColor: 
                '#00DCA6',
            borderWidth: 1,
            type: "bar",
            fill: false},
            {
            label: "Restaurants Maghrebins",
            data: maghrebins,
            backgroundColor: 
                '#FF483A',
            borderWidth: 1,
            type: "bar",
            fill: false},
            {
            label: 'Restaurants africains',
            data: africans,
            backgroundColor: 
                '#FA8C00',
            fillOpacity: .3,
            borderWidth: 1,
            type: "bar",
            stacked: true,
            fill: false},
            {
            label: 'Restaurants du monde ',
            data: rotw,
            backgroundColor: 
                '#8471B0',
            borderWidth: 1,
            type: "bar",
            stacked: true,
            fill: false},
            {
            label: "Restaurants antillais",
            data: antillais,
            backgroundColor: 
                '#D10047',
            borderWidth: 1,
            type: "bar",
            fill: false}
        ]
    },
    options: options
}
);
