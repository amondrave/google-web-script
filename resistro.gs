function doGet() {
  return HtmlService.createHtmlOutputFromFile("plantilla");
}


function registrar(persona){
   Logger.log(persona);
   const url = "https://docs.google.com/spreadsheets/d/1unLbaWh_pLirYNXIliDLmIdnyqzMCygzzZ5C36IsQZI/edit#gid=0";
    var ss =  SpreadsheetApp.openByUrl(url);
    var hoja = ss.getSheetByName("Datos");
    
    //agregamos los datos a la hoja de cálculo
    hoja.appendRow([persona.nombre,persona.apellido,persona.cedula,persona.artista,
                   persona.email,new Date()]);
}

