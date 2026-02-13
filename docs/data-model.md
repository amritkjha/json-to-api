**1️⃣ Core Entity: StoredMock**
```
interface StoredMock {
  id: string
  data: Record<string, unknown>
  createdAt: Date
}
```
**id**
- Unique identifier
- Generated at creation time
- Used as namespace for routing

**data**
- Raw JSON provided by user
- Only top-level keys are routable
- Nested traversal not supported (yet)

**createdAt** - (not implemented)
- Timestamp of creation
- Not yet used
- Reserved for expiry logic in future phases