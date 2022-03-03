import LocalStorage, { ILocalStorage } from "./local-storage";

const pollId = 'some-poll-id'

describe('local-storage', () => {
  describe('getItem', () => {
    let localStorageInstance: ILocalStorage;
  
    beforeEach(() => {
      jest.clearAllMocks();
      localStorageInstance = new LocalStorage({ key: pollId });
    })
  
    it('uses the correct local storage key', () => {
      const spy = jest.spyOn(Storage.prototype, 'getItem');
  
      localStorageInstance.getPolls();
  
      expect(spy).toBeCalledWith('op-poll');
    })
  
    it('returns an empty object if poll result is undefined', () => {
      const mockResult = { 'random-poll-id': { 'poll-1': 62 } };
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify(mockResult));
  
      const polls = localStorageInstance.getPolls();
  
      expect(polls).toEqual({});
    })
  
    it('returns the result within a given poll id', () => {
      const expectedResult = { 'poll-1': 62 };
      const mockResult = { [pollId]: expectedResult };
  
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify(mockResult));
  
      const polls = localStorageInstance.getPolls();
  
      expect(polls).toEqual(expectedResult);
    })
  })

  describe('setItem', () => {
    let localStorageInstance: ILocalStorage;
  
    beforeEach(() => {
      jest.clearAllMocks();
      localStorageInstance = new LocalStorage({ key: pollId });
    })

    it('set option value to 1 if it does not exist in results yet, otherwise, it increments', () => {
      const selectedOption = 'option-1';
      const expectedValue1 = { [pollId]: {[selectedOption]: 1}}
      const spy = jest.spyOn(Storage.prototype, 'setItem');
      
      localStorageInstance.savePolls(selectedOption);
      
      expect(spy).toBeCalledWith('op-poll', JSON.stringify(expectedValue1));

      localStorageInstance.savePolls(selectedOption);
      const expectedValue2 = { [pollId]: {[selectedOption]: 2}}

      expect(spy).toHaveBeenLastCalledWith('op-poll', JSON.stringify(expectedValue2));
    })
  })
});