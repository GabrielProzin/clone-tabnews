import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0d1b2a",
        color: "#e0e1dd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Clone TabNews
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Este projeto irá recriar as principais funcionalidades do site{" "}
        <a
          href="https://tabnews.com.br"
          target="_blank"
          style={{ color: "#66fcf1", textDecoration: "none" }}
        >
          TabNews
        </a>
        , incluindo publicação de conteúdo, autenticação de usuários e
        gerenciamento de permissões.
      </p>
      <div style={{ display: "flex", marginTop: "20px", gap: "10px" }}>
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "#66fcf1",
            color: "#0d1b2a",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          React
        </span>
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "#66fcf1",
            color: "#0d1b2a",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          TypeScript
        </span>
        <span
          style={{
            padding: "10px 20px",
            backgroundColor: "#66fcf1",
            color: "#0d1b2a",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          API Rest
        </span>
      </div>
      <a
        href="https://github.com/GabrielProzin/clone-tabnews"
        target="_blank"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#1f2833",
          color: "#66fcf1",
          borderRadius: "5px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0b0c10")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f2833")}
      >
        Ver no GitHub
      </a>
    </div>
  );
}

export default Home;
