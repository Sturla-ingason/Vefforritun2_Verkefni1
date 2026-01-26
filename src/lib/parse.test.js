import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseLine} from './parse.js';

describe('parse', () => {
  /**
  describe('parseQuestions', () => {
    it('should test', () => {
      const result = parseQuestions();
      assert.strictEqual(result, 'test');
    });
  });
  */

  describe('parseLine', () => {
    it("should return null if the string is empty", () => {
      //Arange
      //Veljum það sem við viljum setja inn í fallið
      const input = '';

      //Act 
      //Veljum í hvaða fall og inputið sem á að fara í það
      const ouptut = parseLine(input);

      //Assert
      //Segjum hvað á að koma úr fallinu þegar við notum inputið sem við völdum
      assert.strictEqual(ouptut, null)

    })
  })

  describe('parseLine', () => {
    it("should return a valid question", () => {

      //Arange
      const input = '6,Tónlist,1,2,"Hvaða hljómsveit gerði lagið ""Karma Police""",Radiohead';

      //Act
      const output = parseLine(input);

      //Assert
      assert.strictEqual(output?.answer, 'Radiohead');

    })
  })

});
