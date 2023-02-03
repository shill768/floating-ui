import {expect, test} from '@playwright/test';

import {click} from './utils/click';

test('top-start', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-start"]`);

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `top-start.png`
  );
});

test('bottom-start', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-start"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 610;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `bottom-start.png`
  );
});

test('right-start', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-start"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `right-start.png`
  );
});

test('left-start', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-start"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `left-start.png`
  );
});

test('top', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `top.png`
  );
});

test('bottom', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 650;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `bottom.png`
  );
});

test('right', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 600;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `right.png`
  );
});

test('left', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 400;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `left.png`
  );
});

test('top-end', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-end"]`);

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `top-end.png`
  );
});

test('bottom-end', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-end"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 610;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `bottom-end.png`
  );
});

test('right-end', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-end"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `right-end.png`
  );
});

test('left-end', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-end"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `left-end.png`
  );
});

test('only top, bottom allowed', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);
  await click(page, `[data-testid="allowedPlacements-top,bottom"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 700;
      scroll.scrollTop = 650;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `allowedPlacements-bottom.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 700;
      scroll.scrollTop = 500;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `allowedPlacements-top.png`
  );
});

test('only left, right allowed', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);
  await click(page, `[data-testid="allowedPlacements-left,right"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
      scroll.scrollTop = 750;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `allowedPlacements-right.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 500;
      scroll.scrollTop = 750;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `allowedPlacements-left.png`
  );
});

test('most space for crossAxis', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="crossAxis-true"]`);
  await click(
    page,
    `[data-testid="allowedPlacements-top-start,top-end,bottom-start,bottom-end"]`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 525;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `crossAxis-top-start.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 550;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `crossAxis-top-end.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 650;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `crossAxis-bottom-end.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 500;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `crossAxis-bottom-start.png`
  );
});

test('placement does not reset', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(
    page,
    `[data-testid="allowedPlacements-top-start,top-end,bottom-start,bottom-end"]`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 800;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `reset-top-end.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 650;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `reset-bottom-end.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 250;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `reset-bottom-start.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 500;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `reset-top-start.png`
  );
});

test('placement is not sticky', async ({page}) => {
  await page.goto('http://localhost:1234/autoPlacement');
  await click(page, `[data-testid="alignment-null"]`);
  await click(page, `[data-testid="shift-true"]`);

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollTop = 705;
      scroll.scrollLeft = 700;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `sticky-bottom.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 700;
      scroll.scrollTop = 350;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `sticky-top.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 750;
      scroll.scrollTop = 725;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `sticky-right-1.png`
  );

  await page.evaluate(() => {
    const scroll = document.querySelector('.scroll');
    if (scroll) {
      scroll.scrollLeft = 750;
      scroll.scrollTop = 350;
    }
  });

  expect(await page.locator('.container').screenshot()).toMatchSnapshot(
    `sticky-right-2.png`
  );
});
