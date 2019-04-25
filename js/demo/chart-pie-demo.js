// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example https://www.datos.gov.co/Ciencia-Tecnolog-a-e-Innovaci-n/GRUPOS-DE-INVESTIGACI-N-RECONOCIDOS-Y-CLASIFICADOS/hrtu-9f5g



     var request3URL = 'https://www.datos.gov.co/resource/hrtu-9f5g.json';
    var request3 = new XMLHttpRequest();
    request3.open('GET', request3URL);
    request3.responseType = 'json';
    request3.send();
    request3.onload = function() {
      var investigacion = request3.response;
     showInv(investigacion);
    }
    

    function showInv(jsonObj)
    {
      var grupos = jsonObj.slice(0,500);
    
      var cienciassociales =0;
      var cienciasnaturales=0;
      var cienciasmédicasydelasalud=0;
      var humanidades=0;
      var ingenieriaytec=0;
      var cienciasagricolas=0;

      for(var i = 0; i < grupos.length; i++) 
     {
        if(grupos[i].nme_gran_area_gr=="Ciencias naturales")
        {
          cienciasnaturales++;
        }
        if(grupos[i].nme_gran_area_gr=="Ciencias sociales")
        {
          cienciassociales++;
        }
        if(grupos[i].nme_gran_area_gr=="Ciencias médicas y de la salud")
        {
          cienciasmédicasydelasalud++;
        }
        if(grupos[i].nme_gran_area_gr=="Humanidades")
        {
          humanidades++;
        }
        if(grupos[i].nme_gran_area_gr=="Ingeniería y tecnología")
        {
          ingenieriaytec++;
        }
        if(grupos[i].nme_gran_area_gr=="Ciencias agrícolas")
        {
          cienciasagricolas++;
        }
        
     }
     
     

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Ciencias naturales", "Ciencias sociales", "Ciencias médicas y de la salud", "Humanidades", "Ingeniería y tecnología", "Ciencias agrícolas"],
    datasets: [{
      data: [cienciasnaturales, cienciassociales, cienciasmédicasydelasalud, humanidades, ingenieriaytec, cienciasagricolas  ],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#FBFF17', '#FF0000', '#FF00D4'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 3,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});
    }