import React from "react";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <>
      {/* Side-by-side header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <img
          src="/gradious-technologies.webp"
          alt="Gradious Logo"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            fontSize: "40px",
            color: "#333",
            margin: 0,
          }}
        >
          Gradious Students
        </h1>
      </div>

      {/* Profile Cards Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        <ProfileCard
          name="Saketh Ram"
          imageUrl="/SakethFun.jpg"
          skills={["React", "Node.js", "MongoDB", "Express", "MERN"]}
          lastSeen={null}
          github="https://github.com/saketh-cell"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Rohith"
          imageUrl="/Rohith.jpg"
          skills={["HTML", "CSS", "UI/UX", "Javascript", "MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString()}
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Nikshith"
          imageUrl="Panthul.jpg"
          skills={["HTML", "CSS", "Javascript", "Java", "MERN"]}
          lastSeen={null}
          github="https://github.com/DNikshith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Dileep Kumar"
          imageUrl="/Dileep.jpg"
          skills={["Java", "React", "Node", "MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString()}
          github="https://github.com/dhileepkumar-56"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Hemanth"
          imageUrl="/Hemanth.jpg"
          skills={["MongoDB", "MySQL", "NoSQL", "MERN"]}
          lastSeen={null}
          github="https://github.com/Atlahemanthkumarreddy"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Jaswanth"
          imageUrl="/Jaswanth.jpg"
          skills={["BPO", "HR", "Product Management", "Javascript"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString()}
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1NSluZewmv3YLhxsCs8cqKne1M3JAJIeW/view?usp=sharing"
        />
        <ProfileCard
          name="Chari"
          imageUrl="/Chari.jpg"
          skills={["Python", "Java", "MERN", "JavaScript", "Flask"]}
          lastSeen={null}
          github="https://github.com/Venkateshchary07"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Nikhil"
          imageUrl="/Nikhil.jpg"
          skills={["React", "Node", "MongoDB", "MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 45).toISOString()}
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Aravind"
          imageUrl="/Aravind.jpg"
          skills={["Javascript", "Java", "React", "MERN"]}
          lastSeen={null}
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
      </div>
    </>
  );
}

export default App;
