# Virtual Reality & Augmented Reality Tests

## Resources
Important Links:
- Mind-AR - this is the main AR script for the project.
    - [Mind AR - Main AR Script](https://github.com/hiukim/mind-ar-js)
    - [Mind AR - Github Repository](https://github.com/hiukim/mind-ar-js)
    - [Compile Marker Images](https://hiukim.github.io/mind-ar-js-doc/tools/compile/)
    - [Mind AR - Image Tracking Examples](https://hiukim.github.io/mind-ar-js-doc/examples/summary)
    - [Tracking Config Options](https://hiukim.github.io/mind-ar-js-doc/quick-start/tracking-config)
- AR.js - this is the secondary AR script for the project, used for markerless and GPS -based AR.
    - [AR.js - Github Repository](https://github.com/AR-js-org/AR.js)
    - [AR.js - Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- 8th Wall - this is a high-quality AR vendor with free-to-use code.
    - [8th Wall - Green Screen Video Code Source](https://www.8thwall.com/playground/alpha-video-slam-aframe/code/)
    - [8th Wall - Green Screen Video Code Source](https://www.8thwall.com/playground/alpha-video-slam-aframe/code/)

## Instructions

How to add a new sub-project:
1. Set up the project data by ading a new `.json` file to the `src/data/projectData` folder by copying and existing .
2. Add the new project pages to the `src/pages` folder by cloning another similar project or template.
3. Update the new pages to use your new json file.
4. Add any customizations you need.
5. Ready to go!

---

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
