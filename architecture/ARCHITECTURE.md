# AI Disaster Response Platform — Architecture

## 1. Overview

AI Disaster Response Platform (AIDRP) is a real-time disaster management system designed to help emergency teams monitor incidents, coordinate rescue operations, manage resources, and make faster decisions during disasters.

The platform provides a centralized mission-control dashboard connecting disaster alerts, rescue teams, hospitals, relief camps, resources, SOS requests, and AI-assisted recommendations.

---

## 2. System Architecture

The system follows a frontend-backend architecture:

```text
                    ┌─────────────────────────┐
                    │        User /          │
                    │   Emergency Operator   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Next.js Frontend    │
                    │     React + TypeScript   │
                    │        Tailwind CSS      │
                    └────────────┬────────────┘
                                 │
                           REST API / HTTP
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      FastAPI Backend    │
                    │       Python API        │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
        Dashboard APIs      Disaster APIs       AI APIs
              │                  │                  │
              ▼                  ▼                  ▼
        Alerts & Stats     Teams / Hospitals    AI Analysis
                           Resources / Camps
                           SOS Requests