$(document).ready(function () {
   
    $("#Validar1").click(function () { 
        validar_modificar_materia();
    });
    $("#Validar2").click(function () { 
        validar_alta_materia_usuario();
    });

function validar_modificar_materia() {
    //funcion para valiar el formulario de la pagina ModificarMaterias.htm
    
    var formulario = document.formulario_modificar_materia;		
    // var numerom = $("#numerom");
    // var nombrem = $("#nombrem");
    // var logom = $("#logom");
    
    var todoCorrecto = true;

    todoCorrecto*=Validar_numero($("#numerom"));
    todoCorrecto*=Validar_largo_numero($("#numerom"));
    todoCorrecto*=Validar_texto($("#nombrem"));
    todoCorrecto*=Validar_largo_caracteres($("#nombrem"));
    todoCorrecto*=Validar_imagen($("#logom"));

    if (todoCorrecto ==true) {
        formulario.submit();
    }
    else {
        //detener la acción por defecto (sumbit)
        event.preventDefault();
    }
} 

function validar_alta_materia_usuario(){
    //funcion para valiar el formulario de la pagina AltaMatUsu.htm 
    
    var formulario = document.formulario_alta_materia_usuario;
    // var num_materia = $("#num_materia");
    // var nom_materia = $("#nom_materia");
    // var tipo_doc = $("#tipo_doc");
    // var documento = $("#documento");
    // var nombre = $("#nombre");
    // var apellido = $("#apellido");
    // var division = $("#division");

    var todoCorrecto = true;

    todoCorrecto*=Validar_numero($("#num_materia"));
    todoCorrecto*=Validar_largo_numero($("#num_materia"))
    todoCorrecto*=Validar_texto($("#nom_materia"));
    todoCorrecto*=Validar_largo_caracteres($("#nom_materia"));
    todoCorrecto*=Validar_select($("#tipo_doc"));
    todoCorrecto*=Validar_documento($("#documento"));
    todoCorrecto*=Validar_numero($("#documento"));
    todoCorrecto*=Validar_texto($("#nombre"));
    todoCorrecto*=Validar_texto($("#apellido"));
    todoCorrecto*=Validar_division($("#division"));

    if (todoCorrecto ==true) {
        formulario.submit();
    }else {
        //detener la acción por defecto (sumbit)
        event.preventDefault();
    }
}

function Validar_texto(ObjElemento){

    var resultado=true;
	
	if(  /^[a-zA-Z\s]+$/.test(ObjElemento.val())==false || /^[1-9]/.test(ObjElemento.val())==true){
	    alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
        resultado=false;
	}
    return resultado;	  
}

function Validar_numero(ObjElemento){

    var resultado=true;
	
	if(isNaN(ObjElemento.val())==true || /^[1-9]/.test(ObjElemento.val())==false){
	   alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
       resultado=false;
	}
    return resultado;	  
}

function Validar_division(ObjElemento){

    var resultado=true;
	
	if(/^[a-zA-Z\s]/.test(ObjElemento.val())==true || /^[1-9]/.test(ObjElemento.val())==false){
	   alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
       resultado=false;
	}
    return resultado;	  
}

function Validar_largo_caracteres(ObjElemento){

    var resultado=true;
    var num=50;
    var largo = ObjElemento.val();
    var cantidad = largo.length 

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;
}

function Validar_largo_numero(ObjElemento){

    var resultado=true;
    var num=3;
    var largo = ObjElemento.val();
    var cantidad = largo.length;

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;
}

function Validar_imagen(ObjElemento){

    var resultado=true;

    if (!(/\.(gif|jpeg|jpg|png)$/i).test(ObjElemento.val())) {
        alert('El archivo a adjuntar no es una imagen');
        var resultado=false;
    }
    return resultado;
}

function Validar_select(ObjElemento){

    var resultado=true;

    if(ObjElemento.val() == 0||ObjElemento.val()== ""){
        alert('Campo ' + ObjElemento.name + ' no fue seleccionado');
        resultado= false;
    }
    return resultado;
}

function Validar_documento(ObjElemento){

    var resultado=true;
    var num=10;
    var largo = ObjElemento.val();
    var cantidad = largo.length

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;	  
}

});
// Mostrar cantidad de alumnos
$(document).ready(function() {
    var cantidad_alumnos = $('#tabla-alumnos tr').length;
    $('#cantidad-alumnos').text("La cantidad de alumnos es " + (cantidad_alumnos - 2));
});

// Mostrar cantidad de materias
$(document).ready(function () {
    var cantidad_materias = $('#tabla-materias tr').length;
    $('#cantidad-materias').text("La cantidad de materias es " + (cantidad_materias - 2));
});