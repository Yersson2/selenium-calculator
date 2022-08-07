const { Builder, Browser, By } = require("selenium-webdriver");

const calculator = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get("https://www.calculator.net/percent-calculator.html");
        await driver.manage().window().maximize();
        await driver.findElement(By.xpath("//*[@id='cpar1']")).click();
        await driver.findElement(By.xpath("//*[@id='cpar2']")).click();
        await driver.findElement(By.id("cpar1")).sendKeys("10");
        await driver.findElement(By.id("cpar2")).sendKeys("50");
        await driver
            .findElement(
                By.xpath("//*[@id='content']/table[1]/tbody/tr[2]/td/input[2]")
            )
            .click();
        let result = await driver
            .findElement(By.xpath("//*[@id='content']/p[2]/font/b"))
            .getText();
        // console.log("The result is ", result);
        return parseInt(result);
    } finally {
        await driver.quit();
    }
};

// calculator().then(result => {
//     console.log("The result is ", result);
// })

module.exports = calculator;
