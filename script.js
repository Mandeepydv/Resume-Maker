// Add dynamic field for education
function addNewEdField() {
  const newField = document.createElement("textarea");
  newField.classList.add("form-control", "edField");
  newField.rows = 3;
  document.getElementById("ed").appendChild(newField);
}

// Add dynamic field for languages
function addNewLanField() {
  const newField = document.createElement("input");
  newField.classList.add("form-control", "laField");
  document.getElementById("la").appendChild(newField);
}

// Add dynamic field for work experience
function addNewWEField() {
  const newField = document.createElement("textarea");
  newField.classList.add("form-control", "weField");
  newField.rows = 3;
  document.getElementById("we").appendChild(newField);
}

// Add dynamic field for skills
function addNewAQField() {
  const newField = document.createElement("input");
  newField.classList.add("form-control", "skField");
  document.getElementById("sk").appendChild(newField);
}

// Generate CV
function generateCV() {
  const name = document.getElementById("nameField").value;
  const jobTitle = document.getElementById("jobFiled").value;
  const contact = document.getElementById("contactField").value;
  const gmail = document.getElementById("gmailFiled").value;
  const facebook = document.getElementById("fbField").value;
  const linkedin = document.getElementById("linkedField").value;
  const objective = document.getElementById("objectiveField").value;
  const img = document.getElementById("imgField").files[0];

  // Update CV Template
  document.getElementById("nName").innerText = name;
  document.getElementById("jJob").innerText = jobTitle;
  document.getElementById("cContact").innerText = contact;
  document.getElementById("gGmail").innerText = gmail;
  document.getElementById("fFacebook").innerText = facebook;
  document.getElementById("lLinkedin").innerText = linkedin;
  document.getElementById("objectiveT").innerText = objective;

  // Handle image upload
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("imgTemplate").src = e.target.result;
  };
  if (img) {
    reader.readAsDataURL(img);
  }

  // Handle Education
  const eduFields = document.querySelectorAll(".edField");
  const eduList = document.getElementById("edu");
  eduList.innerHTML = "";
  eduFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    eduList.appendChild(li);
  });

  // Handle Languages
  const lanFields = document.querySelectorAll(".laField");
  const lanList = document.getElementById("lan");
  lanList.innerHTML = "";
  lanFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    lanList.appendChild(li);
  });

  // Handle Work Experience
  const weFields = document.querySelectorAll(".weField");
  const weList = document.getElementById("weT");
  weList.innerHTML = "";
  weFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    weList.appendChild(li);
  });

  // Handle Skills
  const skFields = document.querySelectorAll(".skField");
  const skList = document.getElementById("skills");
  skList.innerHTML = "";
  skFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    skList.appendChild(li);
  });

  // Show CV
  document.getElementById("cv-template").style.display = "block";
}

// Download CV as PDF
function downloadCV() {
  const cvContent = document.getElementById("cv-template"); // Get the CV content

  // Options for html2pdf
  const options = {
    margin:       10, // Margin around the page
    filename:     'resume.pdf', // Name of the generated file
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 }, // Scale the content for better quality
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' } // Paper size and orientation
  };

  // Generate and download PDF from the CV content
  html2pdf().from(cvContent).set(options).save(); // Save the generated PDF
}
