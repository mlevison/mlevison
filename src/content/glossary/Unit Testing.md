**Unit Testing** is an approach to test small, isolated chunks of code that prove whether the method did what the developer intended when the test was written. This means testing only one specific aspect or path, through a single method, producing one result. [^1] Since most methods have multiple paths through them, they need multiple tests.

**Unit Testing doesn't guarantee no bugs, nor is it a replacement for other kinds of testing.** Instead, a Unit Test is simply a tool to help a developer discover if they built what they intended to. If their intentions weren't correct, a Unit Test won't catch that, so they have only a limited effect on quality. 

Unit Testing forces us to think through more of the edge cases when we're building out the unit tests. As a result, the number of bugs is reduced. Unit Testing also makes it safer to make changes, especially refactorings since the test cases help prove the refactoring doesn't affect the existing behaviour.

Running Unit Tests frequently (usually every 10 -15 minutes) will give quick feedback if changes have harmed the behaviour of some other part of the code.

<!-- Not sure where this example should go --> 
Example class is handling a user ordering books from a book store. Input has been validated else where, so the test cases just need to cover the functionality.

When creating test cases, consider:
- Happy Path - Order one book; Order two books; Order many books; Order multiple copies of the same book
- Inflection Points - Order more than 5 books free shipping; Order more than 10 books, get one book free 
- Edge Cases or Boundary Conditions - O books ordered; 1000 books ordered;
- Exceptional Conditions - payment failed; 

## Attributes of Good Tests
- **Readability** - The name must tell the reader at a glance what is being tested. Furthermore, when a test failure is logged, the name should make it easy to understand what's going on.
- **Organization** - Arrange, Act, Assert: **Arrange** everything so the test is ready to run. **Act** - call the method or operation being tested. **Assert** - the expected result was received.
- **Fast Tests** - If our tests take more than a few seconds to run, we will run them less often. Interactions with the Internet; LAN; Database; or filesystem slow our tests down. In the age of modern SSDs, a few filesystem tests are probably not bad, however if there are many, their runtime will dominate the time it takes for the tests to finish.
- **Narrow** - Investigating failure is quick since each test case tests only one logical thing even if requires multiple asserts. *Example*: In testing a bank balance transfer from one account to another, testing that one account is decremented and the other incremented is one logical thing (a transaction), which may require two assert statements. *Ideally in this case we would use extensible assertions like AssertJ*.
```
assertThat(fellowshipOfTheRing).hasSize(9)
	.contains(frodo, sam)
	.doesNotContain(sauron);
```
- **Repeatable** - Both **Deterministic** (same result every time they're run) and **Clean** (they don't leave messes behind on the filesystem or database)
- **Isolated** - Tests should not rely on the order they're run in, nor should they rely on a previous test to leave the system (filesystem, database, ...) in a known state.
  
## Test Smells
*Like Code Smells, but for Unit Tests. It's possible to make it hard for the people follow to read your Unit Tests* <!-- Will readers understand what this means -->
- Logic in tests
- Tests with no assertions
- Multiple lines to assert a single thing
- Testing multiple concepts in a single test case

*Not everything written in UnitTest tool (e.g. JUnit, NUnit, Jest or ...)  is a Unit Test. These tools have a good test runner, IDE Integration, test reporting and support from CI tools. So other types of tests are often automated with these tools: API Tests; Integration Tests and even BDD style Acceptance Tests. To improve clarity and keep the unit tests clear, it is a good idea to organize them into separate groups or folders.*

## Resource Links:
- Choosing the right JavaScript testing tool
- Code from Practical Unit Testing with JUnit and Mockito
- Database UnitTesting Framework for SQL Server
- Don't Measure Unit Test Code Coverage
- F.I.R.S.T. Unit Testing Principles
- Improve Your Unit Testing 12 Ways
- Improving On assertEquals with JUnit and Hamcrest
- Infinitest
- JUnit's Built-in Hamcrest Core Matcher Support
- Multiple Asserts Are OK
- Real world mutation testing
- Test Driven Databases
- UnitTest (by Martin Fowler)
- Unit Testing (from the book *Software Engineering at Google*)

## Unit Testing Books:
- *Pragmatic Unit Testing in Java with JUnit, 3rd Edition* by Jeff Langr, Andy Hunt, Dave Thomas
- *Pragmatic Unit Testing in C# with NUnit* by Andy Hunt, Dave Thomas
- *xUnit Test Patterns: Refactoring Test Code* by Gerard Meszaros
- *The Art of Unit Testing: with Examples in .NET* by Roy Osherove

## Related
- Agile Testing
- Code Smells
---
[^1]: From @TimOttinger [F.I.R.S.T. Unit Testing Principles](https://agileinaflash.blogspot.com/2009/02/first.html)