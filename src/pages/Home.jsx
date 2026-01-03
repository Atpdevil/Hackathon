import React from "react";
import EventInfo from "../components/EventInfo";
import UseCaseAccordion from "../components/UseCaseAccordion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-darkveil">
        <div className="hero-content">
          <h1>HACKATHON 2026 | Replit X Polaris School of Technology</h1>
          <p>
            Be part of a modern hackathon focused on fast demos, real impact,
            and practical innovation.
          </p>
        </div>
      </section>

      <EventInfo />
      <Link to="/winners" className="winners-link">
        See Winners & Prizes ↗
      </Link>

      <section className="content" id="how">
        <h2>About the Hackathon</h2>
        <p>
          ​​This isn't a hackathon - it's India's biggest vibe-coding arena. And if you've ever thought,
          "Why isn't there a platform where I can just build and ship without all the DevOps BS?"<br/>
          Well, Replit heard you. And now they're here.
        </p>
      </section>

      <section className="content" id="how">
        <h2>​​The Breakdown</h2>
        <p>
          <strong>Sep 17 → </strong>Registrations open (and the hype machine starts) <br/>
          <strong>Sep 17 → </strong>Applications closed <br/>
          <strong>Nov 19 → </strong>​12 hours of pure building madness + Demo day + Results
        </p>
      </section>


      <section className="content" id="usecases">
      <h2>Use Cases</h2>

      <UseCaseAccordion
        code="10011"
        title="Financial Data Modeling App for Portfolio and Investment Managers"
      >
        <h3>Financial Data Modeling App</h3>

        <p><strong>Goal:</strong> Put advanced modeling and portfolio analysis
        in the hands of investment professionals on desktop or mobile.</p>

        <ul>
          <li>
            <strong>Company workbench:</strong> Pull market and fundamentals,
            run ratio analysis and factor views
          </li>
          <li>
            <strong>Model library:</strong> DCF, comps, factor models,
            custom screens with editable assumptions
          </li>
        </ul>
      </UseCaseAccordion>
      <UseCaseAccordion
        code="10012"
        title="Global Distribution Account"
      >
        <h3>Global Distribution Account 360</h3>

        <p><strong>Goal:</strong>  Give global account managers a single, 
        reliable view of each client and surface growth and efficiency opportunities.</p>

        <ul>
          <li>
            <strong>Company workbench:</strong> Ingest CRM, billing, support, delivery,
            and marketing data; deduplicate and reconcile entities; fix messy records
          </li>
          <li>
            <strong>Model library:</strong> Auto-create tasks or workflows for actions like QBR prep, renewal alerts, and issue escalation
          </li>
        </ul>
      </UseCaseAccordion>
      <UseCaseAccordion
        code="10013"
        title="Insurance Customer Care AI-powered Agent"
      >
        <h3>Insurance Customer Care AI-powered Agent Assist: Call Summarizer and Guidance</h3>

        <p><strong>Goal:</strong> Reduce handle time, improve complaint resolution,
         and guide agents with summaries, sentiment, and next-best actions.</p>

        <ul>
          <li>
            <strong>Transcription and summary:</strong> Generate a transcript and concise call summary with key facts and action items
          </li>
          <li>
            <strong>New customer flow:</strong>  Detect a new caller, recommend suitable products, and explain why those fit the caller’s situation
          </li>
        </ul>
      </UseCaseAccordion>
      <UseCaseAccordion
        code="10014"
        title="Legal Writer and Redliner"
      >
        <h3>FLegal Writer and Redliner (Production-grade)</h3>

        <p><strong>Goal:</strong> PBoost legal team productivity with draft creation, redlining, and document quality checks.</p>

        <ul>
          <li>
            <strong>Upload and analyze:</strong> Ingest contracts or filings; check structure, clauses, references, and gaps
          </li>
          <li>
            <strong>Redline engine:</strong> Highlight deviations from templates or playbooks; flag risky terms and missing sections
          </li>
        </ul>
      </UseCaseAccordion>

    </section>

      <section className="content" id="faq">
        <h2>About Replit</h2>
        <p>Replit lets you securely vibe code any app in plain English- with database, user authentication, security scan and publishing built into the platform. Replit’s latest Agent- Agent 3 can run autonomously for 200+ minutes, building and testing your app automatically. It can even build other Agents and automations.
          Replit is used by millions of users globally, and has Duolingo, Coinbase, Google, Zillow and Hexaware as its Enterprise customers.</p>
      </section>

      <section className="content" id="faq">
        <h2>​​About Polaris School of Technology</h2>
        <p>​​Polaris School of Technology, a Bengaluru-based 4-year Computer Science program, is a new-age tech school building the next generation of techies.
          <br/>
          PolarisEvents, an initiative by Polaris, is BLR's coolest destination for everything happening in tech. We're the place techies watch out for. If something innovative is brewing in the city's tech scene, chances are we're behind it. :P
        </p>
      </section>
    </>
  );
}

export default Home;
