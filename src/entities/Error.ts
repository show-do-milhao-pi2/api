type StatusEnum = 200 | 201 | 401 | 400 | 403 | 404 | 500;

class Fail extends Error {
  status: StatusEnum;

  constructor(status: StatusEnum, message: string) {
    super(message);
    this.status = status;
  }
}

export { Fail };