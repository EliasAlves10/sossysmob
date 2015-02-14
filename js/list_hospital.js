$(document).ready(function(){
    var container = $("#container");
	var lista=container.find("#lista");
	var h='';
	$.getJSON("../servidor/list_hospital.php",function(data){
		
		$.each(data,function(k,g){
			h+='<div><h3>'+g.nome_hospital +'</h3>';
			h+='  Id'+g.id_hospital +'<br/>';
			h+='  Cnpj:'+g.cnpj_hospital +'<br/>';
			h+='  Endereco:'+g.endereco_hospital +'<br/>';
			h+='  Bairro:'+g.bairro_hospital +'<br/>';
			h+='  Cidade:'+g.cidade_hospital +'<br/>';
			h+='  Uf:'+g.estado_hospital +'<br/>';
			h+='  Fone1:'+g.telefone_hospital +'<br/>';
			h+='  Fone2:'+g.telefone2_hospital+'<br/>';
			h+='  Email:'+g.email_hospital +'<br/>';
			h+='  Qtd UTI:'+g.total_uti +'<br/>';
			h+='  Qtd leito:'+g.total_leito+'<br/>';
			h+='  <a href="" ><img src="img/update.png"/></a>';
			h+=' <a href=""><img src="img/delete.png"/></a><hr/></div>';			

	});

		lista.html(h);
	});

})