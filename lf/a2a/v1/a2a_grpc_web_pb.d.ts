import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as lf_a2a_v1_a2a_pb from '@alis-build/a2a/lf/a2a/v1/a2a_pb'; // proto import: "lf/a2a/v1/a2a.proto"


export class A2AServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendMessage(
    request: lf_a2a_v1_a2a_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.SendMessageResponse) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.SendMessageResponse>;

  sendStreamingMessage(
    request: lf_a2a_v1_a2a_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;

  getTask(
    request: lf_a2a_v1_a2a_pb.GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.Task) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.Task>;

  listTasks(
    request: lf_a2a_v1_a2a_pb.ListTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.ListTasksResponse) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.ListTasksResponse>;

  cancelTask(
    request: lf_a2a_v1_a2a_pb.CancelTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.Task) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.Task>;

  subscribeToTask(
    request: lf_a2a_v1_a2a_pb.SubscribeToTaskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;

  createTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;

  getTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;

  listTaskPushNotificationConfigs(
    request: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>;

  getExtendedAgentCard(
    request: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: lf_a2a_v1_a2a_pb.AgentCard) => void
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.AgentCard>;

  deleteTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class A2AServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendMessage(
    request: lf_a2a_v1_a2a_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.SendMessageResponse>;

  sendStreamingMessage(
    request: lf_a2a_v1_a2a_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;

  getTask(
    request: lf_a2a_v1_a2a_pb.GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.Task>;

  listTasks(
    request: lf_a2a_v1_a2a_pb.ListTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.ListTasksResponse>;

  cancelTask(
    request: lf_a2a_v1_a2a_pb.CancelTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.Task>;

  subscribeToTask(
    request: lf_a2a_v1_a2a_pb.SubscribeToTaskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;

  createTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;

  getTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;

  listTaskPushNotificationConfigs(
    request: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>;

  getExtendedAgentCard(
    request: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lf_a2a_v1_a2a_pb.AgentCard>;

  deleteTaskPushNotificationConfig(
    request: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}
