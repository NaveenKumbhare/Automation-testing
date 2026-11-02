import sum from "./sum.js";

describe("test for sum fxn", () =>{

    
test("adds 2 + 2 to eual 4", () =>{
    expect(sum(2,2)).toBe(4);
});

  
test("adds -1 + 5 to eual 4", () =>{
    expect(sum(-1,5)).toBe(4);
});

});