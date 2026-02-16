// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Under Construction",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-presented-my-work-at-the-73rd-annual-meeting-of-the-aps-division-of-fluid-dynamics-virtual-abstract",
          title: 'Presented my work at the 73rd Annual Meeting of the APS Division of...',
          description: "",
          section: "News",},{id: "news-presented-my-work-at-the-74th-annual-meeting-of-the-aps-division-of-fluid-dynamics-in-pheonix-az-abstract",
          title: 'Presented my work at the 74th Annual Meeting of the APS Division of...',
          description: "",
          section: "News",},{id: "news-delivered-a-poster-presentation-at-bmes-2022-in-san-antonio-tx",
          title: 'Delivered a poster presentation at BMES 2022 in San Antonio, TX.',
          description: "",
          section: "News",},{id: "news-delivered-a-poster-presentation-at-bmes-2023-in-seattle-wa",
          title: 'Delivered a poster presentation at BMES 2023 in Seattle, WA.',
          description: "",
          section: "News",},{id: "news-some-of-my-phd-work-on-a-novel-blood-pressure-cuff-system-has-been-featured-in-the-caltech-news-read-the-full-article-here-link",
          title: 'Some of my PhD work on a novel blood pressure cuff system has...',
          description: "",
          section: "News",},{id: "news-a-talk-about-turning-ideas-into-inventions-with-caltech-engenuity-read-the-full-article-here-link",
          title: 'A talk about turning ideas into inventions with Caltech ENGenuity. Read the full...',
          description: "",
          section: "News",},{id: "news-caltech-magazine-featured-some-of-my-work-studying-how-blood-pressure-waves-can-be-used-for-diagnostic-purposes-read-the-full-article-here-link",
          title: 'Caltech Magazine featured some of my work studying how blood pressure waves can...',
          description: "",
          section: "News",},{id: "news-presented-at-aha-2024-scientific-sessions-in-chicago-il-abstract-abstract-2",
          title: 'Presented at AHA 2024 Scientific Sessions in Chicago, IL. [ABSTRACT] [ABSTRACT 2]',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-work-has-been-featured-in-pnas",
          title: 'Excited to share that our work has been featured in PNAS.',
          description: "Excited to share that our work has been featured in PNAS.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-new-patent-published-in-google-scholar",
          title: 'New patent published in Google Scholar.',
          description: "New patent published in Google Scholar.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-our-new-paper-on-decoding-vascular-age-from-peripheral-waveform-measurements-has-been-published-in-machine-learning-health-link-to-the-full-article-link",
          title: 'Our new paper on decoding vascular age from peripheral waveform measurements has been...',
          description: "",
          section: "News",},{id: "news-a-cuff-sized-window-to-the-heart-jacc-adv",
          title: 'A cuff-sized window to the heart - JACC Adv.',
          description: "Excited to share that our work has been featured in JACC Advances.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12/";
            },},{id: "news-dr-gakenheimer-continues-to-support-my-research-efforts-in-medical-devices-through-a-new-research-fund-read-the-full-interview-about-his-most-recent-contributions-link",
          title: 'Dr. Gakenheimer continues to support my research efforts in medical devices through a...',
          description: "",
          section: "News",},{id: "news-featured-by-caltech-on-their-linkedin-page",
          title: 'Featured by Caltech on their LinkedIn Page',
          description: "Featured by Caltech on their LinkedIn Page",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_14/";
            },},{id: "news-pulseai-our-machine-learning-algorithm-for-fiducial-point-detection-is-now-published-in-bspc",
          title: 'PulseAI - our machine learning algorithm for fiducial point detection - is now...',
          description: "Our work on a machine learning algorithm for fiducial point detectioin in cardiac waveforms has been published in BSPC.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_15/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%74%61%6D%62%6F%72%69@%63%61%6C%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alessiotamborini", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alessiotamborini", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=76zCRFUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
