
          $(document).ready(function(e) {

                $("#form").submit(function(){
                   var campoNome = new String(document.getElementById("nome").value);
                   var campoCnpj = new String(document.getElementById("cnpj").value);
                   var campoEndereco = new String(document.getElementById("endereco").value);
                   var campoBairro = new String(document.getElementById("bairro").value);
                   var campoUf = new String(document.getElementById("uf").value);
                   var campoCidade = new String(document.getElementById("cidade").value);
                   var campoEmail = new String(document.getElementById("email").value);
                   var campoFone1 = new String(document.getElementById("fone1").value);
                   var campoFone2 = new String(document.getElementById("fone2").value);
                   var campoQtd_leito = new String(document.getElementById("qtd_leito").value);
                   var campoQtd_uti = new String(document.getElementById("qtd_uti").value);
               
               $.ajax({
                      type:"POST",
                      url: "../servidor/cad_hospital.php",
                      crossDomain:true,
                      data:{nome:campoNome,cnpj:campoCnpj,endereco:campoEndereco,bairro:campoBairro,uf:campoUf,cidade:campoCidade,email:campoEmail,fone1:campoFone1,fone2:campoFone2,qtd_uti:campoQtd_uti,qtd_leito:campoQtd_leito}
                        })
                    .done(function( msg ) {
                      if(msg == true){
                        alert( "Operação realizada com sucesso: " );
                         window.location="list_hospital.html";
                      }else{
                        alert( "Ocorreu erro");
                        window.location="home.html";
                      }
                    })
                    .fail(function(jqXHR, msg) {
                         alert( "Errooo:" + msg );
                         alert( "Errooo:" + jqXHR );
                         console.log("Erro chato:" + msg);
                         console.log(jqXHR + "  " + msg);
                        window.location="home.html";  
                    });

                });
            });
