const course = {
    code: "WDD131",
    name: "Web Class",
    sections: [
        {sectionNum: "1", roomNum: "404", enrolled: 21, days: "TR", instructor: "Dr. Jekyll"},
        {sectionNum: "2", roomNum: "304", enrolled: 17, days: "MW", instructor: "Mr. Hyde"},
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    }
}





// const course = {
//     code: 'CSE121b',
//     name: 'Javascript Language',
//     logo: 'images/js-logo.png',
//     sections: [
//     { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//     { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
//     ],
//     enrollStudent: function (sectionNum) {
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//           (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//           this.sections[sectionIndex].enrolled++;
//           renderSections(this.sections);
//         }
//       }
//   };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(course.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    course.enrollStudent(sectionNum);
    console.log("Print")
});
          