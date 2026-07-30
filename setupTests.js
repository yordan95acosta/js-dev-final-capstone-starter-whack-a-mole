beforeAll(() => {

  if (!page.waitForTimeout) {

    page.waitForTimeout = (milliseconds) =>
      new Promise(resolve => setTimeout(resolve, milliseconds));

  }

});