

const seatBtn = document.getElementsByClassName("seat-btn");
let count = 0;

        

for(const btn of seatBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;

        const nameShow = e.target.parentNode.childNodes[0].innerText;
        const priceShow = parseInt(550);
           
        const liCreatContainer = document.getElementById("li-creat-container"); 
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = nameShow;
        const p2 = document.createElement('p');
        p2.innerText = "Economoy";
        const p3 = document.createElement('p');
        p3.innerText = priceShow;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        liCreatContainer.appendChild(li);


        const totalCost = document.getElementById("total-cost").innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(priceShow);
        document.getElementById("total-cost").innerText = sum;


        const totalSeat = document.getElementById('total-seat').innerText;
        const convertTotalSeat = parseInt(totalSeat);
        const multiple = convertTotalSeat - 1 ;
        document.getElementById('total-seat').innerText = multiple;
     
        const grandTotalCost = document.getElementById("grand-total-cost").innerText;
        const convertGrandTotalCost = parseInt(grandTotalCost);
        const sum2 = convertGrandTotalCost + parseInt(priceShow);
        document.getElementById("grand-total-cost").innerText = sum2;
        

        e.target.parentNode.style.backgroundColor = "#1DD100";
        e.target.setAttribute("disable", true);
        setEnnerText("set-count", count);
       
    });

    
}


