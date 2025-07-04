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
          imageUrl="/sakethcard.jpg"
          skills={["React", "Node.js", "MongoDB","Express","MERN"]}
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
          lastSeen={null} // Online
          github="https://github.com/Atlahemanthkumarreddy"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Jaswanth"
          imageUrl="/Jaswanth.jpg"
          skills={["BPO", "HR", "Product Management", "Javascript"]}
          lastSeen={new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 10
          ).toISOString()}
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
        <ProfileCard
          name="Chari"
          imageUrl="/Chari.jpg"
          skills={["Python", "Java", "MERN", "JavaScript","Flask"]}
          lastSeen={null} // Online
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
          lastSeen={null} // Online
          github="https://github.com/EnagantiRohith"
          viewCv="https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link"
        />
      </div>
    </>
  );
}

export default App;
