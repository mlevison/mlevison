---
share_link: https://share.note.sx/ycb5cae2#XGZeZcvroWRROSsuJM1OHa8N3GDTT1HeOn4LBkgCOdQ
share_updated: 2024-10-08T16:14:13-04:00
---
Unit Testing is an approach to test small, isolated chunks of code. This means a single path within one method that produces one result. Since most methods have multiple paths through them, they need multiple tests.

*Unit Testing doesn't guarantee no bugs, nor is it a replacement for other kinds of testing. Instead, it forces us to think through more of the edge cases when we're building out the unit tests. As a result of thinking through the test cases, Unit Testing reduces the number of bugs. Unit Testing also makes it safer to make changes, especially refactorings since the test cases help prove the refactoring doesn't affect the existing behaviour.

When creating test cases, consider: Happy Path; Edge Cases or Boundary Conditions; Inflection points and Exceptional Conditions.

## Attributes of Good Tests
- **Readability** - The name must tell the reader at a glance what is being tested. Furthermore, when a test failure is logged, the name should make it easy to understand what's going on.
- **Organization** - Arrange, Act, Assert: Arrange everything so the test is ready to run. Act - call the method or operation being tested. Assert - the expected result was received.
- **Fast Tests** - If our tests take more than a few seconds to run, we will run them less often. Interactions with the Internet; LAN; Database; or filesystem slow our tests down. In the age of modern SSDs, a few filesystem tests are probably not bad, however if there are many their runtime will dominate the time it takes for the tests to finish.
- **Narrow** - investigating failure is quick since each test case, testing only one logical thing even if requires multiple asserts. *Example* In testing a bank balance transfer from one account to another, testing that one account is decremented and the other incremented is one logical thing (a transaction), which may require two assert statements. *Ideally in this case we would use extensible assertions like AssertJ*
```
assertThat(fellowshipOfTheRing).hasSize(9)
	.contains(frodo, sam)
	.doesNotContain(sauron);
```
- **Repeatable** - Both: Deterministic - same result every time they're run and Clean - they don't leave messes behind on the filesystem or database
- **Isolated** - Tests should not rely on the order they're run in, nor should they rely on a previous test to leave the system (filesystem, database, ...) in a known state
## Test Smells
- Logic in tests
- Tests with no assertions
- Multiple Lines to Assert a Single thing

*Not everything written in UnitTest tool (i.e. JUnit, NUnit, Jest or ...)  is a Unit Test. These tools have a good test runner, IDE Integration, test reporting and support from CI tools. So other types of tests are often automated with these tools: API Tests; Integration Tests and even BDD style Acceptance Tests. To improve clarity and keep the unit tests clear, it is a good idea to organize them into separate groups or folders.*
## Related
- [[Classifying Tests]]