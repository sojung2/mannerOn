export interface ChatStartReq {
  category: string;
  content: string;
}

export interface ChatRes {
  message: string;
  statusCode: string;
  data: {
    chatroomId: number;
    chatId: number;
    content: string;
  };
}

export interface ChatReq {
  chatroomId: number;
  category: string;
  content: string;
}
