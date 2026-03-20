# a2a-ts

TypeScript types and a **JSON-RPC 2.0** client for the **Agent-to-Agent (A2A)** API: unary requests (single JSON response) and **Server-Sent Events (SSE)** streaming for live updates.

## Requirements

- **Runtime**: `fetch`, `TextDecoderStream`, and `AbortSignal` (e.g. **Node.js 18+** or modern browsers).
- **Types**: Request/response shapes use `*.AsObject` types from `lf/a2a/v1/a2a_pb` (protobuf JS).

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

// Unary — one JSON-RPC response
const response = await client.sendMessage({
  tenant: "",
  message: { text: { text: "Hello" } },
  configuration: { acceptedOutputModesList: ["text"], blocking: true },
});

// Streaming — SSE frames, each parsed as JSON-RPC
const controller = new AbortController();
for await (const event of client.sendStreamingMessage(
  {
    tenant: "",
    message: { text: { text: "Hello" } },
    configuration: { acceptedOutputModesList: ["text"], blocking: false },
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

Push-notification and extended-card helpers mirror the A2A protobuf service surface.

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
} from "./transport/jsonrpc";
```

Protobuf message types (e.g. `SendMessageRequest`) live under `lf/a2a/v1/a2a_pb`.

## Project layout

| Path                 | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `lf/a2a/v1/`         | Generated protobuf JS/TS (A2A API)         |
| `transport/jsonrpc/` | JSON-RPC client, SSE parser, errors, types |

## Dependencies

- `google-protobuf` — runtime for generated messages
- `@alis-build/google-common-protos` — shared Google protos
- `grpc-web` / `@grpc/grpc-js` — gRPC definitions alongside JSON-RPC (optional for this client)

## License

See [LICENSE](./LICENSE).