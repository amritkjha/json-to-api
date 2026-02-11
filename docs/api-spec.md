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

### Returns
- id (string)
- url (string)

### Notes
- Each top-level key becomes a REST resource
- CRUD routes are auto-generated
- Data stored temporarily

---

## GET /:id/*

Access generated mock data.

### Pattern
/:id/:resource
/:id/:resource/:itemId

### Returns
- Stored JSON response

---

## DELETE /:id

Delete a generated mock API.

### Returns
- success (boolean)

### Notes
- Removes stored data immediately
- URL becomes invalid

