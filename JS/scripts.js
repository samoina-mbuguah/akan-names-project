let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function findDate(e) {
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let year = document.getElementById("year").value;
  let month = parseInt(document.getElementById("month").value)
  let date = parseInt(document.getElementById("date").value)
  let yearArray = year.split('')

  let CC = parseInt(yearArray.slice(0, 2).join(''))
  let YY = parseInt(yearArray.slice(2).join(''))
  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  let day = Math.round((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (month + 1) / 10)) + date) % 7)
  let chosenDay = Math.abs(day)

  getNameFromDay(chosenDay, gender)
  e.preventDefault();
}

function getNameFromDay(chosenDay, gender) {
  let namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  let namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  if(gender=== "female") {
    //console.log(namesFemale[chosenDay]);
    document.getElementById("displayAkanNameHere").innerHTML = "Your Akan Name is " + namesFemale[chosenDay];
  } else if (gender==="male") {
    //console.log(namesMale[chosenDay]);
    document.getElementById("displayAkanNameHere").innerHTML = "Your Akan Name is " + namesMale[chosenDay];
  }
}

document.addEventListener('submit', findDate)