var ctx = document.getElementById("score").getContext('2d'); 

var arrondissements = ['75001','75002','75003','75004','75005','75006','75007','75008','75009','75010','75011','75012','75013','75014','75015','75016','75017','75018','75019','75020'/*, 'Tout Paris'*/];

var scores_ecolo = [1,1,4,2,4,3,5,2,2,1,3,5,5,2,5,1,4,3,3,4]

var scores_culture = [1,4.166666667,2.5,4.166666667,2.5,0.833333333,1.666666667,1,1,5,5,1.666666667,3.333333333,2.5,2.5,4.166666667,4.166666667,4.166666667,3.333333333,5]

var scores_gastro =[2,3,3,4,5,5,5,2,1,1,4,1,1,5,3,4,4,2,2,3] 

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
            {   id: "score",
                gridLines: {
                    display:false
                }, 
                ticks: {
                     beginAtZero:true
                },
                stacked: false,
                position: "left",
                scaleLabel: {
                    isplay: true,
                    labelString: 'score'
                }
            },
            

    ]
}
}


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    	labels: arrondissements,
        datasets: [
        	{
            label: 'Scores culture',
            data: scores_culture,
            backgroundColor: 
            	'#CC6674  ',
            fillOpacity: .3,
            borderWidth: 1,
            type: "bar",
            stacked: false,
            fill: false,
            yAxisID: "score" 
            },
            
            {
            label: 'Scores ecolo',
            data: scores_ecolo,
            backgroundColor: 
                '#27AE60    ',
            borderWidth: 1,
            type: "bar",
            stacked: false,
            fill: false,
            yAxisID: "score"
            },
            
            {
            label: "Scores gastro",
            data: scores_gastro,
            backgroundColor: 
                '#EEDA59',
            borderWidth: 1,
            type: "bar",
            fill: false,
            yAxisID: "score"
            }





        ]
    },
    options: options
}
);
