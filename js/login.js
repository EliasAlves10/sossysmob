
          $(document).ready(function(e) {

                $("#loginForm").submit(function(){
            //    var campoNome = new String(document.getElementById("txtNome").value);
             //   var campoEmail = new String(document.getElementById("txtEmail").value);
               var campoUsuario = new String(document.getElementById("usuario").value);
               var campoSenha = new String(document.getElementById("senha").value);
          //      var campoSenhaConf = new String(document.getElementById("txtSenhaConf").value);

                    $.ajax({
                      type: "POST",
                      url: "../servidor/login.php",
                      crossDomain: true,
                      data: { usuario: campoUsuario,senha:campoSenha}
                        })
                    .done(function( msg ) {
                      if(msg == true){
                        alert( "Liberado: " );
                         window.location="home.html";
                      }else{
                        alert( "Negado"+msg);
                        window.location="index.html";
                      }
                    })
                    .fail(function(jqXHR, msg) {
                         alert( "Errooo:" + msg );
                         alert( "Errooo:" + jqXHR );
                         console.log("Erro chato:" + msg);
                         console.log(jqXHR + "  " + msg);
                        window.location="index.html";  
                    });

                });
            });
