const maskedCreditCardnumber = require("./index");

describe("Index", () => {
  it("should masks credit card number from string", () => {
    expect(maskedCreditCardnumber("1234123412341234")).toBe("************1234");
  });

  it("should masks multiple credit cards numbers from string", () => {
    expect(
      maskedCreditCardnumber(
        "something 1234 1234 1234 1234something 1234 1234 1234 4321"
      )
    ).toBe("something **** **** **** 1234something **** **** **** 4321");
  });

  it("should masks credit cards numbers from object", () => {
    const object = {
      credictcard1: "1234 1234 1234 1234",
      credictcard2: "something 1234-1234-1236-1236 other 1234-1234-1236-1237",
      message: "no credit card 2020-09-01 ---- /// 123456789"
    };

    const expectedObject = {
      credictcard1: "**** **** **** 1234",
      credictcard2: "something ****-****-****-1236 other ****-****-****-1237",
      message: "no credit card 2020-09-01 ---- /// 123456789"
    };
    expect(maskedCreditCardnumber(object)).toEqual(expectedObject);
  });

  it("should masks credit cards numbers from array", () => {
    const array = [
      {
        credictcard1: "1234 1234 1234 1234",
        credictcard2: "something 1234-1234-1236-1236 other 1234-1234-1236-1237",
        message: "no credit card 2020-09-01 ---- /// 123456789"
      }
    ];

    const expectedArray = [
      {
        credictcard1: "**** **** **** 1234",
        credictcard2: "something ****-****-****-1236 other ****-****-****-1237",
        message: "no credit card 2020-09-01 ---- /// 123456789"
      }
    ];
    expect(maskedCreditCardnumber(array)).toEqual(expectedArray);
  });
});
