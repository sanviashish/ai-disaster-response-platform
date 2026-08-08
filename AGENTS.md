# Agent Instructions — AI Disaster Response Platform

## Project Overview

AI Disaster Response Platform is a full-stack emergency management application designed to help emergency responders monitor disasters, coordinate rescue operations, manage resources, and make informed decisions.

## Project Structure

- `frontend/` — Next.js frontend application
- `backend/` — FastAPI backend application
- `architecture/` — System architecture documentation

## Frontend Rules

- Use Next.js, React, and TypeScript.
- Use Tailwind CSS for styling.
- Keep reusable UI components inside `frontend/components/`.
- Keep API communication inside `frontend/services/`.
- Do not hardcode backend API responses into UI components.
- Maintain the existing dashboard design and responsive layout.
- Avoid unnecessary changes to working components.

## Backend Rules

- Use FastAPI and Python.
- Keep API endpoints organized inside `backend/routers/`.
- Use Pydantic models for request/response validation where appropriate.
- Keep backend logic modular.
- Do not place unrelated functionality into `main.py`.
- Maintain CORS configuration for the frontend.

## API Integration Rules

- Frontend communicates with the backend through API services.
- API URLs must be configurable for local development and production deployment.
- Do not hardcode production credentials or API keys.
- Handle API failures gracefully in the frontend.

## AI Rules

- AI functionality should assist emergency operators with analysis and recommendations.
- AI recommendations must not be presented as guaranteed or infallible decisions.
- Keep AI-related functionality isolated and maintainable.

## Code Quality

- Prefer clear and meaningful variable and function names.
- Avoid unnecessary duplication.
- Do not introduce unrelated dependencies.
- Test existing functionality before making major changes.
- Do not remove working features without a clear reason.

## Git Rules

- Work on the latest version of `main`.
- Pull before starting significant work.
- Make focused commits with meaningful commit messages.
- Do not commit secrets, API keys, `.env` files, or generated build files.

## Deployment Rules

- Frontend and backend may be deployed independently.
- Production API URLs must be configured through environment variables.
- Verify frontend-backend communication after deployment.

## Safety

This project is intended as a disaster-response decision-support system. Critical emergency decisions should remain under appropriate human supervision.