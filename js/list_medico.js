$(document).ready(function(){
    var container = $("#container");
	var lista=container.find("#lista");
	var h='';
	$.getJSON("../servidor/list_medico.php",function(data){
		
		$.each(data,function(k,g){
			h+='<div><h3>'+g.nome_medico +'</h3>';
			h+='  Id'+g.id +'<br/>';
			h+='  CPF:'+g.cpf_hospital +'<br/>';
			h+='  CRM:'+g.crm_medico +'<br/>';
			h+='  RG:'+g.rg_medico +'<br/>';
			h+='  Sexo:'+g.sexo +'<br/>';
			h+='  Especialidade:'+g.especialidade_medico +'<br/>';
			h+='  Nacionalidade:'+g.nacionalidade_medico +'<br/>';
			h+='  Endereco:'+g.endereco_medico +'<br/>';
			h+='  Bairro:'+g.bairro_medico +'<br/>';
			h+='  Cidade:'+g.cidade_medico+'<br/>';
			h+='  Uf:'+g.estado_medico +'<br/>';
			h+='  Fone1:'+g.telefone_medico +'<br/>';
			h+='  Email:'+g.email_medico +'<br/>';
			h+='  <a href="" ><img src="img/update.png"/></a>';
			h+=' <a href=""><img src="img/delete.png"/></a><hr/></div>';			

	});

		lista.html(h);
	});

})