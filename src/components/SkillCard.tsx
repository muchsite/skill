import { Link } from "@tanstack/react-router";
import {
  ArrowBigDown,
  ArrowBigUp,
  ArrowUpRight,
  Bookmark,
  Copy,
  MessageSquare,
} from "lucide-react";

const SkillCard = ({ skill }: { skill: SkillRecord }) => {
  const {
    authorClerkId,
    category,
    createdAt,
    description,
    installComand,
    tags,
    title,
    authorEmail,
  } = skill;
  return (
    <article className="skill-card">
      <Link
        to="/skills"
        tabIndex={-1}
        aria-label={`Open ${title}`}
        className=" overlay"
      />
      <div className="chrome">
        <div className="chrome-bar">
          <div className="lights">
            <div className="light red "></div>
            <div className="light amber "></div>
            <div className="light green "></div>
          </div>
          <div className="host">registry.sh</div>
        </div>
      </div>
      <div className="body">
        <div className="meta">
          <div className="author">
            <img src="/logo512.png" alt="" className="avatar" />
            <div className="author-copy">
              <p>Adrian</p>
              <p>{new Date(createdAt as string).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="category">{category}</p>
        </div>
        <div className="summery">
          <Link to="/skils">
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </div>
        <div className="command">
          <div className="command-copy">
            <span>{">_"}</span>
            <p>{installComand}</p>
          </div>
          <button
            type="button"
            className="copy"
            onClick={() => navigator.clipboard.writeText(installComand ?? "")}
          >
            <Copy size={16} />
          </button>
        </div>
        <div className="footer">
          <div className="stats">
            <button type="button" className="upvote">
              <ArrowBigUp size={16} fill="currentColor" />
              <span>{tags.length}</span>
            </button>
            <div className="comments">
              <MessageSquare size={14} />
              <span>{authorEmail ? 1 : 0}</span>
            </div>
          </div>
          <div className="actions">
            <Link to="/skils" className="open" title={`Open ${title}`}>
              <span>Open</span>
              <ArrowUpRight size={14} />
            </Link>
            <button type="button" className="save">
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
