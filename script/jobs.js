// Jobs data
const jobsData = [
  {
    backgroundColor: '#ffac23',
    imgSrc: 'img/jobs/modalrakyat.svg',
    title: 'Modal Rakyat (2019 - Sekarang)',
    pos: 'Front-end Web Developer / React.js, Vue.js',
    desc: 'Layanan Peer-to-Peer Lending atau marketplace yang mempertemukan Pendana dengan Peminjam (UMKM).',
    url: 'https://www.modalrakyat.id',
    linkText: 'KUNJUNGI WEBSITE'
  },
  {
    backgroundColor: '#161a1f',
    imgSrc: 'img/jobs/sagara.png',
    title: 'Sagara (2020 - Sekarang) Freelance',
    pos: 'Front-end Web Developer / React.js',
    desc: 'Perusahaan IT Consultant yang menyediakan talent sebagai layanan IT untuk customer.',
    url: 'https://www.sagaratechnology.com/en',
    linkText: 'KUNJUNGI WEBSITE'
  },
  {
    backgroundColor: '#ffd83a',
    imgSrc: 'img/jobs/tujuhsembilan.png',
    title: 'Tujuh Sembilan (2018 - 2019)',
    pos: 'Front-end & Back-end Web Developer / Angular, Springboot',
    desc: 'Perusahaan IT Consultant yang menyediakan talent sebagai layanan IT untuk customer.',
    url: 'https://www.tujuhsembilan.com',
    linkText: 'KUNJUNGI WEBSITE'
  }
];

// Create jobs container
function createPortfolioContainer(backgroundColor) {
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
      element.desc,
      element.url,
      element.linkText
    )
  );
});