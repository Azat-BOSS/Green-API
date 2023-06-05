export type TGetdataMessages = {
  type: string;
  idMessage: string;
  timestamp: number;
  typeMessage: string;
  chatId: string;
  extendedTextMessage: {
    [keyof: string]: string;
  };
  quotedMessage: {
    [keyof: string]: string;
  };
  senderId?: string;
  senderName: string;
  textMessage: string
  sendByApi: boolean
}

export type TGetMsgThunk = {
  chatId: string;
  count: number;
}

export type TInitialState = {
  dataMessages: TGetdataMessages[];
  crnMessages: TGetdataMessages[];
  success: boolean | null
}