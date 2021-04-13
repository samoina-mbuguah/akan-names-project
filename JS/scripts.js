//This creates a function that checks the gender the user selects, and the details of birthday they input
function findDate(e) {
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let year = document.getElementById("year").value;
  let month = parseInt(document.getElementById("month").value)
  let date = parseInt(document.getElementById("date").value)
  let yearArray = year.split('')

  //From the year input as a string, I split the characters to get two parts, then sliced the characters, and joined them before converting to integers
  let CC = parseInt(yearArray.slice(0, 2).join(''))
  let YY = parseInt(yearArray.slice(2).join(''))
  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

  //I then used the formula provided, and added Math.round to get a whole figure, before converting it to an absolute number (no negatives or positives)
  let day = Math.round((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (month + 1) / 10)) + date) % 7)
  let chosenDay = Math.abs(day)

  //This creates a function that retrieves the Akan name from the birthdate
  getNameFromDay(chosenDay, gender)
  e.preventDefault();
}

//I then used control flows to determine the Akan name to be displayed from the different positions of the elements in the array
function getNameFromDay(chosenDay, gender) {
  let namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  let namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  if (gender === "female") {
    document.getElementById("displayAkanNameHere").innerHTML = "Your Akan Name is " + namesFemale[chosenDay];
  } else if (gender === "male") {
    document.getElementById("displayAkanNameHere").innerHTML = "Your Akan Name is " + namesMale[chosenDay];
  }
  else {

  }
}

document.addEventListener('submit', findDate)