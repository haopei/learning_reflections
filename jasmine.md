# Jasmine Unit Testing

## Example
  describe('User login', function() {
    it('the thing we are testing', function() {
      expects(true).toBe(true);
    });
  });

## Mnemonics
  - suite: describe(string, function)
  - spec: it(string, function)
  - expectation: expect(actual).toBe(expected_value) // chained to a Matcher function toBe())

## General
  - describe() is for grouping related it()s
  - describe() and it() are just functions, and javascript scoping rules apply.
  - An expectation is an assertion that is either true or false.
  - A spec with all true expectations is a passing spec.
  - A spec contains one or more expectations that tests the state of the code.
  - beforeEach() is called once, before each it() is run. If multiple it()s are in one describe(), they do not share state of variables; each it() is reset before running.
  - beforeAll() is called once, before all it() are run. Shares states between it() functions since they are not reset like beforeEach()

## the `this` keyword
- Each beforeEach/it/afterEach has the 'this' as the same empty object, which is set back to empty for the next it()

## Matchers
  - .toBe()
  - .not.toBe()
  - .toEqual() // for numbers, objects, etc
  - .toMatch() // for regular expressions
  - .toBeDefined()
  - .toBeUndefined()
  - .toBeNull()
  - .toBeTruthy()
  - .toBeFalsy()
  - .toContain() // check if array has item
  - .toBeLessThan()
  - .toBeGreatedThan()
  - .toBeCloseTo() // for precision math comparison
  - .toThrow() // tests to see if function throws exception

