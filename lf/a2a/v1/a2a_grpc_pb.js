// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Older protoc compilers don't understand edition yet.
'use strict';
var grpc = require('@grpc/grpc-js');
var lf_a2a_v1_a2a_pb = require('@alis-build/a2a/lf/a2a/v1/a2a_pb.js');
var google_api_annotations_pb = require('@alis-build/google-common-protos/google/api/annotations_pb.js');
var google_api_client_pb = require('@alis-build/google-common-protos/google/api/client_pb.js');
var google_api_field_behavior_pb = require('@alis-build/google-common-protos/google/api/field_behavior_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_AgentCard(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.AgentCard)) {
    throw new Error('Expected argument of type lf.a2a.v1.AgentCard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_AgentCard(buffer_arg) {
  return lf_a2a_v1_a2a_pb.AgentCard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_CancelTaskRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.CancelTaskRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.CancelTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_CancelTaskRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.CancelTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_DeleteTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.DeleteTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_DeleteTaskPushNotificationConfigRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_GetExtendedAgentCardRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.GetExtendedAgentCardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_GetExtendedAgentCardRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_GetTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.GetTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_GetTaskPushNotificationConfigRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_GetTaskRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_GetTaskRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_ListTaskPushNotificationConfigsRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.ListTaskPushNotificationConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_ListTaskPushNotificationConfigsRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_ListTaskPushNotificationConfigsResponse(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse)) {
    throw new Error('Expected argument of type lf.a2a.v1.ListTaskPushNotificationConfigsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_ListTaskPushNotificationConfigsResponse(buffer_arg) {
  return lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_ListTasksRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.ListTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_ListTasksRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_ListTasksResponse(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.ListTasksResponse)) {
    throw new Error('Expected argument of type lf.a2a.v1.ListTasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_ListTasksResponse(buffer_arg) {
  return lf_a2a_v1_a2a_pb.ListTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_SendMessageRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_SendMessageRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_SendMessageResponse(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type lf.a2a.v1.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_SendMessageResponse(buffer_arg) {
  return lf_a2a_v1_a2a_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_StreamResponse(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.StreamResponse)) {
    throw new Error('Expected argument of type lf.a2a.v1.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_StreamResponse(buffer_arg) {
  return lf_a2a_v1_a2a_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_SubscribeToTaskRequest(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.SubscribeToTaskRequest)) {
    throw new Error('Expected argument of type lf.a2a.v1.SubscribeToTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_SubscribeToTaskRequest(buffer_arg) {
  return lf_a2a_v1_a2a_pb.SubscribeToTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_Task(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.Task)) {
    throw new Error('Expected argument of type lf.a2a.v1.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_Task(buffer_arg) {
  return lf_a2a_v1_a2a_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lf_a2a_v1_TaskPushNotificationConfig(arg) {
  if (!(arg instanceof lf_a2a_v1_a2a_pb.TaskPushNotificationConfig)) {
    throw new Error('Expected argument of type lf.a2a.v1.TaskPushNotificationConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lf_a2a_v1_TaskPushNotificationConfig(buffer_arg) {
  return lf_a2a_v1_a2a_pb.TaskPushNotificationConfig.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides operations for interacting with agents using the A2A protocol.
var A2AServiceService = exports.A2AServiceService = {
  // Sends a message to an agent.
sendMessage: {
    path: '/lf.a2a.v1.A2AService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.SendMessageRequest,
    responseType: lf_a2a_v1_a2a_pb.SendMessageResponse,
    requestSerialize: serialize_lf_a2a_v1_SendMessageRequest,
    requestDeserialize: deserialize_lf_a2a_v1_SendMessageRequest,
    responseSerialize: serialize_lf_a2a_v1_SendMessageResponse,
    responseDeserialize: deserialize_lf_a2a_v1_SendMessageResponse,
  },
  // Sends a streaming message to an agent, allowing for real-time interaction
// and status updates. Streaming version of `SendMessage`
sendStreamingMessage: {
    path: '/lf.a2a.v1.A2AService/SendStreamingMessage',
    requestStream: false,
    responseStream: true,
    requestType: lf_a2a_v1_a2a_pb.SendMessageRequest,
    responseType: lf_a2a_v1_a2a_pb.StreamResponse,
    requestSerialize: serialize_lf_a2a_v1_SendMessageRequest,
    requestDeserialize: deserialize_lf_a2a_v1_SendMessageRequest,
    responseSerialize: serialize_lf_a2a_v1_StreamResponse,
    responseDeserialize: deserialize_lf_a2a_v1_StreamResponse,
  },
  // Gets the latest state of a task.
getTask: {
    path: '/lf.a2a.v1.A2AService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.GetTaskRequest,
    responseType: lf_a2a_v1_a2a_pb.Task,
    requestSerialize: serialize_lf_a2a_v1_GetTaskRequest,
    requestDeserialize: deserialize_lf_a2a_v1_GetTaskRequest,
    responseSerialize: serialize_lf_a2a_v1_Task,
    responseDeserialize: deserialize_lf_a2a_v1_Task,
  },
  // Lists tasks that match the specified filter.
listTasks: {
    path: '/lf.a2a.v1.A2AService/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.ListTasksRequest,
    responseType: lf_a2a_v1_a2a_pb.ListTasksResponse,
    requestSerialize: serialize_lf_a2a_v1_ListTasksRequest,
    requestDeserialize: deserialize_lf_a2a_v1_ListTasksRequest,
    responseSerialize: serialize_lf_a2a_v1_ListTasksResponse,
    responseDeserialize: deserialize_lf_a2a_v1_ListTasksResponse,
  },
  // Cancels a task in progress.
cancelTask: {
    path: '/lf.a2a.v1.A2AService/CancelTask',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.CancelTaskRequest,
    responseType: lf_a2a_v1_a2a_pb.Task,
    requestSerialize: serialize_lf_a2a_v1_CancelTaskRequest,
    requestDeserialize: deserialize_lf_a2a_v1_CancelTaskRequest,
    responseSerialize: serialize_lf_a2a_v1_Task,
    responseDeserialize: deserialize_lf_a2a_v1_Task,
  },
  // Subscribes to task updates for tasks not in a terminal state.
// Returns `UnsupportedOperationError` if the task is already in a terminal
// state (completed, failed, canceled, rejected).
subscribeToTask: {
    path: '/lf.a2a.v1.A2AService/SubscribeToTask',
    requestStream: false,
    responseStream: true,
    requestType: lf_a2a_v1_a2a_pb.SubscribeToTaskRequest,
    responseType: lf_a2a_v1_a2a_pb.StreamResponse,
    requestSerialize: serialize_lf_a2a_v1_SubscribeToTaskRequest,
    requestDeserialize: deserialize_lf_a2a_v1_SubscribeToTaskRequest,
    responseSerialize: serialize_lf_a2a_v1_StreamResponse,
    responseDeserialize: deserialize_lf_a2a_v1_StreamResponse,
  },
  // (-- api-linter: client-libraries::4232::required-fields=disabled
//     api-linter: core::0133::method-signature=disabled
//     api-linter: core::0133::request-message-name=disabled
//     aip.dev/not-precedent: method_signature preserved for backwards
//     compatibility --)
// Creates a push notification config for a task.
createTaskPushNotificationConfig: {
    path: '/lf.a2a.v1.A2AService/CreateTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig,
    responseType: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_lf_a2a_v1_TaskPushNotificationConfig,
    requestDeserialize: deserialize_lf_a2a_v1_TaskPushNotificationConfig,
    responseSerialize: serialize_lf_a2a_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_lf_a2a_v1_TaskPushNotificationConfig,
  },
  // Gets a push notification config for a task.
getTaskPushNotificationConfig: {
    path: '/lf.a2a.v1.A2AService/GetTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.GetTaskPushNotificationConfigRequest,
    responseType: lf_a2a_v1_a2a_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_lf_a2a_v1_GetTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_lf_a2a_v1_GetTaskPushNotificationConfigRequest,
    responseSerialize: serialize_lf_a2a_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_lf_a2a_v1_TaskPushNotificationConfig,
  },
  // Get a list of push notifications configured for a task.
listTaskPushNotificationConfigs: {
    path: '/lf.a2a.v1.A2AService/ListTaskPushNotificationConfigs',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsRequest,
    responseType: lf_a2a_v1_a2a_pb.ListTaskPushNotificationConfigsResponse,
    requestSerialize: serialize_lf_a2a_v1_ListTaskPushNotificationConfigsRequest,
    requestDeserialize: deserialize_lf_a2a_v1_ListTaskPushNotificationConfigsRequest,
    responseSerialize: serialize_lf_a2a_v1_ListTaskPushNotificationConfigsResponse,
    responseDeserialize: deserialize_lf_a2a_v1_ListTaskPushNotificationConfigsResponse,
  },
  // Gets the extended agent card for the authenticated agent.
getExtendedAgentCard: {
    path: '/lf.a2a.v1.A2AService/GetExtendedAgentCard',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.GetExtendedAgentCardRequest,
    responseType: lf_a2a_v1_a2a_pb.AgentCard,
    requestSerialize: serialize_lf_a2a_v1_GetExtendedAgentCardRequest,
    requestDeserialize: deserialize_lf_a2a_v1_GetExtendedAgentCardRequest,
    responseSerialize: serialize_lf_a2a_v1_AgentCard,
    responseDeserialize: deserialize_lf_a2a_v1_AgentCard,
  },
  // Deletes a push notification config for a task.
deleteTaskPushNotificationConfig: {
    path: '/lf.a2a.v1.A2AService/DeleteTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: lf_a2a_v1_a2a_pb.DeleteTaskPushNotificationConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_lf_a2a_v1_DeleteTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_lf_a2a_v1_DeleteTaskPushNotificationConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.A2AServiceClient = grpc.makeGenericClientConstructor(A2AServiceService, 'A2AService');