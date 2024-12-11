import { Wrapper } from './styled';
import { MdOutlineMail } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { IoMdCloud } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';

const Resume = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['viewCount'],
    queryFn: async () => {
      const response = await fetch(
        'https://bbmkuv7n53.execute-api.us-west-2.amazonaws.com/dev/resume',
        { method: 'POST' }
      );
      const data = await response.json();

      return data;
    },
  });

  if (error) {
    console.log('Error in API calls:', error);
  }

  const viewCount = data?.view_count;

  return (
    <Wrapper>
      <header className="heading">
        <p>this is a testing for ci/cd</p>
        <h1>Jimmy(Zhixi) Tan</h1>
        {isPending && <p className="loading-message small-text">Loading</p>}
        {error && (
          <p className="error-message small-text">
            Error in fetching view counts
          </p>
        )}
        {!isPending && !error && (
          <p className="count small-text">
            Hello! This
            <IoMdCloud />
            resume has been viewed:{' '}
            <b className="count__num" data-testid="view_count">
              {viewCount}
            </b>{' '}
            times.
          </p>
        )}
      </header>
      <div className="profile">
        <p>
          Focused and highly skilled Full-Stack Web Developer specializing in
          front-end development, leveraging 3+ years of experience building
          responsive, high-performance web applications. Known for a keen eye
          for detail, continuous learning, and adaptability to new technologies.
          AWS Certified Cloud Practitioner. Experienced in collaborating with
          cross-functional teams and adept at delivering scalable solutions in
          Agile environments.
        </p>
      </div>
      <div className="contact section-container">
        <div className="contact__info">
          <MdLocationPin /> Vancouver, BC, Canada
        </div>
        <div className="contact__info">
          <MdOutlineMail />
          <a href="mailto:jimmytan0424@gmail.com">jimmytan0424@gmail.com</a>
        </div>
      </div>
      <div className="links section-container">
        <h3 className="section-title w-full uppercase">Links</h3>
        <div className="links__group">
          <strong>Portfolio</strong>
          <a href="https://ztan.ca" target="_blank">
            ztan.ca
          </a>
        </div>
        <div className="links__group">
          <strong>LinkedIn</strong>
          <a href="https://www.linkedin.com/in/zhixi-tan/" target="_blank">
            linkedin.com/in/zhixi-tan
          </a>
        </div>
        <div className="links__group">
          <strong>GitHub</strong>
          <a href="https://github.com/jimmytan123" target="_blank">
            github.com/jimmytan123
          </a>
        </div>
      </div>
      <div className="skills section-container">
        <h3 className="section-title uppercase">Skills</h3>
        <div className="skills__group">
          <h4>Programming Languages:</h4>
          <p>JavaScript, TypeScript, HTML, CSS</p>
        </div>
        <div className="skills__group">
          <h4>Frontend Frameworks:</h4>
          <p>
            React, Redux, Next.js, Angular, AngularJS, Lit, Web Components, Vue,
            Tailwind CSS
          </p>
        </div>
        <div className="skills__group">
          <h4>Backend & Databases:</h4>
          <p>Node.js, Express, MongoDB, MySQL</p>
        </div>
        <div className="skills__group">
          <h4>Tools & Platforms:</h4>
          <p>Git, GitHub, GitLab, Stripe, AWS, Mixpanel, Agile (Jira)</p>
        </div>
      </div>
      <div className="experience section-container">
        <h3 className="section-title uppercase">WORK Experience</h3>
        <div className="experience__group">
          <h4>Front-End Developer</h4>
          <p>airG Inc.</p>
          <p>Vancouver, BC</p>
          <p>Mar 2022 - Mar 2024</p>
          <div className="experience__group__body">
            <p className="italic">Worked under the Product Development team</p>
            <ul>
              <li>
                Developed and maintained 12+ customer-facing web applications,
                leading to a 15% reduction in average bug reports due to
                proactive testing and UI enhancements.
              </li>
              <li>
                Led the rebranding of a cloud-based game web app, reauthoring
                components using Lit and implementing new styles and behaviours
                throughout the site; collaborated with backend developers,
                resulting in 20% faster loading times, improved SEO, and reduced
                bugs.
              </li>
              <li>
                Integrated Stripe as a new payment provider for a
                subscription-based healthcare web app, collaborating closely
                with a senior backend developer. This enhancement streamlined
                the payment process, resulting in a 30% boost in sales and a
                decrease in payment-related support tickets.
              </li>
              <li>
                Migrated an AngularJS-based B2B web app to Angular, enhancing
                performance and maintainability by creating service functions,
                reusable generic web components, and adding NgRx Store
                management.
              </li>
              <li>
                Managed software maintenance across multiple codebases,
                implementing internationalization (i18n), right-to-left (RTL)
                styling, and addressing stakeholders&apos; needs, ensuring a
                robust understanding of software internals and systems.
              </li>
              <li>
                Technologies: JavaScript, HTML, CSS/SCSS, Lit, Web Components,
                AngularJS, Angular, Stripe Payment, Mixpanel, Python(webapp2,
                jinja2), Gulp, Jenkins, Git, AWS, SEO.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience__group">
          <h4>Administrative Assistant</h4>
          <p>VPEA Vancouver</p>
          <p>Burnaby, BC</p>
          <p>Mar 2019 - Mar 2021</p>
          <div className="experience__group__body">
            <p className="italic">
              Worked under the supervision of the Regulated Canadian Immigration
              Consultant (RCIC)
            </p>
            <ul>
              <li>
                Conducted data entry, polished documents, and summarized client
                information to support the RCIC.
              </li>
              <li>
                Researched and reported on Canadian immigration and visa
                policies; created organized internal and external guides.
              </li>
              <li>
                Collaborated with the marketing team to design product posters
                and weekly news blogs, managed social media accounts and boosted
                product sales.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects section-container">
        <h3 className="section-title uppercase">Projects</h3>
        <div className="projects__group">
          <h4>
            JobJourney Job Tracker | Full-Stack MERN Application
            <a href="https://job-journey-5vos.onrender.com/" target="__blank">
              <FaExternalLinkSquareAlt />
            </a>
          </h4>
          <p className="small-text">
            MongoDB, Express, React, Node.js, JWT, CSS, Styled-Components, React
            Query
          </p>
          <ul>
            <li>
              Developed a full-stack job application tracker to help users
              efficiently manage, update and track their job applications.
            </li>
            <li>
              Implemented user authentication with HTTP-only JWT tokens,
              ensuring secure login, registration, and demo user modes.
              Integrated an admin role for managing user data and application
              records.
            </li>
            <li>
              Incorporated a dropdown filter for easy job sorting, and
              pagination for seamless navigation through job lists, ensuring a
              smooth user experience.
            </li>
            <li>
              Developed a day/night mode toggle with local storage to remember
              user preferences, providing an optimized user experience across
              sessions.
            </li>
            <li>
              Created monthly charts using Recharts to visually represent the
              number of jobs added, giving users insightful metrics on their job
              search progress.
            </li>
            <li>
              Ensured robust data integrity by implementing both front-end and
              backend validation for user inputs, enhancing overall application
              security and reliability.
            </li>
          </ul>
        </div>
        <div className="projects__group">
          <h4>
            Jushi Restaurant | Next.js Food Order App
            <a
              href="https://jushi-restaurant-nextjs.vercel.app/"
              target="__blank"
            >
              <FaExternalLinkSquareAlt />
            </a>
          </h4>
          <p className="small-text">
            Next.js, React, Redux, MongoDB Altas, CSS Module
          </p>
          <ul>
            <li>
              Server-side rendering food ordering app with Next.js, Redux, and
              MongoDB Atlas.
            </li>
            <li>Implemented a cart state management system using Redux.</li>
            <li>
              Established API routes within Next.js for RESTApi communication.
            </li>
          </ul>
        </div>
      </div>
      <div className="education section-container">
        <h3 className="section-title uppercase">Education</h3>
        <div className="education__group">
          <h4>Front-End Web Developer | Certificate</h4>
          <p>British Columbia Institute of Technology (Vancouver, BC)</p>
          <p>2021 - 2021</p>
        </div>
        <div className="education__group">
          <h4>Statistics | Bachelor of Science</h4>
          <p>University of Victoria (Victoria, BC)</p>
          <p>2015 - 2018</p>
        </div>
      </div>
      <div className="certificates section-container">
        <h3 className="section-title uppercase">Certificates</h3>
        <div className="certificates__group">
          <a
            href="https://www.credly.com/badges/12169c64-0811-4d0f-9e40-6c027f908db8"
            target="__blank"
          >
            AWS Certified Cloud Practitioner
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Resume;
