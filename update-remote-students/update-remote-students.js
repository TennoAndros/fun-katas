// Please do not change the name of this function
function updateRemoteStudents(str) {
  // const updated = str.map((student) => {
  //   if (!student.location) student.location = "remote";
  //   return student;
  // });
  // return updated;


  //JUST RETURN
  return str.map((student) => {
    if (!student.location) student.location = "remote";
    return student;
  });
}
module.exports = updateRemoteStudents;
