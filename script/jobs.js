// Jobs data
const jobsData = [
  {
    backgroundColor: '#ffac23',
    imgSrc: 'img/jobs/modalrakyat.svg',
    title: 'Modal Rakyat (2019 - Sekarang)',
    pos: 'Front-end Web Developer / React.js, Vue.js',
    desc: 'Layanan Peer-to-Peer Lending atau marketplace yang mempertemukan Pendana dengan Peminjam (UMKM).'
  },
  {
    backgroundColor: '#ffd83a',
    imgSrc: 'img/jobs/tujuhsembilan.png',
    title: 'Tujuh Sembilan (2018 - 2019)',
    pos: 'Front-end & Back-end Web Developer / Angular, Springboot',
    desc: 'Perusahaan IT Consultant yang menyediakan talent sebagai layanan IT untuk customer.'
  }
];

// Create jobs container
function createPortfolioContainer(backgroundColor) {
  const portfolioContainer = document.createElement('div');

  portfolioContainer.classList.add('portfolio-container');
  portfolioContainer.classList.add('fade-in');
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
  portfolioImage.classList.add('fade-in');

  portfolioImageContainer.appendChild(portfolioImage);
  return portfolioImageContainer;
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

// Get job section element
const jobsSection = document.getElementsByClassName('jobs-section')[0];

// Write portfolio
jobsData.forEach(element => {
  jobsSection.appendChild(
    createPortfolio(
      element.backgroundColor, 
      element.title, 
      element.imgSrc,
      element.pos,
      element.desc
    )
  );
});