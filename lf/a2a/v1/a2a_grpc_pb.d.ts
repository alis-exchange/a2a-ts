// GENERATED CODE -- DO NOT EDIT!

// package: lf.a2a.v1
// file: lf/a2a/v1/a2a.proto

import * as lf_a2a_v1_a2a_pb from "@alis-build/a2a/lf/a2a/v1/a2a_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IA2AServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMessage: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.SendMessageRequest, lf_a2a_v1_a2a_pb.SendMessageResponse>;
  sendStreamingMessage: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.SendMessageRequest, lf_a2a_v1_a2a_pb.StreamResponse>;
  getTask: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.GetTaskRequest, lf_a2a_v1_a2a_pb.Task>;
  listTasks: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.ListTasksRequest, lf_a2a_v1_a2a_pb.ListTasksResponse>;
  cancelTask: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.CancelTaskRequest, lf_a2a_v1_a2a_pb.Task>;
  subscribeToTask: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.SubscribeToTaskRequest, lf_a2a_v1_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig, lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;
  getTaskPushNotificationConfig: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest, lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;
  listTaskPushNotificationConfigs: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest, lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>;
  getExtendedAgentCard: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest, lf_a2a_v1_a2a_pb.AgentCard>;
  deleteTaskPushNotificationConfig: grpc.MethodDefinition<lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest, google_protobuf_empty_pb.Empty>;
}

export const A2AServiceService: IA2AServiceService;

export interface IA2AServiceServer extends grpc.UntypedServiceImplementation {
  sendMessage: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.SendMessageRequest, lf_a2a_v1_a2a_pb.SendMessageResponse>;
  sendStreamingMessage: grpc.handleServerStreamingCall<lf_a2a_v1_a2a_pb.SendMessageRequest, lf_a2a_v1_a2a_pb.StreamResponse>;
  getTask: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.GetTaskRequest, lf_a2a_v1_a2a_pb.Task>;
  listTasks: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.ListTasksRequest, lf_a2a_v1_a2a_pb.ListTasksResponse>;
  cancelTask: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.CancelTaskRequest, lf_a2a_v1_a2a_pb.Task>;
  subscribeToTask: grpc.handleServerStreamingCall<lf_a2a_v1_a2a_pb.SubscribeToTaskRequest, lf_a2a_v1_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig, lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;
  getTaskPushNotificationConfig: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest, lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>;
  listTaskPushNotificationConfigs: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest, lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>;
  getExtendedAgentCard: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest, lf_a2a_v1_a2a_pb.AgentCard>;
  deleteTaskPushNotificationConfig: grpc.handleUnaryCall<lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest, google_protobuf_empty_pb.Empty>;
}

export class A2AServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendMessage(argument: lf_a2a_v1_a2a_pb.SendMessageRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: lf_a2a_v1_a2a_pb.SendMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: lf_a2a_v1_a2a_pb.SendMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendStreamingMessage(argument: lf_a2a_v1_a2a_pb.SendMessageRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;
  sendStreamingMessage(argument: lf_a2a_v1_a2a_pb.SendMessageRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;
  getTask(argument: lf_a2a_v1_a2a_pb.GetTaskRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: lf_a2a_v1_a2a_pb.GetTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: lf_a2a_v1_a2a_pb.GetTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  listTasks(argument: lf_a2a_v1_a2a_pb.ListTasksRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: lf_a2a_v1_a2a_pb.ListTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: lf_a2a_v1_a2a_pb.ListTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  cancelTask(argument: lf_a2a_v1_a2a_pb.CancelTaskRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  cancelTask(argument: lf_a2a_v1_a2a_pb.CancelTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  cancelTask(argument: lf_a2a_v1_a2a_pb.CancelTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.Task>): grpc.ClientUnaryCall;
  subscribeToTask(argument: lf_a2a_v1_a2a_pb.SubscribeToTaskRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;
  subscribeToTask(argument: lf_a2a_v1_a2a_pb.SubscribeToTaskRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<lf_a2a_v1_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfigs(argument: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfigs(argument: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfigs(argument: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse>): grpc.ClientUnaryCall;
  getExtendedAgentCard(argument: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  getExtendedAgentCard(argument: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  getExtendedAgentCard(argument: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<lf_a2a_v1_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}