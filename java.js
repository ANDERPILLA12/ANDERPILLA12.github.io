$(document).ready(function(){
$('#animacioncaja1').show(function(){
    $(this).animate({
        
        width:500,
        height:500,
    
        botton: '=1000px'

    },1000);
})
});
$(document).ready(function(){
    $('.productos').show(function(){
        $(this).animate({
            
            width:1000,
            height:1000,
        
            left: '+=1000px'
    
        },1000);
    })
    });




//js de pagina carrito

    let sumar = document.getElementById("mas");
let restar = document.getElementById("menos");
let contador = document.getElementById("contador");
let prevValue;


function calcular() {
  var value = contador.value;
  var isValid = /^[1-9][0-9]*$/.test(value);

  if (!isValid) {
          contador.value = prevValue;
        } else {
          prevValue = value;
        }
}

      sumar.onclick = function() {
        contador.value = Number(contador.value) + 1;
        calcular();
      };

      restar.onclick = function() {
        contador.value = Number(contador.value) - 1;
        calcular();
      };

      contador.onchange = function() {
        calcular();
      };

      contador.onkeyup = function() {
        if (contador.value === "") {
          return;
        }
        calcular();
      };

      calcular();

    
      //script jquery  pop up 
      $(document).ready(function() {             
        $('#loginModal').modal('show');
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
        });

        function validacion(){
          let correo=document.getElementById("email1").value;
          let contraseña=document.getElementById("password1").value;
          const xcorreo="apillacagregorio@gmail.com";
          const xcontraseña="pillaca1218";
          if(correo=xcorreo,contraseña=xcontraseña){
            alert("usuario y contraseña correcto");
            
          }else{
            alert("usuario y/o contraseña incorrecta")
          }
        
        

        
        }