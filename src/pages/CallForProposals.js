import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Accordion from "../components/Accordion";

// 其餘 SectionWrapper 和 CFPContainer 可照你原來的寫法
const SectionWrapper = styled.div`
  width: 100%;
  background: ${(props) => (props.alt ? "#ffffff" : "#f5f5f5")};
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;

const CFPContainer = styled.div`
  width: 1080px;
  padding: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #000;
  text-decoration: underline;
  margin-bottom: 10px;
  margin-top: 40px;
`;

const SectionContent = styled.p`
  font-size: 1.3rem;
  color: #333;

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

const Link = styled.a`
  color: #0071e3;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;



const CFP = () => {
  return (
    <>
      <PageHeader
        title="Call for Proposals"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Sessions", link: "#" },
          { label: "Call for Proposals" },
        ]}
      />
      

      {/* 以下保持交錯背景 */}
      <SectionWrapper alt>
        <CFPContainer>
          <SectionTitle>
            Call for Proposals – UCEA 39th Annual Convention
          </SectionTitle>
          <SectionContent>
            <em>
              “Fostering Leadership Resilience Through Collaboration and
              Community”
            </em>
            <br />
            <em>
              “Fomentando la Resiliencia de Liderazgo a través de Colaboración y
              Comunidad.”
            </em>
            <br />
            <br />
            We invite proposals for the 39th Annual UCEA Convention, which will
            take place in Puerto Rico. This year’s theme emphasizes the
            importance of collaboration, community, and resilience in
            educational leadership. We welcome research and practice-oriented
            proposals that explore equity, identity, and advocacy in PK–12
            schools and leadership preparation programs. The Convention will
            serve not only as a space for sharing scholarship, but also for
            building capacity, community, and collective action in response to
            today’s educational challenges.
            <br />
            <br />
            <span style={{ color: "#cc4444", fontWeight: "500" }}>
              Proposals must be submitted by Wednesday, May 14, 2025.
            </span>
            <br />
            The submission portal opens on April 1, 2025 via All Academic.
            <br />
            <br />
            For additional information on proposal themes, submission
            categories, and formatting guidelines, please refer to the
            full&nbsp;
            <Link
              href="https://www.ucea.org/docs/UCEA_Convention_2025_CFP_031925.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              2025 Call for Proposals document
            </Link>
            .
          </SectionContent>
        </CFPContainer>
      </SectionWrapper>

      <SectionWrapper>
        <CFPContainer>
          <SectionTitle>Submission Detail</SectionTitle>
          <SectionContent>
            <SubHeading>Submission Guidelines</SubHeading>
            Proposals should not exceed <strong>
              3 single-spaced pages
            </strong>{" "}
            (about 1,500 words or 6,000 characters), using{" "}
            <strong>12-point Times New Roman font</strong>. Reviewers are not
            required to read beyond the third page.
            <br />
            <br />
            References are required and must not exceed{" "}
            <strong>1 single-spaced page</strong> (about 400 words or 2,200
            characters).
            <br />
            <br />
            <strong>
              Proposals MUST NOT include names of session organizers or
              presenters.
            </strong>
            <br />
            <br />
            By submitting a proposal, an individual is entering a professional
            agreement to:
            <ul>
              <li>Review proposals for the Convention</li>
              <li>Attend and deliver the content described in the proposal</li>
              <li>
                Share a summary of your work with session attendees and make
                papers available if requested
              </li>
              <li>Register for the Convention</li>
            </ul>
            <br />
            As a professional courtesy, <strong>lead authors</strong> should
            email their paper summary to the session facilitator and other
            session participants or upload it to All Academic by{" "}
            <strong>November 1, 2025</strong>.
            <br />
            <br />
            <strong>Ignite presenters</strong> are expected to email a{" "}
            <strong>two-page summary</strong> of their talking points to the
            session facilitator prior to the November 1 deadline.
            <br />
            <br />
            <SubHeading>Review of UCEA Convention Proposals</SubHeading>
            All proposals will be subject to anonymous, peer review by three
            reviewers. Proposals <strong>MUST NOT</strong> include names of
            organizers or presenters. Reviewers are not required to read
            non-anonymous proposals.
            <br />
            <br />
            All primary submitters and authors agree to serve as proposal
            reviewers. Only faculty members review proposals for the Annual
            Convention. UCEA encourages submitters to invite faculty co-authors
            to join as reviewers.
            <br />
            <br />
            The deadline for completed reviews is <strong>May 30, 2025</strong>.
            Please add <em>uceaconvention@gmail.com</em> to your safe sender
            list.
            <br />
            <br />
            <SubHeading>Participation Limits</SubHeading>
            To promote broad participation:
            <ul>
              <li>
                An individual may be first author on no more than{" "}
                <strong>two proposals</strong>
              </li>
              <li>
                An individual may appear in the program no more than{" "}
                <strong>four times</strong> as presenter or participant
              </li>
            </ul>
            These limits <em>do not</em> include roles as session facilitators
            or in invited/headquarters/committee/publication-related sessions.
            <br />
            <br />
            <SubHeading>
              Participant Registration and Attendance Requirement
            </SubHeading>
            All presenting authors and session participants (including
            facilitators) of accepted sessions are required to:
            <ul>
              <li>Register for the Convention</li>
              <li>Pay in full</li>
              <li>Attend the event</li>
              <li>Be present at their scheduled sessions</li>
            </ul>
            Submission of a proposal is a commitment to fulfill these
            responsibilities.
            <br />
            <br />
            For full submission details, please refer to the official&nbsp;
            <Link
              href="https://www.ucea.org/docs/UCEA.2025_SubmissionDetails_031925.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              2025 Submission Guidelines PDF
            </Link>
            .
          </SectionContent>
        </CFPContainer>
      </SectionWrapper>

      <SectionWrapper alt>
        <CFPContainer>
          <SectionTitle>Session Types</SectionTitle>

          <SectionContent>
            In our planning for Convention sessions, we paid attention to
            offering a broader array of session types to promote greater levels
            of inclusion within the UCEA community. We also designed sessions to
            support our community- and capacity-building interests. You will see
            several more creative, innovative session formats below, and we want
            to encourage our colleagues to consider submitting to one of these
            newly introduced session types.
          </SectionContent>

          <Accordion title="Submissions by Individuals">
            <p>
              <strong>Papers</strong>
              <br />
              Intended for reporting research, analyzing policy, or presenting
              theoretical/conceptual work. Each session has topically aligned
              papers with 10–12 minute presentations.
              <br />
              <em>Proposal elements (research):</em> purpose, literature,
              theory, methods, findings, implications, references.
              <br />
              <em>Proposal elements (conceptual):</em> purpose, literature,
              theoretical framework, implications, references.
            </p>

            <p>
              <strong>Practice-Based Presentation</strong>
              <br />
              Presents innovations, tools, or strategies for
              practitioners/researchers. 10–12 minute PPT presentations.
              <br />
              <em>Proposal elements:</em> scholarship context, description of
              tool/strategy, uses/implications.
            </p>

            <p>
              <strong>Ignite Session</strong>
              <br />
              5-minute flash presentations of strategies, problems of practice,
              etc.
              <br />
              <em>Proposal elements:</em> context, detail, uses, references.
              <br />
              <a
                href="https://bit.ly/2RVkQ63"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Ignite Video
              </a>
            </p>

            <p>
              <strong>Individual Roundtable</strong>
              <br />
              Informal small group discussions; no slides, designed for
              feedback.
              <br />
              <em>
                Proposal elements same as Papers and Conceptual formats above.
              </em>
            </p>
          </Accordion>

          <Accordion title="Submissions by Individuals or Groups">
            <p>
              <strong>Community-Building Sessions</strong>
              <br />
              Focused on fostering belonging and collective engagement. May be
              topical or affinity-based.
              <br />
              <em>Proposal elements:</em> audience, objectives, activities with
              timing, materials, references.
            </p>

            <p>
              <strong>Terrace Talks</strong>
              <br />
              Outdoor, small-group mentoring or networking discussions (8–14
              people), no slides.
              <br />
              <em>Proposal elements:</em> audience, objectives, activities,
              materials, references.
            </p>

            <p>
              <strong>Workshop/Development Sessions</strong>
              <br />
              Hands-on, interactive learning experiences to build
              communication/advocacy capacity.
              <br />
              <em>Proposal elements:</em> audience, learning goals, activities,
              materials, references.
            </p>
          </Accordion>

          <Accordion title="Group Session Submissions">
            <p>
              <strong>Symposium</strong>
              <br />
              Brings multiple contributors together to explore a single topic
              from varied perspectives.
              <br />
              <em>Proposal elements:</em> context, contributors, structure,
              references.
            </p>

            <p>
              <strong>Innovative Technology Sessions</strong>
              <br />
              Use tech/media for interactive presentations (web projects,
              videos, etc).
              <br />
              <em>Proposal elements:</em> context, tech/tool, uses.
            </p>

            <p>
              <strong>International Community-Building Sessions</strong>
              <br />
              Cross-country leadership-focused sessions, collaborative design
              required.
              <br />
              <em>Proposal elements:</em> international participants, issue,
              objectives, timeline.
            </p>

            <p>
              <strong>Pre-Convention Work Sessions and Workshops</strong>
              <br />
              2–3 hour sessions for scholarly collaboration or faculty PD.
              <br />
              <em>Proposal elements:</em> participants, session goals,
              structure, expected outcomes.
            </p>
          </Accordion>
        </CFPContainer>
      </SectionWrapper>
    </>
  );
};

export default CFP;
