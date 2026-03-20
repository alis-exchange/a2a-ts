/**
 * A2A JSON-RPC Transport
 *
 * Provides a TypeScript client for the Agent-to-Agent (A2A) API over JSON-RPC 2.0.
 * Supports both unary requests (single request/response) and streaming (SSE).
 *
 * @packageDocumentation
 */

export { A2AClient } from "./client";
export {
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
} from "./errors";
export type {
  A2AClientConfig,
  JsonRpcError,
  JsonRpcRequest,
  JsonRpcResponse,
} from "./types";