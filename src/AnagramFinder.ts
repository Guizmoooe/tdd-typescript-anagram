import { wordsToCheck as defaultWordsToCheck } from '../wordsToCheck';
export default class AnagramFinder {
    constructor(private readonly inputWord = 'documenting', private readonly wordsToCheck = defaultWordsToCheck) {}
    getInputWord(): string {
        return this.inputWord
    }
    getWordsToCheck(): string[] {
        return this.wordsToCheck
    }
    getAnagrams(): string[] {
        const filterWords = this.wordsToCheck.filter(word => {
            
            return word.split('').every(letter => this.inputWord.includes(letter))
        })
        const anagramsToReturn = filterWords.reduce((anagrams :string[], word: string) => {
            return [word]
        }, [])

        console.log(anagramsToReturn)
        return anagramsToReturn
    }
}
