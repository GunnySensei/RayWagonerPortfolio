import { PageContainer } from '@/components/layout/PageContainer';
import { usePageMeta } from '@/lib/usePageMeta';

// Full bio/education history — see assets/ARCHITECTURE.md §6 for the Home/About split.
const BIO_PARAGRAPHS = [
  `Ray Wagoner has been a licensed associate counselor in Arkansas for the past 7 years and is currently a doctoral student at Liberty University. Upon graduating with a Master of Arts in clinical mental health counseling, Ray joined a team of counselors treating diverse and various clientele. After successfully establishing a counseling practice, Ray was given the opportunity to supervise graduate counseling students. Supervising these students has become a passion for Ray. The privilege of mentoring emerging counselors was the impetus for Ray to begin a doctoral program in the Fall of 2022. It is his future aspiration to invest his knowledge and skills in the successful development of many potential counselors representing the racial, ethnic, and gender diversity of the globe.`,
  `As well as a gifted therapist, Ray is also an accomplished speaker and educator. Ray honed these skills through years of training and reprised in his previous career as a minister. These accomplishments are carried forward in his future endeavors, and much of what he experienced and learned through this previous career continues to inform and expand with counseling and supervision. He desires to use these skills to advocate for mental health professionals in all stages of their careers and all aspects of their work. He wants therapists to know they matter more than the work itself.`,
  `When Ray is not in the office, he spends time with his wife of 34 years and his two children, their spouses, and his two granddaughters and two grandsons, his heartbeat. Ray's mental health journey has been personal and professional, and he is healthier mentally, emotionally, and physically now than he was when he started this journey fifteen years ago.`,
];

export function About() {
  usePageMeta(
    'About Me',
    'Ray Wagoner is a licensed associate counselor in Arkansas and a doctoral student at Liberty University, with a passion for supervising and mentoring emerging counselors.',
  );

  return (
    <PageContainer>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <img
          src="/images/ray-wagoner-about.jpg"
          alt="Raymond Wagoner standing in a suit in front of a window overlooking a snowy landscape"
          width={1200}
          height={1600}
          className="w-full max-w-xs shrink-0 object-cover md:max-w-sm"
        />
        <div className="flex max-w-[640px] flex-col gap-6">
          <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">About Me</h1>
          {BIO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="font-sans text-[20px] text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
