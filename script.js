  // Load Overlay
  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loading-mode");
    document.body.insertAdjacentHTML("afterbegin", `
      <div id="welcomeOverlay">
        <h1>Welcome to <span style="color:#4f46e5;">MONXCODE</span></h1>
        <input type="text" id="userName" placeholder="Enter your name" oninput="checkName()"/>
        <button id="enterBtn" onclick="triggerBubble()">Enter</button>
      </div>
    `);
  });

  // Name Check
  function checkName() {
    const name = document.getElementById("userName").value.trim();
    document.getElementById("enterBtn").style.display = name ? "inline-block" : "none";
  }

  // Trigger Bubble & Hide
  function triggerBubble() {
    const btn = document.getElementById("enterBtn");
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.width = bubble.style.height = `${Math.random() * 12 + 8}px`;
      bubble.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
      btn.appendChild(bubble);
      setTimeout(() => bubble.remove(), 2000);
    }

    btn.disabled = true;
    setTimeout(() => {
      const overlay = document.getElementById("welcomeOverlay");
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      document.body.classList.remove("loading-mode");
      setTimeout(() => overlay.remove(), 800);
    }, 1200);
  }
    function revealOnScroll() {
    document.querySelectorAll('.reveal-slide, .slide-img').forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 60) el.classList.add('active');
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
    const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach((item) => {
    item.querySelector('.accordion-title').addEventListener('click', () => {
      accordions.forEach((el) => {
        if (el !== item) el.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
  
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('certificateSection'));
  
    const observerWhy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reason-box').forEach(box => {
    box.classList.add('reveal-init');
    observerWhy.observe(box);
  });
  
    function openPasswordBox() {
    document.getElementById("passwordPopup").style.display = "flex";
  }

  function closePasswordBox() {
    document.getElementById("passwordPopup").style.display = "none";
  }

  function checkPassword() {
    const pass = document.getElementById("passwordInput").value;
    if (pass === "monxadmin") {
      document.getElementById("passwordPopup").style.display = "none";
      document.getElementById("testimonialForm").style.display = "block";
      alert("✅ Access Granted!");
    } else {
      alert("❌ Incorrect password!");
    }
  }

  // Toggle show/hide password
  function togglePassword() {
    const input = document.getElementById("passwordInput");
    const icon = document.getElementById("eyeIcon");
    if (input.type === "password") {
      input.type = "text";
      icon.innerHTML = `<path d="M12 5c-7 0-11 7-11 7s4 7 11 7c1.7 0 3.2-.4 4.6-1.1l1.4 1.4c-1.8 1-4 1.7-6 1.7-7 0-11-7-11-7s1.5-2.6 4-4.5l1.5 1.5C6.4 12.5 5 14 5 14s4 7 11 7c1.7 0 3.3-.3 4.8-.9l1.5 1.5-1.4 1.4-18-18 1.4-1.4 1.6 1.6C8.2 6.4 10 6 12 6c1.7 0 3.2.4 4.6 1.1L18 5.7C16.2 4.6 14.2 4 12 4c-2 0-4 .4-5.8 1.2L5.5 3.9C7.3 2.8 9.6 2 12 2c7 0 11 7 11 7s-4 7-11 7c-1.6 0-3.2-.4-4.6-1.1l-1.5-1.5C5.8 15.6 7 16 8 16c3 0 5-2 5-5 0-1.2-.4-2.2-1-3Z"/>`;
    } else {
      input.type = "password";
      icon.innerHTML = `<path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>`;
    }
  }
    function showPasswordPrompt() {
    const pass = prompt("Enter Admin Password:");
    if(pass === "monxadmin") {
      document.getElementById("testimonialForm").style.display = "block";
    } else {
      alert("❌ Incorrect password. Access denied.");
    }
  }
      const roles = ["Frontend Developer", "BCA Student", "Python Learner", "UI & UX Designer"];
    let roleIndex = 0, charIndex = 0;
    function typeRole() {
      const typingDiv = document.getElementById("typing");
      if (charIndex < roles[roleIndex].length) {
        typingDiv.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
      } else {
        setTimeout(() => {
          typingDiv.textContent = "";
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
          typeRole();
        }, 1200);
      }
    }
    typeRole();
    function toggleMenu() {
      document.getElementById("mobileMenu").classList.toggle("show");
    }
