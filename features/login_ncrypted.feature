Feature: login to ncryptedcloud

  Scenario: login to ncryptedcloud
    Given I am on the login page
    Then the title should equal "Dropbox Encryption & Security, HIPAA Compliant, Encrypted Cloud Storage | nCrypted Cloud"
    Then I input my email "****" and password "****"
    Then I am logged in the portal and my current URL is "https://www.ncryptedcloud.com/cloudwebportal/auth/"
    When I click "Connect" near Dropbox image
    Then I am redirected to Dropbox authorization page
    When I authorize my Dropbox account
    And Dropbox icon with my credentials would appear in dropdown.
    Then I would see files and folder listing
    Then I open image file
    Then Close file

