export {}

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { Socket, io } from "socket.io-client";

// // export type Channel = 'redux' | 'general';

// // export interface Message {
// //   id: number;
// //   channel: Channel;
// //   userName: string;
// //   text: string;
// // }

// // const chatApi = createApi({
// //     reducerPath: 'chatApi',
// //     baseQuery: fetchBaseQuery({ baseUrl: '/' }),
// //     endpoints: (build) => ({
// //         getMessages: build.query<Message[], Channel>({
// //             query: (channel) => `messages/${channel}`,
// //             async onCacheEntryAdded(
// //               arg,
// //               { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
// //             ) {
// //               // create a socket connection when the cache subscription starts
// //               const socket = io('wss://echo-ws-service.herokuapp.com');

// //               try {
// //                 // wait for the initial query to resolve before proceeding
// //                 await cacheDataLoaded;

// //                 // when a message event is received from the socket connection to the server,
// //                 // if it is a message and for the appropriate channel,
// //                 // update our query result with the received message
// //                 const listener = (data: Message) => {
// //                 //   if (!isMessage(data) || data.channel !== arg) return;

// //                   updateCachedData((draft) => {
// //                     draft.push(data);
// //                   });
// //                 };
// //                 socket.on('message', listener);
// //         } catch {
// //           // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
// //           // in which case `cacheDataLoaded` will throw
// //         }

// //         // cacheEntryRemoved will resolve when the cache subscription is no longer active
// //         await cacheEntryRemoved;

// //         // perform cleanup steps once the `cacheEntryRemoved` promise resolves
// //         socket.disconnect();
// //       },
// //     }),
// // })
// // })


// const socket: Socket = io('wss://localhost:3001');

// type Message = {
//   message: string;
// };

// const chatApi = createApi({
//   reducerPath: 'chatApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   endpoints: (builder) => ({
//     getMessage: builder.query<string, void>({
//       query: () => 'getMessage',
//     }),
//     sendMessage: builder.mutation<void, Message>({
//         // Определяем функцию, которая будет отправлять сообщение на сервер
//         queryFn: async (message) => {
//           // Отправляем сообщение через сокет
//           socket.emit('sendMessage', message);
//         },
//         // Необязательный колбэк-функция, которая вызывается после успешной отправки сообщения
//         onQueryStarted: () => {
//           console.log('Sending message...');
//         },
//       }),
//   }),
// });

// socket.on('connect', () => {
//   console.log('connected to server');
// });

// socket.on('newMessage', (data) => {
//     chatApi.endpoints.getMessage.invalidate(); // Обновляем данные RTK Query при получении новых сообщений
// });


// export default chatApi