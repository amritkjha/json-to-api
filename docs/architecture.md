# 🏗 Architecture

**jsonToApi is designed to create temporary mock endpoints with controlled persistence and automatic cleanup.
It uses MongoDB with TTL-based expiration instead of in-memory storage, ensuring stability across server restarts.**

---

### 🗺 System Flow



```text
  [ Client ]  ──( POST JSON )──▶  [ Node.js Server ]  ──▶  [ MongoDB ]
      ▲                                 │                         │
      │                                 │                         │
      └───────( GET Mock URL )──────────┴◀──────( Fetch Data )────┘
```
Flow:
- Client sends JSON via POST /generate
- Server validates and stores JSON in MongoDB
- MongoDB assigns TTL expiry
- Client receives generated mock URL
- Hitting that URL fetches stored JSON
---

### ⚙️ Core Components
1. **Persistent Temporary Storage**
- Mocks are stored in MongoDB with a TTL index (e.g., 6 hours).
- This means:
  - Data survives server restarts
  - Automatic cleanup handled by MongoDB
  - No manual background job needed

2. **Unique ID Generation**
- Every POST request generates a high-entropy short ID.
- The ID becomes part of the mock URL:
  ```
  http://localhost:3000/:id
  ```

4. **Dynamic Routing** A parameterized route handler (/:id) dynamically fetches mock data from MongoDB. No predefined routes required.

5. **Expiry Cleanup** A background TTL (Time-To-Live) logic automatically nukes entries after 6 hours to keep the memory footprint lean.

   ---

### ⚡️ Technical Stack
1. **Runtime**: Node.js (Express)

2. **Database**: MongoDB Atlas (TTL enabled)

3. **Rate Limiting**: express-rate-limit

4. **Validation**: Request validation layer (custom middleware)

   ---

### Important Note
- Mocks are temporary.
- After TTL expiry:
  - The document is deleted
  - The mock URL becomes invalid
- If MongoDB is unavailable, mock generation will fail (no fallback memory store).