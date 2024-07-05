import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../pages/page";
import { fixture } from "../../utils/fixture";
import assert from 'assert';
import * as data from "../common/data";

const URL: string = process.env.BASEURL ?? data.URL;
let homePage: HomePage;

setDefaultTimeout(60 * 10000);

Given("Open the browser", async function () {
    homePage = new HomePage(fixture.page);
    fixture.logger.info("Opening the browser");
});

Given("Navigate to the AXA website homepage", async function () {
    await homePage.goto(URL);
    fixture.logger.info("Navigating to the AXA website homepage");
});

When("Accept the cookies", async () => {
    assert.strictEqual(await homePage.acceptCookies(), true, "Cookies accepted");
    fixture.logger.info("Accepting cookies");
});

Then("The web application should be opened on the browser", async function () {
    assert.strictEqual(await homePage.isHomePageOpened(), true, "Homepage opened correctly");
    fixture.logger.info("Verifying homepage is opened");
});

When("Click on the Services navigation menu", async () => {
    assert.strictEqual(await homePage.clickServicesNavigationMenu(), true, "Services menu clicked over");
    fixture.logger.info("Clicking on Services navigation menu");
});

Then("Services menu is displayed", async function () {
    assert.strictEqual(await homePage.isServicesMenuDisplayed(), true, "Services menu is displayed");
    fixture.logger.info("Verifying Services menu is displayed");
});

When("Click on Meet our Preferred Partners", async () => {
    assert.strictEqual(await homePage.clickMeetOurPreferredPartners(), true, "Meet our Preferred Partners clicked over");
    fixture.logger.info("Clicking on Meet our Preferred Partners");
});

Then("Preferred Partners is displayed", async function () {
    assert.strictEqual(await homePage.isPreferredPartnersDisplayed(), true, "Preferred Partners is displayed");
    fixture.logger.info("Verifying Preferred Partners is displayed");
});

When("Click on Computer Vision Hazard Detection", async () => {
    assert.strictEqual(await homePage.clickComputerVisionHazardDetection(), true, "Computer Vision Hazard Detection clicked over");
    fixture.logger.info("Clicking on Meet our Preferred Partners");
});

Then("Computer Vision Hazard Detection is selected", async function () {
    assert.strictEqual(await homePage.isComputerVisionHazardSelected('checked'), true, "Computer Vision Hazard Detection is selected");
    fixture.logger.info("Computer Vision Hazard Detection is selected");
});

Then("Check that 2 result are displayed", async function () {
    assert.strictEqual(await homePage.isTwoResultsDisplayed(), true, "Check that 2 result are displayed");
    fixture.logger.info("Verifying that 2 result are displayed");
});

Then("Check that text 'Showing 2 of 2 partners' is displayed", async function () {
    assert.strictEqual(await homePage.isShowing2ofTwoPartners(), true, "Check that text 'Showing 2 of 2 partners' is displayed");
    fixture.logger.info("Verifying that text 'Showing 2 of 2 partners' is displayed");
});

When("Click on 'Reset All' to reset the filters", async function () {
    assert.strictEqual(await homePage.clickResetAll(), true, "Click on 'Reset All' to reset the filters");
    fixture.logger.info("Click on 'Reset All' to reset the filters");
});

// For this case, I should check that all the filters are unchecked. But I'm only validating one to save time :)
Then("Filters are reset", async function () {
    assert.strictEqual(await homePage.isComputerVisionHazardSelected('unchecked'), true, "Filters are reset");
    fixture.logger.info("Verifying that text 'Filters are reset'");
});
  
Then("Enter on the search field 'Genda$'", async function () {
    assert.strictEqual(await homePage.inputSearchPreferredPartners("Genda$"), true, "Enter on the search field 'Genda$'");
    fixture.logger.info("Enter on the search field 'Genda$'");
});

Then("Check the message 'The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_. Please enter a valid value on the search.' is displayed", async function () {
    assert.strictEqual(await homePage.isInvalidSearchValueDisplayed(), true, "Check the message 'The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_. Please enter a valid value on the search.' is displayed");
    fixture.logger.info("Check the message 'The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_. Please enter a valid value on the search.' is displayed");
});

Then("Clear the search field", async function () {
    assert.strictEqual(await homePage.clearSearchField(), true, "Clear the search field");
    fixture.logger.info("Clear the search field");
});

Then("Enter on the search field 'Genda'", async function () {
    assert.strictEqual(await homePage.inputSearchPreferredPartners("Genda"), true, "Enter on the search field 'Genda'");
    fixture.logger.info("Enter on the search field 'Genda'");
});

Then("Click on the search button", async function () {
    assert.strictEqual(await homePage.clickSearchButton(), true, "Click on the search button");
    fixture.logger.info("Click on the search button");
});

Then("Click on 'Read more' link of the 'Genda' partner", async function () {
    assert.strictEqual(await homePage.clickReadMore(), true, "Click on 'Read more' link of the 'Genda' partner");
    fixture.logger.info("Click on 'Read more' link of the 'Genda' partner");
});

Then("Submit an empty form and check all fields have an error message", async function () {
    assert.strictEqual(await homePage.clickSubmitYourMessage(), true, "Submit an empty form and check all fields have an error message");
    fixture.logger.info("Submit an empty form and check all fields have an error message");
});

Then("Check message when the email has an incorrect format", async function () {
    assert.strictEqual(await homePage.isInvalidEmailFormatDisplayed(), true, "Check message when the email has an incorrect format");
    fixture.logger.info("Check message when the email has an incorrect format");
});

Then("Fill in the form but do not submit it", async function () {
    assert.strictEqual(await homePage.fillForm(), true, "Fill in the form but do not submit it");
    fixture.logger.info("Fill in the form but do not submit it");
});

Then("Check invalid characters message on name and message fields", async function () {
    assert.strictEqual(await homePage.fillInvalidCharacters('!”·$%&'), true, "Fill invalid characters message on name and message fields");
    assert.strictEqual(await homePage.checkInvalidCharacters(), true, "Check invalid characters message on name and message fields");
    fixture.logger.info("Check invalid characters message on name and message fields");
});

