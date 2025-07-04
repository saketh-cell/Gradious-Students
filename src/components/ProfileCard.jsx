import React from "react";
import moment from "moment";

const getLastSeenMessage = (lastSeen) => {
  if (!lastSeen) return "✅ Online";

  const now = moment();
  const lastSeenMoment = moment(lastSeen);
  const diffDays = now.diff(lastSeenMoment, "days");

  if (diffDays === 0) return `Last seen ${lastSeenMoment.fromNow()}`;
  if (diffDays <= 7) return `Last seen ${diffDays} day(s) ago`;

  return "Last seen several days ago";
};

const ProfileCard = ({ imageUrl, name, skills, lastSeen }) => {
  return (
    <div
      style={{
        width: "220px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        textAlign: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.08)";
      }}
    >
      <img
        src={imageUrl}
        alt="Profile"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "12px" }}>
        <h2
          style={{
            margin: "10px 0 8px",
            fontSize: "18px",
            color: "#222",
          }}
        >
          {name}
        </h2>

        <h3 style={{ fontSize: "15px", marginBottom: "10px", color: "#333" }}>
          Skill Set
        </h3>

        {/* ✅ Modern badge-style skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "12px",
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#f0f0f0",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                color: "#333",
                fontWeight: "500",
                boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <p style={{ color: "#888", fontSize: "12px" }}>
          <strong>Status:</strong> {getLastSeenMessage(lastSeen)}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
