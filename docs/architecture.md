# 🏗 Architecture

**jsonToApi is built for speed and ephemerality. No heavy databases, no persistent bottlenecks.**

---

### 🗺 System Flow



```text
  [ Client ]  ──( POST JSON )──▶  [ Node.js Server ]  ──▶  [ In-Memory / Redis ]
      ▲                                 │                          │
      │                                 │                          │
      └───────( GET Mock URL )──────────┴◀──────( Fetch Data )─────┘
```
---

### ⚙️ Core Components
1. **Temporary Storage** Data is held in an LRU (Least Recently Used) cache or Redis. We don't use a traditional DB because your mocks aren't meant to live forever.

2. **Unique ID Generation** Every POST request generates a high-entropy short ID or respects the custom path you provide in the URL.

3. **Dynamic Routing** The server uses a "catch-all" handler. It doesn't look for pre-defined routes; it queries the store for whatever path you just hit.

4. **Expiry Cleanup** A background TTL (Time-To-Live) logic automatically nukes entries after 24 hours to keep the memory footprint lean.

   ---

### ⚡️ Technical Stack
1. **Runtime**: Node.js (High concurrency)

2. **Store**: Redis (For atomic expiration)

3. **Delivery**: Global Edge Caching (Optional/Planned)

   ---

**Note**: Since the store is ephemeral, a server restart (in memory-mode) will clear active mocks. Use the Redis provider for more stability during development.