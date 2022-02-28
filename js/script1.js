
       function cal1()
        {
            var s="Hot Chocolate   -  Rs.";
            var price1=document.frm1.b1.value;
            const para=document.createElement("p");
            para.innerHTML=s+price1;

            document.getElementById("title1").appendChild(para);
            
            var b=document.createElement("input");
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            
            document.getElementById("div1").appendChild(b);

            /*b.innerHTML="Enter Quantity";*/

            /*b.addEventListener ("click", function() {
                var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";
               
               
       });*/
             var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove1").appendChild(c);

            /* c.addEventListener("click", function(){
                    var elem= document.getElementById("t");
                    elem.parentNode.removeChild(elem);
                    return false;
             });*/

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });



             updateCartTotal();

        }
        function cal2()
        {
            var s="Iced Coffee   -  Rs.";
            var price2=document.frm1.b2.value;
            const para=document.createElement("p");
            para.innerHTML=s+price2;

            document.getElementById("title2").appendChild(para);

            var b=document.createElement("input");
            /*b.innerHTML="Enter Quantity";*/
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            document.getElementById("div2").appendChild(b);

            /*b.addEventListener ("click", function() {
             var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";

             
       });*/

            var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove2").appendChild(c);

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });

        }
        function cal3()
        {
            var s="Latte   -  Rs.";
            var price3=document.frm1.b3.value;
            const para=document.createElement("p");
            para.innerHTML=s+price3;

            document.getElementById("title3").appendChild(para);

            var b=document.createElement("input");
            /*b.innerHTML="Enter Quantity";*/
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            document.getElementById("div3").appendChild(b);

            /*b.addEventListener ("click", function() {
             var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";

       });*/

            var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove3").appendChild(c);

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });

        }
        function cal4()
        {
            var s="Capucchino   -  Rs.";
            var price4=document.frm1.b4.value;
            const para=document.createElement("p");
            para.innerHTML=s+price4;

            document.getElementById("title4").appendChild(para);

            var b=document.createElement("input");
            /*b.innerHTML="Enter Quantity";*/
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            document.getElementById("div4").appendChild(b);

            /*b.addEventListener ("click", function() {
             var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";

            
       });*/
            var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove4").appendChild(c);

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });

        }
        function cal5()
        {
            var s="Hot chocolate coffee   -  Rs.";
            var price5=document.frm1.b5.value;
            const para=document.createElement("p");
            para.innerHTML=s+price5;

            document.getElementById("title5").appendChild(para);

            var b=document.createElement("input");
            /*b.innerHTML="Enter Quantity";*/
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            document.getElementById("div5").appendChild(b);

            /*b.addEventListener ("click", function() {
             var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";

             
       });*/
            var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove5").appendChild(c);

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });

        }
        function cal6()
        {
            var s="House special coffee   -  Rs.";
            var price6=document.frm1.b6.value;
            const para=document.createElement("p");
            para.innerHTML=s+price6;

            document.getElementById("title6").appendChild(para);

            var b=document.createElement("input");
            /*b.innerHTML="Enter Quantity";*/
            b.type='text';
            b.placeholder="Enter Quantity";
            b.setAttribute("class","quantity");
            document.getElementById("div6").appendChild(b);

            /*b.addEventListener ("click", function() {
             var div1=document.getElementById("div2");
             div1.innerHTML="<input type='number'/>";

            
       });*/
            var c=document.createElement("button");
             c.innerHTML="Remove";
             document.getElementById("remove6").appendChild(c);

             c.addEventListener("click", function(event){
                    var buttonClicked= event.target;
                    buttonClicked.parentElement.parentElement.remove();
             });

        }

        function updateCartTotal(){
            var cartItemcontainer= document.getElementsByClassName("cart-items")[0];
            var cartRows= cartItemcontainer.getElementsByClassName("cart-row");

         for(var i=0;i< cartRows.length; i++)
         {
            var cartRow= cartRows[i];
            var priceElement= cartRow.getElementsByClassName("cartP")[0];
            var quantityElement= cartRow.getElementsByClassName("quantity")[0];
            var price=priceElement.innerText;
            console.log(price);

         }
        }

    

/*
var addItemid=0;

function addItem(item)
{
    addItemId + =1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img= document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title=document.createElement('div');
    title.innerText=item.children[1].innerText;
    var label=document.createElement('div');
    label.innerText=item.children[2].children[0].innerText;
    var select=document.createElement('span');
    select.innerText=item.children[2].children[1].value;
    label.append(select);
    var cartItems= document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    cartItems.append(selectedItem);

}
*/
