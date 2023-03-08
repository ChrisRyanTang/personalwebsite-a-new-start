const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "COMM 1160", name: "Business Communications" },
    { code: "Math 1310", name: "Technical Math" },
  ];
  
  let user;
  
  do {
    user = prompt("Enter a 4 digit number: ");
    if (user.length !== 4 || isNaN(user)) {
      alert("Invalid number or string");
    }
  } while (user.length !== 4);
  
  let course
  
  for (let find of courseList) {
    course = find["code"].search(user);
    if (course > -1) {
      alert(
        `Yes I am taking the course: ` + " " + find["code"] + "-" + find["name"]
      );
      console.log("It works");
    }
  };
  if (course < 0) {
      courseList.push({code: user, name: "null"}); 
  };
  console.log("Issa success");
  console.log(courseList);