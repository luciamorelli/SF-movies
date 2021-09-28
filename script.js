//url to use the Method GET
const URLGET = "https://data.sfgov.org/resource/yitu-d5am.json"
//Add a button with jQuery
$(".main__section2--contenedor--2").prepend('<button id="btn1"> Search </button>');
//Listen to the event "click" 
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $(".nav.nav-pills.flex-column").prepend(`
            
              <a class="nav-link" href="#${dato.title}">${dato.title}</a>
              `);
            }  
          }
    });
});


//Listen to the event "click" 
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $(".info__films").prepend(`
              <h6 id="${dato.title}">${dato.title}</h6>
              <p>Director: ${dato.director} </p>
              <p>Writer: ${dato.writer} </p>
              <p>Location: ${dato.locations} </p>
              
              `);
            }  
          }
    });
});
/*<p> ${dato.release_year}</p>
<p> ${dato.locations}</p>
<p> ${dato.production_company}</p>
<p> ${dato.director}</p>
<p> ${dato.writer}</p>
<p> ${dato.actor_1}</p>
<p> ${dato.actor_2}</p>
<p> ${dato.actor_3}</p>*/