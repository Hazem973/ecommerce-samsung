

// select all buttons with class "plus"
var buttonsPlus = document.querySelectorAll('.plus')
// select all buttons with class "plus"
var buttonsMinus = document.querySelectorAll('.minus')
// select all p with class "qty"
var qtys = document.querySelectorAll('.qty')

// buttonsPlus = [button1,button2]
// qtys = [qty1,qty2]

for (let index = 0; index < buttonsPlus.length; index++) {
    
    buttonsPlus[index].addEventListener('click', function()  {
        qtys[index].innerHTML++
     })
     
     buttonsMinus[index].addEventListener('click', function()  {
        if(qtys[index].innerHTML > 0){
             qtys[index].innerHTML--
         }
         
      })  
}






// document.getElementById('ahla').innerHTML = "Ahla"

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//       return qte[i].innerHTML++;
//     });
//   }

