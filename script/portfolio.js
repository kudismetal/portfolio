// Portfolio data
const portfolioData = [
  {
    backgroundColor: '#18579a',
    imgSrc: 'img/portfolio/sud.jpeg',
    title: 'Sentralisasi Underlying Documents',
    pos: 'Back-end Web Developer / Springboot',
    desc: 'Pengerjaan project untuk entri dan pengolahan data underlying documents Bank BCA.'
  },
  {
    backgroundColor: '#263239',
    imgSrc: 'img/portfolio/simgaji.png',
    title: 'SimGaji',
    pos: 'Front-end Web Developer / Angular',
    desc: 'Pengerjaan project untuk entri, mencetak, dan pembukuan data gaji pegawai PT. Taspen Persero.'
  },
  {
    backgroundColor: '#4caf50',
    imgSrc: 'img/portfolio/ssms.png',
    title: 'NPIC Student Score Management System',
    pos: 'Fullstack Desktop Developer / JavaFX',
    desc: 'Pengerjaan project untuk entri, mencetak, dan pembukuan data nilai mahasiswa di National Polytechnic Institute of Cambodia, Phnom Penh.'
  },
  {
    backgroundColor: '#4fa2c2',
    imgSrc: 'img/portfolio/polciki.png',
    title: 'Sis. POLSEK CIBEUNYING KIDUL',
    pos: 'Fullstack Web Developer / PHP',
    desc: 'Pengerjaan project untuk membuat, mencetak dan menyimpan data STPL di Polsek Cibeunying Kidul, Bandung.'
  }
];

// Create portfolio container
function createPortfolioContainer(backgroundColor) {
  const portfolioContainer = document.createElement('div');

  portfolioContainer.classList.add('portfolio-container');
  portfolioContainer.style.backgroundColor = backgroundColor;

  return portfolioContainer;
}

// Create portfolio wrapper
function createPortfolioWrapper() {
  const portfolioWrapper = document.createElement('div');

  portfolioWrapper.classList.add('portfolio-wrapper');

  return portfolioWrapper;
}

// Create portfolio image
function createPortfolioImage(imgSrc) {
  const portfolioImageContainer = document.createElement('div');
  const portfolioImage = document.createElement('img');

  portfolioImage.setAttribute('src', imgSrc);
  portfolioImage.setAttribute('alt', '');

  portfolioImageContainer.appendChild(portfolioImage);
  return portfolioImageContainer;
}

// Create portfolio title
function createPortfolioTitle(title) {
  const portfolioTitle = document.createElement('h2');
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

// Create portfolio
function createPortfolio(backgroundColor, title, imgSrc, pos, desc) {
  const portfolioContainer = createPortfolioContainer(backgroundColor);
  const portfolioWrapper = createPortfolioWrapper();
  const portfolioImage = createPortfolioImage(imgSrc);
  const portfolioTitle = createPortfolioTitle(title);
  const portfolioPosition = createPortfolioDesc(pos);
  const portfolioDesc = createPortfolioDesc(desc);

  portfolioWrapper.appendChild(portfolioImage);
  portfolioWrapper.appendChild(portfolioTitle);
  portfolioWrapper.appendChild(portfolioPosition);
  portfolioWrapper.appendChild(portfolioDesc);
  portfolioContainer.appendChild(portfolioWrapper);

  return portfolioContainer;
}

// Get portfolio section element
const portfolioSection = document.getElementsByClassName('portfolio-section')[0];

// Write portfolio
portfolioData.forEach(element => {
  portfolioSection.appendChild(
    createPortfolio(
      element.backgroundColor, 
      element.title, 
      element.imgSrc,
      element.pos,
      element.desc
    )
  );
});