**1️⃣ Core Entity: StoredMock**
```
interface StoredMock {
  id: string
  payload: Record<string, unknown>
  expiresAt: Date
}
```
**id**
- Unique identifier
- Generated at creation time
- Used as namespace for routing

**payload**
- Raw JSON provided by user
- Only top-level keys are routable
- Nested traversal not supported (yet)
- Maximum JSON payload: 100KB (enforced at request layer)

**expiresAt**
- expiresAt has MongoDB TTL index
- Documents auto-delete after 24 hours
- Expiry handled at DB level