import AnagramFinder from "../src/AnagramFinder";
import { wordsToCheck } from "../wordsToCheck";

describe("AnagramFinder", () => {
  describe("Input word", () => {
    it("input word by default should be documenting", () => {
      expect(new AnagramFinder().getInputWord()).toBe("documenting");
    }),
      it("input word must be pass in param", () => {
        expect(new AnagramFinder("toto").getInputWord()).toBe("toto");
      });
  });
  describe("Words to check", () => {
    it("should have a default", () => {
      expect(new AnagramFinder().getWordsToCheck()).toStrictEqual(wordsToCheck);
    });
    it("can take list of words", () => {
      expect(new AnagramFinder(undefined, ["toto",'titi','tata']).getWordsToCheck()).toStrictEqual(["toto",'titi','tata']);
    });
  });

  describe("Function to compare words with input words", () => {
    it('should return two-words anagram', () => {
        expect(new AnagramFinder(undefined, ["counting", "med", "toto", "zizi"]).getAnagrams()).toEqual(["counting", "med"])
    })
  })
});
