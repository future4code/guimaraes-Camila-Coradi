export class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
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
    super(403, "Usuário não autorizado");
  }
}
export class MissingToken extends CustomError{
  constructor() {
      super(401, 'É necessário fornecer um token.')
  }
}
export class MissingInformation extends CustomError{
  constructor() {
      super(400, 'É necessário completar os campos "title" e "description".')
  }
}