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



function createCourseArray(){
  const courseArray = [];
  const courseElement = document.querySelectorAll('.course_sec')
  for (let i = 0; i <= courseElement.length; i++); {
    const courseName = courseElement[i].querySelectorAll('.course_name');
    const courseDate = courseElement[i].querySelectorAll('.course_year');
    const match = courseName.match()
  }
}
