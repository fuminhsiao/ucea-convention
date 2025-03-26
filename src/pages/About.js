import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import member1 from "../assets/Cosner.jpg";
import member2 from "../assets/Kaneshia.jpg";
import member3 from "../assets/flores.jpg";
import member4 from "../assets/Hans_Klar.jpg";
import member5 from "../assets/Patricia_Virella.png";

const SectionWrapper = styled.div`
  width: 100%;
  background: ${(props) => (props.alt ? "#D1D8DA" : "#ffffff")};
  display: flex;
  justify-content: center;
  padding: 120px 0;
`;

const CFPContainer = styled.div`
  width: ${(props) => (props.alt ? "1400px" : "1080px")};

  padding: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const SectionContent = styled.p`
  font-size: 1.3rem;
  color: #000;
  line-height: 1.7;
  text-align: justify;

  ul {
    margin-top: 8px;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    margin-bottom: 6px;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 600;
  }
`;

const ThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 40px;
  flex-direction:column;
`;

const ThemeText = styled.div`
  width: 50%;
  text-align: left;
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const CommitteeBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #3366cc;
  margin: 20px 0;
  padding: 20px 0;
`;

const MemberImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 30px;
  object-fit: cover;
  object-position: top;
  margin-right: 100px;
  aspect-ratio: 1 / 1;
`;

const MemberInfo = styled.div`
  text-align: left;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: #3366cc;
  font-weight:normal;
`;

const MemberDescription = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : 6)};
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.span`
  display: inline-block;
  margin-top: 5px;
  color: #0071e3;
  font-weight: 500;
  cursor: pointer;
`;

const MemberInstitution = styled.h4`
  margin: 5px 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;

const Highlight = styled.span`
  color: #cc4444;
  font-weight: 600;
`;
const committeeMembers = [
  {
    img: member1,
    name: "Shelby Cosner",
    institution: "University of Georgia",
    description:
      "SHELBY COSNER is the Morrill M. Hall Endowed Chair in Educational Administration at the University of Georgia, Mary Frances Early College of Education, the Educational Administration and Policy program. Cosner is an expert on the capacity-building and improvement-oriented work of school leaders, the preparation and development of educational leaders, the continuous improvement and evaluation of preparation/development programs for educational leaders. She examines these issues more generally as well as for a variety of equity-oriented aims. She leads multi- disciplinary teams that design and test (e.g., randomized control trial, cluster randomized trial) learning designs for teachers, teacher leaders, school leaders, and district leaders. She also is an expert in partnerships including university-district partnerships, research practice partnerships, and public private partnerships. She has extensive experience with and passion for cultivating these sorts of partnerships in settings throughout the US and abroad. Working independently and with various colleagues Cosner (PI or Co-PI) has obtained over 16M in external funding from federal organizations to state and national/international foundations (e.g., National Science Foundation/NSF, US Department of Education, The Wallace Foundation, William T. Grant Foundation, Jeff Bezos Family Foundation, McCormick Foundation, Lyle Spencer Foundation, Broad Foundation, Lloyd A. Fry Foundation, Finnegan Family Foundation, Children’s First Foundation, Chicago Public Education Fund, and the Qatar Foundation). Her work appears in a variety of peer-reviewed journals including Educational Administration Quarterly, the Journal of Educational Administration, the Journal of School Leadership, Leadership and Policy in Schools, Urban Education, Education Sciences, Educational Management Administration and Leadership, the Journal of Research on Leadership Education, and Planning and Changing. She is currently working on a book for Harvard Education Press for publication in 2025 that examines the continuous improvement of educational leader preparation programs. Cosner is currently serving in several elected national leadership roles in the US. She is the president-elect for the University Council for Educational Administration (UCEA) for 2024-2025 and will become the organization’s president in 2025. She is also the Chair for the AERA Special Interest Group, Learning and Teaching in Educational Leadership (LTEL).",
  },
  {
    img: member2,
    name: "Kaneshia Dorsan",
    institution: "University of Georgia",
    description:
      "Dr. Kaneshia Dorsan is a clinical assistant professor in the Educational Administration and Policy (EDAP) program at the University of Georgia. She teaches pivotal courses such as Educational Leadership for Instructional Improvement and Change, Leadership in High-Needs School Settings, and Clinical Practices in Educational Leadership, equipping leaders with the knowledge and skills to drive meaningful change in education. Before transitioning into higher education, Dr. Dorsan devoted 19 years of her career to K-12 education, serving as a middle school classroom teacher, assistant principal, instructional coach, and principal. Over the years, she has mentored and supported numerous aspiring leaders, helping them navigate their career paths. Dr. Dorsan’s scholarly interests center on the preparation and development of aspiring and practicing educational leaders. These interests reflect her commitment to advancing equity and excellence in schools, promoting positive outcomes for all students.",
  },
  {
    img: member3,
    name: "Osly Flores",
    institution: "University of Illinois at Urbana-Champaign",
    description:
      "Osly J. Flores is an Assistant Professor in the Department of Education Policy, Organization, and Leadership at the University of Illinois at Urbana-Champaign. His research focuses on two main areas: race-conscious leadership in K-12 schools and the persistence of graduate students of color in navigating higher education. In the first area, he explores three themes: equitable leadership practices, leadership ethics, and the experiences of school leaders of color. In the second area, he uses critical frameworks to highlight the successes and resilience of graduate students of color. His work has been published in various journals, including The Urban Review, Urban Education, Teachers College Record, Journal of College Student Development, AERA Open, and the International Journal of Qualitative Studies in Education.",
  },
  {
    img: member4,
    name: "Hans Klar",
    institution: "Clemson University",
    description:
      "Hans W. Klar, PhD, is a professor of educational leadership and the chair of the Department of Educational and Organizational Leadership Development in the College of Education at Clemson University. Dr. Klar’s research is centered on fostering leadership development in rural and high needs schools through research practice partnerships. He is the director of the Leading Educational Administrator Development for Excellent Rural Schools (LEADERS) Center of Excellence. Prior to arriving at Clemson, he served in a variety of teaching and leadership positions in Australia, China, Indonesia, and Japan, including Associate Dean for English Programs at the Sydney Institute of Language and Commerce (SILC) at Shanghai University. While at Clemson, he also served as a visiting scholar at the Universidad Andrés Bello in Santiago, Chile and at the Centre for Principal Development at Umeå University in Umeå, Sweden.",
  },
  {
    img: member5,
    name: "Patricia Virella",
    institution: "Montclair State University",
    description:
      "Dr. Patricia M. Virella is an Assistant Professor in the Department of Educational Leadership at Montclair State University. Dr. Virella studies equity-oriented crisis leadership examining how school leaders can respond to crises without further harming marginalized communities. Her research focuses on implementing equity-oriented leadership through leader responses, organizational transformation, and preparation. She has published in prestigious journals including AERA Open and Educational Management, Administration and Leadership (EMAL). Dr. Virella is the author of three books, including the forthcoming **Crisis as Catalyst: Equity-Oriented School Leadership During Difficult Times** with Harvard Education Press.",
  },
];

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <PageHeader
        title="About"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About" }]}
      />
      <SectionWrapper alt>
        <CFPContainer alt>
          <SectionContent>
            We invite you to join us at the{" "}
            <strong>39th Annual UCEA Convention</strong> that will be held{" "}
            <Highlight>November 19–22, 2025</Highlight>, at the{" "}
            <strong>Sheraton Puerto Rico Resort and Casino</strong> in{" "}
            <strong>San Juan, Puerto Rico</strong>. The{" "}
            <strong>2025 Convention Planning Committee</strong> includes{" "}
            <strong>Shelby Cosner (University of Georgia)</strong>,{" "}
            <strong>Kaneshia Dorsan (University of Georgia)</strong>,{" "}
            <strong>
              Osly Flores (University of Illinois at Urbana-Champaign)
            </strong>
            , <strong>Hans Klar (Clemson University)</strong>,{" "}
            <strong>Patricia Virella (Montclair State)</strong>, and{" "}
            <strong>Karl Gildner (UCEA Events Manager)</strong>.
          </SectionContent>
        </CFPContainer>
      </SectionWrapper>
      <SectionWrapper>
        <CFPContainer>
          <SectionTitle>UCEA ANNUAL CONVENTION</SectionTitle>
          <SectionContent>
            The UCEA Annual Convention is a dynamic gathering that serves as a
            nexus for faculty, doctoral students, and professionals in the field
            of educational leadership. In the spirit of our guiding principle
            that{" "}
            <strong style={{ color: "#3366cc" }}>
              Quality Leadership Matters
            </strong>
            , this three-day event is a celebration of academic achievements
            that fosters an environment where ideas converge.
            <ul>
              <li>
                Engage in thought-provoking keynotes, interactive research
                presentations, and collaborative discussions that delve into the
                forefront of educational leadership.
              </li>
              <li>
                Experience the energy of networking opportunities, connecting
                with like-minded individuals who share a passion for advancing
                quality leadership in education.
              </li>
              <li>
                Join an intellectual journey to celebrate the achievements of
                the academic community and pave the way for a future where
                quality leadership is a cornerstone of educational excellence.
              </li>
            </ul>
          </SectionContent>
        </CFPContainer>
      </SectionWrapper>

      <SectionWrapper alt >
        <CFPContainer alt>
          
          <ThemeSection><p style={{ fontSize: "2rem" }}>
            <em style={{ display: "block", color: "#3366cc" }}>
              “Fostering Leadership Resilience Through Collaboration and
              Community”
            </em>{" "}
            <br />
            <em style={{ display: "block", color: "#3366cc" }}>
              “Fomentando la Resiliencia de Liderazgo a través de Colaboración y
              Comunidad.”
            </em>
          </p>
            <ThemeText style={{ width: "100%" }}>
              <p style={{ fontSize: "1.4rem", color: "#000" }}>
                A variety of factors, both internal and external, have shaped
                our theme, call for proposals, and intentions for this year’s
                Convention. From an internal perspective, our organization has
                learned a great deal over the last several years through our
                equity self-study and from related learning and work groups
                (e.g., clinical faculty, equity learning). Among other things,
                we recognize the need to cultivate a more inclusive community
                within UCEA (broadly and within our Convention)—a community that
                actively breaks down the kinds of organizational micropolitics
                that have been experienced by some members of our community
                based on individual identities (e.g., institution type,
                discipline, epistemology, research methods, academic roles,
                race, culture, gender, gender identity, and sexual orientation).
                These sorts of issues have led some individuals to feel on the
                margins of our organization and/or where they have less access
                and opportunity within our organization.
              </p>
            </ThemeText>
          </ThemeSection>
        </CFPContainer>
      </SectionWrapper>

      <SectionWrapper>
        <CFPContainer>
          <SectionTitle>Convention Planning Committee</SectionTitle>
          <MemberList>
            {committeeMembers.map((member, index) => (
              <CommitteeBox key={index}>
                <MemberImage src={member.img} alt={member.name} />
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberInstitution>{member.institution}</MemberInstitution>
                  <MemberDescription expanded={expandedIndex === index}>
                    {member.description}
                  </MemberDescription>
                  <ReadMore onClick={() => toggleReadMore(index)}>
                    {expandedIndex === index ? "Read less" : "Read more"}
                  </ReadMore>
                </MemberInfo>
              </CommitteeBox>
            ))}
          </MemberList>
        </CFPContainer>
      </SectionWrapper>
    </>
  );
};

export default About;
