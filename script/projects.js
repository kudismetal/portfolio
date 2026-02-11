// Projects data
const projectsData = [
  {
    backgroundColor: '#f8b868',
    imgSrc: 'img/portfolio/asta-karya.png',
    title: 'LPK Asta Karya (2024)',
    pos: 'Web Developer / React.js',
    desc: 'Worked on project company profile for Lembaga Pelatihan Kerja Asta Karya, located in Jakarta, Indonesia.',
    url: 'https://www.asta-karya.co.id',
    linkText: 'VISIT WEBSITE'
  },
  {
    backgroundColor: '#d3dc25',
    imgSrc: 'img/portfolio/ap2ln.png',
    title: 'AP2LN (2020)',
    pos: 'Web Developer / Wordpress',
    desc: 'Worked on project company profile for Asosiasi Penyelenggara Pemagangan Luar Negeri, located in Jakarta, Indonesia.',
    url: 'https://www.ap2ln.org',
    linkText: 'VISIT WEBSITE'
  },
  {
    backgroundColor: '#FDEB71',
    imgSrc: 'img/portfolio/pundi.png',
    title: 'Project Dompet-Web [Pundi] (2020)',
    pos: 'Web Developer / React.js',
    desc: 'Worked on personal project to further learn about React.js, creating a slicing of a financial recording application.',
    url: 'https://github.com/kudismetal/proj-dompet-web',
    linkText: 'VISIT REPOSITORY'
  },
  {
    backgroundColor: '#61dafb',
    imgSrc: 'img/portfolio/image-recognition-brain.png',
    title: 'Image Face Recognition Apps (2019)',
    pos: 'Fullstack Web Developer / React.js, Node.js',
    desc: 'Worked on face image recognition app project from one of the web development courses I took.',
    url: 'https://github.com/kudismetal/image-recognition-brain',
    linkText: 'VISIT REPOSITORY'
  },
  {
    backgroundColor: '#4caf50',
    imgSrc: 'img/portfolio/ssms.png',
    title: 'NPIC Student Score Management System (2017)',
    pos: 'Fullstack Desktop Developer / JavaFX',
    desc: 'Worked on final project for entry, printing, and bookkeeping of student score data with case study at National Polytechnic Institute of Cambodia, Phnom Penh.',
    url: 'https://drive.google.com/file/d/1iAGDs4RZojV0N5AhnSU4JYq76YIH8zaI/view?usp=sharing',
    linkText: 'VIEW SNAPSHOT'
  },
  {
    backgroundColor: '#4fa2c2',
    imgSrc: 'img/portfolio/polciki.png',
    title: 'Sis. POLSEK CIBEUNYING KIDUL (2016)',
    pos: 'Front-end & Back-end Web Developer / PHP',
    desc: 'Worked on internship project to create, print, and store STPL data with case study at Polsek Cibeunying Kidul, Bandung.',
    url: 'https://drive.google.com/file/d/1ZiqO5PiYQXoKyRDld6gTuHyzsSnGua0R/view?usp=sharing',
    linkText: 'VIEW PRESENTATION'
  }
];

// Create portfolio container
function createPortfolioContainer() {
  const portfolioContainer = document.createElement('div');

  portfolioContainer.classList.add('portfolio-container');
  portfolioContainer.classList.add('fade-in');

  return portfolioContainer;
}

// Create portfolio wrapper
function createPortfolioWrapper() {
  const portfolioWrapper = document.createElement('div');

  portfolioWrapper.classList.add('portfolio-wrapper');

  return portfolioWrapper;
}

// Create portfolio image
function createPortfolioImage(imgSrc, backgroundColor) {
  const portfolioImageContainer = document.createElement('div');
  portfolioImageContainer.style.backgroundColor = backgroundColor;
  portfolioImageContainer.classList.add('portfolio-image');

  const portfolioImage = document.createElement('img');

  portfolioImage.setAttribute('src', imgSrc);
  portfolioImage.setAttribute('alt', '');
  portfolioImage.classList.add('fade-in');

  portfolioImageContainer.appendChild(portfolioImage);
  return portfolioImageContainer;
}

function createPortfolioContent() {
  const portfolioContent =  document.createElement('div');

  portfolioContent.classList.add('portfolio-content');

  return portfolioContent;
}

// Create portfolio title
function createPortfolioTitle(title) {
  const portfolioTitle = document.createElement('h3');
  const portfolioTitleText = document.createElement('strong');

  portfolioTitleText.innerHTML = title;
  portfolioTitle.appendChild(portfolioTitleText);

  return portfolioTitle;
}

// Create portfolio desc
function createPortfolioDesc(desc) {
  const portfolioPosition = document.createElement('p');

  portfolioPosition.innerHTML = desc;

  return portfolioPosition;
}

// Create portfolio link
function createPortfolioLink(url, linkText, backgroundColor) {
  const portfolioLink = document.createElement('a');

  portfolioLink.href = url;
  portfolioLink.target = '_blank';
  portfolioLink.innerHTML = linkText;
  portfolioLink.style.backgroundColor = backgroundColor;

  portfolioLink.classList.add('portfolio-link');

  return portfolioLink;
}

// Create portfolio
function createPortfolio(backgroundColor, title, imgSrc, pos, desc, url, linkText) {
  const portfolioContainer = createPortfolioContainer(backgroundColor);
  const portfolioWrapper = createPortfolioWrapper();
  const portfolioContent = createPortfolioContent();
  const portfolioImage = createPortfolioImage(imgSrc, backgroundColor);
  const portfolioTitle = createPortfolioTitle(title);
  const portfolioPosition = createPortfolioDesc(pos);
  const portfolioDesc = createPortfolioDesc(desc);
  const portfolioLink = createPortfolioLink(url, linkText, backgroundColor);
  
  portfolioContent.appendChild(portfolioTitle);
  portfolioContent.appendChild(portfolioPosition);
  portfolioContent.appendChild(portfolioDesc);
  portfolioContent.appendChild(portfolioLink);
  
  portfolioWrapper.appendChild(portfolioImage);
  portfolioWrapper.appendChild(portfolioContent);
  portfolioContainer.appendChild(portfolioWrapper);

  return portfolioContainer;
}

// Get portfolio section element
const portfolioSection = document.getElementsByClassName('portfolio-section')[0];

setTimeout(() => {
  // Hide loader
  const loading = document.getElementsByClassName('loading')[0].remove();

  // Write portfolio
  projectsData.forEach(element => {
    portfolioSection.appendChild(
      createPortfolio(
        element.backgroundColor, 
        element.title, 
        element.imgSrc,
        element.pos,
        element.desc,
        element.url,
        element.linkText
      )
    );
  });
}, 1000)