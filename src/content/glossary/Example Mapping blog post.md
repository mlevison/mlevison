# Example Mapping: Your Secret Weapon for Effective Acceptance Criteria
**Example mapping** is a collaborative technique for a team to take a User Story (or PBI) and have a deeper conversation to clarify their understanding of it. The conversation generates the [Acceptance Criteria](https://agilepainrelief.com/glossary/acceptance-criteria). (Acceptance Criteria is the generic idea - Example Mapping is the approach I generally recommend.)

We need an example. Let's pretend that we're building an app to reconcile store receipts with month end credit card statements. We're doing it because it was boring and time consuming to do it manually. The system has the job of categorizing our spending for future analysis.

The simplest part of the system is to make scanned receipts reconcile against an item on the credit card statement.
"As a conscious spender I want to match a single receipt against the equivalent transaction on my credit card, so that I know my credit card bill is accurate."

Let’s assume these are the rules we’ve put in place:
•	We match on date and amount. Not store, since store names vary wildly between credit statement and receipts.
•	We match on a date up to 3 days before/after, since stores sometimes take days to upload their transactions to the credit card company.
•	We ensure that refunds happened.

Work a single Backlog Item at a time, and limit to a short amount of time to keep people engaged. Work from the User Story -> Rule(s) -> Examples. When in doubt, write Questions.

## Core Idea
Start with a User Story
•	Write the **Rule(s)** that express a single constraint or need
•	Write **Examples** that illustrate each rule, each example proving one (and only one) point
•	Create **Questions** when the team is unsure or there is debate

There isn't any correct order. Sometimes when a team is stuck trying to define a rule, I ask them to give an example or two. Then we can derive the rule from the example.

## Suggestions
•	Discover something that doesn't fit the original user story. Keep the original small and write a new Story.
•	Just write examples. Don't write Gherkin or automated test specs here – they’re clunky and time-consuming. Consider doing that with a pairing partner offline. (e.g. Given/When/Then Specs)
•	After 25 minutes pause and ask, “Is this ready for development?”
•	The Examples help explore the edge cases.
•	Avoid jargon. As much as possible, write examples in the language of the end users.
•	Effectively, the team is replacing most/all of Backlog Refinement with these example sessions.
•	Try to have a minimum of three different perspectives: Business; Development and Test. More team members involved is generally better.
•	The original version of Example Mapping was done with coloured cards: Yellow for User Stories; Blue for Rules; Green for Examples; and Red for Questions. However, the magic is in the conversation and not the colour of the cards.
•	Remote teams can use tools such as Mural or Miro, and even MS Whiteboard supports coloured "index" cards. In a pinch, Google Sheets works as well.
•	If a team finds a lot of ambiguity or questions, then the User Story/PBI is ill-understood. Instead of bringing it to Sprint Planning, someone needs to work with the client/stakeholder to dig further into the real need.
•	If there are a lot of rules (more than 3-4), then perhaps the item is too big. Consider splitting it into smaller parts. The Rules/Examples often make good splitting criteria.

## Benefits
•	Reduces Risk of feature creep - we identify that we shouldn't add things that the examples don't justify
•	Identifies Questions or ill-understood areas before work starts on an item
•	Most Assumptions are clarified before we start work on the item
•	Reduces Defects - clear examples make it easier to write test cases (especially automated tests)
•	Reduces Finger Pointing - when features are built in a more adhoc fashion there can be a lot of finger pointing when the tester finds a defect. Especially when found late in the game, blame is faster than fixing the underlying issue.
•	Splitting is easier - large product backlog items become clearly identified and split into smaller parts. Rules/Examples often make the best splitting criteria.


Original idea from [Matt Wynne](https://cucumber.io/blog/bdd/example-mapping-introduction/). (*Bonus: I learned that Friends episodes can be named, "The one where…"*)