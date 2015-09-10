describe("wordCount", function(input){
  it("downcases input for consistency", function() {
    expect(wordCount("Ruby RUBY ruby")).to.equal("ruby ruby ruby");
  });
});
