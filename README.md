# a2a-ts

TypeScript client and types for the Agent-to-Agent (A2A) API. Uses JSON-RPC 2.0 over HTTP with support for both unary and streaming (SSE) operations.

## Installation

```bash
npm install @alis-build/a2a
```

## Quick Start

```typescript
import { A2AClient } from "@alis-build/a2a/transport/jsonrpc";

const client = new A2AClient({
  baseUrl: "https://api.example.com",
  getToken: async () => "your-bearer-token", // optional
});

// Unary: send message, wait for full response
const response = await client.sendMessage({
  message: { text: { text: "Hello" } },
  configuration: { acceptedOutputModesList: ["text"], blocking: true },
});

// Streaming: send message, receive incremental updates
const controller = new AbortController();
for await (const event of client.sendStreamingMessage(
  {
    message: { text: { text: "Hello" } },
    configuration: { acceptedOutputModesList: ["text"], blocking: false },
  },
  controller.signal
)) {
  console.log(event);
}
```

## Transport (`transport/jsonrpc`)

The JSON-RPC transport provides:

| Mode       | Methods                                                       | Use case                          |
| ---------- | ------------------------------------------------------------- | --------------------------------- |
| **Unary**  | `sendMessage`, `getTask`, `listTasks`, `cancelTask`, etc.     | Single request/response            |
| **Streaming** | `sendStreamingMessage`, `subscribeToTask`                  | Incremental updates via SSE        |

### Architecture

```
A2AClient
├── request()     → POST JSON-RPC → parse single JSON response
└── stream()      → POST JSON-RPC → readSseStream() → yield each SSE frame as JSON-RPC response
```

### Error Handling

- **`JsonRpcTransportError`**: Network failures, non-2xx HTTP, stream read errors. Has optional `status` for HTTP status code.
- **`JsonRpcProtocolError`**: Server returned a JSON-RPC error object. Use `code` or `instanceof` for typed handling:
  - `TaskNotFoundError` (-32001)
  - `TaskNotCancelableError` (-32002)
  - `PushNotificationNotSupportedError` (-32003)
  - `UnsupportedOperationError` (-32004)
  - `ContentTypeNotSupportedError` (-32005)
  - `InvalidAgentResponseError` (-32006)
  - `ExtendedCardNotConfiguredError` (-32007)
  - `UnauthenticatedError` (-31401)
  - `UnauthorizedError` (-31403)

### Exports

```typescript
// Client and config
import { A2AClient } from "@alis-build/a2a/transport/jsonrpc";
import type { A2AClientConfig } from "@alis-build/a2a/transport/jsonrpc";

// Errors
import {
  JsonRpcProtocolError,
  JsonRpcTransportError,
  TaskNotFoundError,
  UnauthenticatedError,
  // ... other typed errors
} from "@alis-build/a2a/transport/jsonrpc";
```

## Dependencies

- `google-protobuf` – Protobuf types for A2A messages
- `@alis-build/google-common-protos` – Google common protos

## License

See project LICENSE file.
