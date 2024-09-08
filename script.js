var _a;
// Update these initial visibility settings
var cvForm = document.getElementById('cv-form');
var resumeTemplate = document.getElementById('resume-template');
if (cvForm) {
    cvForm.style.display = 'block'; // Ensure the form is visible initially
}
if (resumeTemplate) {
    resumeTemplate.style.display = 'none'; // Ensure the resume template is hidden initially
}
// Update the generateCV function to switch visibility
function generateCV() {
    // Personal Information
    var name = document.getElementById('nameField').value;
    var jobTitle = document.getElementById('titleField').value;
    var contact = document.getElementById('contactField').value;
    var email = document.getElementById('emailField').value;
    var address = document.getElementById('addressField').value;
    var linkedin = document.getElementById('linkedinField').value;
    var github = document.getElementById('githubField').value;
    var objective = document.getElementById('objectiveField').value;
    // Populate Resume Template with contenteditable fields
    document.getElementById('fullnameT').innerText = name;
    document.getElementById('fullnameT').setAttribute('contenteditable', 'true');
    document.getElementById('nameT').innerText = name;
    document.getElementById('nameT').setAttribute('contenteditable', 'true');
    document.getElementById('jobtitleT').innerText = jobTitle;
    document.getElementById('jobtitleT').setAttribute('contenteditable', 'true');
    document.getElementById('phoneT').innerText = "Phone: ".concat(contact);
    document.getElementById('phoneT').setAttribute('contenteditable', 'true');
    document.getElementById('emailT').innerText = "Email: ".concat(email);
    document.getElementById('emailT').setAttribute('contenteditable', 'true');
    document.getElementById('addressT').innerText = "Address: ".concat(address);
    document.getElementById('addressT').setAttribute('contenteditable', 'true');
    document.getElementById('linkedT').href = linkedin;
    document.getElementById('linkedT').innerText = linkedin;
    document.getElementById('linkedT').setAttribute('contenteditable', 'true');
    document.getElementById('githubT').href = github;
    document.getElementById('githubT').innerText = github;
    document.getElementById('githubT').setAttribute('contenteditable', 'true');
    document.getElementById('objectiveT').innerText = objective;
    document.getElementById('objectiveT').setAttribute('contenteditable', 'true');
    // Education
    var degreeFields = document.querySelectorAll('.degreeField');
    var schoolFields = document.querySelectorAll('.schoolField');
    var educationList = '';
    for (var i = 0; i < degreeFields.length; i++) {
        var degree = degreeFields[i].value;
        var school = schoolFields[i].value;
        educationList += "<li contenteditable=\"true\">".concat(degree, " from ").concat(school, "</li>");
    }
    var educationSection = document.getElementById('aqT');
    if (educationSection) {
        educationSection.innerHTML = educationList;
    }
    // Work Experience
    var jobFields = document.querySelectorAll('.weJobField');
    var companyFields = document.querySelectorAll('.companyField');
    var workList = '';
    for (var i = 0; i < jobFields.length; i++) {
        var job = jobFields[i].value;
        var company = companyFields[i].value;
        workList += "<li contenteditable=\"true\">".concat(job, " at ").concat(company, "</li>");
    }
    var workSection = document.getElementById('weT');
    if (workSection) {
        workSection.innerHTML = workList;
    }
    // Skills
    var skills = document.getElementById('skillsField').value;
    var subSkills = document.getElementById('subSkillField').value;
    var skillsList = "<li contenteditable=\"true\">".concat(skills, "</li><li contenteditable=\"true\">").concat(subSkills, "</li>");
    document.getElementById('skillsT').innerHTML = skillsList;
    // Allow all editable sections to be clicked and edited immediately
    makeResumeEditable();
    // Add functionality to make the image editable
    makeImageEditable();
    // Switch visibility: hide form and show resume
    if (cvForm) {
        cvForm.style.display = 'none';
    }
    if (resumeTemplate) {
        resumeTemplate.style.display = 'grid';
    }
}
// Function to make all resume sections editable
function makeResumeEditable() {
    var editableElements = document.querySelectorAll('#resume-template [contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('input', function () {
            console.log("Content in ".concat(element.id, " was updated."));
        });
    });
}
// Function to make the image editable
function makeImageEditable() {
    var imgTemplate = document.getElementById('imgTemplate');
    imgTemplate.addEventListener('click', function () {
        var newImageInput = document.createElement('input');
        newImageInput.type = 'file';
        newImageInput.accept = 'image/*';
        // Listen for image selection
        newImageInput.addEventListener('change', function (event) {
            var _a;
            var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(file);
                reader_1.onloadend = function () {
                    if (typeof reader_1.result === 'string') {
                        imgTemplate.src = reader_1.result;
                    }
                };
            }
        });
        // Trigger file input when image is clicked
        newImageInput.click();
    });
}
// Code for setting the image initially
var fileInput = document.getElementById('imgField');
var imgTemplate = document.getElementById('imgTemplate');
fileInput === null || fileInput === void 0 ? void 0 : fileInput.addEventListener('change', function () {
    var file = fileInput.files ? fileInput.files[0] : null;
    if (file) {
        var reader_2 = new FileReader();
        reader_2.readAsDataURL(file);
        reader_2.onloadend = function () {
            if (typeof reader_2.result === 'string') {
                imgTemplate.src = reader_2.result;
            }
        };
    }
});
// Function to print the CV
function printCV() {
    window.print();
}
// Event listener for form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    generateCV();
});
