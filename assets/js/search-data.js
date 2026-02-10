// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Some publications may not be listed here. Please check Google Scholar for latest publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Ongoing or completed projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-members",
          title: "Members",
          description: "Current Members of JPONG LAB",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "news-i-join-the-division-of-language-amp-amp-ai-at-hufs-as-an-assistant-professor",
          title: 'I join the Division of Language &amp;amp;amp; AI at HUFS as an Assistant...',
          description: "",
          section: "News",},{id: "news-글로벌-인문사회융합-연구지원사업-선정",
          title: '글로벌 인문사회융합 연구지원사업 선정',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "projects-multimodal",
          title: 'multimodal',
          description: "audio-language",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-research",
          title: 'research',
          description: "?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6A%68%39%33%6C%6A%68@%68%75%66%73.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tZmWk14AAAAJ", "_blank");
        },
      },{
        id: 'social-hufs_lai',
        title: 'Hufs_lai',
        section: 'Socials',
        handler: () => {
          window.open("https://langai.hufs.ac.kr/langai/index.do", "_blank");
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
