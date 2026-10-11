const facultyPrograms = {
    "Clinical / Basic and Clinical Sciences": [
        "Medicine and Surgery (MBBS)",
        "Dental Surgery (BDS)"
    ],

    "Basic Medical Sciences": [
        "Human Anatomy",
        "Physiology",
        "Biochemistry",
        "Optometry (Doctor of Optometry)"
    ],

    "Allied Health Sciences": [
        "Nursing Science",
        "Physiotherapy (Doctor of Physiotherapy)",
        "Radiography",
        "Human Nutrition and Dietetics",
        "Dental Therapy",
        "Public Health"
    ],

    "Pharmaceutical Sciences": [
        "Pharmacy (Pharm.D)",
        "Pharmacology"
    ],

    "Hospital Management & Health Information": [
        "Health Information Management",
        "IT & Health Informatics"
    ],

    "Science and Computing": [
        "Biology",
        "Chemistry",
        "Microbiology",
        "Physics",
        "Statistics"
    ]
};

const faculty = document.getElementById("faculty");
const programme = document.getElementById("programme");

faculty.addEventListener("change", () => {

    programme.innerHTML = "";

    const selectedFaculty = faculty.value;

    if (!selectedFaculty) {
        programme.innerHTML =
            "<option value=''>Select faculty first</option>";
        return;
    }

    programme.innerHTML =
        "<option value=''>Choose your programme</option>";

    facultyPrograms[selectedFaculty].forEach((program) => {

        const option = document.createElement("option");

        option.value = program;
        option.textContent = program;

        programme.appendChild(option);
    });
});
const createStudentButton =
    document.getElementById("createStudentButton");

if (createStudentButton) {

    createStudentButton.addEventListener("click", () => {

        const studentName =
            document.getElementById("studentName").value.trim();

        const username =
            document.getElementById("username").value.trim();

        const level =
            document.getElementById("level").value;

        const faculty =
            document.getElementById("faculty").value;

        const programme =
            document.getElementById("programme").value;


        if (
            !studentName ||
            !username ||
            !level ||
            !faculty ||
            !programme
        ) {
            alert("Please complete your student profile.");
            return;
        }


        const student = {
            name: studentName,
            username: username,
            level: level,
            faculty: faculty,
            programme: programme,
            xp: 0,
            lifecoins: 0,
            missions: 0
        };


        localStorage.setItem(
            "fummsaStudent",
            JSON.stringify(student)
        );


     const profileUrl = new URL(
    "student-profile.html",
    window.location.href
);

profileUrl.searchParams.set("name", studentName);
profileUrl.searchParams.set("username", username);
profileUrl.searchParams.set("level", level);
profileUrl.searchParams.set("faculty", faculty);
profileUrl.searchParams.set("programme", programme);

window.location.href = profileUrl.toString(); 
          });

}