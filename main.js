
const inputs = document.querySelectorAll('input')

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
      event.preventDefault()
      if (inputs[index+1]){
        inputs[index+1].focus()
      }
    }
  })
})
