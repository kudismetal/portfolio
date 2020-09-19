// Portfolio data
const portfolioData = [
  {
    backgroundColor: '#d3dc25',
    imgSrc: 'img/portfolio/ap2ln.png',
    title: 'AP2LN (2020)',
    pos: 'Web Developer / Wordpress',
    desc: 'Pengerjaan project company profile untuk Asosiasi Penyelenggara Pemagangan Luar Negeri, yang berlokasi di Jakarta, Indonesia.'
  },
  {
    backgroundColor: '#f8b868',
    imgSrc: 'img/portfolio/asta-karya.png',
    title: 'LPK Asta Karya (2020)',
    pos: 'Web Developer / Wordpress',
    desc: 'Pengerjaan project company profile untuk Lembaga Pelatihan Kerja Asta Karya, yang berlokasi di Jakarta, Indonesia.'
  },
  {
    backgroundColor: '#4caf50',
    imgSrc: 'img/portfolio/ssms.png',
    title: 'NPIC Student Score Management System (2017)',
    pos: 'Fullstack Desktop Developer / JavaFX',
    desc: 'Pengerjaan project tugas akhir untuk entri, mencetak, dan pembukuan data nilai mahasiswa dengan studi kasus di National Polytechnic Institute of Cambodia, Phnom Penh.'
  },
  {
    backgroundColor: '#4fa2c2',
    imgSrc: 'img/portfolio/polciki.png',
    title: 'Sis. POLSEK CIBEUNYING KIDUL (2016)',
    pos: 'Front-end & Back-end Web Developer / PHP',
    desc: 'Pengerjaan project kerja praktek untuk membuat, mencetak dan menyimpan data STPL dengan studi kasus di Polsek Cibeunying Kidul, Bandung.'
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

// Create portfolio
function createPortfolio(backgroundColor, title, imgSrc, pos, desc) {
  const portfolioContainer = createPortfolioContainer(backgroundColor);
  const portfolioWrapper = createPortfolioWrapper();
  const portfolioContent = createPortfolioContent();
  const portfolioImage = createPortfolioImage(imgSrc, backgroundColor);
  const portfolioTitle = createPortfolioTitle(title);
  const portfolioPosition = createPortfolioDesc(pos);
  const portfolioDesc = createPortfolioDesc(desc);
  
  portfolioContent.appendChild(portfolioTitle);
  portfolioContent.appendChild(portfolioPosition);
  portfolioContent.appendChild(portfolioDesc);
  
  portfolioWrapper.appendChild(portfolioImage);
  portfolioWrapper.appendChild(portfolioContent);
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