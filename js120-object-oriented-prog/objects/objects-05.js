// School

// Create a school object. The school object uses the same kind of student
// object as the previous exercise. It has methods that use and update
// information about the student. Be sure to check out the previous exercise
// for the other arguments that might be needed by the school object.
// Implement the following methods for the school object:

// - addStudent: Adds a student by creating a new student and adding the student
//     to a collection of students. The method adds a constraint that the year
//     can only be any of the following values: '1st', '2nd', '3rd', '4th', or
//     '5th'. Returns a student object if year is valid otherwise it logs
//     "Invalid Year".
// - enrollStudent: Enrolls a student in a course.
// - addGrade: Adds the grade of a student for a course.
// - getReportCard: Logs the grades of a student for all courses. If the course
//     has no grade, it uses "In progress" as the grade.
// - courseReport: Logs the grades of all students for a given course name.
//     Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the `getReportCard`
// and `courseReport` methods respectively.

// Examples of created student objects with grades; methods on the objects are
// not shown here for brevity.
// The following are only showing the properties that aren't methods for
// the three objects

// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

// Example outputs:

// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined

// ====================================================================
// ====================================================================

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [], // course objects; add `note` property when note added

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(courseObject) {
      this.courses.push(courseObject);
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, note) {
      let course = this.courses.find((course) => course.code === courseCode);

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      } else {
        console.log(`${this.name} is not in that course. Can't add note.`);
      }
    },

    updateNote(courseCode, note) {
      let course = this.courses.find((course) => course.code === courseCode);

      if (course) {
        course.note = note;
      } else {
        console.log(`${this.name} is not in that course. Can't update note.`);
      }
    },

    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    // New methods added to student objects in this exercise:

    findCourse(courseName) {
      return this.courses.find((course) => course.name === courseName);
    },

    setGrade(courseName, newGrade) {
      let course = this.findCourse(courseName);
      if (course) {
        course.grade = newGrade;
      } else {
        console.log("Invalid course. Student not enrolled in this course");
      }
    }
  };
}

// ====================================================================
// ====================================================================

let school = {
  students: [],

  addStudent(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (!validYears.includes(year)) {
      console.log("Invalid year");
      return undefined;
    }

    let newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(student, courseName, grade) {
    student.setGrade(courseName, grade);
  },

  getReportCard(student) {
    student.listCourses().forEach((course) => {
      console.log(`${course.name}: ${course.grade ?? "In progress"}`);
    });
  },

  courseReport(courseName) {
    let enrolledStudents = [];
    let grades = [];

    this.students.forEach((student) => {
      let course = student.findCourse(courseName);
      if (course && course.grade) {
        enrolledStudents.push({name: student.name, grade: course.grade});
        grades.push(course.grade);
      }
    });

    if (enrolledStudents.length === 0) return;

    console.log(`=${courseName} Grades=`);
    enrolledStudents.forEach((student) => {
      console.log(`${student.name}: ${student.grade}`);
    });
    console.log("---");

    let average = grades.reduce((sum, num) => sum + num, 0) / grades.length;
    console.log(`Course Average: ${average}`);
  },
};

// ====================================================================
// ====================================================================


let foo = school.addStudent('foo', '3rd');
foo.courses = [
  { name: 'Math', code: 101, grade: 95, },
  { name: 'Advanced Math', code: 102, grade: 90, },
  { name: 'Physics', code: 202, }
];

let bar = school.addStudent('bar', '1st');
bar.courses = [
  { name: 'Math', code: 101, grade: 91, }
];

let qux = school.addStudent('qux', '2nd');
qux.courses = [
  { name: 'Math', code: 101, grade: 93, },
  { name: 'Advanced Math', code: 102, grade: 90, },
];

// ===========

school.getReportCard(foo);
console.log("");

school.courseReport('Math');
console.log("");

school.courseReport('Advanced Math');
console.log("");

school.courseReport('Physics');

/* eslint max-lines-per-function: */
