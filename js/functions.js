const table_numbers = document.querySelector('table#numbers')
const button = document.querySelector('button')
const p_rows = document.querySelector('p')
const numbers = []
let i = 0


button.addEventListener('click', () => {
   
    const newRow = table_numbers.insertRow()
    while (newRow.cells.length < 7) {
        const random_number = Math.floor(Math.random(1,9) * 9) + 1
        const td = newRow.insertCell()
        td.innerHTML = random_number
        }
    i++
    p_rows.innerHTML = `Valmiita rivejä: ${i}`
})



