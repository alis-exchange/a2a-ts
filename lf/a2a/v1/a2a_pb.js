// source: lf/a2a/v1/a2a.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = globalThis;

var google_api_annotations_pb = require('@alis-build/google-common-protos/google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('@alis-build/google-common-protos/google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('@alis-build/google-common-protos/google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.lf.a2a.v1.APIKeySecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentCapabilities', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentCard', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentCardSignature', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentExtension', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentInterface', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentProvider', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AgentSkill', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Artifact', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AuthenticationInfo', null, global);
goog.exportSymbol('proto.lf.a2a.v1.AuthorizationCodeOAuthFlow', null, global);
goog.exportSymbol('proto.lf.a2a.v1.CancelTaskRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ClientCredentialsOAuthFlow', null, global);
goog.exportSymbol('proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.DeviceCodeOAuthFlow', null, global);
goog.exportSymbol('proto.lf.a2a.v1.GetExtendedAgentCardRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.GetTaskRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.HTTPAuthSecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ImplicitOAuthFlow', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ListTasksRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.ListTasksResponse', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Message', null, global);
goog.exportSymbol('proto.lf.a2a.v1.MutualTlsSecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.OAuth2SecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.OAuthFlows', null, global);
goog.exportSymbol('proto.lf.a2a.v1.OAuthFlows.FlowCase', null, global);
goog.exportSymbol('proto.lf.a2a.v1.OpenIdConnectSecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Part', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Part.ContentCase', null, global);
goog.exportSymbol('proto.lf.a2a.v1.PasswordOAuthFlow', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Role', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SecurityRequirement', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SecurityScheme', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SecurityScheme.SchemeCase', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SendMessageConfiguration', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SendMessageRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SendMessageResponse', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SendMessageResponse.PayloadCase', null, global);
goog.exportSymbol('proto.lf.a2a.v1.StreamResponse', null, global);
goog.exportSymbol('proto.lf.a2a.v1.StreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.lf.a2a.v1.StringList', null, global);
goog.exportSymbol('proto.lf.a2a.v1.SubscribeToTaskRequest', null, global);
goog.exportSymbol('proto.lf.a2a.v1.Task', null, global);
goog.exportSymbol('proto.lf.a2a.v1.TaskArtifactUpdateEvent', null, global);
goog.exportSymbol('proto.lf.a2a.v1.TaskPushNotificationConfig', null, global);
goog.exportSymbol('proto.lf.a2a.v1.TaskState', null, global);
goog.exportSymbol('proto.lf.a2a.v1.TaskStatus', null, global);
goog.exportSymbol('proto.lf.a2a.v1.TaskStatusUpdateEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SendMessageConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.SendMessageConfiguration.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.SendMessageConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SendMessageConfiguration.displayName = 'proto.lf.a2a.v1.SendMessageConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.Task.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.Task.displayName = 'proto.lf.a2a.v1.Task';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.TaskStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.TaskStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.TaskStatus.displayName = 'proto.lf.a2a.v1.TaskStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lf.a2a.v1.Part.oneofGroups_);
};
goog.inherits(proto.lf.a2a.v1.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.Part.displayName = 'proto.lf.a2a.v1.Part';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.Message.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.Message.displayName = 'proto.lf.a2a.v1.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.Artifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.Artifact.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.Artifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.Artifact.displayName = 'proto.lf.a2a.v1.Artifact';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.TaskStatusUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.TaskStatusUpdateEvent.displayName = 'proto.lf.a2a.v1.TaskStatusUpdateEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.TaskArtifactUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.TaskArtifactUpdateEvent.displayName = 'proto.lf.a2a.v1.TaskArtifactUpdateEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AuthenticationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AuthenticationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AuthenticationInfo.displayName = 'proto.lf.a2a.v1.AuthenticationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentInterface = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AgentInterface, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentInterface.displayName = 'proto.lf.a2a.v1.AgentInterface';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.AgentCard.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.AgentCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentCard.displayName = 'proto.lf.a2a.v1.AgentCard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AgentProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentProvider.displayName = 'proto.lf.a2a.v1.AgentProvider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.AgentCapabilities.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.AgentCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentCapabilities.displayName = 'proto.lf.a2a.v1.AgentCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AgentExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentExtension.displayName = 'proto.lf.a2a.v1.AgentExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentSkill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.AgentSkill.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.AgentSkill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentSkill.displayName = 'proto.lf.a2a.v1.AgentSkill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AgentCardSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AgentCardSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AgentCardSignature.displayName = 'proto.lf.a2a.v1.AgentCardSignature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.TaskPushNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.TaskPushNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.TaskPushNotificationConfig.displayName = 'proto.lf.a2a.v1.TaskPushNotificationConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.StringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.StringList.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.StringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.StringList.displayName = 'proto.lf.a2a.v1.StringList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SecurityRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.SecurityRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SecurityRequirement.displayName = 'proto.lf.a2a.v1.SecurityRequirement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lf.a2a.v1.SecurityScheme.oneofGroups_);
};
goog.inherits(proto.lf.a2a.v1.SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SecurityScheme.displayName = 'proto.lf.a2a.v1.SecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.APIKeySecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.APIKeySecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.APIKeySecurityScheme.displayName = 'proto.lf.a2a.v1.APIKeySecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.HTTPAuthSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.HTTPAuthSecurityScheme.displayName = 'proto.lf.a2a.v1.HTTPAuthSecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.OAuth2SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.OAuth2SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.OAuth2SecurityScheme.displayName = 'proto.lf.a2a.v1.OAuth2SecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.OpenIdConnectSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.OpenIdConnectSecurityScheme.displayName = 'proto.lf.a2a.v1.OpenIdConnectSecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.MutualTlsSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.MutualTlsSecurityScheme.displayName = 'proto.lf.a2a.v1.MutualTlsSecurityScheme';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.OAuthFlows = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lf.a2a.v1.OAuthFlows.oneofGroups_);
};
goog.inherits(proto.lf.a2a.v1.OAuthFlows, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.OAuthFlows.displayName = 'proto.lf.a2a.v1.OAuthFlows';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.AuthorizationCodeOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.displayName = 'proto.lf.a2a.v1.AuthorizationCodeOAuthFlow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.ClientCredentialsOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ClientCredentialsOAuthFlow.displayName = 'proto.lf.a2a.v1.ClientCredentialsOAuthFlow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ImplicitOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.ImplicitOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ImplicitOAuthFlow.displayName = 'proto.lf.a2a.v1.ImplicitOAuthFlow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.PasswordOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.PasswordOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.PasswordOAuthFlow.displayName = 'proto.lf.a2a.v1.PasswordOAuthFlow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.DeviceCodeOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.DeviceCodeOAuthFlow.displayName = 'proto.lf.a2a.v1.DeviceCodeOAuthFlow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SendMessageRequest.displayName = 'proto.lf.a2a.v1.SendMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.GetTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.GetTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.GetTaskRequest.displayName = 'proto.lf.a2a.v1.GetTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ListTasksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.ListTasksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ListTasksRequest.displayName = 'proto.lf.a2a.v1.ListTasksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ListTasksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.ListTasksResponse.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.ListTasksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ListTasksResponse.displayName = 'proto.lf.a2a.v1.ListTasksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.CancelTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.CancelTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.CancelTaskRequest.displayName = 'proto.lf.a2a.v1.CancelTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.displayName = 'proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.displayName = 'proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SubscribeToTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.SubscribeToTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SubscribeToTaskRequest.displayName = 'proto.lf.a2a.v1.SubscribeToTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.displayName = 'proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lf.a2a.v1.GetExtendedAgentCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.GetExtendedAgentCardRequest.displayName = 'proto.lf.a2a.v1.GetExtendedAgentCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lf.a2a.v1.SendMessageResponse.oneofGroups_);
};
goog.inherits(proto.lf.a2a.v1.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.SendMessageResponse.displayName = 'proto.lf.a2a.v1.SendMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.StreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lf.a2a.v1.StreamResponse.oneofGroups_);
};
goog.inherits(proto.lf.a2a.v1.StreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.StreamResponse.displayName = 'proto.lf.a2a.v1.StreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.repeatedFields_, null);
};
goog.inherits(proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.displayName = 'proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.SendMessageConfiguration.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SendMessageConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SendMessageConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
acceptedOutputModesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
taskPushNotificationConfig: (f = msg.getTaskPushNotificationConfig()) && proto.lf.a2a.v1.TaskPushNotificationConfig.toObject(includeInstance, f),
historyLength: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
blocking: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration}
 */
proto.lf.a2a.v1.SendMessageConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SendMessageConfiguration;
  return proto.lf.a2a.v1.SendMessageConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SendMessageConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration}
 */
proto.lf.a2a.v1.SendMessageConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addAcceptedOutputModes(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.TaskPushNotificationConfig;
      reader.readMessage(value,proto.lf.a2a.v1.TaskPushNotificationConfig.deserializeBinaryFromReader);
      msg.setTaskPushNotificationConfig(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocking(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SendMessageConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SendMessageConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcceptedOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTaskPushNotificationConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.TaskPushNotificationConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBlocking();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated string accepted_output_modes = 1;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.getAcceptedOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.setAcceptedOutputModesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.addAcceptedOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.clearAcceptedOutputModesList = function() {
  return this.setAcceptedOutputModesList([]);
};


/**
 * optional TaskPushNotificationConfig task_push_notification_config = 2;
 * @return {?proto.lf.a2a.v1.TaskPushNotificationConfig}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.getTaskPushNotificationConfig = function() {
  return /** @type{?proto.lf.a2a.v1.TaskPushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.TaskPushNotificationConfig, 2));
};


/**
 * @param {?proto.lf.a2a.v1.TaskPushNotificationConfig|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
*/
proto.lf.a2a.v1.SendMessageConfiguration.prototype.setTaskPushNotificationConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.clearTaskPushNotificationConfig = function() {
  return this.setTaskPushNotificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.hasTaskPushNotificationConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 history_length = 3;
 * @return {number}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.setHistoryLength = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.clearHistoryLength = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.hasHistoryLength = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool blocking = 4;
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.getBlocking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.SendMessageConfiguration} returns this
 */
proto.lf.a2a.v1.SendMessageConfiguration.prototype.setBlocking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.Task.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: (f = msg.getStatus()) && proto.lf.a2a.v1.TaskStatus.toObject(includeInstance, f),
artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    proto.lf.a2a.v1.Artifact.toObject, includeInstance),
historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.lf.a2a.v1.Message.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.Task}
 */
proto.lf.a2a.v1.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.Task;
  return proto.lf.a2a.v1.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.Task}
 */
proto.lf.a2a.v1.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.TaskStatus;
      reader.readMessage(value,proto.lf.a2a.v1.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.Artifact;
      reader.readMessage(value,proto.lf.a2a.v1.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
      break;
    case 5:
      var value = new proto.lf.a2a.v1.Message;
      reader.readMessage(value,proto.lf.a2a.v1.Message.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lf.a2a.v1.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.lf.a2a.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.Task.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskStatus status = 3;
 * @return {?proto.lf.a2a.v1.TaskStatus}
 */
proto.lf.a2a.v1.Task.prototype.getStatus = function() {
  return /** @type{?proto.lf.a2a.v1.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.TaskStatus, 3));
};


/**
 * @param {?proto.lf.a2a.v1.TaskStatus|undefined} value
 * @return {!proto.lf.a2a.v1.Task} returns this
*/
proto.lf.a2a.v1.Task.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Task.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Artifact artifacts = 4;
 * @return {!Array<!proto.lf.a2a.v1.Artifact>}
 */
proto.lf.a2a.v1.Task.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.Artifact, 4));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.Artifact>} value
 * @return {!proto.lf.a2a.v1.Task} returns this
*/
proto.lf.a2a.v1.Task.prototype.setArtifactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.lf.a2a.v1.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Artifact}
 */
proto.lf.a2a.v1.Task.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.lf.a2a.v1.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.clearArtifactsList = function() {
  return this.setArtifactsList([]);
};


/**
 * repeated Message history = 5;
 * @return {!Array<!proto.lf.a2a.v1.Message>}
 */
proto.lf.a2a.v1.Task.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.Message, 5));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.Message>} value
 * @return {!proto.lf.a2a.v1.Task} returns this
*/
proto.lf.a2a.v1.Task.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.lf.a2a.v1.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.Task.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.lf.a2a.v1.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.Task.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.Task} returns this
*/
proto.lf.a2a.v1.Task.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Task} returns this
 */
proto.lf.a2a.v1.Task.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Task.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.TaskStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.TaskStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.TaskStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: (f = msg.getMessage()) && proto.lf.a2a.v1.Message.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.TaskStatus}
 */
proto.lf.a2a.v1.TaskStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.TaskStatus;
  return proto.lf.a2a.v1.TaskStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.TaskStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.TaskStatus}
 */
proto.lf.a2a.v1.TaskStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lf.a2a.v1.TaskState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.Message;
      reader.readMessage(value,proto.lf.a2a.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.TaskStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.TaskStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.TaskStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional TaskState state = 1;
 * @return {!proto.lf.a2a.v1.TaskState}
 */
proto.lf.a2a.v1.TaskStatus.prototype.getState = function() {
  return /** @type {!proto.lf.a2a.v1.TaskState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.lf.a2a.v1.TaskState} value
 * @return {!proto.lf.a2a.v1.TaskStatus} returns this
 */
proto.lf.a2a.v1.TaskStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Message message = 2;
 * @return {?proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.TaskStatus.prototype.getMessage = function() {
  return /** @type{?proto.lf.a2a.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Message, 2));
};


/**
 * @param {?proto.lf.a2a.v1.Message|undefined} value
 * @return {!proto.lf.a2a.v1.TaskStatus} returns this
*/
proto.lf.a2a.v1.TaskStatus.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskStatus} returns this
 */
proto.lf.a2a.v1.TaskStatus.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskStatus.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.lf.a2a.v1.TaskStatus.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.lf.a2a.v1.TaskStatus} returns this
*/
proto.lf.a2a.v1.TaskStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskStatus} returns this
 */
proto.lf.a2a.v1.TaskStatus.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskStatus.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lf.a2a.v1.Part.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.lf.a2a.v1.Part.ContentCase = {
  CONTENT_NOT_SET: 0,
  TEXT: 1,
  RAW: 2,
  URL: 3,
  DATA: 4
};

/**
 * @return {proto.lf.a2a.v1.Part.ContentCase}
 */
proto.lf.a2a.v1.Part.prototype.getContentCase = function() {
  return /** @type {proto.lf.a2a.v1.Part.ContentCase} */(jspb.Message.computeOneofCase(this, proto.lf.a2a.v1.Part.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
raw: msg.getRaw_asB64(),
url: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
data: (f = msg.getData()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
filename: jspb.Message.getFieldWithDefault(msg, 6, ""),
mediaType: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.Part}
 */
proto.lf.a2a.v1.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.Part;
  return proto.lf.a2a.v1.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.Part}
 */
proto.lf.a2a.v1.Part.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFilename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMediaType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Part.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMediaType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.lf.a2a.v1.Part.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.lf.a2a.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.lf.a2a.v1.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Part.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes raw = 2;
 * @return {!(string|Uint8Array)}
 */
proto.lf.a2a.v1.Part.prototype.getRaw = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes raw = 2;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.lf.a2a.v1.Part.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.Part.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.setRaw = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.lf.a2a.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.clearRaw = function() {
  return jspb.Message.setOneofField(this, 2, proto.lf.a2a.v1.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Part.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.lf.a2a.v1.Part.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.setUrl = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.lf.a2a.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.clearUrl = function() {
  return jspb.Message.setOneofField(this, 3, proto.lf.a2a.v1.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Part.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Value data = 4;
 * @return {?proto.google.protobuf.Value}
 */
proto.lf.a2a.v1.Part.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 4));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.lf.a2a.v1.Part} returns this
*/
proto.lf.a2a.v1.Part.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.lf.a2a.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Part.prototype.hasData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.Part.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.Part} returns this
*/
proto.lf.a2a.v1.Part.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Part.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string filename = 6;
 * @return {string}
 */
proto.lf.a2a.v1.Part.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string media_type = 7;
 * @return {string}
 */
proto.lf.a2a.v1.Part.prototype.getMediaType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Part} returns this
 */
proto.lf.a2a.v1.Part.prototype.setMediaType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.Message.repeatedFields_ = [5,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 3, ""),
role: jspb.Message.getFieldWithDefault(msg, 4, 0),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.lf.a2a.v1.Part.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
extensionsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
referenceTaskIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.Message;
  return proto.lf.a2a.v1.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 4:
      var value = /** @type {!proto.lf.a2a.v1.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 5:
      var value = new proto.lf.a2a.v1.Part;
      reader.readMessage(value,proto.lf.a2a.v1.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExtensions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addReferenceTaskIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.lf.a2a.v1.Part.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getReferenceTaskIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.Message.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.Message.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_id = 3;
 * @return {string}
 */
proto.lf.a2a.v1.Message.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Role role = 4;
 * @return {!proto.lf.a2a.v1.Role}
 */
proto.lf.a2a.v1.Message.prototype.getRole = function() {
  return /** @type {!proto.lf.a2a.v1.Role} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.lf.a2a.v1.Role} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Part parts = 5;
 * @return {!Array<!proto.lf.a2a.v1.Part>}
 */
proto.lf.a2a.v1.Message.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.Part, 5));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.Part>} value
 * @return {!proto.lf.a2a.v1.Message} returns this
*/
proto.lf.a2a.v1.Message.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.lf.a2a.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Part}
 */
proto.lf.a2a.v1.Message.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.lf.a2a.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.Message.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.Message} returns this
*/
proto.lf.a2a.v1.Message.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Message.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string extensions = 7;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.Message.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * repeated string reference_task_ids = 8;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.Message.prototype.getReferenceTaskIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.setReferenceTaskIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.addReferenceTaskIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Message} returns this
 */
proto.lf.a2a.v1.Message.prototype.clearReferenceTaskIdsList = function() {
  return this.setReferenceTaskIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.Artifact.repeatedFields_ = [4,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.Artifact.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.Artifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.Artifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Artifact.toObject = function(includeInstance, msg) {
  var f, obj = {
artifactId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.lf.a2a.v1.Part.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
extensionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.Artifact}
 */
proto.lf.a2a.v1.Artifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.Artifact;
  return proto.lf.a2a.v1.Artifact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.Artifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.Artifact}
 */
proto.lf.a2a.v1.Artifact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setArtifactId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.Part;
      reader.readMessage(value,proto.lf.a2a.v1.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.Artifact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.Artifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.Artifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.Artifact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifactId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lf.a2a.v1.Part.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string artifact_id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.Artifact.prototype.getArtifactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.setArtifactId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.lf.a2a.v1.Artifact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.lf.a2a.v1.Artifact.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Part parts = 4;
 * @return {!Array<!proto.lf.a2a.v1.Part>}
 */
proto.lf.a2a.v1.Artifact.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.Part, 4));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.Part>} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
*/
proto.lf.a2a.v1.Artifact.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.lf.a2a.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Part}
 */
proto.lf.a2a.v1.Artifact.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.lf.a2a.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.Artifact.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
*/
proto.lf.a2a.v1.Artifact.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.Artifact.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string extensions = 6;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.Artifact.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.Artifact} returns this
 */
proto.lf.a2a.v1.Artifact.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.TaskStatusUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.TaskStatusUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: (f = msg.getStatus()) && proto.lf.a2a.v1.TaskStatus.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.TaskStatusUpdateEvent;
  return proto.lf.a2a.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.TaskStatusUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.TaskStatus;
      reader.readMessage(value,proto.lf.a2a.v1.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.TaskStatusUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.TaskStatusUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskStatus status = 3;
 * @return {?proto.lf.a2a.v1.TaskStatus}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.getStatus = function() {
  return /** @type{?proto.lf.a2a.v1.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.TaskStatus, 3));
};


/**
 * @param {?proto.lf.a2a.v1.TaskStatus|undefined} value
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
*/
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct metadata = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
*/
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskStatusUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskStatusUpdateEvent.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.TaskArtifactUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
artifact: (f = msg.getArtifact()) && proto.lf.a2a.v1.Artifact.toObject(includeInstance, f),
append: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
lastChunk: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.TaskArtifactUpdateEvent;
  return proto.lf.a2a.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.Artifact;
      reader.readMessage(value,proto.lf.a2a.v1.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLastChunk(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLastChunk();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Artifact artifact = 3;
 * @return {?proto.lf.a2a.v1.Artifact}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getArtifact = function() {
  return /** @type{?proto.lf.a2a.v1.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Artifact, 3));
};


/**
 * @param {?proto.lf.a2a.v1.Artifact|undefined} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
*/
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setArtifact = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.clearArtifact = function() {
  return this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool append = 4;
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool last_chunk = 5;
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getLastChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setLastChunk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
*/
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskArtifactUpdateEvent} returns this
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskArtifactUpdateEvent.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AuthenticationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AuthenticationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AuthenticationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
scheme: jspb.Message.getFieldWithDefault(msg, 1, ""),
credentials: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AuthenticationInfo}
 */
proto.lf.a2a.v1.AuthenticationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AuthenticationInfo;
  return proto.lf.a2a.v1.AuthenticationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AuthenticationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AuthenticationInfo}
 */
proto.lf.a2a.v1.AuthenticationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setScheme(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AuthenticationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AuthenticationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AuthenticationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheme();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCredentials();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string scheme = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.getScheme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AuthenticationInfo} returns this
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.setScheme = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string credentials = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.getCredentials = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AuthenticationInfo} returns this
 */
proto.lf.a2a.v1.AuthenticationInfo.prototype.setCredentials = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentInterface.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentInterface.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentInterface} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentInterface.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
protocolBinding: jspb.Message.getFieldWithDefault(msg, 2, ""),
tenant: jspb.Message.getFieldWithDefault(msg, 3, ""),
protocolVersion: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentInterface}
 */
proto.lf.a2a.v1.AgentInterface.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentInterface;
  return proto.lf.a2a.v1.AgentInterface.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentInterface} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentInterface}
 */
proto.lf.a2a.v1.AgentInterface.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProtocolBinding(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProtocolVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentInterface.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentInterface.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentInterface} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentInterface.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocolBinding();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProtocolVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentInterface.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentInterface} returns this
 */
proto.lf.a2a.v1.AgentInterface.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string protocol_binding = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentInterface.prototype.getProtocolBinding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentInterface} returns this
 */
proto.lf.a2a.v1.AgentInterface.prototype.setProtocolBinding = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tenant = 3;
 * @return {string}
 */
proto.lf.a2a.v1.AgentInterface.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentInterface} returns this
 */
proto.lf.a2a.v1.AgentInterface.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string protocol_version = 4;
 * @return {string}
 */
proto.lf.a2a.v1.AgentInterface.prototype.getProtocolVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentInterface} returns this
 */
proto.lf.a2a.v1.AgentInterface.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.AgentCard.repeatedFields_ = [3,9,10,11,12,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentCard.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCard.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
supportedInterfacesList: jspb.Message.toObjectList(msg.getSupportedInterfacesList(),
    proto.lf.a2a.v1.AgentInterface.toObject, includeInstance),
provider: (f = msg.getProvider()) && proto.lf.a2a.v1.AgentProvider.toObject(includeInstance, f),
version: jspb.Message.getFieldWithDefault(msg, 5, ""),
documentationUrl: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
capabilities: (f = msg.getCapabilities()) && proto.lf.a2a.v1.AgentCapabilities.toObject(includeInstance, f),
securitySchemesMap: (f = msg.getSecuritySchemesMap()) ? f.toObject(includeInstance, proto.lf.a2a.v1.SecurityScheme.toObject) : [],
securityRequirementsList: jspb.Message.toObjectList(msg.getSecurityRequirementsList(),
    proto.lf.a2a.v1.SecurityRequirement.toObject, includeInstance),
defaultInputModesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
defaultOutputModesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.lf.a2a.v1.AgentSkill.toObject, includeInstance),
signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    proto.lf.a2a.v1.AgentCardSignature.toObject, includeInstance),
iconUrl: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentCard}
 */
proto.lf.a2a.v1.AgentCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentCard;
  return proto.lf.a2a.v1.AgentCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentCard}
 */
proto.lf.a2a.v1.AgentCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.AgentInterface;
      reader.readMessage(value,proto.lf.a2a.v1.AgentInterface.deserializeBinaryFromReader);
      msg.addSupportedInterfaces(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.AgentProvider;
      reader.readMessage(value,proto.lf.a2a.v1.AgentProvider.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDocumentationUrl(value);
      break;
    case 7:
      var value = new proto.lf.a2a.v1.AgentCapabilities;
      reader.readMessage(value,proto.lf.a2a.v1.AgentCapabilities.deserializeBinaryFromReader);
      msg.setCapabilities(value);
      break;
    case 8:
      var value = msg.getSecuritySchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.lf.a2a.v1.SecurityScheme.deserializeBinaryFromReader, "", new proto.lf.a2a.v1.SecurityScheme());
         });
      break;
    case 9:
      var value = new proto.lf.a2a.v1.SecurityRequirement;
      reader.readMessage(value,proto.lf.a2a.v1.SecurityRequirement.deserializeBinaryFromReader);
      msg.addSecurityRequirements(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addDefaultInputModes(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addDefaultOutputModes(value);
      break;
    case 12:
      var value = new proto.lf.a2a.v1.AgentSkill;
      reader.readMessage(value,proto.lf.a2a.v1.AgentSkill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 13:
      var value = new proto.lf.a2a.v1.AgentCardSignature;
      reader.readMessage(value,proto.lf.a2a.v1.AgentCardSignature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIconUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupportedInterfacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.lf.a2a.v1.AgentInterface.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lf.a2a.v1.AgentProvider.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCapabilities();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.lf.a2a.v1.AgentCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getSecuritySchemesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSecuritySchemesMap(true),
    8,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.lf.a2a.v1.SecurityScheme.serializeBinaryToWriter);
  }
  f = message.getSecurityRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.lf.a2a.v1.SecurityRequirement.serializeBinaryToWriter
    );
  }
  f = message.getDefaultInputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getDefaultOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.lf.a2a.v1.AgentSkill.serializeBinaryToWriter
    );
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.lf.a2a.v1.AgentCardSignature.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCard.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AgentInterface supported_interfaces = 3;
 * @return {!Array<!proto.lf.a2a.v1.AgentInterface>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getSupportedInterfacesList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.AgentInterface>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.AgentInterface, 3));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.AgentInterface>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setSupportedInterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.lf.a2a.v1.AgentInterface=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentInterface}
 */
proto.lf.a2a.v1.AgentCard.prototype.addSupportedInterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.lf.a2a.v1.AgentInterface, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearSupportedInterfacesList = function() {
  return this.setSupportedInterfacesList([]);
};


/**
 * optional AgentProvider provider = 4;
 * @return {?proto.lf.a2a.v1.AgentProvider}
 */
proto.lf.a2a.v1.AgentCard.prototype.getProvider = function() {
  return /** @type{?proto.lf.a2a.v1.AgentProvider} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.AgentProvider, 4));
};


/**
 * @param {?proto.lf.a2a.v1.AgentProvider|undefined} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCard.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCard.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string documentation_url = 6;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCard.prototype.getDocumentationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setDocumentationUrl = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearDocumentationUrl = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCard.prototype.hasDocumentationUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AgentCapabilities capabilities = 7;
 * @return {?proto.lf.a2a.v1.AgentCapabilities}
 */
proto.lf.a2a.v1.AgentCard.prototype.getCapabilities = function() {
  return /** @type{?proto.lf.a2a.v1.AgentCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.AgentCapabilities, 7));
};


/**
 * @param {?proto.lf.a2a.v1.AgentCapabilities|undefined} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearCapabilities = function() {
  return this.setCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCard.prototype.hasCapabilities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, SecurityScheme> security_schemes = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.lf.a2a.v1.SecurityScheme>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getSecuritySchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.lf.a2a.v1.SecurityScheme>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.lf.a2a.v1.SecurityScheme));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearSecuritySchemesMap = function() {
  this.getSecuritySchemesMap().clear();
  return this;
};


/**
 * repeated SecurityRequirement security_requirements = 9;
 * @return {!Array<!proto.lf.a2a.v1.SecurityRequirement>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getSecurityRequirementsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.SecurityRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.SecurityRequirement, 9));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.SecurityRequirement>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setSecurityRequirementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.lf.a2a.v1.SecurityRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.SecurityRequirement}
 */
proto.lf.a2a.v1.AgentCard.prototype.addSecurityRequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.lf.a2a.v1.SecurityRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearSecurityRequirementsList = function() {
  return this.setSecurityRequirementsList([]);
};


/**
 * repeated string default_input_modes = 10;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getDefaultInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setDefaultInputModesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.addDefaultInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearDefaultInputModesList = function() {
  return this.setDefaultInputModesList([]);
};


/**
 * repeated string default_output_modes = 11;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getDefaultOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setDefaultOutputModesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.addDefaultOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearDefaultOutputModesList = function() {
  return this.setDefaultOutputModesList([]);
};


/**
 * repeated AgentSkill skills = 12;
 * @return {!Array<!proto.lf.a2a.v1.AgentSkill>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.AgentSkill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.AgentSkill, 12));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.AgentSkill>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.lf.a2a.v1.AgentSkill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentSkill}
 */
proto.lf.a2a.v1.AgentCard.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.lf.a2a.v1.AgentSkill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated AgentCardSignature signatures = 13;
 * @return {!Array<!proto.lf.a2a.v1.AgentCardSignature>}
 */
proto.lf.a2a.v1.AgentCard.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.AgentCardSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.AgentCardSignature, 13));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.AgentCardSignature>} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
*/
proto.lf.a2a.v1.AgentCard.prototype.setSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.lf.a2a.v1.AgentCardSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentCardSignature}
 */
proto.lf.a2a.v1.AgentCard.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.lf.a2a.v1.AgentCardSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};


/**
 * optional string icon_url = 14;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCard.prototype.getIconUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.setIconUrl = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCard} returns this
 */
proto.lf.a2a.v1.AgentCard.prototype.clearIconUrl = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCard.prototype.hasIconUrl = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
organization: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentProvider}
 */
proto.lf.a2a.v1.AgentProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentProvider;
  return proto.lf.a2a.v1.AgentProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentProvider}
 */
proto.lf.a2a.v1.AgentProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrganization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentProvider.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentProvider} returns this
 */
proto.lf.a2a.v1.AgentProvider.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentProvider.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentProvider} returns this
 */
proto.lf.a2a.v1.AgentProvider.prototype.setOrganization = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.AgentCapabilities.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
streaming: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
pushNotifications: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
extensionsList: jspb.Message.toObjectList(msg.getExtensionsList(),
    proto.lf.a2a.v1.AgentExtension.toObject, includeInstance),
extendedAgentCard: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentCapabilities}
 */
proto.lf.a2a.v1.AgentCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentCapabilities;
  return proto.lf.a2a.v1.AgentCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentCapabilities}
 */
proto.lf.a2a.v1.AgentCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStreaming(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPushNotifications(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.AgentExtension;
      reader.readMessage(value,proto.lf.a2a.v1.AgentExtension.deserializeBinaryFromReader);
      msg.addExtensions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExtendedAgentCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.lf.a2a.v1.AgentExtension.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool streaming = 1;
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.getStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.setStreaming = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.clearStreaming = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.hasStreaming = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool push_notifications = 2;
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.getPushNotifications = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.setPushNotifications = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.clearPushNotifications = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.hasPushNotifications = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AgentExtension extensions = 3;
 * @return {!Array<!proto.lf.a2a.v1.AgentExtension>}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.getExtensionsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.AgentExtension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.AgentExtension, 3));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.AgentExtension>} value
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
*/
proto.lf.a2a.v1.AgentCapabilities.prototype.setExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.lf.a2a.v1.AgentExtension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentExtension}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.addExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.lf.a2a.v1.AgentExtension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * optional bool extended_agent_card = 4;
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.getExtendedAgentCard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.setExtendedAgentCard = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCapabilities} returns this
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.clearExtendedAgentCard = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCapabilities.prototype.hasExtendedAgentCard = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
required: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentExtension}
 */
proto.lf.a2a.v1.AgentExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentExtension;
  return proto.lf.a2a.v1.AgentExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentExtension}
 */
proto.lf.a2a.v1.AgentExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentExtension.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentExtension} returns this
 */
proto.lf.a2a.v1.AgentExtension.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentExtension.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentExtension} returns this
 */
proto.lf.a2a.v1.AgentExtension.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool required = 3;
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentExtension.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.AgentExtension} returns this
 */
proto.lf.a2a.v1.AgentExtension.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Struct params = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.AgentExtension.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.AgentExtension} returns this
*/
proto.lf.a2a.v1.AgentExtension.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentExtension} returns this
 */
proto.lf.a2a.v1.AgentExtension.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentExtension.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.AgentSkill.repeatedFields_ = [4,5,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentSkill.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentSkill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentSkill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentSkill.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
examplesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
inputModesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
outputModesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
securityRequirementsList: jspb.Message.toObjectList(msg.getSecurityRequirementsList(),
    proto.lf.a2a.v1.SecurityRequirement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentSkill}
 */
proto.lf.a2a.v1.AgentSkill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentSkill;
  return proto.lf.a2a.v1.AgentSkill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentSkill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentSkill}
 */
proto.lf.a2a.v1.AgentSkill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExamples(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addInputModes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addOutputModes(value);
      break;
    case 8:
      var value = new proto.lf.a2a.v1.SecurityRequirement;
      reader.readMessage(value,proto.lf.a2a.v1.SecurityRequirement.deserializeBinaryFromReader);
      msg.addSecurityRequirements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentSkill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentSkill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentSkill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentSkill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getExamplesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getInputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSecurityRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.lf.a2a.v1.SecurityRequirement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string examples = 5;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getExamplesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setExamplesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.addExamples = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.clearExamplesList = function() {
  return this.setExamplesList([]);
};


/**
 * repeated string input_modes = 6;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setInputModesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.addInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.clearInputModesList = function() {
  return this.setInputModesList([]);
};


/**
 * repeated string output_modes = 7;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.setOutputModesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.addOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.clearOutputModesList = function() {
  return this.setOutputModesList([]);
};


/**
 * repeated SecurityRequirement security_requirements = 8;
 * @return {!Array<!proto.lf.a2a.v1.SecurityRequirement>}
 */
proto.lf.a2a.v1.AgentSkill.prototype.getSecurityRequirementsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.SecurityRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.SecurityRequirement, 8));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.SecurityRequirement>} value
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
*/
proto.lf.a2a.v1.AgentSkill.prototype.setSecurityRequirementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.lf.a2a.v1.SecurityRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.SecurityRequirement}
 */
proto.lf.a2a.v1.AgentSkill.prototype.addSecurityRequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.lf.a2a.v1.SecurityRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.AgentSkill} returns this
 */
proto.lf.a2a.v1.AgentSkill.prototype.clearSecurityRequirementsList = function() {
  return this.setSecurityRequirementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AgentCardSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AgentCardSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCardSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
pb_protected: jspb.Message.getFieldWithDefault(msg, 1, ""),
signature: jspb.Message.getFieldWithDefault(msg, 2, ""),
header: (f = msg.getHeader()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AgentCardSignature}
 */
proto.lf.a2a.v1.AgentCardSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AgentCardSignature;
  return proto.lf.a2a.v1.AgentCardSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AgentCardSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AgentCardSignature}
 */
proto.lf.a2a.v1.AgentCardSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProtected(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSignature(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AgentCardSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AgentCardSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AgentCardSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtected();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string protected = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.getProtected = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCardSignature} returns this
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.setProtected = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AgentCardSignature} returns this
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct header = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.getHeader = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.AgentCardSignature} returns this
*/
proto.lf.a2a.v1.AgentCardSignature.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.AgentCardSignature} returns this
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.AgentCardSignature.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.TaskPushNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.TaskPushNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 3, ""),
url: jspb.Message.getFieldWithDefault(msg, 4, ""),
token: jspb.Message.getFieldWithDefault(msg, 5, ""),
authentication: (f = msg.getAuthentication()) && proto.lf.a2a.v1.AuthenticationInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.TaskPushNotificationConfig;
  return proto.lf.a2a.v1.TaskPushNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.TaskPushNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setToken(value);
      break;
    case 6:
      var value = new proto.lf.a2a.v1.AuthenticationInfo;
      reader.readMessage(value,proto.lf.a2a.v1.AuthenticationInfo.deserializeBinaryFromReader);
      msg.setAuthentication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.TaskPushNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.TaskPushNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAuthentication();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.lf.a2a.v1.AuthenticationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_id = 3;
 * @return {string}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional AuthenticationInfo authentication = 6;
 * @return {?proto.lf.a2a.v1.AuthenticationInfo}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.getAuthentication = function() {
  return /** @type{?proto.lf.a2a.v1.AuthenticationInfo} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.AuthenticationInfo, 6));
};


/**
 * @param {?proto.lf.a2a.v1.AuthenticationInfo|undefined} value
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
*/
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.setAuthentication = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig} returns this
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.clearAuthentication = function() {
  return this.setAuthentication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.TaskPushNotificationConfig.prototype.hasAuthentication = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.StringList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.StringList.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.StringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.StringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.StringList.toObject = function(includeInstance, msg) {
  var f, obj = {
listList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.StringList}
 */
proto.lf.a2a.v1.StringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.StringList;
  return proto.lf.a2a.v1.StringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.StringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.StringList}
 */
proto.lf.a2a.v1.StringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.StringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.StringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.StringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.StringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string list = 1;
 * @return {!Array<string>}
 */
proto.lf.a2a.v1.StringList.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lf.a2a.v1.StringList} returns this
 */
proto.lf.a2a.v1.StringList.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.StringList} returns this
 */
proto.lf.a2a.v1.StringList.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.StringList} returns this
 */
proto.lf.a2a.v1.StringList.prototype.clearListList = function() {
  return this.setListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SecurityRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SecurityRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SecurityRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SecurityRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
schemesMap: (f = msg.getSchemesMap()) ? f.toObject(includeInstance, proto.lf.a2a.v1.StringList.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SecurityRequirement}
 */
proto.lf.a2a.v1.SecurityRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SecurityRequirement;
  return proto.lf.a2a.v1.SecurityRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SecurityRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SecurityRequirement}
 */
proto.lf.a2a.v1.SecurityRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.lf.a2a.v1.StringList.deserializeBinaryFromReader, "", new proto.lf.a2a.v1.StringList());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SecurityRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SecurityRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SecurityRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SecurityRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSchemesMap(true),
    1,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.lf.a2a.v1.StringList.serializeBinaryToWriter);
  }
};


/**
 * map<string, StringList> schemes = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.lf.a2a.v1.StringList>}
 */
proto.lf.a2a.v1.SecurityRequirement.prototype.getSchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.lf.a2a.v1.StringList>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.lf.a2a.v1.StringList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.SecurityRequirement} returns this
 */
proto.lf.a2a.v1.SecurityRequirement.prototype.clearSchemesMap = function() {
  this.getSchemesMap().clear();
  return this;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lf.a2a.v1.SecurityScheme.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.lf.a2a.v1.SecurityScheme.SchemeCase = {
  SCHEME_NOT_SET: 0,
  API_KEY_SECURITY_SCHEME: 1,
  HTTP_AUTH_SECURITY_SCHEME: 2,
  OAUTH2_SECURITY_SCHEME: 3,
  OPEN_ID_CONNECT_SECURITY_SCHEME: 4,
  MTLS_SECURITY_SCHEME: 5
};

/**
 * @return {proto.lf.a2a.v1.SecurityScheme.SchemeCase}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getSchemeCase = function() {
  return /** @type {proto.lf.a2a.v1.SecurityScheme.SchemeCase} */(jspb.Message.computeOneofCase(this, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKeySecurityScheme: (f = msg.getApiKeySecurityScheme()) && proto.lf.a2a.v1.APIKeySecurityScheme.toObject(includeInstance, f),
httpAuthSecurityScheme: (f = msg.getHttpAuthSecurityScheme()) && proto.lf.a2a.v1.HTTPAuthSecurityScheme.toObject(includeInstance, f),
oauth2SecurityScheme: (f = msg.getOauth2SecurityScheme()) && proto.lf.a2a.v1.OAuth2SecurityScheme.toObject(includeInstance, f),
openIdConnectSecurityScheme: (f = msg.getOpenIdConnectSecurityScheme()) && proto.lf.a2a.v1.OpenIdConnectSecurityScheme.toObject(includeInstance, f),
mtlsSecurityScheme: (f = msg.getMtlsSecurityScheme()) && proto.lf.a2a.v1.MutualTlsSecurityScheme.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SecurityScheme;
  return proto.lf.a2a.v1.SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.APIKeySecurityScheme;
      reader.readMessage(value,proto.lf.a2a.v1.APIKeySecurityScheme.deserializeBinaryFromReader);
      msg.setApiKeySecurityScheme(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.HTTPAuthSecurityScheme;
      reader.readMessage(value,proto.lf.a2a.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader);
      msg.setHttpAuthSecurityScheme(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.OAuth2SecurityScheme;
      reader.readMessage(value,proto.lf.a2a.v1.OAuth2SecurityScheme.deserializeBinaryFromReader);
      msg.setOauth2SecurityScheme(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.OpenIdConnectSecurityScheme;
      reader.readMessage(value,proto.lf.a2a.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader);
      msg.setOpenIdConnectSecurityScheme(value);
      break;
    case 5:
      var value = new proto.lf.a2a.v1.MutualTlsSecurityScheme;
      reader.readMessage(value,proto.lf.a2a.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader);
      msg.setMtlsSecurityScheme(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeySecurityScheme();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lf.a2a.v1.APIKeySecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getHttpAuthSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOauth2SecurityScheme();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.OAuth2SecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOpenIdConnectSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lf.a2a.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getMtlsSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.lf.a2a.v1.MutualTlsSecurityScheme.serializeBinaryToWriter
    );
  }
};


/**
 * optional APIKeySecurityScheme api_key_security_scheme = 1;
 * @return {?proto.lf.a2a.v1.APIKeySecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getApiKeySecurityScheme = function() {
  return /** @type{?proto.lf.a2a.v1.APIKeySecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.APIKeySecurityScheme, 1));
};


/**
 * @param {?proto.lf.a2a.v1.APIKeySecurityScheme|undefined} value
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
*/
proto.lf.a2a.v1.SecurityScheme.prototype.setApiKeySecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
 */
proto.lf.a2a.v1.SecurityScheme.prototype.clearApiKeySecurityScheme = function() {
  return this.setApiKeySecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.hasApiKeySecurityScheme = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HTTPAuthSecurityScheme http_auth_security_scheme = 2;
 * @return {?proto.lf.a2a.v1.HTTPAuthSecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getHttpAuthSecurityScheme = function() {
  return /** @type{?proto.lf.a2a.v1.HTTPAuthSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.HTTPAuthSecurityScheme, 2));
};


/**
 * @param {?proto.lf.a2a.v1.HTTPAuthSecurityScheme|undefined} value
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
*/
proto.lf.a2a.v1.SecurityScheme.prototype.setHttpAuthSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
 */
proto.lf.a2a.v1.SecurityScheme.prototype.clearHttpAuthSecurityScheme = function() {
  return this.setHttpAuthSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.hasHttpAuthSecurityScheme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OAuth2SecurityScheme oauth2_security_scheme = 3;
 * @return {?proto.lf.a2a.v1.OAuth2SecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getOauth2SecurityScheme = function() {
  return /** @type{?proto.lf.a2a.v1.OAuth2SecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.OAuth2SecurityScheme, 3));
};


/**
 * @param {?proto.lf.a2a.v1.OAuth2SecurityScheme|undefined} value
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
*/
proto.lf.a2a.v1.SecurityScheme.prototype.setOauth2SecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
 */
proto.lf.a2a.v1.SecurityScheme.prototype.clearOauth2SecurityScheme = function() {
  return this.setOauth2SecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.hasOauth2SecurityScheme = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OpenIdConnectSecurityScheme open_id_connect_security_scheme = 4;
 * @return {?proto.lf.a2a.v1.OpenIdConnectSecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getOpenIdConnectSecurityScheme = function() {
  return /** @type{?proto.lf.a2a.v1.OpenIdConnectSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.OpenIdConnectSecurityScheme, 4));
};


/**
 * @param {?proto.lf.a2a.v1.OpenIdConnectSecurityScheme|undefined} value
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
*/
proto.lf.a2a.v1.SecurityScheme.prototype.setOpenIdConnectSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
 */
proto.lf.a2a.v1.SecurityScheme.prototype.clearOpenIdConnectSecurityScheme = function() {
  return this.setOpenIdConnectSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.hasOpenIdConnectSecurityScheme = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MutualTlsSecurityScheme mtls_security_scheme = 5;
 * @return {?proto.lf.a2a.v1.MutualTlsSecurityScheme}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.getMtlsSecurityScheme = function() {
  return /** @type{?proto.lf.a2a.v1.MutualTlsSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.MutualTlsSecurityScheme, 5));
};


/**
 * @param {?proto.lf.a2a.v1.MutualTlsSecurityScheme|undefined} value
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
*/
proto.lf.a2a.v1.SecurityScheme.prototype.setMtlsSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.lf.a2a.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SecurityScheme} returns this
 */
proto.lf.a2a.v1.SecurityScheme.prototype.clearMtlsSecurityScheme = function() {
  return this.setMtlsSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SecurityScheme.prototype.hasMtlsSecurityScheme = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.APIKeySecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.APIKeySecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.APIKeySecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
location: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.APIKeySecurityScheme}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.APIKeySecurityScheme;
  return proto.lf.a2a.v1.APIKeySecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.APIKeySecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.APIKeySecurityScheme}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.APIKeySecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.APIKeySecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.APIKeySecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.APIKeySecurityScheme} returns this
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.APIKeySecurityScheme} returns this
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.APIKeySecurityScheme} returns this
 */
proto.lf.a2a.v1.APIKeySecurityScheme.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.HTTPAuthSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
scheme: jspb.Message.getFieldWithDefault(msg, 2, ""),
bearerFormat: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.HTTPAuthSecurityScheme}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.HTTPAuthSecurityScheme;
  return proto.lf.a2a.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.HTTPAuthSecurityScheme}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setScheme(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBearerFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScheme();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBearerFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} returns this
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scheme = 2;
 * @return {string}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.getScheme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} returns this
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.setScheme = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bearer_format = 3;
 * @return {string}
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.getBearerFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.HTTPAuthSecurityScheme} returns this
 */
proto.lf.a2a.v1.HTTPAuthSecurityScheme.prototype.setBearerFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.OAuth2SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.OAuth2SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
flows: (f = msg.getFlows()) && proto.lf.a2a.v1.OAuthFlows.toObject(includeInstance, f),
oauth2MetadataUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.OAuth2SecurityScheme;
  return proto.lf.a2a.v1.OAuth2SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.OAuth2SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.OAuthFlows;
      reader.readMessage(value,proto.lf.a2a.v1.OAuthFlows.deserializeBinaryFromReader);
      msg.setFlows(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauth2MetadataUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.OAuth2SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.OAuth2SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlows();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.OAuthFlows.serializeBinaryToWriter
    );
  }
  f = message.getOauth2MetadataUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme} returns this
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OAuthFlows flows = 2;
 * @return {?proto.lf.a2a.v1.OAuthFlows}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.getFlows = function() {
  return /** @type{?proto.lf.a2a.v1.OAuthFlows} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.OAuthFlows, 2));
};


/**
 * @param {?proto.lf.a2a.v1.OAuthFlows|undefined} value
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme} returns this
*/
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.setFlows = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme} returns this
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.clearFlows = function() {
  return this.setFlows(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.hasFlows = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string oauth2_metadata_url = 3;
 * @return {string}
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.getOauth2MetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.OAuth2SecurityScheme} returns this
 */
proto.lf.a2a.v1.OAuth2SecurityScheme.prototype.setOauth2MetadataUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.OpenIdConnectSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
openIdConnectUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.OpenIdConnectSecurityScheme;
  return proto.lf.a2a.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOpenIdConnectUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenIdConnectUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme} returns this
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string open_id_connect_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.getOpenIdConnectUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.OpenIdConnectSecurityScheme} returns this
 */
proto.lf.a2a.v1.OpenIdConnectSecurityScheme.prototype.setOpenIdConnectUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.MutualTlsSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.MutualTlsSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.MutualTlsSecurityScheme}
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.MutualTlsSecurityScheme;
  return proto.lf.a2a.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.MutualTlsSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.MutualTlsSecurityScheme}
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.MutualTlsSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.MutualTlsSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.MutualTlsSecurityScheme} returns this
 */
proto.lf.a2a.v1.MutualTlsSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lf.a2a.v1.OAuthFlows.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.lf.a2a.v1.OAuthFlows.FlowCase = {
  FLOW_NOT_SET: 0,
  AUTHORIZATION_CODE: 1,
  CLIENT_CREDENTIALS: 2,
  IMPLICIT: 3,
  PASSWORD: 4,
  DEVICE_CODE: 5
};

/**
 * @return {proto.lf.a2a.v1.OAuthFlows.FlowCase}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getFlowCase = function() {
  return /** @type {proto.lf.a2a.v1.OAuthFlows.FlowCase} */(jspb.Message.computeOneofCase(this, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.OAuthFlows.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.OAuthFlows} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OAuthFlows.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationCode: (f = msg.getAuthorizationCode()) && proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.toObject(includeInstance, f),
clientCredentials: (f = msg.getClientCredentials()) && proto.lf.a2a.v1.ClientCredentialsOAuthFlow.toObject(includeInstance, f),
implicit: (f = msg.getImplicit()) && proto.lf.a2a.v1.ImplicitOAuthFlow.toObject(includeInstance, f),
password: (f = msg.getPassword()) && proto.lf.a2a.v1.PasswordOAuthFlow.toObject(includeInstance, f),
deviceCode: (f = msg.getDeviceCode()) && proto.lf.a2a.v1.DeviceCodeOAuthFlow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.OAuthFlows}
 */
proto.lf.a2a.v1.OAuthFlows.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.OAuthFlows;
  return proto.lf.a2a.v1.OAuthFlows.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.OAuthFlows} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.OAuthFlows}
 */
proto.lf.a2a.v1.OAuthFlows.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.AuthorizationCodeOAuthFlow;
      reader.readMessage(value,proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader);
      msg.setAuthorizationCode(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.ClientCredentialsOAuthFlow;
      reader.readMessage(value,proto.lf.a2a.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader);
      msg.setClientCredentials(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.ImplicitOAuthFlow;
      reader.readMessage(value,proto.lf.a2a.v1.ImplicitOAuthFlow.deserializeBinaryFromReader);
      msg.setImplicit(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.PasswordOAuthFlow;
      reader.readMessage(value,proto.lf.a2a.v1.PasswordOAuthFlow.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 5:
      var value = new proto.lf.a2a.v1.DeviceCodeOAuthFlow;
      reader.readMessage(value,proto.lf.a2a.v1.DeviceCodeOAuthFlow.deserializeBinaryFromReader);
      msg.setDeviceCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.OAuthFlows.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.OAuthFlows} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.OAuthFlows.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationCode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getClientCredentials();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getImplicit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.ImplicitOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lf.a2a.v1.PasswordOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getDeviceCode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.lf.a2a.v1.DeviceCodeOAuthFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthorizationCodeOAuthFlow authorization_code = 1;
 * @return {?proto.lf.a2a.v1.AuthorizationCodeOAuthFlow}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getAuthorizationCode = function() {
  return /** @type{?proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.AuthorizationCodeOAuthFlow, 1));
};


/**
 * @param {?proto.lf.a2a.v1.AuthorizationCodeOAuthFlow|undefined} value
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
*/
proto.lf.a2a.v1.OAuthFlows.prototype.setAuthorizationCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
 */
proto.lf.a2a.v1.OAuthFlows.prototype.clearAuthorizationCode = function() {
  return this.setAuthorizationCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.hasAuthorizationCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientCredentialsOAuthFlow client_credentials = 2;
 * @return {?proto.lf.a2a.v1.ClientCredentialsOAuthFlow}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getClientCredentials = function() {
  return /** @type{?proto.lf.a2a.v1.ClientCredentialsOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.ClientCredentialsOAuthFlow, 2));
};


/**
 * @param {?proto.lf.a2a.v1.ClientCredentialsOAuthFlow|undefined} value
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
*/
proto.lf.a2a.v1.OAuthFlows.prototype.setClientCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
 */
proto.lf.a2a.v1.OAuthFlows.prototype.clearClientCredentials = function() {
  return this.setClientCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.hasClientCredentials = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImplicitOAuthFlow implicit = 3;
 * @return {?proto.lf.a2a.v1.ImplicitOAuthFlow}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getImplicit = function() {
  return /** @type{?proto.lf.a2a.v1.ImplicitOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.ImplicitOAuthFlow, 3));
};


/**
 * @param {?proto.lf.a2a.v1.ImplicitOAuthFlow|undefined} value
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
*/
proto.lf.a2a.v1.OAuthFlows.prototype.setImplicit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
 */
proto.lf.a2a.v1.OAuthFlows.prototype.clearImplicit = function() {
  return this.setImplicit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.hasImplicit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PasswordOAuthFlow password = 4;
 * @return {?proto.lf.a2a.v1.PasswordOAuthFlow}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getPassword = function() {
  return /** @type{?proto.lf.a2a.v1.PasswordOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.PasswordOAuthFlow, 4));
};


/**
 * @param {?proto.lf.a2a.v1.PasswordOAuthFlow|undefined} value
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
*/
proto.lf.a2a.v1.OAuthFlows.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
 */
proto.lf.a2a.v1.OAuthFlows.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DeviceCodeOAuthFlow device_code = 5;
 * @return {?proto.lf.a2a.v1.DeviceCodeOAuthFlow}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.getDeviceCode = function() {
  return /** @type{?proto.lf.a2a.v1.DeviceCodeOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.DeviceCodeOAuthFlow, 5));
};


/**
 * @param {?proto.lf.a2a.v1.DeviceCodeOAuthFlow|undefined} value
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
*/
proto.lf.a2a.v1.OAuthFlows.prototype.setDeviceCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.lf.a2a.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.OAuthFlows} returns this
 */
proto.lf.a2a.v1.OAuthFlows.prototype.clearDeviceCode = function() {
  return this.setDeviceCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.OAuthFlows.prototype.hasDeviceCode = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
tokenUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : [],
pkceRequired: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.AuthorizationCodeOAuthFlow;
  return proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthorizationUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 4:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPkceRequired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    4,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPkceRequired();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string authorization_url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string refresh_url = 3;
 * @return {string}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> scopes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
};


/**
 * optional bool pkce_required = 5;
 * @return {boolean}
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.getPkceRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.AuthorizationCodeOAuthFlow.prototype.setPkceRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ClientCredentialsOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ClientCredentialsOAuthFlow;
  return proto.lf.a2a.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string token_url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.lf.a2a.v1.ClientCredentialsOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ImplicitOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ImplicitOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ImplicitOAuthFlow}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ImplicitOAuthFlow;
  return proto.lf.a2a.v1.ImplicitOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ImplicitOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ImplicitOAuthFlow}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthorizationUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ImplicitOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ImplicitOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string authorization_url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ImplicitOAuthFlow} returns this
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ImplicitOAuthFlow} returns this
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.ImplicitOAuthFlow} returns this
 */
proto.lf.a2a.v1.ImplicitOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.PasswordOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.PasswordOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.PasswordOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.PasswordOAuthFlow}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.PasswordOAuthFlow;
  return proto.lf.a2a.v1.PasswordOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.PasswordOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.PasswordOAuthFlow}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.PasswordOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.PasswordOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.PasswordOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string token_url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.PasswordOAuthFlow} returns this
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.PasswordOAuthFlow} returns this
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.PasswordOAuthFlow} returns this
 */
proto.lf.a2a.v1.PasswordOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.DeviceCodeOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
deviceAuthorizationUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
tokenUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.DeviceCodeOAuthFlow;
  return proto.lf.a2a.v1.DeviceCodeOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDeviceAuthorizationUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 4:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.DeviceCodeOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    4,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string device_authorization_url = 1;
 * @return {string}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.getDeviceAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.setDeviceAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_url = 2;
 * @return {string}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string refresh_url = 3;
 * @return {string}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> scopes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lf.a2a.v1.DeviceCodeOAuthFlow} returns this
 */
proto.lf.a2a.v1.DeviceCodeOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
message: (f = msg.getMessage()) && proto.lf.a2a.v1.Message.toObject(includeInstance, f),
configuration: (f = msg.getConfiguration()) && proto.lf.a2a.v1.SendMessageConfiguration.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SendMessageRequest}
 */
proto.lf.a2a.v1.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SendMessageRequest;
  return proto.lf.a2a.v1.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SendMessageRequest}
 */
proto.lf.a2a.v1.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.Message;
      reader.readMessage(value,proto.lf.a2a.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.SendMessageConfiguration;
      reader.readMessage(value,proto.lf.a2a.v1.SendMessageConfiguration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.SendMessageConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Message message = 2;
 * @return {?proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.getMessage = function() {
  return /** @type{?proto.lf.a2a.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Message, 2));
};


/**
 * @param {?proto.lf.a2a.v1.Message|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
*/
proto.lf.a2a.v1.SendMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SendMessageConfiguration configuration = 3;
 * @return {?proto.lf.a2a.v1.SendMessageConfiguration}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.lf.a2a.v1.SendMessageConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.SendMessageConfiguration, 3));
};


/**
 * @param {?proto.lf.a2a.v1.SendMessageConfiguration|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
*/
proto.lf.a2a.v1.SendMessageRequest.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct metadata = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
*/
proto.lf.a2a.v1.SendMessageRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageRequest} returns this
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.GetTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.GetTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
historyLength: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.GetTaskRequest}
 */
proto.lf.a2a.v1.GetTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.GetTaskRequest;
  return proto.lf.a2a.v1.GetTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.GetTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.GetTaskRequest}
 */
proto.lf.a2a.v1.GetTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.GetTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.GetTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetTaskRequest} returns this
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetTaskRequest} returns this
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 history_length = 3;
 * @return {number}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.GetTaskRequest} returns this
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.setHistoryLength = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.GetTaskRequest} returns this
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.clearHistoryLength = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.GetTaskRequest.prototype.hasHistoryLength = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ListTasksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ListTasksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTasksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: jspb.Message.getFieldWithDefault(msg, 3, 0),
pageSize: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
pageToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
historyLength: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
statusTimestampAfter: (f = msg.getStatusTimestampAfter()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
includeArtifacts: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ListTasksRequest}
 */
proto.lf.a2a.v1.ListTasksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ListTasksRequest;
  return proto.lf.a2a.v1.ListTasksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ListTasksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ListTasksRequest}
 */
proto.lf.a2a.v1.ListTasksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = /** @type {!proto.lf.a2a.v1.TaskState} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPageToken(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStatusTimestampAfter(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeArtifacts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ListTasksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ListTasksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTasksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getStatusTimestampAfter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskState status = 3;
 * @return {!proto.lf.a2a.v1.TaskState}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getStatus = function() {
  return /** @type {!proto.lf.a2a.v1.TaskState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.lf.a2a.v1.TaskState} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.clearPageSize = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.hasPageSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 history_length = 6;
 * @return {number}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setHistoryLength = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.clearHistoryLength = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.hasHistoryLength = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp status_timestamp_after = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getStatusTimestampAfter = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
*/
proto.lf.a2a.v1.ListTasksRequest.prototype.setStatusTimestampAfter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.clearStatusTimestampAfter = function() {
  return this.setStatusTimestampAfter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.hasStatusTimestampAfter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool include_artifacts = 8;
 * @return {boolean}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.getIncludeArtifacts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.setIncludeArtifacts = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lf.a2a.v1.ListTasksRequest} returns this
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.clearIncludeArtifacts = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.ListTasksRequest.prototype.hasIncludeArtifacts = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.ListTasksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ListTasksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ListTasksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTasksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.lf.a2a.v1.Task.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
totalSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ListTasksResponse}
 */
proto.lf.a2a.v1.ListTasksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ListTasksResponse;
  return proto.lf.a2a.v1.ListTasksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ListTasksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ListTasksResponse}
 */
proto.lf.a2a.v1.ListTasksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.Task;
      reader.readMessage(value,proto.lf.a2a.v1.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNextPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ListTasksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ListTasksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTasksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lf.a2a.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated Task tasks = 1;
 * @return {!Array<!proto.lf.a2a.v1.Task>}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.Task, 1));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.Task>} value
 * @return {!proto.lf.a2a.v1.ListTasksResponse} returns this
*/
proto.lf.a2a.v1.ListTasksResponse.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lf.a2a.v1.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.Task}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lf.a2a.v1.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.ListTasksResponse} returns this
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTasksResponse} returns this
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.ListTasksResponse} returns this
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 total_size = 4;
 * @return {number}
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.ListTasksResponse} returns this
 */
proto.lf.a2a.v1.ListTasksResponse.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.CancelTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.CancelTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.CancelTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.CancelTaskRequest}
 */
proto.lf.a2a.v1.CancelTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.CancelTaskRequest;
  return proto.lf.a2a.v1.CancelTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.CancelTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.CancelTaskRequest}
 */
proto.lf.a2a.v1.CancelTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.CancelTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.CancelTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.CancelTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.CancelTaskRequest} returns this
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.CancelTaskRequest} returns this
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct metadata = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.lf.a2a.v1.CancelTaskRequest} returns this
*/
proto.lf.a2a.v1.CancelTaskRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.CancelTaskRequest} returns this
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.CancelTaskRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 2, ""),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest;
  return proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string task_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.GetTaskPushNotificationConfigRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 2, ""),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest;
  return proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string task_id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest} returns this
 */
proto.lf.a2a.v1.DeleteTaskPushNotificationConfigRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SubscribeToTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SubscribeToTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SubscribeToTaskRequest}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SubscribeToTaskRequest;
  return proto.lf.a2a.v1.SubscribeToTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SubscribeToTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SubscribeToTaskRequest}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SubscribeToTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SubscribeToTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.SubscribeToTaskRequest} returns this
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.SubscribeToTaskRequest} returns this
 */
proto.lf.a2a.v1.SubscribeToTaskRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 4, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest;
  return proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string tenant = 4;
 * @return {string}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.GetExtendedAgentCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.GetExtendedAgentCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tenant: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.GetExtendedAgentCardRequest}
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.GetExtendedAgentCardRequest;
  return proto.lf.a2a.v1.GetExtendedAgentCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.GetExtendedAgentCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.GetExtendedAgentCardRequest}
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTenant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.GetExtendedAgentCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.GetExtendedAgentCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.GetExtendedAgentCardRequest} returns this
 */
proto.lf.a2a.v1.GetExtendedAgentCardRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lf.a2a.v1.SendMessageResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.lf.a2a.v1.SendMessageResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MESSAGE: 2
};

/**
 * @return {proto.lf.a2a.v1.SendMessageResponse.PayloadCase}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.lf.a2a.v1.SendMessageResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.lf.a2a.v1.SendMessageResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.lf.a2a.v1.Task.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.lf.a2a.v1.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.SendMessageResponse}
 */
proto.lf.a2a.v1.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.SendMessageResponse;
  return proto.lf.a2a.v1.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.SendMessageResponse}
 */
proto.lf.a2a.v1.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.Task;
      reader.readMessage(value,proto.lf.a2a.v1.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.Message;
      reader.readMessage(value,proto.lf.a2a.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lf.a2a.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.lf.a2a.v1.Task}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.getTask = function() {
  return /** @type{?proto.lf.a2a.v1.Task} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Task, 1));
};


/**
 * @param {?proto.lf.a2a.v1.Task|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageResponse} returns this
*/
proto.lf.a2a.v1.SendMessageResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.lf.a2a.v1.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageResponse} returns this
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.getMessage = function() {
  return /** @type{?proto.lf.a2a.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Message, 2));
};


/**
 * @param {?proto.lf.a2a.v1.Message|undefined} value
 * @return {!proto.lf.a2a.v1.SendMessageResponse} returns this
*/
proto.lf.a2a.v1.SendMessageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.lf.a2a.v1.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.SendMessageResponse} returns this
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.SendMessageResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lf.a2a.v1.StreamResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.lf.a2a.v1.StreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MESSAGE: 2,
  STATUS_UPDATE: 3,
  ARTIFACT_UPDATE: 4
};

/**
 * @return {proto.lf.a2a.v1.StreamResponse.PayloadCase}
 */
proto.lf.a2a.v1.StreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.lf.a2a.v1.StreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.lf.a2a.v1.StreamResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.StreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.StreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.StreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.StreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.lf.a2a.v1.Task.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.lf.a2a.v1.Message.toObject(includeInstance, f),
statusUpdate: (f = msg.getStatusUpdate()) && proto.lf.a2a.v1.TaskStatusUpdateEvent.toObject(includeInstance, f),
artifactUpdate: (f = msg.getArtifactUpdate()) && proto.lf.a2a.v1.TaskArtifactUpdateEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.StreamResponse}
 */
proto.lf.a2a.v1.StreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.StreamResponse;
  return proto.lf.a2a.v1.StreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.StreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.StreamResponse}
 */
proto.lf.a2a.v1.StreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.Task;
      reader.readMessage(value,proto.lf.a2a.v1.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.lf.a2a.v1.Message;
      reader.readMessage(value,proto.lf.a2a.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.lf.a2a.v1.TaskStatusUpdateEvent;
      reader.readMessage(value,proto.lf.a2a.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader);
      msg.setStatusUpdate(value);
      break;
    case 4:
      var value = new proto.lf.a2a.v1.TaskArtifactUpdateEvent;
      reader.readMessage(value,proto.lf.a2a.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader);
      msg.setArtifactUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.StreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.StreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.StreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.StreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lf.a2a.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lf.a2a.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getStatusUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lf.a2a.v1.TaskStatusUpdateEvent.serializeBinaryToWriter
    );
  }
  f = message.getArtifactUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lf.a2a.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.lf.a2a.v1.Task}
 */
proto.lf.a2a.v1.StreamResponse.prototype.getTask = function() {
  return /** @type{?proto.lf.a2a.v1.Task} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Task, 1));
};


/**
 * @param {?proto.lf.a2a.v1.Task|undefined} value
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
*/
proto.lf.a2a.v1.StreamResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.lf.a2a.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
 */
proto.lf.a2a.v1.StreamResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.StreamResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.lf.a2a.v1.Message}
 */
proto.lf.a2a.v1.StreamResponse.prototype.getMessage = function() {
  return /** @type{?proto.lf.a2a.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.Message, 2));
};


/**
 * @param {?proto.lf.a2a.v1.Message|undefined} value
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
*/
proto.lf.a2a.v1.StreamResponse.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.lf.a2a.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
 */
proto.lf.a2a.v1.StreamResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.StreamResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TaskStatusUpdateEvent status_update = 3;
 * @return {?proto.lf.a2a.v1.TaskStatusUpdateEvent}
 */
proto.lf.a2a.v1.StreamResponse.prototype.getStatusUpdate = function() {
  return /** @type{?proto.lf.a2a.v1.TaskStatusUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.TaskStatusUpdateEvent, 3));
};


/**
 * @param {?proto.lf.a2a.v1.TaskStatusUpdateEvent|undefined} value
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
*/
proto.lf.a2a.v1.StreamResponse.prototype.setStatusUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.lf.a2a.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
 */
proto.lf.a2a.v1.StreamResponse.prototype.clearStatusUpdate = function() {
  return this.setStatusUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.StreamResponse.prototype.hasStatusUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskArtifactUpdateEvent artifact_update = 4;
 * @return {?proto.lf.a2a.v1.TaskArtifactUpdateEvent}
 */
proto.lf.a2a.v1.StreamResponse.prototype.getArtifactUpdate = function() {
  return /** @type{?proto.lf.a2a.v1.TaskArtifactUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.lf.a2a.v1.TaskArtifactUpdateEvent, 4));
};


/**
 * @param {?proto.lf.a2a.v1.TaskArtifactUpdateEvent|undefined} value
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
*/
proto.lf.a2a.v1.StreamResponse.prototype.setArtifactUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.lf.a2a.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lf.a2a.v1.StreamResponse} returns this
 */
proto.lf.a2a.v1.StreamResponse.prototype.clearArtifactUpdate = function() {
  return this.setArtifactUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lf.a2a.v1.StreamResponse.prototype.hasArtifactUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    proto.lf.a2a.v1.TaskPushNotificationConfig.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse;
  return proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lf.a2a.v1.TaskPushNotificationConfig;
      reader.readMessage(value,proto.lf.a2a.v1.TaskPushNotificationConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lf.a2a.v1.TaskPushNotificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated TaskPushNotificationConfig configs = 1;
 * @return {!Array<!proto.lf.a2a.v1.TaskPushNotificationConfig>}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.lf.a2a.v1.TaskPushNotificationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lf.a2a.v1.TaskPushNotificationConfig, 1));
};


/**
 * @param {!Array<!proto.lf.a2a.v1.TaskPushNotificationConfig>} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} returns this
*/
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lf.a2a.v1.TaskPushNotificationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lf.a2a.v1.TaskPushNotificationConfig}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lf.a2a.v1.TaskPushNotificationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse} returns this
 */
proto.lf.a2a.v1.ListTaskPushNotificationConfigsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.lf.a2a.v1.TaskState = {
  TASK_STATE_UNSPECIFIED: 0,
  TASK_STATE_SUBMITTED: 1,
  TASK_STATE_WORKING: 2,
  TASK_STATE_COMPLETED: 3,
  TASK_STATE_FAILED: 4,
  TASK_STATE_CANCELED: 5,
  TASK_STATE_INPUT_REQUIRED: 6,
  TASK_STATE_REJECTED: 7,
  TASK_STATE_AUTH_REQUIRED: 8
};

/**
 * @enum {number}
 */
proto.lf.a2a.v1.Role = {
  ROLE_UNSPECIFIED: 0,
  ROLE_USER: 1,
  ROLE_AGENT: 2
};

goog.object.extend(exports, proto.lf.a2a.v1);

// Below is base64 encoded GeneratedCodeInfo proto
// Ch8KAgQAEhNsZi9hMmEvdjEvYTJhLnByb3RvGO8pIIcqCh8KAgQBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKUwIKkwCh8KAgQCEhNsZi9hMmEvdjEvYTJhLnByb3RvGPc1IIE2Ch8KAgQDEhNsZi9hMmEvdjEvYTJhLnByb3RvGME7IMU7Ch8KAgQEEhNsZi9hMmEvdjEvYTJhLnByb3RvGJBBIJdBCh8KAgQFEhNsZi9hMmEvdjEvYTJhLnByb3RvGPFGIPlGCh8KAgQGEhNsZi9hMmEvdjEvYTJhLnByb3RvGNdMIOxMCh8KAgQHEhNsZi9hMmEvdjEvYTJhLnByb3RvGM1SIORSCh8KAgQIEhNsZi9hMmEvdjEvYTJhLnByb3RvGMtYIN1YCh8KAgQJEhNsZi9hMmEvdjEvYTJhLnByb3RvGLVeIMNeCh8KAgQKEhNsZi9hMmEvdjEvYTJhLnByb3RvGI9kIJhkCh8KAgQLEhNsZi9hMmEvdjEvYTJhLnByb3RvGPppIIdqCh8KAgQMEhNsZi9hMmEvdjEvYTJhLnByb3RvGNBvIOFvCh8KAgQNEhNsZi9hMmEvdjEvYTJhLnByb3RvGON1IPF1Ch8KAgQOEhNsZi9hMmEvdjEvYTJhLnByb3RvGL17IMd7CiEKAgQPEhNsZi9hMmEvdjEvYTJhLnByb3RvGK2BASC/gQEKIQoCBBASE2xmL2EyYS92MS9hMmEucHJvdG8Yl4cBILGHAQohCgIEERITbGYvYTJhL3YxL2EyYS5wcm90bxihjQEgq40BCiEKAgQSEhNsZi9hMmEvdjEvYTJhLnByb3RvGJGTASCkkwEKIQoCBBMSE2xmL2EyYS92MS9hMmEucHJvdG8Y/5gBII2ZAQohCgIEFBITbGYvYTJhL3YxL2EyYS5wcm90bxiAnwEglJ8BCiEKAgQVEhNsZi9hMmEvdjEvYTJhLnByb3RvGPKkASCIpQEKIQoCBBYSE2xmL2EyYS92MS9hMmEucHJvdG8Y7KoBIICrAQohCgIEFxITbGYvYTJhL3YxL2EyYS5wcm90bxjesAEg+bABCiEKAgQYEhNsZi9hMmEvdjEvYTJhLnByb3RvGOy2ASCDtwEKIQoCBBkSE2xmL2EyYS92MS9hMmEucHJvdG8Y6rwBIPS8AQohCgIEGhITbGYvYTJhL3YxL2EyYS5wcm90bxjXwgEg8cIBCiEKAgQbEhNsZi9hMmEvdjEvYTJhLnByb3RvGOHIASD7yAEKIQoCBBwSE2xmL2EyYS92MS9hMmEucHJvdG8Y684BIPzOAQohCgIEHRITbGYvYTJhL3YxL2EyYS5wcm90bxjR1AEg4tQBCiEKAgQeEhNsZi9hMmEvdjEvYTJhLnByb3RvGLfaASDK2gEKIQoCBB8SE2xmL2EyYS92MS9hMmEucHJvdG8YpeABILfgAQohCgIEIBITbGYvYTJhL3YxL2EyYS5wcm90bxiP5gEgneYBCiEKAgQhEhNsZi9hMmEvdjEvYTJhLnByb3RvGOnrASD56wEKIQoCBCISE2xmL2EyYS92MS9hMmEucHJvdG8Yy/EBINzxAQohCgIEIxITbGYvYTJhL3YxL2EyYS5wcm90bxje9wEg7/cBCiEKAgQkEhNsZi9hMmEvdjEvYTJhLnByb3RvGMT9ASDo/QEKIQoCBCUSE2xmL2EyYS92MS9hMmEucHJvdG8Y9oMCIJ2EAgohCgIEJhITbGYvYTJhL3YxL2EyYS5wcm90bxi0igIgyooCCiEKAgQnEhNsZi9hMmEvdjEvYTJhLnByb3RvGK6QAiDUkAIKIQoCBCgSE2xmL2EyYS92MS9hMmEucHJvdG8Y6JYCIIOXAgohCgIEKRITbGYvYTJhL3YxL2EyYS5wcm90bxj2nAIgiZ0CCiEKAgQqEhNsZi9hMmEvdjEvYTJhLnByb3RvGJCjAiCeowIKIQoCBCsSE2xmL2EyYS92MS9hMmEucHJvdG8YkakCILipAgojCgQEAAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIjVAiCi1QIKIwoEBAACABITbGYvYTJhL3YxL2EyYS5wcm90bxio1wIgwtcCCiMKBAQAAgASE2xmL2EyYS92MS9hMmEucHJvdG8YyNkCIN7ZAgojCgQEAAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGPjbAiCU3AIKIwoEBAACARITbGYvYTJhL3YxL2EyYS5wcm90bxiV3gIgst4CCiMKBAQAAgESE2xmL2EyYS92MS9hMmEucHJvdG8YquECIMfhAgojCgQEAAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGMjjAiDn4wIKIwoEBAACARITbGYvYTJhL3YxL2EyYS5wcm90bxiq5QIgx+UCCiMKBAQAAgISE2xmL2EyYS92MS9hMmEucHJvdG8YgucCIJLnAgojCgQEAAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGI7pAiCe6QIKIwoEBAACAhITbGYvYTJhL3YxL2EyYS5wcm90bxiQ6wIgousCCiMKBAQAAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y4ewCIPHsAgojCgQEAAIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGKbuAiCx7gIKIwoEBAACAxITbGYvYTJhL3YxL2EyYS5wcm90bxi68AIgxfACCiMKBAQBAgASE2xmL2EyYS92MS9hMmEucHJvdG8YsJ0DILWdAwojCgQEAQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIqfAyCPnwMKIwoEBAECARITbGYvYTJhL3YxL2EyYS5wcm90bxjDoAMgz6ADCiMKBAQBAgESE2xmL2EyYS92MS9hMmEucHJvdG8YpKIDILCiAwojCgQEAQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGPmjAyCCpAMKIwoEBAECAhITbGYvYTJhL3YxL2EyYS5wcm90bxiipgMgq6YDCiMKBAQBAgISE2xmL2EyYS92MS9hMmEucHJvdG8YhKgDII+oAwojCgQEAQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGKqpAyCzqQMKIwoEBAECAxITbGYvYTJhL3YxL2EyYS5wcm90bxjzqgMgg6sDCiMKBAQBAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yq60DILutAwojCgQEAQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGLGvAyC9rwMKIwoEBAECAxITbGYvYTJhL3YxL2EyYS5wcm90bxjYsQMg6rEDCiMKBAQBAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YmbMDIKezAwojCgQEAQIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGMy1AyDatQMKIwoEBAECBBITbGYvYTJhL3YxL2EyYS5wcm90bxjOtwMg2LcDCiMKBAQBAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y8rkDIIK6AwojCgQEAQIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGLy7AyDHuwMKIwoEBAECBRITbGYvYTJhL3YxL2EyYS5wcm90bxjxvQMg/L0DCiMKBAQBAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Y1b8DIOK/AwojCgQEAQIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGP/AAyCKwQMKIwoEBAICABITbGYvYTJhL3YxL2EyYS5wcm90bxiI5AMgkOQDCiMKBAQCAgASE2xmL2EyYS92MS9hMmEucHJvdG8YmOYDIKDmAwojCgQEAgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOjnAyDy5wMKIwoEBAICARITbGYvYTJhL3YxL2EyYS5wcm90bxiV6gMgn+oDCiMKBAQCAgESE2xmL2EyYS92MS9hMmEucHJvdG8YhOwDIJDsAwojCgQEAgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGLLtAyC87QMKIwoEBAICAhITbGYvYTJhL3YxL2EyYS5wcm90bxiS7wMgnu8DCiMKBAQCAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y4PEDIOzxAwojCgQEAgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGNHzAyDf8wMKIwoEBAICAhITbGYvYTJhL3YxL2EyYS5wcm90bxiD9QMgj/UDCiMKBAQDAgASE2xmL2EyYS92MS9hMmEucHJvdG8YyPkDIMz5AwojCgQEAwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGNP5AyDW+QMKIwoEBAMCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjd+QMg4PkDCiMKBAQDAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y5/kDIOv5AwojCgQEAwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIKnBCCJpwQKIwoEBAMCABITbGYvYTJhL3YxL2EyYS5wcm90bxjeqAQg5agECiMKBAQDAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y2qoEIOOqBAojCgQEAwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGLmsBCDArAQKIwoEBAMCARITbGYvYTJhL3YxL2EyYS5wcm90bxjqrQQg8K0ECiMKBAQDAgESE2xmL2EyYS92MS9hMmEucHJvdG8YxbQEIMu0BAojCgQEAwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGMC2BCDItgQKIwoEBAMCARITbGYvYTJhL3YxL2EyYS5wcm90bxieuAQgpLgECiMKBAQDAgISE2xmL2EyYS92MS9hMmEucHJvdG8YwbkEIMe5BAojCgQEAwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJy7BCCiuwQKIwoEBAMCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiXvQQgn70ECiMKBAQDAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y9b4EIPu+BAojCgQEAwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGL7ABCDFwAQKIwoEBAMCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjswgQg88IECiMKBAQDAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y98QEIIDFBAojCgQEAwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGJnGBCCgxgQKIwoEBAMCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjpxwQg9McECiMKBAQDAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YnsoEIKnKBAojCgQEAwIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGILMBCCPzAQKIwoEBAMCBBITbGYvYTJhL3YxL2EyYS5wcm90bxiszQQgt80ECiMKBAQDAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Y2c4EIOTOBAojCgQEAwIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGLnQBCDE0AQKIwoEBAMCBhITbGYvYTJhL3YxL2EyYS5wcm90bxj40QQghNIECiMKBAQDAgYSE2xmL2EyYS92MS9hMmEucHJvdG8Y2dMEIOXTBAojCgQEBAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMiDBSDUgwUKIwoEBAQCABITbGYvYTJhL3YxL2EyYS5wcm90bxivhQUgu4UFCiMKBAQEAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y8oYFIP6GBQojCgQEBAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGNmIBSDliAUKIwoEBAQCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiZigUgoooFCiMKBAQEAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y/YsFIIaMBQojCgQEBAIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMSNBSDLjQUKIwoEBAQCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjDjwUgyo8FCiMKBAQEAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Yj5EFIJuRBQojCgQEBAIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGL2TBSDJkwUKIwoEBAQCBBITbGYvYTJhL3YxL2EyYS5wcm90bxi6lQUgwpUFCiMKBAQEAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y35cFIO2XBQojCgQEBAIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGKiZBSCzmQUKIwoEBAQCBRITbGYvYTJhL3YxL2EyYS5wcm90bxjjmwUg7psFCiMKBAQEAgUSE2xmL2EyYS92MS9hMmEucHJvdG8YzZ0FINqdBQojCgQEBAIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGPqeBSCFnwUKIwoEBAQCBhITbGYvYTJhL3YxL2EyYS5wcm90bxi0oAUgxaAFCiMKBAQEAgYSE2xmL2EyYS92MS9hMmEucHJvdG8YqaIFILqiBQojCgQEBAIGEhNsZi9hMmEvdjEvYTJhLnByb3RvGJ6kBSCrpAUKIwoEBAQCBhITbGYvYTJhL3YxL2EyYS5wcm90bxijpgUgtqYFCiMKBAQEAgcSE2xmL2EyYS92MS9hMmEucHJvdG8Y4acFIPinBQojCgQEBAIHEhNsZi9hMmEvdjEvYTJhLnByb3RvGNypBSDzqQUKIwoEBAQCBxITbGYvYTJhL3YxL2EyYS5wcm90bxjXqwUg6qsFCiMKBAQEAgcSE2xmL2EyYS92MS9hMmEucHJvdG8Y4q0FIPutBQojCgQEBQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGOzYBSD52AUKIwoEBAUCABITbGYvYTJhL3YxL2EyYS5wcm90bxjW2gUg49oFCiMKBAQFAgESE2xmL2EyYS92MS9hMmEucHJvdG8YldwFIJzcBQojCgQEBQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGPndBSCA3gUKIwoEBAUCAhITbGYvYTJhL3YxL2EyYS5wcm90bxi53wUgx98FCiMKBAQFAgISE2xmL2EyYS92MS9hMmEucHJvdG8YpOEFILLhBQojCgQEBQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGPriBSCG4wUKIwoEBAUCAxITbGYvYTJhL3YxL2EyYS5wcm90bxiq5QUgtuUFCiMKBAQFAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YqOcFILDnBQojCgQEBQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGM/pBSDd6QUKIwoEBAUCBBITbGYvYTJhL3YxL2EyYS5wcm90bxiZ6wUgpOsFCiMKBAQFAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y1u0FIOHtBQojCgQEBQIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGMLvBSDP7wUKIwoEBAUCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjw8AUg+/AFCiMKBAQFAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Yq/IFILzyBQojCgQEBQIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGKL0BSCz9AUKIwoEBAUCBRITbGYvYTJhL3YxL2EyYS5wcm90bxiZ9gUgpvYFCiMKBAQFAgUSE2xmL2EyYS92MS9hMmEucHJvdG8YoPgFILP4BQojCgQEBgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNGeBiDangYKIwoEBAYCABITbGYvYTJhL3YxL2EyYS5wcm90bxjRoAYg2qAGCiMKBAQGAgESE2xmL2EyYS92MS9hMmEucHJvdG8Yn6IGIKuiBgojCgQEBgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKKkBiCupAYKIwoEBAYCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiIpgYgkaYGCiMKBAQGAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y06gGINyoBgojCgQEBgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGNeqBiDiqgYKIwoEBAYCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiOrAYgl6wGCiMKBAQGAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y8a0GIPytBgojCgQEBgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMiwBiDTsAYKIwoEBAYCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjOsgYg27IGCiMKBAQGAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YibQGIJS0BgojCgQEBwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGP3eBiCG3wYKIwoEBAcCABITbGYvYTJhL3YxL2EyYS5wcm90bxiB4QYgiuEGCiMKBAQHAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y0eIGIN3iBgojCgQEBwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGNjkBiDk5AYKIwoEBAcCAhITbGYvYTJhL3YxL2EyYS5wcm90bxi+5gYgyeYGCiMKBAQHAgISE2xmL2EyYS92MS9hMmEucHJvdG8YiekGIJTpBgojCgQEBwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJPrBiCg6wYKIwoEBAcCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjQ7AYg2+wGCiMKBAQHAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yje4GIJbuBgojCgQEBwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGJ3wBiCm8AYKIwoEBAcCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjt8QYg+fEGCiMKBAQHAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YgPQGIIz0BgojCgQEBwIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGPn1BiCE9gYKIwoEBAcCBRITbGYvYTJhL3YxL2EyYS5wcm90bxjU+AYg3/gGCiMKBAQHAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Y3voGIOv6BgojCgQEBwIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGJv8BiCm/AYKIwoEBAgCABITbGYvYTJhL3YxL2EyYS5wcm90bxiZmwcgopsHCiMKBAQIAgASE2xmL2EyYS92MS9hMmEucHJvdG8Yk50HIJydBwojCgQECAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGN+eByDtngcKIwoEBAgCARITbGYvYTJhL3YxL2EyYS5wcm90bxjeoAcg7KAHCiMKBAQJAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y/sMHIITEBwojCgQECQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGO3FByDzxQcKIwoEBAkCARITbGYvYTJhL3YxL2EyYS5wcm90bxi3xwcgyccHCiMKBAQJAgESE2xmL2EyYS92MS9hMmEucHJvdG8YsskHIMTJBwojCgQECQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGP7KByCHywcKIwoEBAkCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjwzAcg+cwHCiMKBAQJAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yvc4HIM/OBwojCgQECQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGLjQByDK0AcKIwoEBAoCABITbGYvYTJhL3YxL2EyYS5wcm90bxjmmwgg7ZsICiMKBAQKAgASE2xmL2EyYS92MS9hMmEucHJvdG8YzJ0IINOdCAojCgQECgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGI2fCCCbnwgKIwoEBAoCARITbGYvYTJhL3YxL2EyYS5wcm90bxj6oAggiKEICiMKBAQKAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y9KIIII6jCAojCgQECgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGNKlCCDspQgKIwoEBAoCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjzpwggiagICiMKBAQKAgISE2xmL2EyYS92MS9hMmEucHJvdG8YtKoIINCqCAojCgQECgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGJOsCCCerAgKIwoEBAoCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjRrggg3K4ICiMKBAQKAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yv7AIIMywCAojCgQECgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGO6xCCD5sQgKIwoEBAoCBBITbGYvYTJhL3YxL2EyYS5wcm90bxifswggqbMICiMKBAQKAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YiLUIIJK1CAojCgQECgIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGNK2CCDltggKIwoEBAoCBRITbGYvYTJhL3YxL2EyYS5wcm90bxjEuAgg17gICiMKBAQKAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Yq7oIIMC6CAojCgQECgIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGPC7CCCDvAgKIwoEBAoCBhITbGYvYTJhL3YxL2EyYS5wcm90bxjVvQgg5L0ICiMKBAQKAgYSE2xmL2EyYS92MS9hMmEucHJvdG8Yo8AIILLACAojCgQECgIGEhNsZi9hMmEvdjEvYTJhLnByb3RvGJXCCCCmwggKIwoEBAoCBhITbGYvYTJhL3YxL2EyYS5wcm90bxjMwwgg28MICiMKBAQKAgcSE2xmL2EyYS92MS9hMmEucHJvdG8YqMYIIL3GCAojCgQECgIHEhNsZi9hMmEvdjEvYTJhLnByb3RvGKrJCCDByQgKIwoEBAoCCBITbGYvYTJhL3YxL2EyYS5wcm90bxiuywggycsICiMKBAQKAggSE2xmL2EyYS92MS9hMmEucHJvdG8YnM4IILfOCAojCgQECgIIEhNsZi9hMmEvdjEvYTJhLnByb3RvGMjQCCDf0AgKIwoEBAoCCBITbGYvYTJhL3YxL2EyYS5wcm90bxiP0wggrNMICiMKBAQKAgkSE2xmL2EyYS92MS9hMmEucHJvdG8Y5dQIIP3UCAojCgQECgIJEhNsZi9hMmEvdjEvYTJhLnByb3RvGObWCCD+1ggKIwoEBAoCCRITbGYvYTJhL3YxL2EyYS5wcm90bxjn2Agg+9gICiMKBAQKAgkSE2xmL2EyYS92MS9hMmEucHJvdG8Y+NoIIJLbCAojCgQECgIKEhNsZi9hMmEvdjEvYTJhLnByb3RvGMncCCDi3AgKIwoEBAoCChITbGYvYTJhL3YxL2EyYS5wcm90bxjL3ggg5N4ICiMKBAQKAgoSE2xmL2EyYS92MS9hMmEucHJvdG8YzeAIIOLgCAojCgQECgIKEhNsZi9hMmEvdjEvYTJhLnByb3RvGN/iCCD64ggKIwoEBAoCCxITbGYvYTJhL3YxL2EyYS5wcm90bxi95AggyuQICiMKBAQKAgsSE2xmL2EyYS92MS9hMmEucHJvdG8Yg+cIIJDnCAojCgQECgILEhNsZi9hMmEvdjEvYTJhLnByb3RvGJDpCCCZ6QgKIwoEBAoCCxITbGYvYTJhL3YxL2EyYS5wcm90bxjB6wgg0OsICiMKBAQKAgwSE2xmL2EyYS92MS9hMmEucHJvdG8Ym+0IIKztCAojCgQECgIMEhNsZi9hMmEvdjEvYTJhLnByb3RvGP3vCCCO8AgKIwoEBAoCDBITbGYvYTJhL3YxL2EyYS5wcm90bxie8gggq/IICiMKBAQKAgwSE2xmL2EyYS92MS9hMmEucHJvdG8Y2/QIIO70CAojCgQECgINEhNsZi9hMmEvdjEvYTJhLnByb3RvGIr2CCCU9ggKIwoEBAoCDRITbGYvYTJhL3YxL2EyYS5wcm90bxj09wgg/vcICiMKBAQKAg0SE2xmL2EyYS92MS9hMmEucHJvdG8Y0/kIIN/5CAojCgQECgINEhNsZi9hMmEvdjEvYTJhLnByb3RvGJD7CCCa+wgKIwoEBAsCABITbGYvYTJhL3YxL2EyYS5wcm90bxi1mQkgu5kJCiMKBAQLAgASE2xmL2EyYS92MS9hMmEucHJvdG8YopsJIKibCQojCgQECwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOecCSD2nAkKIwoEBAsCARITbGYvYTJhL3YxL2EyYS5wcm90bxjdngkg7J4JCiMKBAQMAgASE2xmL2EyYS92MS9hMmEucHJvdG8YwcYJIM3GCQojCgQEDAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMjICSDUyAkKIwoEBAwCABITbGYvYTJhL3YxL2EyYS5wcm90bxi4ygkgxsoJCiMKBAQMAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y/ssJIIrMCQojCgQEDAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGMLNCSDWzQkKIwoEBAwCARITbGYvYTJhL3YxL2EyYS5wcm90bxjRzwkg5c8JCiMKBAQMAgESE2xmL2EyYS92MS9hMmEucHJvdG8YydEJIN/RCQojCgQEDAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGJfTCSCr0wkKIwoEBAwCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiF1QkgltUJCiMKBAQMAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y6tcJIPvXCQojCgQEDAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGIraCSCX2gkKIwoEBAwCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjS3Akg5dwJCiMKBAQMAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Ykt4JIKbeCQojCgQEDAIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGKHgCSC14AkKIwoEBAwCAxITbGYvYTJhL3YxL2EyYS5wcm90bxiZ4gkgr+IJCiMKBAQMAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y5+MJIPvjCQojCgQEDQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIGICiCHiAoKIwoEBA0CABITbGYvYTJhL3YxL2EyYS5wcm90bxjwiQog9okKCiMKBAQNAgESE2xmL2EyYS92MS9hMmEucHJvdG8YtYsKIMOLCgojCgQEDQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKyNCiC6jQoKIwoEBA0CAhITbGYvYTJhL3YxL2EyYS5wcm90bxj1jgoggI8KCiMKBAQNAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y9ZAKIICRCgojCgQEDQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGOKSCiDrkgoKIwoEBA0CAxITbGYvYTJhL3YxL2EyYS5wcm90bxiplQogspUKCiMKBAQNAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yn5cKIKqXCgojCgQEDQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGM+YCiDYmAoKIwoEBA4CABITbGYvYTJhL3YxL2EyYS5wcm90bxjKyAogz8gKCiMKBAQOAgASE2xmL2EyYS92MS9hMmEucHJvdG8YsMoKILXKCgojCgQEDgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOnLCiDwywoKIwoEBA4CARITbGYvYTJhL3YxL2EyYS5wcm90bxjRzQog2M0KCiMKBAQOAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yk88KIKHPCgojCgQEDgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGILRCiCQ0QoKIwoEBA4CAxITbGYvYTJhL3YxL2EyYS5wcm90bxjM0gog19IKCiMKBAQOAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YwdQKIMzUCgojCgQEDgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGLbWCiC91goKIwoEBA4CAxITbGYvYTJhL3YxL2EyYS5wcm90bxi72AogyNgKCiMKBAQOAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y5tkKIPXZCgojCgQEDgIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGN/bCiDu2woKIwoEBA4CBBITbGYvYTJhL3YxL2EyYS5wcm90bxjY3Qog490KCiMKBAQOAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y4d8KIPLfCgojCgQEDgIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGJfhCiCo4QoKIwoEBA4CBRITbGYvYTJhL3YxL2EyYS5wcm90bxiS4wogo+MKCiMKBAQOAgUSE2xmL2EyYS92MS9hMmEucHJvdG8YjeUKIJrlCgojCgQEDgIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGJjnCiCr5woKIwoEBA4CBhITbGYvYTJhL3YxL2EyYS5wcm90bxjT6Aog5egKCiMKBAQOAgYSE2xmL2EyYS92MS9hMmEucHJvdG8Yz+oKIOHqCgojCgQEDgIGEhNsZi9hMmEvdjEvYTJhLnByb3RvGMvsCiDZ7AoKIwoEBA4CBhITbGYvYTJhL3YxL2EyYS5wcm90bxjX7gog6+4KCiMKBAQOAgcSE2xmL2EyYS92MS9hMmEucHJvdG8YyPAKIOPwCgojCgQEDgIHEhNsZi9hMmEvdjEvYTJhLnByb3RvGLjzCiDT8woKIwoEBA4CBxITbGYvYTJhL3YxL2EyYS5wcm90bxjl9Qog/PUKCiMKBAQOAgcSE2xmL2EyYS92MS9hMmEucHJvdG8YrvgKIMv4CgojCgQEDwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGJObCyCfmwsKIwoEBA8CABITbGYvYTJhL3YxL2EyYS5wcm90bxiQnQsgnJ0LCiMKBAQPAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y3Z4LIOmeCwojCgQEDwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGNqgCyDmoAsKIwoEBA8CAhITbGYvYTJhL3YxL2EyYS5wcm90bxjLogsg1KILCiMKBAQPAgISE2xmL2EyYS92MS9hMmEucHJvdG8YmqULIKOlCwojCgQEDwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJinCyCjpwsKIwoEBA8CAhITbGYvYTJhL3YxL2EyYS5wcm90bxjMqAsg1agLCiMKBAQQAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y5dILIO7SCwojCgQEEAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGO/UCyD41AsKIwoEBBACARITbGYvYTJhL3YxL2EyYS5wcm90bxi61gsgv9YLCiMKBAQQAgESE2xmL2EyYS92MS9hMmEucHJvdG8YwNgLIMXYCwojCgQEEAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGIzaCyCV2gsKIwoEBBACAhITbGYvYTJhL3YxL2EyYS5wcm90bxiW3Asgn9wLCiMKBAQQAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y4t0LIOjdCwojCgQEEAIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGOnfCyDv3wsKIwoEBBACBBITbGYvYTJhL3YxL2EyYS5wcm90bxi04QsgvOELCiMKBAQQAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YveMLIMXjCwojCgQEEAIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGLzlCyDN5QsKIwoEBBACBRITbGYvYTJhL3YxL2EyYS5wcm90bxix6AsgwugLCiMKBAQQAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Yx+oLINrqCwojCgQEEAIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGJPsCyCk7AsKIwoEBBECABITbGYvYTJhL3YxL2EyYS5wcm90bxisiQwgt4kMCiMKBAQRAgASE2xmL2EyYS92MS9hMmEucHJvdG8YoYsMIKyLDAojCgQEEQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGJaNDCCdjQwKIwoEBBECABITbGYvYTJhL3YxL2EyYS5wcm90bxibjwwgqI8MCiMKBAQSAgASE2xmL2EyYS92MS9hMmEucHJvdG8YmrEMIKexDAojCgQEEgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKC0DCCvtAwKIwoEBBMCABITbGYvYTJhL3YxL2EyYS5wcm90bxj6uAwgkbkMCiMKBAQTAgESE2xmL2EyYS92MS9hMmEucHJvdG8YmLkMILG5DAojCgQEEwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGLi5DCDOuQwKIwoEBBMCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjVuQwg9LkMCiMKBAQTAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y+7kMII+6DAojCgQEEwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNnrDCDw6wwKIwoEBBMCABITbGYvYTJhL3YxL2EyYS5wcm90bxjC7gwg2e4MCiMKBAQTAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y+/AMIJTxDAojCgQEEwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMfyDCDe8gwKIwoEBBMCARITbGYvYTJhL3YxL2EyYS5wcm90bxjM9Awg5fQMCiMKBAQTAgESE2xmL2EyYS92MS9hMmEucHJvdG8YvfcMINb3DAojCgQEEwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGPj5DCCT+gwKIwoEBBMCARITbGYvYTJhL3YxL2EyYS5wcm90bxjI+wwg4fsMCiMKBAQTAgISE2xmL2EyYS92MS9hMmEucHJvdG8YyP0MIN/9DAojCgQEEwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGLGADSDIgA0KIwoEBBMCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjqgg0gg4MNCiMKBAQTAgISE2xmL2EyYS92MS9hMmEucHJvdG8YtoQNIM2EDQojCgQEEwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMuGDSDphg0KIwoEBBMCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjQiQ0g7okNCiMKBAQTAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YkIwNILCMDQojCgQEEwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGOqNDSCIjg0KIwoEBBMCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjzjw0giJANCiMKBAQTAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y45INIPiSDQojCgQEEwIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGJqVDSCxlQ0KIwoEBBMCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjilg0g95YNCiMKBAQUAgASE2xmL2EyYS92MS9hMmEucHJvdG8YqbgNILe4DQojCgQEFAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKy6DSC6ug0KIwoEBBQCARITbGYvYTJhL3YxL2EyYS5wcm90bxj8uw0gh7wNCiMKBAQUAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y/L0NIIe+DQojCgQEFAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGMW/DSDMvw0KIwoEBBQCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjBwQ0gyMENCiMKBAQVAgASE2xmL2EyYS92MS9hMmEucHJvdG8YvOMNIMrjDQojCgQEFQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMPlDSDR5Q0KIwoEBBUCARITbGYvYTJhL3YxL2EyYS5wcm90bxiT5w0gnOcNCiMKBAQVAgESE2xmL2EyYS92MS9hMmEucHJvdG8YlekNIJ7pDQojCgQEFQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGOfqDSD26g0KIwoEBBUCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjv7A0g/uwNCiMKBAQWAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y+Y8OIIeQDgojCgQEFgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGPyRDiCKkg4KIwoEBBYCARITbGYvYTJhL3YxL2EyYS5wcm90bxjikw4g6pMOCiMKBAQWAgESE2xmL2EyYS92MS9hMmEucHJvdG8YqpYOILKWDgojCgQEFgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKuYDiC1mA4KIwoEBBYCARITbGYvYTJhL3YxL2EyYS5wcm90bxjfmQ4g55kOCiMKBAQWAgISE2xmL2EyYS92MS9hMmEucHJvdG8YpJsOILibDgojCgQEFgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGK2dDiDBnQ4KIwoEBBcCABITbGYvYTJhL3YxL2EyYS5wcm90bxj3vQ4ghb4OCiMKBAQXAgASE2xmL2EyYS92MS9hMmEucHJvdG8YiMAOIJbADgojCgQEFwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOrBDiD9wQ4KIwoEBBcCARITbGYvYTJhL3YxL2EyYS5wcm90bxiAxA4gk8QOCiMKBAQYAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y0eEOIN/hDgojCgQEGAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNrjDiDo4w4KIwoEBBkCABITbGYvYTJhL3YxL2EyYS5wcm90bxi56A4gy+gOCiMKBAQZAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y0ugOIOToDgojCgQEGQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGOvoDiDz6A4KIwoEBBkCAxITbGYvYTJhL3YxL2EyYS5wcm90bxj66A4ggukOCiMKBAQZAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YiekOIJTpDgojCgQEGQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGLeYDyDLmA8KIwoEBBkCABITbGYvYTJhL3YxL2EyYS5wcm90bxinmw8gu5sPCiMKBAQZAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y0Z0PIOedDwojCgQEGQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGJOfDyCnnw8KIwoEBBkCARITbGYvYTJhL3YxL2EyYS5wcm90bxiSoQ8gpqEPCiMKBAQZAgESE2xmL2EyYS92MS9hMmEucHJvdG8YgqQPIJakDwojCgQEGQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKymDyDCpg8KIwoEBBkCARITbGYvYTJhL3YxL2EyYS5wcm90bxjupw8ggqgPCiMKBAQZAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y0akPINypDwojCgQEGQICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJ2sDyCorA8KIwoEBBkCAhITbGYvYTJhL3YxL2EyYS5wcm90bxi+rg8gy64PCiMKBAQZAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y7q8PIPmvDwojCgQEGQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMixDyDTsQ8KIwoEBBkCAxITbGYvYTJhL3YxL2EyYS5wcm90bxiUtA8gn7QPCiMKBAQZAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YtbYPIMK2DwojCgQEGQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGOW3DyDwtw8KIwoEBBkCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjGuQ8g07kPCiMKBAQZAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YmrwPIKe8DwojCgQEGQIEEhNsZi9hMmEvdjEvYTJhLnByb3RvGL2+DyDMvg8KIwoEBBkCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjxvw8g/r8PCiMKBAQaAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y4+kPIPbpDwojCgQEGgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGPfrDyCK7A8KIwoEBBoCARITbGYvYTJhL3YxL2EyYS5wcm90bxjT7Q8g3u0PCiMKBAQaAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y3+8PIOrvDwojCgQEGgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGLXxDyDC8Q8KIwoEBBoCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjD8w8g0PMPCiMKBAQaAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yk/YPIJ/2DwojCgQEGgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGPv4DyCJ+Q8KIwoEBBoCBBITbGYvYTJhL3YxL2EyYS5wcm90bxjC+g8g0foPCiMKBAQaAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Y3vwPIO38DwojCgQEGwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIaiECCRohAKIwoEBBsCABITbGYvYTJhL3YxL2EyYS5wcm90bxiSpBAgnaQQCiMKBAQbAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y6KUQIPWlEAojCgQEGwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGPanECCDqBAKIwoEBBsCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjGqhAg0qoQCiMKBAQbAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yrq0QILytEAojCgQEHAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNHRECDk0RAKIwoEBBwCABITbGYvYTJhL3YxL2EyYS5wcm90bxjT0xAg5tMQCiMKBAQcAgESE2xmL2EyYS92MS9hMmEucHJvdG8YqNUQILXVEAojCgQEHAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKTXECCx1xAKIwoEBBwCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjr2RAg99kQCiMKBAQcAgISE2xmL2EyYS92MS9hMmEucHJvdG8YwdwQIM/cEAojCgQEHQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMSAESDPgBEKIwoEBB0CABITbGYvYTJhL3YxL2EyYS5wcm90bxi+ghEgyYIRCiMKBAQdAgESE2xmL2EyYS92MS9hMmEucHJvdG8Yi4QRIJiEEQojCgQEHQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGIeGESCUhhEKIwoEBB0CAhITbGYvYTJhL3YxL2EyYS5wcm90bxjOiBEg2ogRCiMKBAQdAgISE2xmL2EyYS92MS9hMmEucHJvdG8YpIsRILKLEQojCgQEHgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKCyESC5shEKIwoEBB4CABITbGYvYTJhL3YxL2EyYS5wcm90bxistBEgxbQRCiMKBAQeAgESE2xmL2EyYS92MS9hMmEucHJvdG8Yh7YRIJK2EQojCgQEHgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGIW4ESCQuBEKIwoEBB4CAhITbGYvYTJhL3YxL2EyYS5wcm90bxjUuREg4bkRCiMKBAQeAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y1LsRIOG7EQojCgQEHgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGJ2+ESCpvhEKIwoEBB4CAxITbGYvYTJhL3YxL2EyYS5wcm90bxj3wBEghcERCiMKBAQfAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y2ugRIOPoEQojCgQEHwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNTqESDd6hEKIwoEBB8CARITbGYvYTJhL3YxL2EyYS5wcm90bxiv7BEguewRCiMKBAQfAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y7O4RIPbuEQojCgQEHwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOvwESD38BEKIwoEBB8CARITbGYvYTJhL3YxL2EyYS5wcm90bxih8hEgq/IRCiMKBAQfAgISE2xmL2EyYS92MS9hMmEucHJvdG8YlfQRIKX0EQojCgQEHwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGIv3ESCb9xEKIwoEBB8CAhITbGYvYTJhL3YxL2EyYS5wcm90bxiQ+REgovkRCiMKBAQfAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y0voRIOL6EQojCgQEHwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGLn8ESDE/BEKIwoEBB8CAxITbGYvYTJhL3YxL2EyYS5wcm90bxiK/xEglf8RCiMKBAQfAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YioESIJeBEgojCgQEHwIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMKCEiDNghIKIwoEBCACABITbGYvYTJhL3YxL2EyYS5wcm90bxiyoxIgu6MSCiMKBAQgAgASE2xmL2EyYS92MS9hMmEucHJvdG8YpKUSIK2lEgojCgQEIAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGOOmEiDophIKIwoEBCACARITbGYvYTJhL3YxL2EyYS5wcm90bxjRqBIg1qgSCiMKBAQgAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yl6oSIKeqEgojCgQEIAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGI+sEiCfrBIKIwoEBCACAhITbGYvYTJhL3YxL2EyYS5wcm90bxj9rRIgj64SCiMKBAQgAgISE2xmL2EyYS92MS9hMmEucHJvdG8YxK8SINSvEgojCgQEIQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGOfeEiDw3hIKIwoEBCECABITbGYvYTJhL3YxL2EyYS5wcm90bxjd4BIg5uASCiMKBAQhAgESE2xmL2EyYS92MS9hMmEucHJvdG8YpuISILLiEgojCgQEIQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGJ/kEiCr5BIKIwoEBCECAhITbGYvYTJhL3YxL2EyYS5wcm90bxj+5RIgh+YSCiMKBAQhAgISE2xmL2EyYS92MS9hMmEucHJvdG8Ym+gSIKToEgojCgQEIQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGODpEiDr6RIKIwoEBCECAxITbGYvYTJhL3YxL2EyYS5wcm90bxjX6xIg4usSCiMKBAQhAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YxO0SINHtEgojCgQEIQIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGIjvEiCT7xIKIwoEBCECBBITbGYvYTJhL3YxL2EyYS5wcm90bxjD8BIgz/ASCiMKBAQhAgQSE2xmL2EyYS92MS9hMmEucHJvdG8YvPISIMjyEgojCgQEIQIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGIv0EiCb9BIKIwoEBCECBRITbGYvYTJhL3YxL2EyYS5wcm90bxiH9hIgl/YSCiMKBAQhAgUSE2xmL2EyYS92MS9hMmEucHJvdG8Y+fcSIIv4EgojCgQEIQIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGML5EiDS+RIKIwoEBCECBhITbGYvYTJhL3YxL2EyYS5wcm90bxi7+xIg0vsSCiMKBAQhAgYSE2xmL2EyYS92MS9hMmEucHJvdG8YoP4SILf+EgojCgQEIQIGEhNsZi9hMmEvdjEvYTJhLnByb3RvGKiAEyDBgBMKIwoEBCECBhITbGYvYTJhL3YxL2EyYS5wcm90bxj2gRMgjYITCiMKBAQhAgcSE2xmL2EyYS92MS9hMmEucHJvdG8Yw4MTINaDEwojCgQEIQIHEhNsZi9hMmEvdjEvYTJhLnByb3RvGM+FEyDihRMKIwoEBCECBxITbGYvYTJhL3YxL2EyYS5wcm90bxjEhxMg2YcTCiMKBAQhAgcSE2xmL2EyYS92MS9hMmEucHJvdG8YkIkTIKOJEwojCgQEIgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIavEyCSrxMKIwoEBCICABITbGYvYTJhL3YxL2EyYS5wcm90bxjIsRMg1LETCiMKBAQiAgASE2xmL2EyYS92MS9hMmEucHJvdG8Yz7MTINezEwojCgQEIgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIi2EyCWthMKIwoEBCICARITbGYvYTJhL3YxL2EyYS5wcm90bxi7txMgy7cTCiMKBAQiAgESE2xmL2EyYS92MS9hMmEucHJvdG8YurkTIMq5EwojCgQEIgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGIm7EyCUuxMKIwoEBCICAhITbGYvYTJhL3YxL2EyYS5wcm90bxiCvRMgjb0TCiMKBAQiAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Yyr4TINa+EwojCgQEIgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGMTAEyDQwBMKIwoEBCMCABITbGYvYTJhL3YxL2EyYS5wcm90bxj74hMghOMTCiMKBAQjAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y8+QTIPzkEwojCgQEIwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGLXmEyC65hMKIwoEBCMCARITbGYvYTJhL3YxL2EyYS5wcm90bxip6BMgrugTCiMKBAQjAgISE2xmL2EyYS92MS9hMmEucHJvdG8YlOoTIJ/qEwojCgQEIwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGOPsEyDu7BMKIwoEBCMCAhITbGYvYTJhL3YxL2EyYS5wcm90bxjh7hMg7u4TCiMKBAQjAgISE2xmL2EyYS92MS9hMmEucHJvdG8YmPATIKPwEwojCgQEJAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGLWTFCC+kxQKIwoEBCQCABITbGYvYTJhL3YxL2EyYS5wcm90bxjTlRQg3JUUCiMKBAQkAgESE2xmL2EyYS92MS9hMmEucHJvdG8YrZcUILaXFAojCgQEJAIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGMuZFCDUmRQKIwoEBCQCAhITbGYvYTJhL3YxL2EyYS5wcm90bxigmxQgpZsUCiMKBAQkAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yup0UIL+dFAojCgQEJQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGJHBFCCawRQKIwoEBCUCABITbGYvYTJhL3YxL2EyYS5wcm90bxi1wxQgvsMUCiMKBAQlAgESE2xmL2EyYS92MS9hMmEucHJvdG8YksUUIJvFFAojCgQEJQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGLbHFCC/xxQKIwoEBCUCAhITbGYvYTJhL3YxL2EyYS5wcm90bxiOyRQgk8kUCiMKBAQlAgISE2xmL2EyYS92MS9hMmEucHJvdG8YrssUILPLFAojCgQEJgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNvqFCDk6hQKIwoEBCYCABITbGYvYTJhL3YxL2EyYS5wcm90bxjd7BQg5uwUCiMKBAQmAgESE2xmL2EyYS92MS9hMmEucHJvdG8YpO4UIKnuFAojCgQEJgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKLwFCCn8BQKIwoEBCcCABITbGYvYTJhL3YxL2EyYS5wcm90bxiLlhUglJYVCiMKBAQnAgASE2xmL2EyYS92MS9hMmEucHJvdG8YrZgVILaYFQojCgQEJwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGImaFSCSmhUKIwoEBCcCARITbGYvYTJhL3YxL2EyYS5wcm90bxirnBUgtJwVCiMKBAQnAgISE2xmL2EyYS92MS9hMmEucHJvdG8YiJ4VIJOeFQojCgQEJwICEhNsZi9hMmEvdjEvYTJhLnByb3RvGKugFSC2oBUKIwoEBCcCAxITbGYvYTJhL3YxL2EyYS5wcm90bxiJohUglaIVCiMKBAQnAgMSE2xmL2EyYS92MS9hMmEucHJvdG8YrqQVILqkFQojCgQEKAIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKTCFSCtwhUKIwoEBCgCABITbGYvYTJhL3YxL2EyYS5wcm90bxiwxBUgucQVCiMKBAQpAgASE2xmL2EyYS92MS9hMmEucHJvdG8YnMkVIKDJFQojCgQEKQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGKfJFSCuyRUKIwoEBCkCABITbGYvYTJhL3YxL2EyYS5wcm90bxi27BUgvewVCiMKBAQpAgASE2xmL2EyYS92MS9hMmEucHJvdG8Y6e4VIPDuFQojCgQEKQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKHxFSCq8RUKIwoEBCkCABITbGYvYTJhL3YxL2EyYS5wcm90bxjS8hUg2fIVCiMKBAQpAgESE2xmL2EyYS92MS9hMmEucHJvdG8YnPQVIKb0FQojCgQEKQIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGNv2FSDl9hUKIwoEBCkCARITbGYvYTJhL3YxL2EyYS5wcm90bxiW+RUgovkVCiMKBAQpAgESE2xmL2EyYS92MS9hMmEucHJvdG8YzfoVINf6FQojCgQEKgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGKT/FSCo/xUKIwoEBCoCARITbGYvYTJhL3YxL2EyYS5wcm90bxiv/xUgtv8VCiMKBAQqAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yvf8VIMr/FQojCgQEKgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGNH/FSDg/xUKIwoEBCoCABITbGYvYTJhL3YxL2EyYS5wcm90bxiIqhYgj6oWCiMKBAQqAgASE2xmL2EyYS92MS9hMmEucHJvdG8YsawWILisFgojCgQEKgIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGNquFiDjrhYKIwoEBCoCABITbGYvYTJhL3YxL2EyYS5wcm90bxiGsBYgjbAWCiMKBAQqAgESE2xmL2EyYS92MS9hMmEucHJvdG8Yy7EWINWxFgojCgQEKgIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGIC0FiCKtBYKIwoEBCoCARITbGYvYTJhL3YxL2EyYS5wcm90bxisthYguLYWCiMKBAQqAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y3rcWIOi3FgojCgQEKgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGMi5FiDXuRYKIwoEBCoCAhITbGYvYTJhL3YxL2EyYS5wcm90bxisvBYgu7wWCiMKBAQqAgISE2xmL2EyYS92MS9hMmEucHJvdG8Y3b4WIO6+FgojCgQEKgICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJnAFiCowBYKIwoEBCoCAxITbGYvYTJhL3YxL2EyYS5wcm90bxiOwhYgn8IWCiMKBAQqAgMSE2xmL2EyYS92MS9hMmEucHJvdG8Y+sQWIIvFFgojCgQEKgIDEhNsZi9hMmEvdjEvYTJhLnByb3RvGK3HFiDAxxYKIwoEBCoCAxITbGYvYTJhL3YxL2EyYS5wcm90bxjtyBYg/sgWCiMKBAQrAgASE2xmL2EyYS92MS9hMmEucHJvdG8YyO4WINbuFgojCgQEKwIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGPrxFiCI8hYKIwoEBCsCABITbGYvYTJhL3YxL2EyYS5wcm90bxjF9BYgz/QWCiMKBAQrAgASE2xmL2EyYS92MS9hMmEucHJvdG8YwvcWINL3FgojCgQEKwIBEhNsZi9hMmEvdjEvYTJhLnByb3RvGI/5FiCf+RYKIwoEBCsCARITbGYvYTJhL3YxL2EyYS5wcm90bxi6+xYgyvsWCiEKAgUAEhNsZi9hMmEvdjEvYTJhLnByb3RvGMr8FiDT/BYKIwoEBQACABITbGYvYTJhL3YxL2EyYS5wcm90bxja/BYg8PwWCiMKBAUAAgESE2xmL2EyYS92MS9hMmEucHJvdG8Y9/wWIIv9FgojCgQFAAICEhNsZi9hMmEvdjEvYTJhLnByb3RvGJL9FiCk/RYKIwoEBQACAxITbGYvYTJhL3YxL2EyYS5wcm90bxir/RYgv/0WCiMKBAUAAgQSE2xmL2EyYS92MS9hMmEucHJvdG8Yxv0WINf9FgojCgQFAAIFEhNsZi9hMmEvdjEvYTJhLnByb3RvGN79FiDx/RYKIwoEBQACBhITbGYvYTJhL3YxL2EyYS5wcm90bxj4/RYgkf4WCiMKBAUAAgcSE2xmL2EyYS92MS9hMmEucHJvdG8YmP4WIKv+FgojCgQFAAIIEhNsZi9hMmEvdjEvYTJhLnByb3RvGLL+FiDK/hYKIQoCBQESE2xmL2EyYS92MS9hMmEucHJvdG8Y/P4WIID/FgojCgQFAQIAEhNsZi9hMmEvdjEvYTJhLnByb3RvGIf/FiCX/xYKIwoEBQECARITbGYvYTJhL3YxL2EyYS5wcm90bxie/xYgp/8WCiMKBAUBAgISE2xmL2EyYS92MS9hMmEucHJvdG8Yrv8WILj/Fg==