
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('add to duo button should work giving div id',async ()=> {
    await driver.findElement(By. id('draw')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css('.bot-btn')).click();
    await driver.sleep(2000);
    const duoDiv = await driver.findElement(By.id('player-duo'));
    expect(duoDiv.isDisplayed()).toBeTruthy();
})

test('clicking the draw button displays the div with id of choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click() 
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    
    expect(displayed).toBe(true)
})