const totalSeats = 30;
const container = document.getElementById('seats-container');

for (let i=1; i<= totalSeats;i++){
    const seat=document.createElement('div')
    seat.className='seat'
    seat.innerText=i

    seat.addEventListener('click',() => {
        seat.classList.toggle('selected')
    })

    container.appendChild(seat)
}