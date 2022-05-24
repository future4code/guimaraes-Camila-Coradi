import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'ovo'", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'salas'", () => {
    const ehPalindromo = checaPalindromo("salas");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(false);
  });
});
