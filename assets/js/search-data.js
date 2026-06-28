// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "Publications organized in the order of the year sequence.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Upcoming",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-award",
          title: "Award",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/award/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-academic-writing",
        
          title: "Academic Writing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/academic-writing/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-on-federated-continual-learning-gfedcl-graph-based-federated-continual-learning-with-spatial-and-temporal-awareness-is-accepted-at-icml",
          title: 'Our work on Federated Continual Learning, “GFedCL: Graph-Based Federated Continual Learning with Spatial...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-attend-the-senior-exhibition-at-bergen-county-academies-dr-john-grieco-campus",
          title: 'I was invited to attend the Senior Exhibition at Bergen County Academies, Dr....',
          description: "",
          section: "News",},{id: "news-zixun-xiong-qingyang-yu-and-dr-wang-co-authored-chapter-16-trustworthy-generative-ai-for-wireless-communications-in-the-new-elsevier-book-generative-learning-for-wireless-communications-fundamentals-and-applications",
          title: 'Zixun Xiong, Qingyang Yu, and Dr. Wang co-authored “Chapter 16: Trustworthy Generative AI...',
          description: "",
          section: "News",},{id: "news-our-work-on-federated-domain-adaptation-fedindex-federated-domain-adaptation-with-continuous-domain-indices-is-accepted-at-tmlr",
          title: 'Our work on Federated Domain Adaptation, “FedIndex: Federated Domain Adaptation with Continuous Domain...',
          description: "",
          section: "News",},{id: "research-federated-domain-adaptation",
          title: 'Federated Domain Adaptation',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/1_research/";
            },},{id: "research-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Research",handler: () => {
              window.location.href = "/research/2_research/";
            },},{id: "research-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Research",handler: () => {
              window.location.href = "/research/3_research/";
            },},{id: "research-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Research",handler: () => {
              window.location.href = "/research/4_research/";
            },},{id: "research-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Research",handler: () => {
              window.location.href = "/research/5_research/";
            },},{id: "research-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Research",handler: () => {
              window.location.href = "/research/6_research/";
            },},{id: "research-federated-continual-learning",
          title: 'Federated Continual Learning',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/7_research/";
            },},{id: "research-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Research",handler: () => {
              window.location.href = "/research/8_research/";
            },},{id: "research-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Research",handler: () => {
              window.location.href = "/research/9_research/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Qingyang_Yu_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%79%75%31%33@%73%74%65%76%65%6E%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RyougiSh1k1", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-0529-1843", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jXX2S_cAAAAJ", "_blank");
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
