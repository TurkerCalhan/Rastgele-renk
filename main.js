const text = document.getElementById('text')
const btn = document.getElementById('btn')

const codeArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const randomColorCode = () => {
    let hexCode = '#'
    for (let x = 0; x < 6; x++) {
        hexCode += codeArrays[Math.floor(Math.random() * codeArrays.length)]
    }
    return hexCode
}

btn.addEventListener('click', () => {
    const colorCode = randomColorCode()
    text.innerText = colorCode
    document.body.style.backgroundColor = colorCode
})