const nameEl = document.querySelector('#name')
const lettersEl = document.querySelector('#letters')
const formEl = document.querySelector('form')
const btnCalc = document.querySelector('#btnCalc')
const totalEl = document.querySelector('#total')
const alertEl = document.querySelector('#alert')
const mainEl = document.querySelector('main')

formEl.addEventListener('submit', evt => {
	evt.preventDefault()
})

nameEl.addEventListener('keyup', evt => {
	if (nameEl.value === '') {
		mainEl.classList.remove('flexStart')
		mainEl.firstElementChild.classList.remove('paddTop')
		mainEl.lastElementChild.classList.remove('lastFlex')
	} else {
		mainEl.classList.add('flexStart')
		mainEl.firstElementChild.classList.add('paddTop')
		mainEl.lastElementChild.classList.add('lastFlex')
	}

	console.log(mainEl.classList)
})

nameEl.addEventListener('keyup', evt => {
	if (evt.keyCode === 13) {
		btnCalc.click()
	}

	let newValue = ''

	for (letter of nameEl.value) {
		if (new RegExp("[a-zA-Z]+").test(letter)) {
			newValue += letter
		} else {
			showAlert()
		}
	}

	nameEl.value = newValue
})

nameEl.addEventListener('keyup', evt => {
	lettersEl.innerHTML = ''

	for (letter of nameEl.value) {
		if (new RegExp("[a-zA-Z]+").test(letter)) {
			const newLetter = document.createElement('li')
      newLetter.innerText = letter.toUpperCase()

      handleMouseOver(newLetter)

      lettersEl.append(newLetter)
		}
	}
})

let handleMouseOver = (newLetter) => {
	newLetter.addEventListener('mouseover', evt => {
		if(newLetter.innerText.length === 1) {
		  let lowerEl = document.createElement('p')
		  lowerEl.innerText = newLetter.innerText.toLowerCase()

		  let codeEl = document.createElement('p')
		  codeEl.innerText = newLetter.innerText.toUpperCase().charCodeAt(0) - 64

		  newLetter.append(lowerEl)
		  newLetter.append(codeEl)
		}
	})
}

btnCalc.addEventListener('click', () => {
  let trena = 0
  const name = nameEl.value

  for (let letter of name) {
    const letterCode = letter.toUpperCase().charCodeAt(0) - 64
    console.log(letter, letterCode)

    trena += letterCode
  }

  totalEl.innerHTML = `Total: ${trena}`
})

const showAlert = () => {
  alertEl.innerHTML = 'Use apenas letras do alfabeto tradicional!'

  setTimeout(() => {
    alertEl.innerHTML = ''
  }, 3000);
}