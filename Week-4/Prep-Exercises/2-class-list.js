import { modules, students, mentors, classes} from "./hyf.js";
//import {possibleMentorsForModule} from "./1-find-mentors.js";
/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  // TODO complete this function

  const mentorsAndStudents = [];

  students.forEach(student => {

    if (student.class === className && student.graduated === false){
      
      mentorsAndStudents.push({name : student.name , role: 'student' });
    }
  })

  let currentModule = '';

  classes.forEach(clas => ( clas.name === className && clas.active === true)?
   currentModule = clas.currentModule:'')

   const moduleMentors = [];

  mentors.forEach(mentor => mentor.canTeach.includes(currentModule)? moduleMentors.push(mentor.name):'');

// const mentorsForModule = possibleMentorsForModule(currentModule); ( imported function)

  moduleMentors.forEach(mentor => mentorsAndStudents.push({name: mentor, role:'mentor'}));

  return mentorsAndStudents ;

};

// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class35'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  // TODO complete this function

  const activeClassArray = classes.filter(clas => clas.active === true);

  let activeClassInfo ={};

  activeClassArray.forEach(ele => activeClassInfo[ele.name] = getPeopleOfClass(ele.name));

  return activeClassInfo;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
