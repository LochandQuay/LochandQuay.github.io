document.getElementById('resume').querySelector('.faux-link').addEventListener(
  'click', function(e) {
    if (e.target.innerHTML === 'View Resume') {
      e.target.innerHTML = 'Hide Resume';
    } else {
      e.target.innerHTML = 'View Resume';
    }

    document.querySelector('.resume-box').classList.toggle('hide-resume');
    // const resumeElement = document.querySelector('.resume-display');
    
    // if (resumeElement.style.display === 'none') {
    //   resumeElement.style.display = 'block';
    // } else {
    //   resumeElement.style.display = 'none';
    // }
  }
);