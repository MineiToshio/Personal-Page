import React from 'react';
import theme from '@/styles/theme';

type Props = {
  content: string;
};

const Article = ({ content }: Props) => (
  <div className="article">
    <div dangerouslySetInnerHTML={{ __html: content }} />
    {/* <p>
      <span className="capital">B</span>ack in 1896, a journal article titled “The Plague of City
      City Noises” set off the 19th century’s version of a Twitter meltdown. The article highlighted
      “the injurious and exhausting effects of city noises on the auditory apparatus, and on the
      whole nervous system,” and generated “hundreds” of editorial comments and “scores” of private
      letters across the United States and Europe.
    </p>
    <p>
      “Almost without exception… the medical press agreed with the contention that the noises of our
      modern cities are not only a source of great discomfort, but are largely life-shortening and
      health-wrecking in their effects,” the author of an article on the phenomenon wrote the
      following year.
    </p>
    <p>
      Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar
      conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy
      life years are lost each year as a result of traffic-related noise. Noise is inherently
      arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous
      systems are a growing concern, the report states.
    </p>
    <p>
      Back in 1896, a journal article titled “The Plague of City Noises” set off the 19th century’s
      version of a Twitter meltdown. The article highlighted “the injurious and exhausting effects
      of city noises on the auditory apparatus, and on the whole nervous system,” and generated
      “hundreds” of editorial comments and “scores” of private letters across the United States and
      Europe.
    </p>
    <p>
      “Almost without exception… the medical press agreed with the contention that the noises of our
      modern cities are not only a source of great discomfort, but are largely life-shortening and
      health-wrecking in their effects,” the author of an article on the phenomenon wrote the
      following year.
    </p>
    <p>
      Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar
      conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy
      life years are lost each year as a result of traffic-related noise. Noise is inherently
      arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous
      systems are a growing concern, the report states.
    </p>
    <p>
      Back in 1896, a journal article titled “The Plague of City Noises” set off the 19th century’s
      version of a Twitter meltdown. The article highlighted “the injurious and exhausting effects
      of city noises on the auditory apparatus, and on the whole nervous system,” and generated
      “hundreds” of editorial comments and “scores” of private letters across the United States and
      Europe.
    </p>
    <p>
      “Almost without exception… the medical press agreed with the contention that the noises of our
      modern cities are not only a source of great discomfort, but are largely life-shortening and
      health-wrecking in their effects,” the author of an article on the phenomenon wrote the
      following year.
    </p>
    <p>
      Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar
      conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy
      life years are lost each year as a result of traffic-related noise. Noise is inherently
      arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous
      systems are a growing concern, the report states.
    </p> */}
    <style jsx>{`
      .article {
        max-width: 700px;
        margin: 0 auto 0 0;
        font-family: ${theme.font.family.default};
        font-size: ${theme.font.size.body};
        line-height: 32px;
        padding: 0 20px;
      }
      p {
        margin-top: 0;
      }
      .capital {
        font-size: 69px;
        display: block;
        position: relative;
        float: left;
        top: 16px;
        font-weight: bold;
        padding: 5px;
        font-family: ${theme.font.family.elegant};
      }
      @media screen and (max-width: 1023px) {
        .article {
          margin: 0 auto;
        }
      }
      @media screen and (max-width: 768px) {
        .article {
          font-size: 18px;
          line-height: 28px;
        }
      }
    `}</style>
  </div>
);

export default Article;
