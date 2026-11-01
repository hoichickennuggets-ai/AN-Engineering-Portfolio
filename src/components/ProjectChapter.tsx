import type { ProjectChapter as ProjectChapterData } from '../types/project'
import { ProjectMetrics } from './ProjectMetrics'
import { ProjectSlideshow } from './ProjectSlideshow'
import { ScrollChapter } from './ScrollChapter'
import { chapterImages } from '../data/media'

export function ProjectChapter({ chapter }: { chapter: ProjectChapterData }) {
  const images = chapterImages(chapter)
  return <ScrollChapter className="section-chapter">
    {chapter.eyebrow && <p className="eyebrow">{chapter.eyebrow}</p>}
    <h2>{chapter.title}</h2>
    <div className="chapter-copy">{chapter.body?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
    {!!images.length && <ProjectSlideshow images={images} label={chapter.title} mediaFit={chapter.mediaFit} />}
    {chapter.bodyAfterMedia?.length ? <div className="chapter-copy chapter-copy-after-media">{chapter.bodyAfterMedia.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div> : null}
    {!!chapter.metrics?.length && <ProjectMetrics items={chapter.metrics} />}
    {chapter.engineeringStories?.map(story => {
      const storyImages = chapterImages(story)
      return <section className="engineering-story" key={story.title}>
        <h3>{story.title}</h3>
        <div className="chapter-copy">{story.body?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        {!!story.calculations?.length && <div className="calculation-card" aria-label={`${story.title} calculations`}>
          {story.calculations.map((calculation, index) => <p key={index}>{calculation}</p>)}
        </div>}
        {!!storyImages.length && <ProjectSlideshow images={storyImages} label={story.title} mediaFit={story.mediaFit} />}
      </section>
    })}
  </ScrollChapter>
}
