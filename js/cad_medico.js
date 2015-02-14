
          $(document).ready(function(e) {

                $("#form").submit(function(){
                   var campoNome = new String(document.getElementById("nome").value);
                   var campoCpf = new String(document.getElementById("cpf").value);
                   var campoRG = new String(document.getElementById("rg").value);
                   var campoCRM = new String(document.getElementById("crm").value);
                   var campoEspecialidade = new String(document.getElementById("especialidade").value);
                   var campoNacionalidade = new String(document.getElementById("nacionalidade").value);
                   var campoSexo = new String(document.getElementById("sexo").value);
                   var campoNascimento = new String(document.getElementById("nascimento").value);
                   var campoEndereco = new String(document.getElementById("endereco").value);
                   var campoBairro = new String(document.getElementById("bairro").value);
                   var campoUf = new String(document.getElementById("uf").value);
                   var campoCidade = new String(document.getElementById("cidade").value);
                   var campoEmail = new String(document.getElementById("email").value);
                   var campoFone = new String(document.getElementById("fone").value);
            alert('chamou')             
               $.ajax({
                      type:"POST",
                      url: "../servidor/cad_medico.php",
                      crossDomain:true,
                      data:{nome:campoNome,cpf:campoCpf,rg:campoRG,crm:campoCRM,nacionalidade:campoNacionalidade,especialidade:campoEspecialidade,sexo:campoSexo,nascimento:campoNascimento,endereco:campoEndereco,bairro:campoBairro,uf:campoUf,cidade:campoCidade,email:campoEmail,fone:campoFone}
                        })
                    .done(function( msg ) {
                      if(msg == true){
                        alert( "Operação realizada com sucesso: " );
                         window.location="listaMedico.html";
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
