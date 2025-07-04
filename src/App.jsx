import React from "react";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "12px",
          color: "#333",
        }}
      >
        Gradious Students
      </h1>
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
          imageUrl="/saketh2pic.png.jpg"
          skills={["React", "Node.js", "MongoDB","Express"]}
          lastSeen={null} // Online
        />

        <ProfileCard
          name="Rohith"
          imageUrl="/Rohith.jpg"
          skills={["HTML", "CSS", "UI/UX", "Javascript","MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString()} // 2 days ago
        />
        <ProfileCard
          name="Nikshith"
          imageUrl="Panthul.jpg"
          skills={["HTML", "CSS", "Javascript", "Java","MERN"]}
          lastSeen={null} // Online
        />
        <ProfileCard
          name="Dileep Kumar"
          imageUrl="/Dileep.jpg"
          skills={["Java", "React", "Node","MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString()}
        />
        <ProfileCard
          name="Heamanth"
          imageUrl="/Hemanth.jpg"
          skills={["MongoDB", "MySQL", "NoSQL","MERN"]}
          lastSeen={null} // Online
        />
        <ProfileCard
          name="Jaswanth"
          imageUrl="/Jaswanth.jpg"
          skills={["BPO", "HR", "Product Management","Javascript"]}
          lastSeen={new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 10
          ).toISOString()}
        />
        <ProfileCard
          name="Chari"
          imageUrl="/Chari.jpg"
          skills={["Python","Java","MERN","JavaScript"]}
          lastSeen={null} // Online
        />
        <ProfileCard
          name="Nikhil"
          imageUrl="/Nikhil.jpg"
          skills={["React", "Node", "MongoDB","MERN"]}
          lastSeen={new Date(Date.now() - 1000 * 60 * 60 * 45).toISOString()}
        />
        <ProfileCard
          name="Aravind"
          imageUrl="/Aravind.jpg"
          skills={["Javascript", "Java", "React","MERN"]}
          lastSeen={null} // Online
        />
      </div>
    </>
  );
}

export default App;
