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


let programArray = [];

function createCourseArray() {
  const className = document.querySelector('.course_name');
  const classYear = document.querySelector('.course-year');
  let program = {
    classN: className.textContent,
    classY: classYear.textContent,
  };
  programArray.push(program);
  console.log(programArray);
}

const courseSections = document.querySelectorAll('.course_sec');
courseSections.forEach(section => {
  createCourseArray();
});

console.log(programArray);


function findCourse(courseList) {
  let user;
  do {
    user = prompt("Enter a 4 digit number: ");
    if (user.length !== 4 || isNaN(user)) {
      alert("Invalid number or string");
    }
  } while (user.length !== 4);

  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(user)) {
      document.body.style.backgroundColor = "green";
      return;
    }
  }

  const newCourse = {
    code: user,
    name: "N/A",
    year: "Fall 2020"
  };
  courseList.push(newCourse);
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('course_sec');
  section.innerHTML = `
    <p class="course_name"><a href="#">${newCourse.code} - ${newCourse.name}</a></p>
    <p class="course-year">${newCourse.year}</p>
    <p></p>
  `;
  main.appendChild(section);
}

findCourse(courseList);
