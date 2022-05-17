//Dati sui concerti, la struttura è genere per le linee (ad es, Jazz,Classica, Pop) e anni per le colonne (2019,2020,2021)
// TicketData[0][1] -> restituisce il numero di biglietti di  Jazz 2020
var ticketData = [
    [ "21", "6", "13"],
    [ "119", "37", "41"],
    [ "418", "49", "84"]
    ]

  //Array per i colori dei biglietti, in base al genere selezionato recupera il colore corretto
    var colorData=["#C852FF","#FF6318","#ADFF00"];









/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);

  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());







      //funzione che riempie i rettangoli in base ai parametri N e COLOR.
  // N è il numero di rettangoli da colorare, COLOR è il colore da usare.

    function fillRect (n,color) {
      $("svg rect.quadratini").css("fill","grey");
      $("svg rect.quadratini").each(function(i){
        if (i<=n){
        $(this).css("fill",color);
        }
      });//Cambia Il colore del biglietto strappato
      $("svg").each(function(){
          $(this).find(".colorestrappo").css("fill",color);
      });
    }

  // Funzione che legge i valori dei listbox
    function getTicketsData(){
      selMusic=$("#music").val();
      selYear=$("#year").val();

      rectNumb=ticketData[selMusic][selYear];
      rectCol=colorData[selMusic];
      fillRect(rectNumb,rectCol);
    }

  // Funzione per leggere e cambiare valori del valore numerio associato alle selezioni dei due box
    function cambioNome(){
      selMusic=$("#music").val();
      selYear=$("#year").val();
       //JAZZ 2019
        if(selMusic==0 && selYear==0){
        document.getElementById("demo").innerHTML = "610K";
      }//JAZZ 2020
        else if (selMusic==0 && selYear==1){
          document.getElementById("demo").innerHTML = "205K";
        }//JAZZ 2021
        else if (selMusic==0 && selYear==2){
          document.getElementById("demo").innerHTML = "390K";
        }//CLASSICA 2019
        else if (selMusic==1 && selYear==0){
          document.getElementById("demo").innerHTML = "3M";
        }//CLASSICA 2020
        else if (selMusic==1 && selYear==1){
          document.getElementById("demo").innerHTML = "1M";
        }//CLASSICA 2021
        else if (selMusic==1 && selYear==2){
          document.getElementById("demo").innerHTML = "1M";
        }//LEGGERA 2019
        else if (selMusic==2 && selYear==0){
          document.getElementById("demo").innerHTML = "11M";
        }//LEGGERA 2020
        else if (selMusic==2 && selYear==1){
          document.getElementById("demo").innerHTML = "1M";
        }//LEGGERA 2021
        else if (selMusic==2 && selYear==2){
          document.getElementById("demo").innerHTML = "2M";
        }
    }

    $(document).ready(function(){
      $('#music , #year').ready(function(){
        getTicketsData();
        cambioNome();
      });
      // Ad ogni cambiamento dei listBox, leggo i loro valori con GetTicketsData, che a sua volta li colora con fillrect
      $('#music , #year').change(function(){
        getTicketsData();
        cambioNome();
      });

    });
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});












  //funzione che riempie i rettangoli in base ai parametri N e COLOR.
  // N è il numero di rettangoli da colorare, COLOR è il colore da usare.

    function fillRect (n,color) {
      $("svg rect.quadratini").css("fill","grey");
      $("svg rect.quadratini").each(function(i){
        if (i<=n){
        $(this).css("fill",color);
        }
      });//Cambia Il colore del biglietto strappato
      $("svg").each(function(){
          $(this).find(".colorestrappo").css("fill",color);
      });
    }

  // Funzione che legge i valori dei listbox
    function getTicketsData(){
      selMusic=$("#music").val();
      selYear=$("#year").val();

      rectNumb=ticketData[selMusic][selYear];
      rectCol=colorData[selMusic];
      fillRect(rectNumb,rectCol);
    }

  // Funzione per leggere e cambiare valori del valore numerio associato alle selezioni dei due box
    function cambioNome(){
      selMusic=$("#music").val();
      selYear=$("#year").val();
       //JAZZ 2019
        if(selMusic==0 && selYear==0){
        document.getElementById("demo").innerHTML = "610K";
      }//JAZZ 2020
        else if (selMusic==0 && selYear==1){
          document.getElementById("demo").innerHTML = "205K";
        }//JAZZ 2021
        else if (selMusic==0 && selYear==2){
          document.getElementById("demo").innerHTML = "390K";
        }//CLASSICA 2019
        else if (selMusic==1 && selYear==0){
          document.getElementById("demo").innerHTML = "3M";
        }//CLASSICA 2020
        else if (selMusic==1 && selYear==1){
          document.getElementById("demo").innerHTML = "1M";
        }//CLASSICA 2021
        else if (selMusic==1 && selYear==2){
          document.getElementById("demo").innerHTML = "1M";
        }//LEGGERA 2019
        else if (selMusic==2 && selYear==0){
          document.getElementById("demo").innerHTML = "11M";
        }//LEGGERA 2020
        else if (selMusic==2 && selYear==1){
          document.getElementById("demo").innerHTML = "1M";
        }//LEGGERA 2021
        else if (selMusic==2 && selYear==2){
          document.getElementById("demo").innerHTML = "2M";
        }
    }

    $(document).ready(function(){
      $('#music , #year').ready(function(){
        getTicketsData();
        cambioNome();
      });
      // Ad ogni cambiamento dei listBox, leggo i loro valori con GetTicketsData, che a sua volta li colora con fillrect
      $('#music , #year').change(function(){
        getTicketsData();
        cambioNome();
      });

    });
