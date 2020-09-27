export class PostResponse {
  id: string;
  userName: string;
  postId: string;
  message: string;
  baseAmount: number;

  constructor(userName,postId,message,baseAmount){
    this.userName = userName;
    this.postId = postId;
    this.message = message;
    this.baseAmount = baseAmount;
  }
}
