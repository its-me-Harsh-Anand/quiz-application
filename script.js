//selecting all the needed element
const form = document.querySelector("#quiz-form")
const answerInput = document.querySelectorAll(".answer")
const questionItem = document.querySelectorAll(".question-item")
const alertBox = document.querySelector("#alert")

// adding submit event to form
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const answerInputArray = Array.from(answerInput)
  //getting all the selected/checked inputs

  let selectedAnswer = answerInputArray.filter((answer) => {
    return answer.checked == true
  })
  questionItemArray = Array.from(questionItem)
  questionItemArray.forEach((question) => {
    question.classList.add("incorrect")
    question.classList.remove("correct")
  })

  // checking whether selected answer is true
  let allTrue = 0
  for (i = 0; i < selectedAnswer.length; i++) {
    if (selectedAnswer[i].value === "true") {
      selectedAnswer[i].closest(".question-item").classList.add("correct")
      selectedAnswer[i].closest(".question-item").classList.remove("incorrect")
      allTrue = allTrue + 1
    } else {
      selectedAnswer[i].closest(".question-item").classList.add("incorrect")
      selectedAnswer[i].closest(".question-item").classList.remove("correct")
    }
  }
  //displaying congrats message if all answers are true
  if (allTrue == questionItemArray.length) {
    alertBox.classList.add("active")
    setTimeout(() => {
      alertBox.classList.remove("active")
    }, 1000)
  }
})
