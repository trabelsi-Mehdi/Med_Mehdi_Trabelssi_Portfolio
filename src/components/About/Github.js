import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Card } from "react-bootstrap";

function Github() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/trabelsi-Mehdi/repos");
        const data = await response.json();
        setRepos(data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Les jours <strong className="purple">que je code</strong>
        </h1>
        <GitHubCalendar
          username="trabelsi-Mehdi"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Mes <strong className="purple">Repositories</strong>
        </h1>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          repos.map((repo) => (
            <Col md={6} lg={4} key={repo.id} style={{ marginBottom: "20px" }}>
              <Card className="repo-card" style={{ height: "100%", backgroundColor: "#1a1a2e", border: "1px solid #c084f5" }}>
                <Card.Body>
                  <Card.Title style={{ color: "#c084f5" }}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: "#c084f5", textDecoration: "none" }}>
                      {repo.name}
                    </a>
                  </Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    {repo.description || "Pas de description"}
                  </Card.Text>
                  <p style={{ color: "#b8b8ff", fontSize: "0.9em" }}>
                    ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </>
  );
}

export default Github;
