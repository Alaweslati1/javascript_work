function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
  
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }
  
  document.getElementById('image1').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const previewImage = document.getElementById('preview-image');
      previewImage.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  });
  
  document.getElementById('image2').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const previewImage = document.getElementById('preview-image');
      previewImage.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  });
  document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const content = document.querySelector('.content');
    
    // Replace the content with the desired text
    content.innerHTML = `
      <h1>About Me</h1>
      <p>
        Je suis un développeur full-stack JavaScript passionné et certifié avec des compétences solides en Node.js, Express.js, MySQL, MongoDB, React.js, Vue.js, React Native, HTML, CSS et jQuery. Actuellement, je suis à la recherche de ma première expérience professionnelle pour lancer ma carrière après avoir obtenu mon certificat chez Rebootkamp Tunisie.
      </p>
      <p>
        Je suis ouvert à toute opportunité de stage, de contrat à durée déterminée ou de poste à plein temps. Mon objectif est de contribuer à des projets passionnants au sein d'une équipe dynamique tout en continuant à apprendre et à me développer.
      </p>
      <p>
        Si vous avez des conseils, des pistes ou des opportunités à partager, je serais extrêmement reconnaissant pour votre aide. N'hésitez pas à me contacter par email à aweslati02@gmail.com ou par téléphone au +21695372716. Je suis disponible pour discuter de mes compétences et de ma passion pour la programmation lors d'un entretien.
      </p>
      <p>
        Merci infiniment pour votre attention et votre soutien. Je suis convaincu que, grâce à des personnes comme vous, les débutants comme moi peuvent se lancer dans le monde professionnel avec confiance et détermination.
      </p>
      <p>#DéveloppeurJavaScript #ChercheOpportunité #JavaScript #FullStackDeveloper</p>
    `;
  });
  document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.reload(); // Reload the page
  });
  document.getElementById('services-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const content = document.querySelector('.content');
    
    // Replace the content with the desired service description
    content.innerHTML = `
      <h1>Services</h1>
      <h2>Description:</h2>
      <p>
        I offer full-stack JavaScript development services, bringing a wealth of skills and expertise to help you achieve your web development goals. My proficiency includes:
      </p>
      <h3>Back-End Development:</h3>
      <ul>
        <li>Node.js: I specialize in building scalable and efficient server-side applications using Node.js.</li>
        <li>Express.js: Crafting robust APIs and web applications is a forte, and Express.js is my go-to framework.</li>
        <li>Database Management: Proficient in working with databases such as MySQL and MongoDB, I ensure your data is stored securely and efficiently.</li>
      </ul>
      <h3>Front-End Development:</h3>
      <ul>
        <li>React.js and Vue.js: Crafting modern and interactive user interfaces is my passion, and I excel in React.js and Vue.js development.</li>
        <li>HTML/CSS: I create responsive and visually appealing web layouts using the latest HTML and CSS standards.</li>
        <li>jQuery: For enhancing user experience and adding dynamic features, jQuery is in my toolkit.</li>
      </ul>
    `;
  });
  document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const content = document.querySelector('.content');
    
    // Replace the content with the specified contact information
    content.innerHTML = `
      <h1>Contact Me</h1>
      <p>
        Please don't hesitate to reach out if you have advice, leads, or opportunities to share. You can contact me via:
      </p>
      <ul>
        <li>Email: <a href="mailto:aweslati02@gmail.com">aweslati02@gmail.com</a></li>
        <li>Phone: <a href="tel:+21695372716">+21695372716</a></li>
      </ul>
      <p>
        I'm available for interviews to discuss my skills and passion for programming.
      </p>
    `;
  });
  const movingImage = document.getElementById("preview-image");
    let isDragging = false;

    movingImage.addEventListener("mousedown", (e) => {
      isDragging = true;
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const offsetX = e.clientX - movingImage.clientWidth / 2;
        const offsetY = e.clientY - movingImage.clientHeight / 2;
        movingImage.style.left = offsetX + "px";
        movingImage.style.top = offsetY + "px";
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    movingImage.addEventListener("mouseover", (e) => {
      const offsetX = e.clientX - movingImage.getBoundingClientRect().left;
      const offsetY = e.clientY - movingImage.getBoundingClientRect().top;
      console.log("X:", offsetX, "Y:", offsetY);
    });