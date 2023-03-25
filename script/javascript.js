const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "COMM 1116", name: "Business Communications" },
    { code: "Math 1310", name: "Technical Math" },
  ];
  
  let user;
  
  do {
    user = prompt("Enter a 4 digit number: ");
    if (user.length !== 4 || isNaN(user)) {
      alert("Invalid number or string");
    }
  } while (user.length !== 4);
  
  let course = false;
  
  for (let i = 0; i < courseList.length; i++ ) {
    if (courseList[i].code.includes(user)) {
      alert(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
      course = true;
      break;
    }
  }

  if (course === false) {
    const newCourse = {code: `${user}`, name: null};
    courseList.push(newCourse);
    console.log(`Log success ${newCourse.code}`); 
  }

  console.log(courseList);



// function createCourseArray(){
//   const courseArray = [];
//   const courseElement = document.querySelectorAll('.course_name')
//   for (let i = 0; i < courseElement.length; i++); {
//     const courseName = courseElement[i].querySelectorAll('.course_name');
//     const courseDate = courseElement[i].querySelectorAll('.course-year');
//     const matchName = courseName.match([/ACIT/])
//     const matchDate = courseDate.match()
//     if (matchName && matchDate) {
//       courseArray.push({'code': matchName, 'date': matchDate});
//       return courseArray
//     }
//   }
// }

// console.log(createCourseArray())

function createCourseArray() {
  const courseArray = [];
  const courseElement = document.getElementsByClassName('course_sec');
  const courseName = document.getElementsByTagName('course_name');


  return courseName;
}

console.log(createCourseArray())