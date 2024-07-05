@ui
Feature: Partners UI tests for AXA website homepage
    As a user
    I want to test
    the partners funcionality

    Background: Open the browser and navigate to AXA website homepage
        Given Open the browser
        When Navigate to the AXA website homepage
        Then Accept the cookies
        And The web application should be opened on the browser


    @servicesMenu
    Scenario: Services navigation menu is displayed
        When Click on the Services navigation menu
        Then Services menu is displayed

    @preferredPartners
    Scenario: Preferred Partners is displayed
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Preferred Partners is displayed

    @checkboxComputerVisionSelected
    Scenario: Check Computer Vision selected
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Click on Computer Vision Hazard Detection
        And Computer Vision Hazard Detection is selected

    @2resultsDisplayed
    Scenario: Search for 2 results in Computer Vision Hazard Detection
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Click on Computer Vision Hazard Detection
        And Check that 2 result are displayed
        And Check that text 'Showing 2 of 2 partners' is displayed

    @resetAllFilters
    Scenario: Reset all filters from search
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Click on Computer Vision Hazard Detection
        And Click on 'Reset All' to reset the filters
        And Filters are reset 

    @searchInvalid
    Scenario: Search for invalid Preferred Partner 'Genda$'
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Enter on the search field 'Genda$'
        And Check the message 'The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_. Please enter a valid value on the search.' is displayed
 
    @searchValid
    Scenario: Read more for valid search Preferred Partner 'Genda'
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Click on Computer Vision Hazard Detection
        And Enter on the search field 'Genda$'
        And Clear the search field
        And Enter on the search field 'Genda'
        And Click on the search button
        And Click on 'Read more' link of the 'Genda' partner
    
    @submitInvalidForm
    Scenario Outline: Submit an invalid form for Preferred Partner 'Genda'
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Enter on the search field 'Genda$'
        And Clear the search field
        And Enter on the search field 'Genda'
        And Click on the search button
        And Click on 'Read more' link of the 'Genda' partner
        And <action>

        Examples:
            | action                                                          |
            | Submit an empty form and check all fields have an error message |
            | Check message when the email has an incorrect format            |
            | Check invalid characters message on name and message fields     |

    @fillForm
    Scenario: Fill 'Genda' form but do not submit it
        When Click on the Services navigation menu
        Then Click on Meet our Preferred Partners
        And Enter on the search field 'Genda'
        And Click on the search button
        And Click on 'Read more' link of the 'Genda' partner
        And Fill in the form but do not submit it

    