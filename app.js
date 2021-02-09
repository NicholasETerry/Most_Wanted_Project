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
      searchResults = traitPrompt(people);
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

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person) // get person info
    break;
    case "family":
      getPersonParents(person) // get person parents - this function calls people originally
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
  return displayPerson(foundPerson);
}

// function traitPrompt(people){
//   let traitSearchType = promptFor("Do you want to search by traits? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   switch(traitSearchType){
//     case 'yes':
//       traits(people);
//       break;
//     case 'no':
//     app(people); // restart app
//       break;
//   }
// }

function traitPrompt(people){
  let traitSearchResults = people;
  do{
    traitSearchResults = searchByTraits(traitSearchResults);
    var response = promptFor("Do you want to search by any other traits? 'yes' or 'no'", yesNo).toLowerCase();    
  }while(response == "yes");
return traitSearchResults;
}


function searchByTraits(people) {
  let searchCriteria = promptFor("Which trait would you like to search for?  You can search 'gender', 'DOB' (m/d/yr), 'height', 'weight', 'eye color', or 'occupation'.", chars).toLocaleLowerCase();
  let traitSearchResults;
  switch (searchCriteria) {
    case "gender":
      traitSearchResults = searchByGender(people);
      break;
    case "dob":
      traitSearchResults = searchByDOB(people);
        break;
    case "height":
      traitSearchResults = searchByHeight(people);
      break;
    case "weight":
      traitSearchResults = searchByWeight(people);
      break;
    case "eye color":
      traitSearchResults = searchByEyeColor(people);
      break;
    case "occupation": 
    traitSearchResults = searchByOccupation(people);
      break;
    default:
      alert("Could not find anyone by "+ searchCriteria + ".");
      return searchByTraits(people); // restart trait search
  }
}
function askIfWantToSearchAgain(personFound){
  let searchType = promptFor("Do you want to search another trait? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      traitPrompt(personFound)
      break;
    case 'no':
      // TODO: search by traits
      //searchResults = traitPrompt(people);
      break;
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
  const total = collect(personFound);
  const persontotal = total.count();
  if(persontotal > 1){
    askIfWantToSearchAgain(personFound);
  }
  else{
    displayPeople(personFound);
  }
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
  return traitPrompt(personFound)
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
   return traitPrompt(personFound)
}

function searchByEyeColor(people){
  let eyecolor = promptFor("What is the person's eye color?", chars);
  let personFound = people.filter(function(person){
    if(person.eyecolor === eyecolor){
      return true;
    }
    else{
      return false;
    }
  });
  return traitPrompt(personFound)
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
 
// function getPersonParents(people){
//   let zero = 0;
//   let one = 1;
//   let parentsName = "";
//   let personWithParents = [];
//   let personParentsArray = people.parents;
//   if (personParentsArray.length !==zero){
//     searchForPersonParents(personParentsArray);
//     parentsName = getNames(personWithParents);
//   }else{
//     parentsName = "This person does not have any parents";
//   }
//   return parentsName;
// }

// function searchForPersonParents(personParentsArray){
//   let zero = 0;
//   let one = 1;
//     if(personParentsArray.parents.includes(person.id)){ 
//       return displayPerson(personParentsArray.id);
//    } else{
//      return app(people);
//    }
  
   
//}
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
  let personInfo = "First Name: " + person.firstName + "\n"
                  + "Last Name: " + person.lastName + "\n"
                  + "Date of Birth:" + person.dob + "\n"
                  + "Gender: " + person.gender + "\n"
                  + "Height: " + person.height + "\n"
                  + "Weight: " + person.weight + "\n"
                  + "Eye Color: " + person.eyecolor + "\n"
                  + "Occupation: " + person.occupation + "\n";

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

