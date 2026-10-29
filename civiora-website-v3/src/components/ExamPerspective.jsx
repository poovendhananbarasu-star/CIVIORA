import Reveal from './Reveal';

export default function ExamPerspective() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <p className="eyebrow">Competitive-Examination Perspective</p>
            <p className="mt-6 text-navy-700 text-lg leading-relaxed">
              His journey includes five UPSC Civil Services attempts with two
              interview-stage appearances; three TNPSC attempts with one
              interview-stage appearance; two IB ACIO attempts with one
              interview-stage appearance; and additional exposure to Indian
              Navy selection and banking examinations.
            </p>
          </Reveal>

          <Reveal delay={150} className="bg-mist rounded-3xl p-9 md:p-11 border border-navy-100">
            <p className="eyebrow text-navy-400">Founder&rsquo;s Vision</p>
            <p className="mt-5 font-display italic text-2xl md:text-3xl text-navy-800 leading-snug">
              &ldquo;A student&rsquo;s future should not depend only on marks
              or how early a career is chosen. With the right foundation,
              exposure and institutional support, students can discover what
              they are capable of becoming.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
