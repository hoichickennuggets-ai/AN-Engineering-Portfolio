// EDIT PROFILE AND HOME HERO TEXT HERE.
// Add any supported image filename to src/assets/home/hero/. Legacy hero-welding
// files in src/assets/home/ remain a fallback until the new folder has photos.
const folderHeroImages = import.meta.glob<string>('../assets/home/hero/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}', { eager: true, query: '?url', import: 'default' })
const legacyHeroImages = import.meta.glob<string>('../assets/home/hero-welding.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}', { eager: true, query: '?url', import: 'default' })
const sortImages = (images: Record<string, string>) => Object.entries(images)
  .sort(([left], [right]) => left.localeCompare(right, 'en'))
  .map(([, src]) => src)
const homeHeroImages = sortImages(folderHeroImages)
const resolvedHomeHeroImages = homeHeroImages.length ? homeHeroImages : sortImages(legacyHeroImages)

export const profile = {
  name: 'Alfred Nonis',
  title: 'B.S. Mechanical Engineering, December 2027',
  school: 'The University of Texas at Austin',
  degree: 'B.S. Mechanical Engineering',
  email: 'nonis.alfred@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alfred-nonis-21a52a244',
  github: 'https://github.com/Alfred-Nonis',
  resume: 'resume/Resume 2026-2027 Alfred Nonis.pdf',
  homeHeroImages: resolvedHomeHeroImages,
  heroAlt: 'TIG welding during chassis fabrication',
  contactIntro: 'Feel free to reach out about engineering opportunities, project work, internships, jobs or if you just want to talk about designs!',
  bio: 'Mechanical Engineering student at The University of Texas at Austin focused on mechanical design, FEA, manufacturing, and hands-on hardware. Recent work includes Baja SAE chassis design and experimental hardware with Texas Spacecraft Laboratory.',
}
