Feature file:
    is a file which contains all testcases related to a particular feature.
    ALWAYS starts with Feature-keyword or any-tag.

Feature:
    represents the test-suite (or, represent the feature we are testing)

Scenario:
    represents each testcase
    In scenario, we write test-steps using Gherkin language
    Given -> for stepss which are related to the set-up of the actual testcase
    When -> for steps which are related to actual steps on the testcase
    Then -> for steps which are related to verification
    And -> instead of using Given,When or Then simultaneously we use And-keyword

Step-Definition:
    Js-file contains async function related to each Gherkin line

Glue code:
    regular expression which links a gherkin line with a particular async-function
