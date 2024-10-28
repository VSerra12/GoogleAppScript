function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script')
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent()
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1lqVAS07nibQuq2sMvhbm5XHw8K1oYroL6zXw1GUw5nE').getActiveSheet()
    let datos = hoja.getDataRange().getValues()

    return datos
}