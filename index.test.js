const puppeteer = require('puppeteer');

test('la página contiene Hola Mundo', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${process.cwd()}/index.html`);
    const content = await page.content();
    expect(content).toMatch(/Hola Mundo/);
    await browser.close();
});
