# API Spec

Minimal HTTP API to generate and serve mock endpoints.

JSON in → URL out.

---

## Base URL

/

---

## POST /generate

Create a mock API.

### Body
- Accepts: JSON object
- Content-Type: application/json

### Validation Rules
- Must be valid JSON object
- Reject if not object
- Reject if empty
- Keys must be strings.
- Nested values can be any valid JSON type unless otherwise restricted.

## Payload Size Limit
- Maximum request payload size: 100KB
- Requests exceeding this limit will be rejected.

## JSON Formatting Support (Client-Side)
The input JSON textarea now includes a “Format JSON” button.

**Behavior**
- Takes current textarea content
- Attempts to parse it as JSON
- If valid:
  - Reformats using JSON.stringify(obj, null, 2)
  - Updates textarea with pretty-printed JSON
- If invalid:
  - Shows validation error message
  - Does not modify textarea content

**Purpose**
- Improves readability before submission
- Reduces malformed payload submissions
- Helps during manual mock creation

### Returns
Response (200)
- id (string)
- url (string)
```
{
  "id": "abc123",
  "url": "http://localhost:3000/abc123"
}
```
### Errors
**Error response format**:
```
throw new AppError(
    statusCode,
    "ERROR_CODE",
    `message to be sent as response`
)
```
- **400** → invalid JSON body
- **500** → internal error

### Rate Limiting
- 100 requests per IP per 15 minutes
- Applies globally to all routes
- Exceeding limit returns:
```
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later."
  }
}
```

### Data Expiry
- Generated mocks expire automatically after 6 hours.
- Expired mocks return 404 on access.

### Notes
- Each top-level key becomes a REST resource
- CRUD routes are auto-generated
- Data stored temporarily

---

## GET /:id/*

Access generated mock data.

### Pattern
/:id/

### Returns
- Stored JSON response

### Errors
- **404** → API not present

---

## DELETE /:id

Delete a generated mock API.

### Returns
- success (boolean)
- false (if API doesn't exists already)

### Notes
- Removes stored data immediately
- URL becomes invalid

