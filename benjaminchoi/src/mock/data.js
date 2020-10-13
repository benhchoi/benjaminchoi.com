import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Benjamin Choi | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Ben Choi',
  subtitle: "I'm a software engineer 👨‍💻",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: `I am currently a Software Engineer at Volant Trading, a high-frequency options 
  trading firm. I primarily work with C++ and Python, and touch all software aspects of the 
  system. On any given day, you can find me: implementing new strategies from the ground-up, 
  creating trading apps that interface with FPGA hardware, refactoring hardware-only apps to be 
  software-compatible, automating mundane and previously manual tasks, and providing live support 
  for the system!`,
  paragraphTwo: `I graduated from Washington University in St. Louis (WUSTL) Magna Cum Laude with 
  a MS in Computer Science (with a Certificate in Data Mining & Machine Learning) and a BS in 
  Computer Science (with a second major in Economics, a minor in Mathematics, and a Certificate 
    in Financial Economics). While at school, I was an active member of Tau Beta Pi, Zeta Beta 
    Tau, and the university's CSE department.`,
  paragraphThree: `Outside of work, I enjoy tackling new food projects, traveling, Brazilian 
  Jiu-Jitsu, Judo, and yoga!`,
  resume: 'https://drive.google.com/file/d/1TbsAc08SOv8efObL_8iRZyQAlSPpa15p/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'app_screens.jpg',
    title: 'Course Manager',
    info: `Course Manager is a course grading and lab checkout app originally designed for WUSTL's
    Intro to CS class. Necessitated by the course's popularity and the skewed TA/student ratio, the app 
    speeds up the lab checkout process by assigning a unique QR code per student per lab, which can 
    then be scanned and marked as completed by an instructor via their phone camera or computer.`,
    info2: `The entire app was built from the ground-up using: Django for the backend, React for the 
    web frontend, React Native for the mobile frontend, and DRF (Django Rest Framework) for the 
    connective REST API.`,
    url: 'http://coursemanager.benjaminchoi.com/',
    repo: 'https://github.com/choibc97/coursemanager',
  },
  {
    id: nanoid(),
    img: 'bounty_creation.png',
    title: 'Picturesque',
    info: `Picturesque is a forum meant to connect buyers looking for custom art with artists 
    hoping to find commission work. Built for the art world, the site has a focus on placing 
    images as the focal point of its UI while keeping other elements simple and clean.`,
    info2: `The entire site was built from the ground-up using: Django for the backend, React for the 
    web frontend, and DRF (Django Rest Framework) for the connective REST API.`,
    url: 'http://picturesque.benjaminchoi.com/',
    repo: 'https://github.com/choibc97/picturesque',
  },
  {
    id: nanoid(),
    img: 'fifa19_errors.png',
    title: 'FIFA Rating Preditor',
    info: `FIFA Rating Predictor is a dot product kernel Gaussian Process regessor capable of predicting 
    the overall ratings of FIFA 19 players with a median absolute error of 1.2 points (out of 100).`,
    info2: `Created for WUSTL's Bayesian Methods in Machine Learning course, implemented in Python 
    using Scikit-learn.`,
    urltxt: 'See Report',
    url: 'https://drive.google.com/file/d/1HrOOmfDiZpSvV2ljg376Hjf8D2MkGgJZ/view?usp=sharing',
    repo: 'https://github.com/choibc97/fifa_rating_predictor',
  },
  {
    id: nanoid(),
    img: 'clustering.png',
    title: 'k-Means Geo Clustering',
    info: `My team of 3 implemented a k-means geo clustering algorithm to determine the most effective 
    locations to place rehabilitiation centers in the state of NJ, based on data collected from the 
    DEA's database of opioid pill transactions.`,
    info2: `Created for WUSTL's Cloud Computing with Big Data Applications course, implemented in
    Python using Spark.`,
    urltxt: 'See Report',
    url: 'https://drive.google.com/file/d/1YYjKX3k5VHAWyn_9SQqvUXuAPXpdOhUh/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'sentiment_accuracy.png',
    title: 'Twitter Sentiment Analyzer',
    info: `My team of 2 implemented a sentiment analyzer trained to classify tweets into one of three categories: 
    positive, neutral, or negative. Trained on a dataset of tweets directed at airlines, our sentiment analyzer is 
    able to classify tweets with around 80% accuracy.`,
    info2: `Created for WUSTL's Crowdsourcing and Human Computation course, implemented in Python using 
    Scikit-learn and NLTK, specifically with a linear kernel SVM on a bag of words representation of tweets.`,
    urltxt: 'See Report',
    url: 'https://drive.google.com/file/d/1WBo-bsAaHBnAxpvwuWxdDlALuhUuPhDE/view?usp=sharing',
    repo: 'https://github.com/choibc97/twitter_sentiment_analyzer',
  },
  {
    id: nanoid(),
    img: 'combined_congestion_game.png',
    title: 'An ε-Greedy Approach to the Congestion Game',
    info: `Examined whether an ε-greedy multi-armed bandit algorithm can be used to find the Nash equilibrium for 
    the classic highway congestion game associated with Braess' Paradox. Results showed the approach converged to 
    the correct equilibrium in most cases, but coverged best when: the number of runs increases, the max iterations 
    parameter increases, ε increases, or agents gain perfect information.`,
    info2: `Completed for WUSTL's Multi-Agent Systems course, implemented in Python.`,
    urltxt: 'See Report',
    url: 'https://drive.google.com/file/d/1tUPR4NmxVtUFStLyoR4RtasdckRb_GzN/view?usp=sharing',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'choi.bc97@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/choibc97/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/choibc97',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
