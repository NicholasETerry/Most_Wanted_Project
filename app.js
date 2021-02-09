"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
//Test
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
  }
}// move bracket to include mainMenu once we have finished logic for other functions
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
      getPersonInfo(person, people);
    // TODO: get person's info
    break;
    case "family":
      getPersonFamily(person, people);
    // TODO: get person's family
    break;
    case "descendants":
      getDescendants(person, people);
      mainMenu(person, people);
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
  let traitSearchType = promptFor("Do you want to search by traits? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(traitSearchType){
    case 'yes':
      traits(people);
      break;
    case 'no':
    app(people); // restart app
      break;
  }
}



function searchByTraits(people) {
  let searchCriteria = promptFor("Which trait would you like to search for?  You can search gender, DOB (m/d/yr), height, weight, eye color, or occupation.", chars).toLocaleLowerCase();
  switch (searchCriteria) {
    case "gender":
      searchByGender(people);
      break;
      case "dob":
        searchByDOB(people);
        break;
    case "height":
      searchByHeight(people);
      break;
    case "weight":
      searchByWeight(people);
      break;
    case "eye color":
      searchByEyeColor(people);
      break;
    case "occupation": 
      searchByOccupation(people);
      break;
    default:
      alert("Could not find anyone by "+ searchCriteria + ".");
      return searchByTraits(people); // restart trait search
  }
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
  return displayPeople(personFound)

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
  return displayPeople(personFound)
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
   return displayPeople(personFound)
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
  return displayPeople(personFound)
}  
function searchByWeight(people){
  let weight = promptFor("What is the person's weight?", chars);
  let foundPerson = people.filter(function(person){
    if (person.weight === weight){
       return true;
    }
    else{
      return false;
    }
  });
  return displayPeople(personFound)
}
function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation?", chars);
  let foundPerson = people.filter(function(person){
    if (person.occupation === occupation){
      return true;
    }
    else{
      return false
    }

  
  });
  return displayPeople(personFound)
}
 

function getPersonParents(people){
  let zero = 0;
  let one = 1;
  let parentsName = "";
  let personWithParents = [];
  let personParentsArray = people.parents;
  if (personParentsArray.length !==zero){
    searchForPersonParents(personParentsArray);
    parentsName = getNames(personWithParents);
  }else{
    parentsName = "This person does not have any parents";
  }
  return parentsName;
}

function searchForPersonParents(personParentsArray){
  let zero = 0;
  let one = 1;
    if(personParentsArray.parents.includes(person.id)){ 
      return displayPerson(personParentsArray.id);
   } else{
     return app(people);
   }
  
   
}
function searchByParentId(identification, people)
let descendants;
descendants = people.filter(function(element){
 if (element.parents[0] === identification || element.parents[1] === identification){
     return true;
 }
 else {
     return false;
 }
});
function getDecendants(person, people)
let descendants;
let identification;
identification = person.id;
descendants = [];
descendants = searchByParentId(indentification, people)
console.log(descendants)
return descendants;







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

