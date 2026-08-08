# Disaster Response Analysis Skill

## Purpose

Analyze disaster-response information and convert it into useful operational insights for the AI Disaster Response Platform.

## Inputs

The skill can work with information such as:

- Disaster type
- Disaster severity
- Location
- Active SOS requests
- Rescue team availability
- Hospital capacity
- Resource availability
- Relief camp capacity
- Response times
- Operational alerts

## Analysis Process

1. Identify the most important active incidents.
2. Determine which requests require the highest priority.
3. Check available rescue teams and resources.
4. Identify possible resource shortages.
5. Check hospital and relief-camp capacity.
6. Identify potential operational risks.
7. Produce concise recommendations for emergency operators.

## Output Format

Return analysis using the following structure:

### Situation
Brief summary of the current disaster situation.

### Priority Alerts
List the most urgent incidents or requests.

### Resource Status
Identify available resources and potential shortages.

### Response Recommendations
Provide practical recommendations for emergency operators.

### Risks
Identify important risks that should be monitored.

## Guidelines

- Prioritize life-threatening and high-severity situations.
- Prefer clear and actionable recommendations.
- Do not invent unavailable data.
- Clearly distinguish between known information and assumptions.
- Do not present AI recommendations as guaranteed emergency decisions.
- Human emergency operators remain responsible for final decisions.

## Example

Input:

- Active disaster: Flood
- Severity: High
- SOS requests: 12
- Available rescue teams: 3
- Hospital capacity: 80%
- Relief camp capacity: 90%

Output:

### Situation

A high-severity flood is creating significant demand for emergency response resources.

### Priority Alerts

SOS requests in high-risk areas should receive immediate attention.

### Resource Status

Rescue-team availability is limited and relief-camp capacity is approaching its limit.

### Response Recommendations

Prioritize rescue teams for high-risk SOS locations and prepare additional shelter capacity.

### Risks

Limited rescue-team availability and increasing relief-camp occupancy may delay response operations.