# Agents and Skills

## Custom Agent

### Disaster Response Agent

**Location:** `.agents/disaster-response-agent.md`

The Disaster Response Agent assists with development and maintenance of the AI Disaster Response Platform.

Its responsibilities include:

- Understanding the existing project architecture
- Maintaining the disaster-response dashboard
- Supporting frontend-backend API integration
- Assisting with disaster alerts and SOS management
- Supporting rescue team, hospital, resource, and relief-camp functionality
- Helping with AI-assisted features
- Preserving existing working functionality
- Identifying integration issues
- Supporting production deployment

The agent follows the project's `AGENTS.md` instructions and uses small, focused changes to reduce the risk of breaking existing functionality.

---

## Custom Skill

### Disaster Response Analysis

**Location:** `.agents/skills/disaster-response-analysis.md`

The Disaster Response Analysis skill analyzes emergency information and produces operational insights for emergency-response operators.

It can analyze:

- Disaster severity
- Disaster location
- SOS requests
- Rescue team availability
- Hospital capacity
- Resource availability
- Relief camp capacity
- Response times
- Operational alerts

The skill produces structured analysis containing:

1. Situation summary
2. Priority alerts
3. Resource status
4. Response recommendations
5. Potential risks

The skill is designed to support human decision-making and does not replace emergency operators.

---

## Relationship Between Agent and Skill

The **Disaster Response Agent** is responsible for development and maintenance of the platform.

The **Disaster Response Analysis Skill** provides specialized disaster-response analysis that can be used by the agent when working with emergency data and operational scenarios.

Together they provide:

```text
Disaster Response Agent
          │
          ├── Project Development
          ├── API Integration
          ├── Dashboard Maintenance
          │
          └── Disaster Response Analysis Skill
                    │
                    ├── Situation Analysis
                    ├── Priority Detection
                    ├── Resource Analysis
                    ├── Recommendations
                    └── Risk Identification