export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(404, "Este token não é válido");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class UnathorizedUser extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}
