><ins>Date: 12th Feb 2026</ins>><br><br>

**Entry: Backend Routing Scaffold**<br><br>
**Implemented**
1. Express server initialised
2. Get /health endpoint
3. Post /generate (mock)
4. Get /:id/* (mock)<br><br>
**File Changes**
1. src/index.ts
2. src/routes/generate.ts
3. src/routes/mock.ts<br><br>

**Entry: Frontend Wiring**<br><br>
**Implemented**
- Vite React setup
- JsonInput component
- ResultView component
- API call to POST /generate<br><br>

**Known Limitations**
- Backend returns fake ID
- No error handling robustness
- No environment config<br><br><br>

><ins>Date: 13th Feb 2026</ins>><br><br>

**Entry: Dynamic Resource Resolution**<br><br>
**Implemented**
- In-memory store (Map)
- ID generation service
- POST /generate persists JSON
- GET /:id/:resource resolves top-level keys<br><br>

**Architectural Decisions**
- Limited routing to top-level keys only
- No nested traversal yet
- No CRUD operations yet<br><br>

**Known Limitations**
- No persistence
- No expiry
- No mutation support
- No rate limiting<br><br>

><ins>Date: 14th Feb 2026</ins>><br><br>

**Entry: Centralised error handling introduced**<br><br>
**Implemented**
- Introduced centralized error handling middleware.
- Added `AppError` abstraction to standardize custom error creation.
- Refactored existing routes to use structured error responses.
- Improved consistency of HTTP status codes and error messages.<br><br>

**Notes**
- Centralizing error handling reduces repetitive try/catch blocks.
- It makes the application easier to scale and maintain.
- `AppError` ensures predictable error structure across the API.<br><br>

><ins>Date: 15th Feb 2026</ins>><br><br>

**Entry: Validation rules tightened**<br><br>
**Implemented**
- Added request validation layer before controller execution.
- Introduced payload size limit enforcement.
- Updated API specification with validation and error standards.
- Strengthened data model constraints.<br><br>

><ins>Date: 16th Feb 2026</ins>><br><br>

**Entry: Endpoint Testing panel implemented**<br><br>
**Implemented**
- Added a lightweight testing panel in the frontend.
- Allows users to trigger generated mock endpoints directly.
- Displays:
  - Response body
  - HTTP status
  - Error messages (if any)
- Helps validate mock behavior without external tools (Postman/curl).
- Improves development feedback loop.<br><br>