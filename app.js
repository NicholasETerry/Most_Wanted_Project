"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
      default:
    app(people); // restart app
      break;
<<<<<<< HEAD
  }
  
  function traitPrompt(){
    let traitSearchType = promptFor("Do you know the eye color of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    let traitSearchResults;
    switch(traitSearchType){
      case 'yes':
        traitSearchResults = traits(people);
        break;
      case 'no':
        break;
        default:
        app(people); // restart app
        break;
    }
  }
  function traits(people){
    let eyecolor = promptFor("What is the person's eye color?", chars);

    let foundPeople = people.filter(function(person){
      if(person.eyecolor === eyecolor){
        return true;
      }
      else{
        return false;
      }
    })
    // TODO: find the person using the name they entered
    return displayPeople(foundPeople);
=======
>>>>>>> 34e659d44318c33da525d6c6685e4698d1c51e9b
  }
}
  




// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return displayPerson(foundPerson);
}



function traitPrompt(people){
  let traitSearchResults = people;
  let traitSearchType = promptFor("Do you want to search by traits? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(traitSearchType){
    case 'yes':
      traitSearchResults = traits(people);
      break;
    case 'no':
    app(people); // restart app
      break;
  }
}



function searchByTraits(people) {
  let searchCriteria = promptFor("Which trait would you like to search for?  You can search gender, DOB (m/d/yr), height, weight, eye color, or occupation.", chars).toLocaleLowerCase();
  let traitCriteriaResult;
  switch (searchCriteria) {
    case "gender":
      traitCriteriaResult = searchByGender(people);
      break;
      case "dob":
        traitCriteriaResult = searchByDOB(people);
        break;
      searchCriteria;
    case "height":
      traitCriteriaResult = searchByHeight(people);
      break;
      searchCriteria;
    case "weight":
      traitCriteriaResult = searchByWeight(people);
      break;
      searchCriteria;
    case "eye color":
      traitCriteriaResult = searchByEyeColor(people);
      break;
      searchCriteria;
    case "occupation":
      traitCriteriaResult = searchByOccupation(people);
      break;
    default:
  }
  return traitCriteriaResult;
}






function searchByDOB(people){
  let DOBsearchBy = promptFor("What is the person's DOB?", chars);
  let personFound = people.filter(function(person){
    if(person.dob == DOBsearchBy){
      return true;
    }else{
      return false;      
    }
  });
  return personFound

}

function searchByGender(people){
  let genderSearchBy = promptFor("What is the person's gender?", chars);
  let personFound = people.filter(function(person){
    if(person.gender == genderSearchBy){
      return true;
    }else{
      return false;
    }
  });
  return personFound
}

function searchByHeight(people) {
  let heightSearchBy = promptFor("What is the person's height in inches?", chars);
  let personFound = people.filter(function(person){
     if(person.height == heightSearchBy){
       return true;
     }else{
      return false;
    }      
   });
   return personFound
}


function searchByEyeColor(people){
  let eyecolor = promptFor("What is the person's eye color?", chars);
  let foundPerson = people.filter(function(person){
    if(person.eyecolor === eyecolor){
      return true;
    }
    else{
      return false;
    }
  });
  return personFound
}  





// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}