import "./style.css";

function App() {
  return (
    <div className="flash-card">
      <img src="./picture.png" alt="profile" />
      <div className="data">
        <h1>Beren Varol</h1>
        <p>
          Fresh Frontend Web Developer who has started coding in 2023. I like to
          learn new things and travel around. If I am not coding, probably I am
          having a nice time with my friends or travel 😊
        </p>
        <ul className="lists">
          {skills.map((item) => (
            <Card item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div>
      <li
        className="list"
        style={{
          backgroundColor:
            item.level === "beginner"
              ? "#D21F3C"
              : item.level === "intermediate"
              ? "#FFFF5C"
              : item.level === "advanced"
              ? "#0BDA51"
              : "",
        }}
      >
        {item.skill} {item.emoji}
      </li>
    </div>
  );
}

const skills = [
  { skill: "JavaScript", level: "advanced", emoji: "💪" },
  { skill: "HTML-CSS", level: "advanced", emoji: "💪" },
  { skill: "React", level: "intermediate", emoji: "✌️" },
  { skill: "Bootstrap", level: "intermediate", emoji: "✌️" },
  { skill: "Phyton", level: "beginner", emoji: "🤗" },
  { skill: "SQL", level: "beginner", emoji: "🤗" },
  { skill: "Linux", level: "intermediate", emoji: "✌️" },
  { skill: "Java", level: "beginner", emoji: "🤗" },
  { skill: "C", level: "intermediate", emoji: "✌️" },
  { skill: "Git-Github", level: "advanced", emoji: "💪" },
];
export default App;
