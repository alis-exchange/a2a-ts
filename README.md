# a2a-ts

TypeScript types and a **JSON-RPC 2.0** client for the **Agent-to-Agent (A2A)** API: unary requests (single JSON response) and **Server-Sent Events (SSE)** streaming for live updates.

## Requirements

- **Runtime**: `fetch`, `TextDecoderStream`, and `AbortSignal` (e.g. **Node.js 18+** or modern browsers).
- **Types**: JSON-RPC request/response shapes are defined in `transport/jsonrpc/wire` for the **A2A JSON-RPC wire format** (what a conforming server expects on the wire). They differ from protobuf `*.AsObject` / grpc-web JSON field names and nesting. The generated files under `lf/a2a/v1/` remain available for gRPC/protobuf workflows.

## Installation

```bash
npm install @alis-build/a2a
```

Configure your bundler or `package.json` `exports` so `transport/jsonrpc` resolves, or import from this repository path:

```typescript
import { A2AClient } from "./transport/jsonrpc";
```

## Quick start

```typescript
import { A2AClient } from "./transport/jsonrpc";

const client = new A2AClient({
  baseUrl: "https://agent.example.com/jsonrpc",
  getToken: async () => "your-bearer-token", // optional
  extensionUris: ["https://agent.example.com/extensions"], // optional
  extraHeaders: { "X-Custom-Header": "value" }, // optional
});

// Unary — one JSON-RPC response (wire-format fields: `parts`, `acceptedOutputModes`, `returnImmediately`, …)
const response = await client.sendMessage({
  tenant: "",
  message: {
    messageId: "00000000-0000-7000-0000-000000000001",
    role: "ROLE_USER",
    parts: [{ text: "Hello" }],
  },
  configuration: {
    acceptedOutputModes: ["text/plain"],
    returnImmediately: true,
  },
});

// Streaming — SSE frames, each parsed as JSON-RPC
const controller = new AbortController();
for await (const event of client.sendStreamingMessage(
  {
    tenant: "",
    message: {
      messageId: "00000000-0000-7000-0000-000000000002",
      role: "ROLE_USER",
      parts: [{ text: "Hello" }],
    },
    configuration: {
      acceptedOutputModes: ["text/plain"],
      returnImmediately: false,
    },
  },
  controller.signal,
)) {
  console.log(event);
}
// controller.abort() ends the stream without treating it as a hard failure
```

## `A2AClient` methods

| Method                             | JSON-RPC method                    | Mode                       |
| ---------------------------------- | ---------------------------------- | -------------------------- |
| `sendMessage`                      | `SendMessage`                      | Unary                      |
| `getTask`                          | `GetTask`                          | Unary                      |
| `listTasks`                        | `ListTasks`                        | Unary                      |
| `cancelTask`                       | `CancelTask`                       | Unary                      |
| `getTaskPushNotificationConfig`    | `GetTaskPushNotificationConfig`    | Unary                      |
| `createTaskPushNotificationConfig` | `CreateTaskPushNotificationConfig` | Unary                      |
| `listTaskPushNotificationConfigs`  | `ListTaskPushNotificationConfigs`  | Unary                      |
| `deleteTaskPushNotificationConfig` | `DeleteTaskPushNotificationConfig` | Unary                      |
| `getExtendedAgentCard`             | `GetExtendedAgentCard`             | Unary                      |
| `sendStreamingMessage`             | `SendStreamingMessage`             | Streaming (async iterator) |
| `subscribeToTask`                  | `SubscribeToTask`                  | Streaming (async iterator) |

Push-notification methods use the same JSON-RPC names as the protobuf RPCs, but **request bodies** follow the JSON-RPC wire shape (e.g. `createTaskPushNotificationConfig` expects `{ taskId, config }`, not a flat protobuf `AsObject`).

## Transport (`transport/jsonrpc`)

### Architecture

```
A2AClient
├── request()  → POST JSON body → single JSON-RPC response
└── stream()   → POST JSON body → readSseStream() → yield each SSE `data:` frame as JSON-RPC
```

### Errors

| Class                   | When                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `JsonRpcTransportError` | Network failure, non-2xx HTTP, invalid JSON body, SSE read errors. Optional `status`. |
| `JsonRpcProtocolError`  | JSON-RPC `error` in the response. Subclasses by `code`:                               |

| Subclass                            | Code   |
| ----------------------------------- | ------ |
| `TaskNotFoundError`                 | -32001 |
| `TaskNotCancelableError`            | -32002 |
| `PushNotificationNotSupportedError` | -32003 |
| `UnsupportedOperationError`         | -32004 |
| `ContentTypeNotSupportedError`      | -32005 |
| `InvalidAgentResponseError`         | -32006 |
| `ExtendedCardNotConfiguredError`    | -32007 |
| `UnauthenticatedError`              | -31401 |
| `UnauthorizedError`                 | -31403 |

Use `createProtocolError(raw)` if you need the same mapping from a raw `JsonRpcError`.

### Exports

```typescript
import {
  A2AClient,
  createProtocolError,
  JsonRpcProtocolError,
  JsonRpcTransportError,
  TaskNotFoundError,
  TaskNotCancelableError,
  PushNotificationNotSupportedError,
  UnsupportedOperationError,
  ContentTypeNotSupportedError,
  InvalidAgentResponseError,
  ExtendedCardNotConfiguredError,
  UnauthenticatedError,
  UnauthorizedError,
} from "./transport/jsonrpc";

import type {
  A2AClientConfig,
  JsonRpcError,
  JsonRpcRequest,
  JsonRpcResponse,
  SendMessageRequest,
  StreamResponse,
  Task,
} from "./transport/jsonrpc";
```

### Protobuf vs JSON-RPC types

| Use case | Types |
| -------- | ----- |
| **JSON-RPC client** (`A2AClient`) | Import wire types from `./transport/jsonrpc` (e.g. `SendMessageRequest`, `Task`, `StreamResponse`). These match the **A2A JSON-RPC** payloads your server accepts. |
| **gRPC / binary protobuf** | Generated messages under `lf/a2a/v1/a2a_pb` (`*.AsObject`, `Message`, etc.). |

Do not pass protobuf `AsObject` trees to `A2AClient` methods: field names differ (`parts` vs `partsList`, `acceptedOutputModes` vs `acceptedOutputModesList`, nested push `config`, flattened `Part` JSON, etc.).

## Project layout

| Path                 | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `lf/a2a/v1/`         | Generated protobuf JS/TS (A2A API)         |
| `transport/jsonrpc/` | JSON-RPC client, SSE parser, errors, **wire types** (`wire/`) |

## Dependencies

- `google-protobuf` — runtime for generated messages
- `@alis-build/google-common-protos` — shared Google protos
- `grpc-web` / `@grpc/grpc-js` — gRPC definitions alongside JSON-RPC (optional for this client)

## License

See [LICENSE](./LICENSE).
