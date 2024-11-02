import React, { useState } from 'react';

const techStacks = {
  mern: {
    title: 'MERN Full Stack',
    description: `
      MERN stands for MongoDB, Express.js, React, and Node.js.
      - **MongoDB**: A NoSQL database for storing data as JSON-like documents.
      - **Express.js**: A web application framework for Node.js.
      - **React**: A front-end JavaScript library for building user interfaces.
      - **Node.js**: A runtime environment for executing JavaScript on the server side.
      Together, these technologies form a powerful stack for building dynamic web applications.
    `
  },
  java: {
    title: 'Java Full Stack',
    description: `
      Java Full Stack development involves using Java for the backend and technologies like Angular or React for the frontend.
      - **Backend**: Java with frameworks such as Spring Boot for creating robust server-side applications.
      - **Frontend**: Modern JavaScript frameworks like React or Angular.
      - **Database**: Relational databases like MySQL or NoSQL databases like MongoDB.
      This stack is ideal for enterprise-level applications due to Java's stability and scalability.
    `
  },
  devops: {
    title: 'DevOps',
    description: `
      DevOps is a combination of development and operations practices to improve collaboration and productivity.
      - **Continuous Integration/Continuous Deployment (CI/CD)**: Tools like Jenkins, GitHub Actions for automating the software release process.
      - **Infrastructure as Code (IaC)**: Tools like Terraform or CloudFormation for managing infrastructure.
      - **Monitoring & Logging**: Tools like Prometheus, Grafana, or ELK stack.
      DevOps aims to automate and streamline the software development and deployment process.
    `
  }
};

const TechInfo = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleSelection = (techKey) => {
    setSelectedTech(techStacks[techKey]);
  };

  return (
    <div style={containerStyle}>
      <h2>Learn About Different Technologies</h2>
      <div style={buttonContainerStyle}>
        <button onClick={() => handleSelection('mern')} style={buttonStyle}>
          MERN Full Stack
        </button>
        <button onClick={() => handleSelection('java')} style={buttonStyle}>
          Java Full Stack
        </button>
        <button onClick={() => handleSelection('devops')} style={buttonStyle}>
          DevOps
        </button>
      </div>
      {selectedTech && (
        <div style={infoStyle}>
          <h3>{selectedTech.title}</h3>
          <p>{selectedTech.description}</p>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgb(52, 147, 110)',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  margin: '20px 0',
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

const infoStyle = {
  marginTop: '20px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  textAlign: 'left',
  color:'rgb(52, 147, 113)'
};

export default TechInfo;
