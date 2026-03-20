/**
 * A2A JSON-RPC wire types.
 *
 * Request `params` include: `SendMessageRequest`, `GetTaskRequest`, `ListTasksRequest`,
 * `CancelTaskRequest`, `SubscribeToTaskRequest`, push config requests, `GetExtendedAgentCardRequest`.
 *
 * Response `result` shapes include: `StreamResponse`, `Task`, `ListTasksResponse`,
 * `ListTaskPushConfigResponse`, `TaskPushConfig`, `AgentCard`, etc.
 */

export type { JsonObject } from "./json";
export type {
  Artifact,
  CancelTaskRequest,
  CreateTaskPushConfigRequest,
  DeleteTaskPushConfigRequest,
  GetTaskPushConfigRequest,
  GetTaskRequest,
  ListTaskPushConfigRequest,
  ListTaskPushConfigResponse,
  ListTasksRequest,
  ListTasksResponse,
  Message,
  MessageRoleJson,
  Part,
  PushAuthInfo,
  PushConfig,
  SendMessageConfig,
  SendMessageRequest,
  StreamResponse,
  SubscribeToTaskRequest,
  Task,
  TaskArtifactUpdateEvent,
  TaskPushConfig,
  TaskStateJson,
  TaskStatus,
  TaskStatusUpdateEvent,
} from "./common";
export type {
  AgentCapabilities,
  AgentCard,
  AgentCardSignature,
  AgentExtension,
  AgentInterface,
  AgentProvider,
  AgentSkill,
  GetExtendedAgentCardRequest,
  NamedSecuritySchemes,
  ProtocolVersion,
  SecurityRequirementsOptions,
  TransportProtocol,
} from "./agent-card";