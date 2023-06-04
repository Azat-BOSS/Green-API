export type TDataChats = {
  archive: boolean;
  id: string;
  notSpam: boolean;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
  name?: string;
}

export type TInitialState = {
  data: TDataChats[];
  success: boolean | null,
  chatId: string | null,
}