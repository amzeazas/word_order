describe("wordCount", function(input){
  it("downcases input for consistency", function() {
    expect(wordCount("Ruby RUBY ruby")).to.equal(["ruby"]);
  });

  it("makes a word list (without duplicates) from input", function() {
    expect(wordCount("javascript Ruby ruby")).to.equal(["ruby, javascript"])
  });

  it("outputs list sorting by frequency", function() {
    expect(wordCount("ruby ruby javascript html javascript ruby")).to.equal(["ruby, javascript, html"]);
  });

  it("returns list of words with count, sorting by frequency", function() {
    expect(wordCount("ruby ruby javascript html javascript ruby")).to.equal(["ruby - 3", "javascript - 2", "html - 1"])
  })
});
