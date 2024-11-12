function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const navToggle = document.getElementById("navToggle");

    // Toggle the active class on the menu
    navLinks.classList.toggle("active");

    // icon based on menu state
    if (navLinks.classList.contains("active")) {
        navToggle.innerHTML = "✖";
           navToggle.style.color= "#535252";
       // Close icon
    } else {
        navToggle.innerHTML = "☰";
     
         navToggle.style.color='#535252';
    }
}

// JavaScript for Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';  // Light mode 
    } else {
        darkModeToggle.textContent = '🌙';
    
    }
}
function downloadResume() {
    window.location.href = 'https://drive.google.com/file/d/1cuowqjQdccwPkYo9nkeavINiwcMBvgwZ/view'              
  }


  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".sub_text");
    const text = "A Front End Developer | Web Designer<br>With UI/UX Design Experience"; 
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text.charAt(index) === "<") {
              
                textElement.innerHTML += "<br>";
                index += 4; //`<br>` tag
            } else {
                textElement.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, 40 ); 
        }
    }

    type();
});




// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select all sections to animate
const sections = document.querySelectorAll('.desc_box, .card1_btech, .card2_diploma, .card3_schooling,.connect_btn,.project,.project-item,.webdev,.uiux,.databases,.do');

//scroll event listener
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('animate');
        }
    });
});

// document.querySelectorAll('.project-label').forEach(label => {
//     label.addEventListener('click', function () {
//         const content = label.nextElementSibling;
//         const toggle = label.querySelector('.toggle');

      
//         content.style.display = content.style.display === 'block' ? 'none' : 'block';
        
//         toggle.textContent = toggle.textContent === '+' ? '-' : '+';
//     });
// });


document.querySelectorAll('.project-label').forEach(label => {
    label.addEventListener('click', function () {
        const content = label.nextElementSibling;
        const toggle = label.querySelector('.toggle');

        if (content.classList.contains('active')) {
            content.style.maxHeight = null;
            content.classList.remove('active');
            toggle.textContent = '+';
        } else {
            // Close all other active content sections
            document.querySelectorAll('.content.active').forEach(item => {
                item.style.maxHeight = null;
                item.classList.remove('active');
                item.previousElementSibling.querySelector('.toggle').textContent = '+';
            });

            // Open the current content
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            toggle.textContent = '-';
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-item');

    function checkVisibility() {
        skills.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                // Apply animation when the skill is in view
                if (!skill.classList.contains('animated-right') && !skill.classList.contains('animated-left')) {
                    if (Array.from(skill.parentElement.children).indexOf(skill) % 2 === 0) {
                        skill.classList.add('animated-left'); // Odd - slide in from left
                    } else {
                        skill.classList.add('animated-right'); // Even - slide in from right
                    }
                }
            }
        });
    }

 
    window.addEventListener('scroll', checkVisibility);

    // Initial check for elements already in view
    checkVisibility();
});



