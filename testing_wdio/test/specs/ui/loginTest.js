describe('Laravel Project Testing', () => { 
  it('should not login with empty email and empty password', async () => {
      await testLogin('', '', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should not login with valid email and invalid password', async () => {
      await testLogin('wiliam@gmail.com', 'masnida', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should not login with invalid email and valid password', async () => {
      await testLogin('william@gmail.com', '12345678', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should not login with invalid email and invalid password', async () => {
      await testLogin('william@gmail.com', 'masnidaa', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should not login with empty email and valid password', async () => {
      await testLogin('', '12345678', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should not login with valid email and empty password', async () => {
      await testLogin('wiliam@gmail.com', '', 'http://127.0.0.1:8000/login');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/login');
  });

  it('should login with valid email and valid password', async () => {
      await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
      await pauseFor5Seconds();
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toBe('http://127.0.0.1:8000/home');
  });
});

async function testLogin(email, password, expectedUrl) {
  await browser.url('http://127.0.0.1:8000/login');
  const emailInput = await $('#email');
  const passwordInput = await $('#password');

  await emailInput.setValue(email);
  await passwordInput.setValue(password);

  const loginButton = await $('button[type="submit"]');
  await loginButton.click();

  await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
  await browser.pause(5000); // Pause for 5 seconds
}
