


export default [
  {
    name:'Blog Title',
    desc:'An AI tool that generates blog titles based on the information.',
    category:'Blog',
    icon:'/images/title.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline topic and give me result in Rich text editor format.',
    slug:'-generator-blog-title',
    form:[
      {
        label: 'Enter your niche topic',
        field: 'input',
        name:'niche',
        required:true,
      },
      {
        label: 'Outline topic',
        field: 'input',
        name:'outline',
        required:true,
      }
    ]
  },
  {
    name: "Code Explanation",
    desc: "An AI tool that generates YouTube video scripts for explaining code snippets.",
    category: "YouTube",
    icon: "/images/code.png",
    aiPrompt: "Generate a detailed YouTube video script for explaining the given code snippet. Include an introduction, step-by-step explanation, and a conclusion.",
    slug: "-youtube-code-explanation",
    form: [
      {
        label: "Enter code snippet",
        field: "textarea",
        name: "code",
        required: true
      },
      {
        label: "Programming language",
        field: "dropdown",
        name: "language",
        options: ["Python", "JavaScript", "Java", "C++", "Ruby", "Other"],
        required: true
      },
      {
        label: "Explanation focus (e.g., syntax, logic, optimization)",
        field: "input",
        name: "focus",
        required: false
      }
    ]
  },
  {
    name: "Video Summary",
    desc: "An AI tool that generates a summary of a YouTube video.",
    category: "YouTube",
    icon: "/images/video.png",
    aiPrompt: "Provide a concise summary of the given YouTube video. Include the main points and any significant details.",
    slug: "-youtube-video-summary",
    form: [
      {
        label: "Enter YouTube video URL",
        field: "input",
        name: "url",
        required: true
      }
    ]
  },
  {
    name: "Blog Summary",
    desc: "An AI tool that generates summaries of blog posts.",
    category: "Blog",
    icon: "/images/title.png",
    aiPrompt: "Generate a summary of the given blog post. Include the main points and any significant details.",
    slug: "-blog-summary",
    form: [
      {
        label: "Enter blog post URL",
        field: "input",
        name: "url",
        required: true
      }
    ]
  },
  {
    name: "Article Ideas",
    desc: "An AI tool that generates article ideas based on a given topic.",
    category: "Article",
    icon: "/images/implementation.png",
    aiPrompt: "Provide 5 article ideas in bullet points based on the given topic.",
    slug: "-article-idea-generator",
    form: [
      {
        label: "Enter your topic",
        field: "input",
        name: "topic",
        required: true
      }
    ]
  },
  {
    name: "Podcast Topics",
    desc: "An AI tool that generates podcast topics based on a given niche.",
    category: "Podcast",
    icon: "/images/topic.png",
    aiPrompt: "Provide 5 podcast topic ideas in bullet points based on the given niche.",
    slug: "-podcast-topic-generator",
    form: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        required: true
      }
    ]
  },
  {
    name: "Social Post Ideas",
    desc: "An AI tool that generates social media post ideas based on a given theme.",
    category: "Social Media",
    icon: "/images/post.png",
    aiPrompt: "Provide 5 social media post ideas in bullet points based on the given theme.",
    slug: "-social-media-post-ideas",
    form: [
      {
        label: "Enter your theme",
        field: "input",
        name: "theme",
        required: true
      }
    ]
  },
  {
    name: "Email Subjects",
    desc: "An AI tool that generates email subject lines based on the content of the email.",
    category: "Email",
    icon: "/images/subject.png",
    aiPrompt: "Provide 5 email subject line ideas based on the given email content.",
    slug: "-email-subject-line-generator",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "content",
        required: true
      }
    ]
  },
  {
    name: "Webinar Topics",
    desc: "An AI tool that generates webinar topics based on a given industry or interest.",
    category: "Webinar",
    icon: "/images/webinar.png",
    aiPrompt: "Provide 5 webinar topic ideas in bullet points based on the given industry or interest.",
    slug: "-webinar-topic-generator",
    form: [
      {
        label: "Enter your industry or interest",
        field: "input",
        name: "industry",
        required: true
      }
    ]
  },
  {
    name: "Book Titles",
    desc: "An AI tool that generates book titles based on the genre and plot.",
    category: "Book",
    icon: "/images/book.png",
    aiPrompt: "Provide 5 book title ideas in bullet points based on the given genre and plot.",
    slug: "-book-title-generator",
    form: [
      {
        label: "Enter book genre",
        field: "input",
        name: "genre",
        required: true
      },
      {
        label: "Enter book plot",
        field: "textarea",
        name: "plot",
        required: true
      }
    ]
  },
  {
    name: "Product Descriptions",
    desc: "An AI tool that generates product descriptions based on product details.",
    category: "E-commerce",
    icon: "/images/product-description.png",
    aiPrompt: "Generate a compelling product description based on the given product details.",
    slug: "-product-description-generator",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "name",
        required: true
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true
      }
    ]
  }
]
