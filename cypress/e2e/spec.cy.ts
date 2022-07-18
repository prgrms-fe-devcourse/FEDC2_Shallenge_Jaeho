describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("/login");
  });

  it("logged in fail with empty value", () => {
    const email = "123@123.com";
    const password = "123123";

    cy.get("input[name='logInEmail']").invoke("val", "");
    cy.get("input[name='logInPassword']").invoke("val", "");
    cy.get("form button").contains("로그인").click();

    cy.get("input[name='logInEmail']").type(email);
    cy.get("form button").contains("로그인").click();

    cy.get("input[name='logInEmail']").clear();
    cy.get("input[name='logInPassword']").type(password);
    cy.get("form button").contains("로그인").click();
  });

  it("logged in fail with wrong value", () => {
    const email = "123@123.com";
    const password = "123123123";

    cy.get("input[name='logInEmail']").type(email); // type into DOM
    cy.get("input[name='logInPassword']").type(password);
    cy.get("form button").contains("로그인").click();
    cy.get("body").contains("로그인에 실패했습니다!");
  });

  it("logged in success", () => {
    const email = "asd@asd.com";
    const password = "123123";

    cy.get("input[name='logInEmail']").type(email);
    cy.get("input[name='logInPassword']").type(password);
    cy.get("form button").contains("로그인").click();
    cy.get("body").contains("로그인 성공했습니다!");
  });
});
