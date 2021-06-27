const third = document.querySelector(".third");
const v = document.querySelector(".bookedSeats");
const totalSeats = document.querySelector(".remainingSeats");
var booked=0;
var remaining=36;
for(let i=0;i<36;i++)
{
    const items = document.createElement("div")
    items.addEventListener('click', () => {
        if(items.style.backgroundColor == "silver"){
            items.style.backgroundColor = "yellowgreen"
            booked--;
            remaining++;
            v.value=booked;
            totalSeats.value=remaining;
        }
        else{
            items.style.backgroundColor = "silver"
            booked++;
            remaining--;
            v.value=booked;
            totalSeats.value=remaining;
        }
    })
    third.appendChild(items);
}