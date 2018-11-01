(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);

function validarLogIn(){
	/*Ejecuta procesos de validación para la interfaz de LogIn*/
	/*Se define por ahora datos locales en JSON para la entrada*/
	
	let lnIdToRet = 0;
	
	let loJSONLoginObject = {success:true, connid:0, data :	
		{users:[{Id:1,usrName:"d.giraldo",pwd:"123456",email:"giraldod@yahoo.com",url:"www.ni.com"},
				 {Id:2,usrName:"o.jimenez",pwd:"QWERTY",email:"juanchoparrancho12@outlook.com",url:"www.hitachi.com"},
				 {Id:3,usrName:"h.garcia",pwd:"qwerty",email:"hgarcia@gmail.com",url:"www.ni.com"},
				 {Id:4,usrName:"m.zapata",pwd:"qwertyqwerty",email:"marianozaparacool@hotmail.com",url:"www.ni.com"}]
		}
		};

	let lcuserName = document.getElementById('username').value;
	let lcpwd = document.getElementById('pass').value;
	
	for (let lnIdx = 0; lnIdx < loJSONLoginObject.data.users.length; lnIdx++){

		if (loJSONLoginObject.data.users[lnIdx].email == lcuserName && loJSONLoginObject.data.users[lnIdx].pwd == lcpwd){

				lnIdToRet = loJSONLoginObject.data.users[lnIdx].Id
				break;
			}
	}
	
	window.open("def_actividades.html", '_self');
	
	if(lnIdToRet > 0){
	
		alert("Acceso concedido: bienvenido " + lcuserName);
		window.open("def_actividades.html", '_self');
	}
	else{
	
		alert("Acceso denegado");
	}


}

function validarDefActivs(){
	/*Ejecuta la grabación de un elemento JSON con los datos del DOM de 
	definición de actividades, en la Sección de Almacenamiento local del
	navegador, para ser inyectada luego al arreglo de la lista general
	de eventos de otra interfaz.*/
	var dataEventos_arr2 = "[{eveid: 20, "+
			"evenom: '"+document.getElementById("nomactiv_txt").value+"',"+
			"evecat_nom: '"+document.getElementById('estado_cbo').value+"',"+
			"evefecini: '"+document.getElementById('f1_txt').value+"',"+
			"evefecfin: '"+document.getElementById('f2_txt').value+"',"+
			"evefecfin: '"+document.getElementById('f2_txt').value+"',"+
			"evedir: '"+document.getElementById('desactiv_txt').value+"',"+
			"eveubi: null,"+
			"evetel: '321211211, 211212154',"+
			"evedesc: '"+document.getElementById('desactiv_txt').value+"',"+
			"evevalor: '"+document.getElementById('valor_txt').value+"',"+
			"eveobs: '"+document.getElementById('condic_txt').value+"',"+
			"eveurl: '"+document.getElementById('url_txt').value+"',"+
			"eveimgurl: null}";
	localStorage.setItem('registro-evento', JSON.stringify(dataEventos_arr2));
	/* Modelo
	dataEventos_arr = [
		{
			eveid: 15, 
			evenom: 'Presentación opera de Berlin', 
			evecat_nom: 'Musica',
			evefecini: '25/11/2018 17:00', 
			evefecfin: '30/11/2018 19:30', 
			evedir: 'Teatro Nacional La Castellana: Calle 95 # 47-15 Barrio: La Castellana',
			eveubi: null,
			evetel: '321211211, 211212154',
			evedesc: 'Presentación de la ópera de Berlín. Buses a todos los barrios.', 
			evevalor: '35,000.00', 
			eveobs: 'Mayores de 4 años pagan entrada', 
			eveurl: 'https://es.wikipedia.org/wiki/%C3%93pera_Alemana_de_Berl%C3%ADn',
			eveimgurl: 'https://cdn.pixabay.com/photo/2017/11/29/22/01/munich-2987186_960_720.jpg',
		},
	*/
}