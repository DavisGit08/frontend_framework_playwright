import { Page } from 'playwright';
import { expect } from '@playwright/test';
import elements from './elements'


export default class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async isHomePageOpened(): Promise<boolean> {
        try {
            await this.page.waitForSelector(elements.TEXT_BANNER_TITLE, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async acceptCookies() {
        try {
            await this.page.click(elements.BUTTON_ACCEPT_COOKIES, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async clickServicesNavigationMenu() {
        try {
            await this.page.click(elements.BUTTON_SERVICES, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async isServicesMenuDisplayed() {
        try {
            await this.page.waitForSelector(elements.TEXT_MEET_OUR_PREFERRED_PARTNERS, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

      async clickMeetOurPreferredPartners() {
        try {
            await this.page.click(elements.TEXT_MEET_OUR_PREFERRED_PARTNERS, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

    async isPreferredPartnersDisplayed() {
        try {
            await this.page.waitForSelector(elements.TEXT_PREFERRED_PARTNER, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async clickComputerVisionHazardDetection() {
        try {
            await this.page.click(elements.TEXT_COMPUTER_VISION_HAZARD_DETECTION, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }
    //I'm only validating one checkbox for this exercise.
      async isComputerVisionHazardSelected(status: 'checked' | 'unchecked') {
        try {
          if (status === 'checked') {
            await this.page.waitForFunction(
              () => {
                const element = document.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
                return element !== null && element.checked === true;
              },);
          } else if (status === 'unchecked') {
            await this.page.waitForFunction(
              () => {
                const element = document.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
                return element !== null && element.checked === false;
              },);
          } else {
            throw new Error(`Invalid status value: ${status}`);
          }
          return true;
        } catch (error) {
          console.error('Error durante la espera del estado del checkbox:', error);
          throw error;
        }
      }

    async isTwoResultsDisplayed() {
        try {
            await this.page.waitForTimeout(1000); // There's a better way to do it, just checking the expected result inside a loop.
            await this.page.waitForSelector(elements.DIV_SEARCH_RESULTS, { timeout: 10000 });
            const element = await this.page.$$(elements.DIV_SEARCH_RESULTS);
            expect(element.length).toBe(2);
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async isShowing2ofTwoPartners() {
        try {
            await expect(this.page.locator(elements.TEXT_SEARCH_RESULTS)).toContainText('Showing 2 of 2');
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async clickResetAll() {
        try {
            await this.page.click(elements.BUTTON_RESET_ALL, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }
    
      async inputSearchPreferredPartners(input: string) {
        try {
            await this.page.fill(elements.INPUT_SEARCH_PREFERRED_PARTNERS, input, { timeout: 10000 })
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async isInvalidSearchValueDisplayed() {
        try {
            await expect(this.page.locator(elements.TEXT_DIV_MESSAGE)).toHaveText(`The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_'. Please enter a valid value on the search.`);
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

      async clickSearchButton() {
        try {
            await this.page.click(elements.BUTTON_SEARCH, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async clearSearchField() {
        try {
            await this.page.fill(elements.INPUT_SEARCH_PREFERRED_PARTNERS, "", { timeout: 10000 })
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async clickReadMore() {
        try {
            await this.page.click(elements.LINK_READ_MORE, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }

      async clickSubmitYourMessage() {
        try {
            await this.page.click(elements.BUTTON_SUBMIT_YOUR_MESSAGE, { timeout: 10000 });
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
      }
      
      async isInvalidEmailFormatDisplayed() {
        try {
            await expect(this.page.locator(elements.TEXT_INVALID_EMAIL_FORMAT)).toHaveText("The email can't be empty. Please enter a valid email");
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async fillForm() {
        try {
            await this.page.type(elements.INPUT_REQUEST_NAME, 'test', { timeout: 10000 });
            await this.page.type(elements.INPUT_REQUEST_EMAIL, 'test@test.com');
            await this.page.selectOption(elements.INPUT_REQUEST_COUNTRY, { value: 'ES' });
            await this.page.type(elements.INPUT_REQUEST_MESSAGE, 'Hello, Im a test.');
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async fillInvalidCharacters(input: string) {
        try {
            await this.page.type(elements.INPUT_REQUEST_NAME, input, { timeout: 10000 });
            await this.page.type(elements.INPUT_REQUEST_MESSAGE, input, { timeout: 10000 });
            await this.page.click(elements.BUTTON_SUBMIT_YOUR_MESSAGE);
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }

    async checkInvalidCharacters() {
        try {
            const errorMessageName = await this.page.textContent(elements.TEXT_INVALID_EMAIL_NAME);
            const errorMessageMessage = await this.page.textContent(elements.TEXT_INVALID_EMAIL_MESSAGE);
            if (errorMessageName && errorMessageMessage){
                const trimErrorMessageName = errorMessageName.trim();
                expect(trimErrorMessageName).toContain('and the special characters')
                const trimmedErrorMessage = errorMessageMessage.trim();
                expect(trimmedErrorMessage).toContain('and the special characters')
            }
            return true;
        } catch (error){
            console.error(error)
            return false;
        }
    }
}
