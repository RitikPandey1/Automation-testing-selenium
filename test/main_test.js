const { Builder, By } = require('selenium-webdriver');
const geckodriver = require('geckodriver');
const axios = require('axios');
const assert = require('assert');

describe('Automated Testing For SparksFoundation Website', function () {
	let driver;

	// setting up browser
	before(async function () {
		this.timeout(25000);
		driver = await new Builder().forBrowser('firefox').build();
		await driver.manage().window().maximize();
		await driver.get('https://www.thesparksfoundationsingapore.org/');
	});

	describe('Test for "home" page', function () {
		it('Check youtube video  link', async function () {
			this.timeout(5000);
			const iframe = await driver.findElement(
				By.xpath('//*[@id="youtube-video"]')
			);
			const link = await iframe.getAttribute('src');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});

		it('Check header logo', async function () {
			this.timeout(5000);
			const header = await driver.findElement(By.css('.top-header-agile'));
			const logo = await header.findElement(By.css('img'));
			const logoSrc = await logo.getAttribute('src');
			const response = await axios.get(logoSrc);
			assert.strictEqual(response.status, 200);
		});
	});

	describe('Test for "contact us" page', function () {
		it('Check map link in contact us page', async function () {
			this.timeout(10000);

			await driver.get(
				'https://www.thesparksfoundationsingapore.org/contact-us/'
			);
			const mapIframe = driver.findElement(By.css('.map-agileits > iframe'));
			const mapLink = await mapIframe.getAttribute('src');
			const response = await axios.get(mapLink);
			assert.strictEqual(response.status, 200);
		});
	});

	describe('Test for "policies" page', function () {
		it('Check main headings of policies page', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/policies-and-code/policies/'
			);
			const heading1 = await driver
				.findElement(By.xpath('//*[@id="home"]/div/div[2]/h2'))
				.getText();

			assert.strictEqual(heading1, 'Policies');

			const heading2 = await driver
				.findElement(
					By.xpath('/html/body/div[2]/div/div[1]/div/div[1]/h3/span')
				)
				.getText();

			assert.strictEqual(
				heading2,
				'Summary Of Important Policies At The Sparks Foundation'
			);
		});
	});

	describe('Test for "workshop" page', function () {
		it('Check "Resume Writing" workshop link', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/programs/workshops/'
			);

			const workshopLink = await driver.findElement(
				By.xpath(
					'/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/div[3]/div/a'
				)
			);
			const link = await workshopLink.getAttribute('href');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});

		it('Check "Glimpses for Kids" workshop link', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/programs/workshops/'
			);

			const workshopLink = await driver.findElement(
				By.xpath(
					'/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/div[1]/div/a'
				)
			);
			const link = await workshopLink.getAttribute('href');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});

		it('Check "LINKS App" workshop link', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/programs/workshops/'
			);

			const workshopLink = await driver.findElement(
				By.xpath(
					'/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/div[2]/div/a'
				)
			);
			const link = await workshopLink.getAttribute('href');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});

		it('Check "Career Choices" workshop link', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/programs/workshops/'
			);

			const workshopLink = await driver.findElement(
				By.xpath(
					'/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/div[4]/div/a'
				)
			);
			const link = await workshopLink.getAttribute('href');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});

		it('Check "Global Education Choices" workshop link', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/programs/workshops/'
			);

			const workshopLink = await driver.findElement(
				By.xpath(
					'/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/div[5]/div/a'
				)
			);
			const link = await workshopLink.getAttribute('href');
			const response = await axios.get(link);
			assert.strictEqual(response.status, 200);
		});
	});

	describe('Test for "ai in education" page', function () {
		it('Check link : "Artificial Intelligence In Education: Don\'t Ignore It, Harness It!"', async function () {
			this.timeout(5000);
			await driver.get(
				'https://www.thesparksfoundationsingapore.org/links/ai-in-education/'
			);

			const blogLink1 = await driver.findElement(
				By.xpath('/html/body/div[2]/div/div[1]/div/div[1]/div/div/div[1]/div/a')
			);
			const link1 = await blogLink1.getAttribute('href');
			const response1 = await axios.get(link1);
			assert.strictEqual(response1.status, 200);
		});

		it('Check link : "Can AI fix education? We asked Bill Gates"', async function () {
			this.timeout(5000);
			const blogLink2 = await driver.findElement(
				By.xpath('/html/body/div[2]/div/div[1]/div/div[1]/div/div/div[2]/div/a')
			);
			const link2 = await blogLink2.getAttribute('href');
			const response2 = await axios.get(link2);
			assert.strictEqual(response2.status, 200);
		});
	});

	// closing browser
	after(function () {
		driver.quit();
	});
});
