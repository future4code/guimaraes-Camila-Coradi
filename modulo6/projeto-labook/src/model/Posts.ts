export enum POST {
  NORMAL = "normal",
  EVENT = "evento",
}

export class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private created_at: string,
    private type: POST,
    private author_id: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getPhoto(): string {
    return this.photo;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreationDate(): string {
    return this.created_at;
  }

  public getType(): string {
    return this.type;
  }

  public getAutorId(): string {
    return this.author_id;
  }
}
