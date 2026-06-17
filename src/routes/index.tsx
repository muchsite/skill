import SkillCard from "#/components/SkillCard";
import { dummySkils } from "#/lib/dymm-skils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div id="home">
      <section className="hero">
        <div className="copy">
          <h1>
            The Registry for <br />
            <span className="text-gradient">Agentic Intelligence</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            mollitia perspiciatis numquam consequatur minus nemo! Doloribus
            dolorem voluptate minus explicabo, saepe obcaecati quasi aspernatur
            pariatur omnis nesciunt laudantium animi sapiente.
          </p>
        </div>
        <div className="actions">
          <Link to="/skils" className="btn-primary">
            <Terminal size={18} />
            <span>Browse Registry</span>
          </Link>
          <Link to="/skils/new" className="btn-secondary">
            <span>Browse Registry</span>
          </Link>
        </div>
      </section>
      <section className="latest">
        <div className="space-y-2">
          <h2>
            Recently Created <span className="text-gradient">Skils</span>
          </h2>
          <p>Latest skills loaded from database in decending creation order.</p>
        </div>
        <div className="skills-grid">
          {dummySkils.map((skill) => {
            return <SkillCard skill={skill} key={skill.id} />;
          })}
        </div>
      </section>
    </div>
  );
}
