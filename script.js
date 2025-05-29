

document.addEventListener("DOMContentLoaded", function () {
  // Resume button
  const resumeBtn = document.querySelector(".btn-resume");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      window.open(
        "https://drive.google.com/file/d/1Cv8QVfeNwc1-X3zcSow12BYhep9qXidD/view?usp=drive_link",
        "_blank"
      );
    });
  }

  // LinkedIn button
  const linkedInButton = document.querySelector(".btn-linked");
  if (linkedInButton) {
    linkedInButton.addEventListener("click", function () {
      window.open(
        "https://www.linkedin.com/in/sabrina-mavlonova-2045a4364/",
        "_blank"
      );
    });
  }

  // Project buttons (used in index.html)
  window.showGallery = function () {
    window.open("https://sabrina1309.github.io/collegetips_gallery/", "_blank");
  };

  window.showGeology = function () {
    window.open("https://sabrina1309.github.io/", "_blank");
  };

  window.showToDo = function () {
    window.open("https://sabrina1309.github.io/to-doIntern/", "_blank");
  };

  window.showInstagramProfile = function() {
    window.open("https://www.instagram.com/sunnee_sis/", "_blank");
  }
  window.showLinkedIn = function() {
    window.open("https://www.linkedin.com/in/sabrina-mavlonova-2045a4364/", "_blank");
  }
  

  
  
  

  
});

  
