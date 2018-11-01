jQuery(document).ready(function () {

	window.onresize = function(event) {
		
		fcnMainDivSetHeight();
	};
	
	fcnDataBasicLoad();
	fcnDataItemsLoad();
	
	$('#div_suscribirse').hide();
	$('#div_buscar').hide();
	
	
	$('#btn_login').click(function(){
	
		window.open('login.html','_self');
	});
	
	$('#btn_suscribirse').click(function(){
	
		$('#div_suscribirse').fadeIn("fast", null);
	});
	
	$('#btn_buscar').click(function(){
	
		$('#div_buscar').fadeIn("fast", null);
		
	});

	$('#btn_suscribirse_cerrar').click(function(element_obj){
	
		fcnDivModalClose(document.getElementById('btn_suscribirse_cerrar'));
	});	

	$('#btn_buscar_cerrar').click(function(element_obj){
	
		fcnDivModalClose(document.getElementById('btn_buscar_cerrar'));
	});		
	
	fcnMainDivSetHeight();
	
	
	setTimeout(function(){ $('#div_preloader').fadeOut("fast", null); }, 3000);
	//alert('OK load JS');
});

function fcnDivModalClose(boton_obj){
	
	$('#' + boton_obj.parentElement.parentElement.id).fadeOut("fast", null);
}

function fcnMainDivSetHeight(){
	
	document.getElementById('div_main').style.height = ((window.innerHeight - 50) + 'px');
	
	let eventosWidth_str = '360px';
	let eventosHeight_str = '550';
	let eventosMargin_str = '10';
	
	if(window.innerWidth < 812){
		
		eventosWidth_str = '100%';
		eventosMargin_str = '0';
	}
	
	if(window.innerHeight < 365){
		
		eventosHeight_str = (window.innerHeight - 50);
		
	}
	
	let elementos_arr = document.getElementsByClassName("div_evento");
	
	for(let i = 0, total_int = elementos_arr.length ; i < total_int; i++){

		elementos_arr[i].style.width = eventosWidth_str;
		elementos_arr[i].style.height = (eventosHeight_str + 'px');
		elementos_arr[i].style.margin = (eventosMargin_str + 'px');
	}		
}

function fcnDataBasicLoad(){

	
	let resultadoLocalidad4chb_str = "";
	let resultadoLocalidad4sel_str = '<option value="0">Todas</option>';
	
	for(let i = 0 , limite = dataLocalidades_arr.length; i < limite; i++){
		
		resultadoLocalidad4chb_str += ('<br><input type="checkbox" class="cls_chb" id="chb_localidad_' + dataLocalidades_arr[i].id + '" value="' + dataLocalidades_arr[i].id + '">' + dataLocalidades_arr[i].nombre);
		resultadoLocalidad4sel_str += ('<option value="' + dataLocalidades_arr[i].id + '">' + dataLocalidades_arr[i].nombre + '</option>');
	}
	
	$('#div_localidad_lista').append(resultadoLocalidad4chb_str);
	$('#sel_buscar_localidad').append(resultadoLocalidad4sel_str);
	
	
	let resultadoCategoria4sel_str = '';
	
	
	
	
	for(let i = 0 , limite = dataCategoria_arr.length; i < limite; i++){
		
		resultadoCategoria4sel_str += ('<option value="' + dataCategoria_arr[i].id + '">' + dataCategoria_arr[i].nombre + '</option>');	
	}
	
	$('#sel_buscar_categoria').append(resultadoCategoria4sel_str);
}


function fcnDataItemsLoad(){
	
	let resultadoEventos_str = '';
	
	for(let i = 0 , limite = dataEventos_arr.length; i < limite; i++){
	
		resultadoEventos_str += ('<div class="div_evento" style="background: linear-gradient(#1AACE3, transparent, transparent , black, black, black, black), url(\'' + dataEventos_arr[i].eveimgurl + '\')  no-repeat top center;">\
								  <h3>' + dataEventos_arr[i].evenom + '</h3>\
								  <p>\
									  ' + dataEventos_arr[i].evedesc + '<br><br>\
									 <span class="cls_span_detail">\
									  Categoria: ' + dataEventos_arr[i].evecat_nom + '<br>\
									  Fecha y Hora: ' + dataEventos_arr[i].evefecini + ' - ' + dataEventos_arr[i].evefecfin + '<br>\
									  Dirección: ' + dataEventos_arr[i].evedir + ' Telefono: ' + dataEventos_arr[i].evetel + '<br>\
									  Valor: $' + dataEventos_arr[i].evevalor + '<br>\
									  Observación: ' + dataEventos_arr[i].eveobs + '<br>\
									  Mas información: <a href="' + dataEventos_arr[i].eveurl + '" target="_blank">Aqui.</a><br>\
									  </p>\
								  </div>');
	}
	
	$('#div_main').empty();
	$('#div_main').append(resultadoEventos_str);

}
