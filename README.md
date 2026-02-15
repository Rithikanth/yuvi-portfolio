# 📊 Professional Data Engineer Portfolio

A modern, responsive, and feature-rich portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Perfect for showcasing your data engineering expertise and landing your next opportunity.

## 🌟 Features

- ✨ **Modern Design** - Clean, professional, and visually appealing interface
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Dark Theme** - Eye-friendly dark mode with gradient accents
- ⚡ **Performance** - Fast loading, optimized images, and smooth animations
- 🎯 **Smooth Animations** - Framer Motion animations for engaging UX
- 📍 **Multiple Sections**:
  - Hero Section with introduction
  - Professional Experience
  - Technical Skills (organized by category)
  - Project Showcase with metrics
  - Awards & Recognitions
  - Certifications
  - Contact Information
- 🔗 **Social Integration** - Links to LinkedIn, GitHub, and email
- 📊 **Data-Driven** - Easy-to-update portfolio data in separate file
- ♿ **Accessibility** - Semantic HTML and accessible components
- 🎯 **SEO Optimized** - Meta tags and structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git (optional)

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Update Your Information

All your personal information is stored in `data/portfolio.ts`. Simply update this file with your details:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  socialLinks: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    email: "mailto:your.email@example.com",
  },
  // ... rest of your data
};
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#0f172a",    // Dark blue
  secondary: "#1e293b",  // Slate
  accent: "#3b82f6",     // Blue
  accent2: "#06b6d4",    // Cyan
  // Add more custom colors
}
```

### Add More Projects

Add new projects to the `projects` array in `data/portfolio.ts`:

```typescript
{
  id: 3,
  title: "Your Project Title",
  description: "Project description...",
  achievements: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2"],
  metrics: {
    "Key Metric": "Value",
  }
}
```

### Modify Sections

Each section is a separate component in the `components/` directory:

- `Navbar.tsx` - Navigation bar
- `Hero.tsx` - Hero section
- `Experience.tsx` - Professional experience
- `Skills.tsx` - Technical skills
- `Projects.tsx` - Project showcase
- `Awards.tsx` - Awards and certifications
- `Contact.tsx` - Contact information
- `Footer.tsx` - Footer

## 📱 Responsive Breakpoints

The portfolio is designed with mobile-first approach using Tailwind's breakpoints:

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: 1024px+ (xl, 2xl)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts        # Your portfolio data
├── styles/
│   └── globals.css         # Custom CSS
├── public/                 # Static assets
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

## 🔧 Available Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📦 Dependencies

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. Visit [Vercel](https://vercel.com)

3. Create a new project and connect your GitHub repository

4. Vercel will automatically deploy your site

### Deploy to Other Platforms

The project can also be deployed to:

- **Netlify** - [Guide](https://docs.netlify.com/frameworks/next-js/overview/)
- **AWS Amplify** - [Guide](https://aws.amazon.com/amplify/hosting/)
- **GitHub Pages** - [Guide](https://nextjs.org/docs/deployment/static-exports)
- **Docker** - Create a Dockerfile (examples available online)

## 📊 SEO Optimization

The portfolio includes:

- Meta tags for social sharing (Open Graph, Twitter Card)
- Semantic HTML structure
- Mobile responsiveness (important for SEO)
- Fast loading times (Core Web Vitals)

Update the metadata in `app/layout.tsx` to match your details:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your professional description...",
  // ... more metadata
};
```

## 🎯 Performance Tips

1. **Optimize Images** - Use WebP format for images
2. **Lazy Loading** - Components use viewport detection
3. **Code Splitting** - Next.js handles automatic code splitting
4. **Caching** - Static generation for faster builds

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📝 Tips for Better Results

1. **High-Quality Descriptions** - Write clear, concise descriptions of your work
2. **Metrics & Achievements** - Quantify your impact (e.g., "reduced latency by 40%")
3. **Professional Photos** - Add profile picture and project screenshots
4. **Keep Updated** - Regularly update with new projects and achievements
5. **Test Responsiveness** - Check on different devices before deploying

## 🤝 Contributing

Feel free to customize and extend this template for your needs. Some ideas:

- Add a blog section
- Include case studies
- Add testimonials
- Create a dark/light mode toggle
- Add PDF resume download

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

If you encounter any issues or have questions:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Explore [Framer Motion Examples](https://www.framer.com/motion/)

---

## 📸 Screenshots

The portfolio includes:

- **Hero Section** - Eye-catching introduction with code visualization
- **Experience Timeline** - Professional experience with achievements
- **Skills Grid** - Organized technical skills by category
- **Project Showcase** - Detailed project cards with metrics
- **Awards Section** - Recognition and certifications
- **Contact Section** - Multiple ways to get in touch
- **Responsive Navigation** - Mobile-friendly menu

## 🌐 Going Live

Once ready to deploy:

1. Update all contact information in `data/portfolio.ts`
2. Add your actual LinkedIn, GitHub, and email links
3. Update meta tags in `app/layout.tsx`
4. Test all links and forms
5. Check mobile responsiveness one final time
6. Deploy to your hosting provider

Congratulations! Your professional portfolio is now live! 🎉

---

**Happy coding! Best of luck with your data engineering career! 🚀**
