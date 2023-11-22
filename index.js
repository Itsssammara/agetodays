function calculateAgeInDays() {
    const birthdate = document.getElementById("birthdate").value;
    const today = new Date();
    const birthdateObj = new Date(birthdate);

    if (isNaN(birthdateObj)) {
      document.getElementById("result").innerHTML = "Invalid date format. Please enter a valid date.";
      return;
    }

    const ageInMilliseconds = today - birthdateObj;
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    document.getElementById("result").innerHTML = "Your age in days is: " + ageInDays;
  }