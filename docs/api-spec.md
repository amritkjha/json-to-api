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

