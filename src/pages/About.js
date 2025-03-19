import React from "react";
import styled from "styled-components";
import themeImage from "../assets/theme2.png";
import member1 from "../assets/Cosner.jpg";
import member2 from "../assets/Kaneshia.jpg";
import member3 from "../assets/flores.jpg";
import member4 from "../assets/Hans_Klar.jpg";
import member5 from "../assets/Patricia_Virella.png";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 155px 0 50px; /* Adjusted padding to prevent overlap with Navbar */
  
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #004080;
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #004080;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  text-align: justify;
`;

const List = styled.ul`
  text-align: left;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  margin-top: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-weight: 500;
  &:before {
    content: "\2022";
    color: #004080;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const ThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0eef3;
  border-radius: 20px;
  overflow: hidden;
  padding: 40px;
`;

const ThemeText = styled.div`
  width: 50%;
  text-align: left;
`;

const ThemeImage = styled.img`
  width: 45%;
  border-radius: 10px;
`;

const CommitteeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
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
    margin: 20px;
    padding: 20px;

`;

const MemberImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 100px;
  aspect-ratio: 1 / 1;
`;

const MemberInfo = styled.div`
  text-align: left;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: #004080;
`;

const MemberDescription = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  color: #333;
`;
const MemberInstitution = styled.h4`
  margin: 5px 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
`;


const committeeMembers = [
    { img: member1, name: "Shelby Cosner", institution: "University of Georgia", description: "SHELBY COSNER is the Morrill M. Hall Endowed Chair in Educational Administration at the University of Georgia, Mary Frances Early College of Education, the Educational Administration and Policy program. Cosner is an expert on the capacity-building and improvement-oriented work of school leaders, the preparation and development of educational leaders, the continuous improvement and evaluation of preparation/development programs for educational leaders. She examines these issues more generally as well as for a variety of equity-oriented aims. She leads multi- disciplinary teams that design and test (e.g., randomized control trial, cluster randomized trial) learning designs for teachers, teacher leaders, school leaders, and district leaders. She also is an expert in partnerships including university-district partnerships, research practice partnerships, and public private partnerships. She has extensive experience with and passion for cultivating these sorts of partnerships in settings throughout the US and abroad. Working independently and with various colleagues Cosner (PI or Co-PI) has obtained over 16M in external funding from federal organizations to state and national/international foundations (e.g., National Science Foundation/NSF, US Department of Education, The Wallace Foundation, William T. Grant Foundation, Jeff Bezos Family Foundation, McCormick Foundation, Lyle Spencer Foundation, Broad Foundation, Lloyd A. Fry Foundation, Finnegan Family Foundation, Children’s First Foundation, Chicago Public Education Fund, and the Qatar Foundation). Her work appears in a variety of peer-reviewed journals including Educational Administration Quarterly, the Journal of Educational Administration, the Journal of School Leadership, Leadership and Policy in Schools, Urban Education, Education Sciences, Educational Management Administration and Leadership, the Journal of Research on Leadership Education, and Planning and Changing. She is currently working on a book for Harvard Education Press for publication in 2025 that examines the continuous improvement of educational leader preparation programs. Cosner is currently serving in several elected national leadership roles in the US. She is the president-elect for the University Council for Educational Administration (UCEA) for 2024-2025 and will become the organization’s president in 2025. She is also the Chair for the AERA Special Interest Group, Learning and Teaching in Educational Leadership (LTEL)." },
    { img: member2, name: "Kaneshia Dorsan", institution: "University of Georgia", description: "Dr. Kaneshia Dorsan is a clinical assistant professor in the Educational Administration and Policy (EDAP) program at the University of Georgia. She teaches pivotal courses such as Educational Leadership for Instructional Improvement and Change, Leadership in High-Needs School Settings, and Clinical Practices in Educational Leadership, equipping leaders with the knowledge and skills to drive meaningful change in education. Before transitioning into higher education, Dr. Dorsan devoted 19 years of her career to K-12 education, serving as a middle school classroom teacher, assistant principal, instructional coach, and principal. Over the years, she has mentored and supported numerous aspiring leaders, helping them navigate their career paths. Dr. Dorsan’s scholarly interests center on the preparation and development of aspiring and practicing educational leaders. These interests reflect her commitment to advancing equity and excellence in schools, promoting positive outcomes for all students." },
    { img: member3, name: "Osly Flores", institution: "University of Illinois at Urbana-Champaign", description: "Osly J. Flores is an Assistant Professor in the Department of Education Policy, Organization, and Leadership at the University of Illinois at Urbana-Champaign. His research focuses on two main areas: race-conscious leadership in K-12 schools and the persistence of graduate students of color in navigating higher education. In the first area, he explores three themes: equitable leadership practices, leadership ethics, and the experiences of school leaders of color. In the second area, he uses critical frameworks to highlight the successes and resilience of graduate students of color. His work has been published in various journals, including The Urban Review, Urban Education, Teachers College Record, Journal of College Student Development, AERA Open, and the International Journal of Qualitative Studies in Education." },
    { img: member4, name: "Hans Klar", institution: "Clemson University", description: "Hans W. Klar, PhD, is a professor of educational leadership and the chair of the Department of Educational and Organizational Leadership Development in the College of Education at Clemson University. Dr. Klar’s research is centered on fostering leadership development in rural and high needs schools through research practice partnerships. He is the director of the Leading Educational Administrator Development for Excellent Rural Schools (LEADERS) Center of Excellence. Prior to arriving at Clemson, he served in a variety of teaching and leadership positions in Australia, China, Indonesia, and Japan, including Associate Dean for English Programs at the Sydney Institute of Language and Commerce (SILC) at Shanghai University. While at Clemson, he also served as a visiting scholar at the Universidad Andrés Bello in Santiago, Chile and at the Centre for Principal Development at Umeå University in Umeå, Sweden." },
    { img: member5, name: "Patricia Virella", institution: "Montclair State University", description: "Dr. Patricia M. Virella is an Assistant Professor in the Department of Educational Leadership at Montclair State University. Dr. Virella studies equity-oriented crisis leadership examining how school leaders can respond to crises without further harming marginalized communities. Her research focuses on implementing equity-oriented leadership through leader responses, organizational transformation, and preparation. She has published in prestigious journals including AERA Open and Educational Management, Administration and Leadership (EMAL). Dr. Virella is the author of three books, including the forthcoming **Crisis as Catalyst: Equity-Oriented School Leadership During Difficult Times** with Harvard Education Press." }
  ];
  


const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT</Title>
      
      <Section>
        <SectionTitle>UCEA ANNUAL CONVENTION</SectionTitle>
        <SectionContent>
          The UCEA Annual Convention is a dynamic gathering that serves as a nexus for faculty, doctoral students, and professionals in the field of educational leadership. In the spirit of our guiding principle that <strong>Quality Leadership Matters</strong>, this three-day event is a celebration of academic achievements that fosters an environment where ideas converge.
        </SectionContent>
        <List>
          <ListItem>Engage in thought-provoking keynotes, interactive research presentations, and collaborative discussions that delve into the forefront of educational leadership.</ListItem>
          <ListItem>Experience the energy of networking opportunities, connecting with like-minded individuals who share a passion for advancing quality leadership in education.</ListItem>
          <ListItem>Join an intellectual journey to celebrate the achievements of the academic community and pave the way for a future where quality leadership is a cornerstone of educational excellence.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>CONVENTION THEME</SectionTitle>
        <ThemeSection>
          <ThemeText>
            <h3>"Leading with Innovation and Equity"</h3>
            <p>The 2025 UCEA Convention will focus on innovative strategies to promote equity and justice in education. This year's theme will guide discussions on leadership, policy, and community engagement.</p>
          </ThemeText>
          <ThemeImage src={themeImage} alt="Convention Theme" />
        </ThemeSection>
      </Section>

      <Section>
  <SectionTitle>Convention Planning Committee</SectionTitle>
  <CommitteeContainer>
    <MemberList>
      {committeeMembers.map((member, index) => (
        <CommitteeBox key={index}>
          <MemberImage src={member.img} alt={member.name} />
          <MemberInfo>
            <MemberName>{member.name}</MemberName>
            <MemberInstitution>{member.institution}</MemberInstitution>
            <MemberDescription>{member.description}</MemberDescription>
          </MemberInfo>
        </CommitteeBox>
      ))}
    </MemberList>
  </CommitteeContainer>
</Section>
    </AboutContainer>
  );
};

export default About;
