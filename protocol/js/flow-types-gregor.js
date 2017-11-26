// @flow
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.

import engine, {EngineChannel} from '../../engine'
import type {Boolean, Bool, Bytes, Double, Int, Int64, Long, String, Uint, Uint64, WaitingHandlerType, RPCErrorHandler, CommonResponseHandler} from '../../engine/types'


export const authAuthenticateSessionTokenRpcChannelMap = (configKeys: Array<string>, request: AuthAuthenticateSessionTokenRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.auth.authenticateSessionToken', request)

export const authAuthenticateSessionTokenRpcPromise = (request: AuthAuthenticateSessionTokenRpcParam): Promise<AuthAuthenticateSessionTokenResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.auth.authenticateSessionToken', request, (error, result) => error ? reject(error) : resolve(result)))

export const authInternalCreateGregorSuperUserSessionTokenRpcChannelMap = (configKeys: Array<string>, request: AuthInternalCreateGregorSuperUserSessionTokenRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.authInternal.createGregorSuperUserSessionToken', request)

export const authInternalCreateGregorSuperUserSessionTokenRpcPromise = (request: AuthInternalCreateGregorSuperUserSessionTokenRpcParam): Promise<AuthInternalCreateGregorSuperUserSessionTokenResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.authInternal.createGregorSuperUserSessionToken', request, (error, result) => error ? reject(error) : resolve(result)))

export const authUpdateRevokeSessionIDsRpcChannelMap = (configKeys: Array<string>, request: AuthUpdateRevokeSessionIDsRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.authUpdate.revokeSessionIDs', request)

export const authUpdateRevokeSessionIDsRpcPromise = (request: AuthUpdateRevokeSessionIDsRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.authUpdate.revokeSessionIDs', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingConsumeMessageMultiRpcChannelMap = (configKeys: Array<string>, request: IncomingConsumeMessageMultiRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.consumeMessageMulti', request)

export const incomingConsumeMessageMultiRpcPromise = (request: IncomingConsumeMessageMultiRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.consumeMessageMulti', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingConsumeMessageRpcChannelMap = (configKeys: Array<string>, request: IncomingConsumeMessageRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.consumeMessage', request)

export const incomingConsumeMessageRpcPromise = (request: IncomingConsumeMessageRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.consumeMessage', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingConsumePublishMessageRpcChannelMap = (configKeys: Array<string>, request: IncomingConsumePublishMessageRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.consumePublishMessage', request)

export const incomingConsumePublishMessageRpcPromise = (request: IncomingConsumePublishMessageRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.consumePublishMessage', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingDescribeConnectedUsersInternalRpcChannelMap = (configKeys: Array<string>, request: IncomingDescribeConnectedUsersInternalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.describeConnectedUsersInternal', request)

export const incomingDescribeConnectedUsersInternalRpcPromise = (request: IncomingDescribeConnectedUsersInternalRpcParam): Promise<IncomingDescribeConnectedUsersInternalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.describeConnectedUsersInternal', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingDescribeConnectedUsersRpcChannelMap = (configKeys: Array<string>, request: IncomingDescribeConnectedUsersRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.describeConnectedUsers', request)

export const incomingDescribeConnectedUsersRpcPromise = (request: IncomingDescribeConnectedUsersRpcParam): Promise<IncomingDescribeConnectedUsersResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.describeConnectedUsers', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingPingRpcChannelMap = (configKeys: Array<string>, request: IncomingPingRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.ping', request)

export const incomingPingRpcPromise = (request: IncomingPingRpcParam): Promise<IncomingPingResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.ping', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingStateByCategoryPrefixRpcChannelMap = (configKeys: Array<string>, request: IncomingStateByCategoryPrefixRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.stateByCategoryPrefix', request)

export const incomingStateByCategoryPrefixRpcPromise = (request: IncomingStateByCategoryPrefixRpcParam): Promise<IncomingStateByCategoryPrefixResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.stateByCategoryPrefix', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingStateRpcChannelMap = (configKeys: Array<string>, request: IncomingStateRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.state', request)

export const incomingStateRpcPromise = (request: IncomingStateRpcParam): Promise<IncomingStateResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.state', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingSyncRpcChannelMap = (configKeys: Array<string>, request: IncomingSyncRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.sync', request)

export const incomingSyncRpcPromise = (request: IncomingSyncRpcParam): Promise<IncomingSyncResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.sync', request, (error, result) => error ? reject(error) : resolve(result)))

export const incomingVersionRpcChannelMap = (configKeys: Array<string>, request: IncomingVersionRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.incoming.version', request)

export const incomingVersionRpcPromise = (request: IncomingVersionRpcParam): Promise<IncomingVersionResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.incoming.version', request, (error, result) => error ? reject(error) : resolve(result)))

export const outgoingBroadcastMessageRpcChannelMap = (configKeys: Array<string>, request: OutgoingBroadcastMessageRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.outgoing.broadcastMessage', request)

export const outgoingBroadcastMessageRpcPromise = (request: OutgoingBroadcastMessageRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.outgoing.broadcastMessage', request, (error, result) => error ? reject(error) : resolve(result)))

export const remindDeleteRemindersRpcChannelMap = (configKeys: Array<string>, request: RemindDeleteRemindersRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.remind.deleteReminders', request)

export const remindDeleteRemindersRpcPromise = (request: RemindDeleteRemindersRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.remind.deleteReminders', request, (error, result) => error ? reject(error) : resolve(result)))

export const remindGetRemindersRpcChannelMap = (configKeys: Array<string>, request: RemindGetRemindersRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'gregor.1.remind.getReminders', request)

export const remindGetRemindersRpcPromise = (request: RemindGetRemindersRpcParam): Promise<RemindGetRemindersResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('gregor.1.remind.getReminders', request, (error, result) => error ? reject(error) : resolve(result)))

export type AuthAuthenticateSessionTokenRpcParam = {|session: SessionToken,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type AuthInternalCreateGregorSuperUserSessionTokenRpcParam = ?{|incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type AuthResult = {|uid: UID,username: String,sid: SessionID,isAdmin: Boolean,|}

export type AuthUpdateRevokeSessionIDsRpcParam = {|sessionIDs?: ?Array<SessionID>,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type Body = Bytes

export type Category = String

export type ConnectedDevice = {|deviceID: DeviceID,deviceType: String,devicePlatform: String,userAgent: String,|}

export type ConnectedUser = {|uid: UID,devices?: ?Array<ConnectedDevice>,|}

export type DeviceID = Bytes

export type Dismissal = {|msgIDs?: ?Array<MsgID>,ranges?: ?Array<MsgRange>,|}

export type DurationMsec = Int64

export type InBandMessage = {|stateUpdate?: ?StateUpdateMessage,stateSync?: ?StateSyncMessage,|}

export type IncomingConsumeMessageMultiRpcParam = {|msg: Message,uids?: ?Array<UID>,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingConsumeMessageRpcParam = {|m: Message,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingConsumePublishMessageRpcParam = {|m: Message,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingDescribeConnectedUsersInternalRpcParam = {|uids?: ?Array<UID>,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingDescribeConnectedUsersRpcParam = {|uids?: ?Array<UID>,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingPingRpcParam = ?{|incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingStateByCategoryPrefixRpcParam = {|uid: UID,deviceid: DeviceID,timeOrOffset: TimeOrOffset,categoryPrefix: Category,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingStateRpcParam = {|uid: UID,deviceid: DeviceID,timeOrOffset: TimeOrOffset,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingSyncRpcParam = {|uid: UID,deviceid: DeviceID,ctime: Time,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type IncomingVersionRpcParam = {|uid: UID,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type Item = {|category: Category,dtime: TimeOrOffset,remindTimes?: ?Array<TimeOrOffset>,body: Body,|}

export type ItemAndMetadata = {|md?: ?Metadata,item?: ?Item,|}

export type Message = {|oobm?: ?OutOfBandMessage,ibm?: ?InBandMessage,|}

export type Metadata = {|uid: UID,msgID: MsgID,ctime: Time,deviceID: DeviceID,inBandMsgType: Int,|}

export type MsgID = Bytes

export type MsgRange = {|endTime: TimeOrOffset,category: Category,|}

export type OutOfBandMessage = {|uid: UID,system: System,body: Body,|}

export type OutgoingBroadcastMessageRpcParam = {|m: Message,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type RemindDeleteRemindersRpcParam = {|reminderIDs?: ?Array<ReminderID>,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type RemindGetRemindersRpcParam = {|maxReminders: Int,incomingCallMap?: IncomingCallMapType,waitingHandler?: WaitingHandlerType|}

export type Reminder = {|item: ItemAndMetadata,seqno: Int,remindTime: Time,|}

export type ReminderID = {|uid: UID,msgID: MsgID,seqno: Int,|}

export type ReminderSet = {|reminders?: ?Array<Reminder>,moreRemindersReady: Boolean,|}

export type SessionID = String

export type SessionToken = String

export type State = {|items?: ?Array<ItemAndMetadata>,|}

export type StateSyncMessage = {|md: Metadata,|}

export type StateUpdateMessage = {|md: Metadata,creation?: ?Item,dismissal?: ?Dismissal,|}

export type SyncResult = {|msgs?: ?Array<InBandMessage>,hash: Bytes,|}

export type System = String

export type Time = Long

export type TimeOrOffset = {|time: Time,offset: DurationMsec,|}

export type UID = Bytes
type AuthAuthenticateSessionTokenResult = AuthResult
type AuthInternalCreateGregorSuperUserSessionTokenResult = SessionToken
type IncomingDescribeConnectedUsersInternalResult = ?Array<ConnectedUser>
type IncomingDescribeConnectedUsersResult = ?Array<ConnectedUser>
type IncomingPingResult = String
type IncomingStateByCategoryPrefixResult = State
type IncomingStateResult = State
type IncomingSyncResult = SyncResult
type IncomingVersionResult = String
type RemindGetRemindersResult = ReminderSet

export type IncomingCallMapType = {||}
