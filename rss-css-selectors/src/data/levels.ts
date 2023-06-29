export const levels = [
  {
    helpTitle: 'Select elements by their tag',
    selectorName: 'Type Selector',
    doThis: 'Select the apple',
    selector: 'apple',
    syntax: 'A',
    help: 'Selects all elements of type A. Type refers to the type of tag, so <div></div>, <p></p> and <ul></ul> are all different element types.',
    examples: ['div selects all div elements', 'p selects all p elements'],
    boardMarkup: `
    <tree>
      <branch>
        <apple>
      </branch>
      <branch></branch>
      <branch></branch>
      <branch></branch>
    </tree>
      `
  },
  {
    helpTitle: 'Select elements by their tag',
    selectorName: 'Type Selector',
    doThis: 'Select the bananas',
    selector: 'banana',
    syntax: 'A',
    help: 'Selects all elements of type A. Type refers to the type of tag, so <div></div>, <p></p> and <ul></ul> are all different element types.',
    examples: ['div selects all div elements', 'p selects all p elements'],
    boardMarkup: `
      <branch>
        <banana>
      </branch>
      <branch>
        <banana>
      </branch>
      <branch></branch>
      <branch></branch>
      `
  },
  {
    helpTitle: 'Select elements with an ID',
    selectorName: 'ID Selector',
    doThis: 'Select the mango',
    selector: '#mango',
    syntax: '#id',
    help: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
    examples: [
      '#cool selects any element with id="cool"',
      'ul#long selects ul id="long"'
    ],
    boardMarkup: `
    <branch></branch>
    <branch>
        <mango id="mango">
    </branch>
    <branch>
        <mango id="mango">
    </branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select the elements inside another elements',
    selectorName: 'Descendant Selector',
    doThis: 'Select the butterfly on the leaf and the bee in the beehive',
    selector: 'beehive bee, leaf butterfly',
    syntax: 'A B',
    help: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
    examples: [
      'p&nbsp;&nbsp;strong selects all strong elements that are inside of any p',
      '#fancy&nbsp;&nbsp;span selects any span elements that are inside of the element with id="fancy"'
    ],
    boardMarkup: `
    <branch>
      <beehive>
        <bee>
      </beehive>
    </branch>
    <branch></branch>
    <branch></branch>
    <branch>
      <leaf>
        <butterfly>
      </leaf>
    </branch>
      `
  },
  {
    helpTitle: 'Select direct children of an element',
    selectorName: 'Child Selector',
    doThis: 'Select the sparrow directly in the birdhouse by class',
    selector: '.birdhouse > .sparrow',
    syntax: '.classnameA > .classnameB',
    help: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. Elements that are nested deeper than that are called descendant elements.',
    examples: ['A > B selects all B that are a direct children A'],
    boardMarkup: `
    <branch></branch>
    <branch>
      <birdhouse class='birdhouse'>
        <sparrow class='sparrow'>
      </birdhouse class='birdhouse'>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Combine the Class & ID Selectors',
    selectorName: 'Class & ID Selectors',
    doThis: 'Select the ladybugs on the leaves',
    selector: '#leaf .ladybug',
    syntax: '#id .classname',
    help: 'You can combine any selector with the descendent selector.',
    examples: [
      '#cool&nbsp;span selects all span elements that are inside of elements with id="cool"'
    ],
    boardMarkup: `
    <branch></branch>
    <branch>
      <leaf id="leaf">
        <ladybug class='ladybug'>
      </leaf>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select elements by their class',
    selectorName: 'Class Selector',
    doThis: 'Select the cherries',
    selector: '.cherry',
    syntax: '.classname',
    help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: ['.neato selects all elements with class="neato"'],
    boardMarkup: `
    <branch>
      <cherry class='cherry'>
    </branch>
    <branch>
      <cherry class='cherry'>
    </branch>
    <branch>
      <cherry class='cherry'>
    </branch>
    <branch>
      <cherry class='cherry'>
    </branch>
      `
  },
  {
    helpTitle: 'Combine the Class Selector',
    selectorName: 'Tag Class Selector',
    doThis: 'Select the green bananas',
    selector: 'banana .banana_green',
    syntax: 'A.className',
    help: 'You can combine the class selector with other selectors, like the tag selector.',
    examples: [
      'ul.important selects all ul elements that have class="important"',
      '#big.wide selects all elements with id="big" that also have class="wide"'
    ],
    boardMarkup: `
    <branch>
      <banana class="yellow">
      <banana class="green">
    </branch>
    <branch>
      <banana class="yellow">
    </branch>
    <branch>
      <banana class="yellow">
    </branch>
    <branch>
      <banana class="green">
    </branch>
    `
  },
  {
    helpTitle: 'Combine, selectors, with... commas!',
    selectorName: 'Comma Combinator',
    doThis:
      'Select all the bees, ladybugs and blue butterflies by their classes',
    selector: '.bee, .ladybug, .butterfly_blue',
    syntax: 'A, B',
    help: 'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      'p, .fun selects all p elements as well as all elements with class="fun"',
      'a, p, div selects all a, p and div elements'
    ],
    boardMarkup: `
    <branch>
      <butterfly class="butterfly_blue">
      <butterfly class="butterfly_purple">
    </branch>
    <branch>
      <bee class="bee">
      <bee class="bee">
    </branch>
    <branch>
      <butterfly class="butterfly_purple">
      <butterfly class="butterfly_blue">
      <ladybug class="ladybug">
    </branch>
    <branch>
      <bee class="bee">
    </branch>
      `
  },
  {
    helpTitle: 'You can select everything!',
    selectorName: 'The Universal Selector',
    doThis: 'Select all the things!',
    selector: '*',
    syntax: '*',
    help: 'You can select all elements with the universal selector!',
    examples: ['p * selects any element inside all p elements.'],
    boardMarkup: `
    <branch>
      <banana>
      <cherry>
    </branch>
    <branch>
      <mango>
      <dumpling>
    </branch>
    <branch>
      <pear>
    </branch>
    <branch>
      <apple>
    </branch>
      `
  },
  {
    helpTitle: 'Combine the Universal Selector',
    selectorName: 'Select all',
    doThis: 'Select everything on a leaf',
    selector: 'leaf *',
    syntax: 'A *',
    help: 'This selects all elements inside of A.',
    examples: [
      'p * selects every element inside all p elements.',
      'ul.fancy * selects every element inside all ul class="fancy" elements.'
    ],
    boardMarkup: `
    <branch>
      <leaf>
        <ladybug>
      </leaf>
    </branch>
    <branch></branch>
    <branch></branch>
    <branch>
      <leaf>
        <bee>
      </leaf>
    </branch>
    `
  },
  {
    helpTitle: 'Select an element that directly follows another element',
    selectorName: 'Adjacent Sibling Selector',
    doThis: "Select every mango that's next to an apple",
    selector: 'apple + mango',
    syntax: 'A + B',
    help: "This selects all B elements that directly follow A. Elements that follow one another are called siblings. They're on the same level, or depth. In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples: [
      'p + .intro selects every element with class="intro" that directly follows a p',
      'div + a selects every a element that directly follows a div'
    ],
    boardMarkup: `
    <branch>
      <cherry>
      <apple>
      <mango>
    </branch>
    <branch>
      <mango>
      <apple>
      <mango>
    </branch>
    <branch>
      <apple>
      <apple>
      <mango>
      <pear>
    </branch>
    <branch>
      <apple>
      <mango>
      <mango>
    </branch>
      `
  },
  {
    helpTitle: 'Select elements that follows another element',
    selectorName: 'General Sibling Selector',
    doThis: 'Select the pears next to the strawberries by class',
    selector: '.strawberry ~ .pear',
    syntax: '.classnameA ~ .classnameB',
    help: 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
    examples: ['A ~ B selects all B that follow a A'],
    boardMarkup: `
    <branch></branch>
    <branch></branch>
    <branch>
      <pear class='pear'>
      <strawberry class='strawberry'>
      <pear class='pear'>
      <pear class='pear'>
      <pear class='pear'>
    </branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select a first child element inside of another element',
    selectorName: 'First Child Pseudo-selector',
    doThis: 'Select the top mango and banana',
    selector: 'mango:first-child, banana:first-child',
    syntax: ':first-child',
    help: 'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
    examples: [
      ':first-child selects all first child elements.',
      'p:first-child selects all first child p elements.',
      'div p:first-child selects all first child p elements that are in a div.'
    ],
    boardMarkup: `
    <branch>
      <mango>
      <mango>
      <mango>
    </branch>
    <branch>
      <banana>
      <banana>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select the last element inside of another element',
    selectorName: 'Last Child Pseudo-selector',
    doThis: 'Select the blue butterfly by class',
    selector: '.butterfly_blue:last-child',
    syntax: ':last-child',
    help: 'You can use this selector to select an element that is the last child element inside of another element. In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
    examples: [
      ':last-child selects all last-child elements.',
      'span:last-child selects all last-child span elements.',
      'ul li:last-child selects the last li elements inside of any ul.'
    ],
    boardMarkup: `
    <branch>
      <butterfly class="butterfly_blue">
      <butterfly class="butterfly_blue">
      <butterfly class="butterfly_blue">
    </branch>
    <branch></branch>
    <branch></branch>
    <branch>
      <butterfly class="butterfly_purple">
      <butterfly class="butterfly_blue">
      <butterfly class="butterfly_purple">
    </branch>
    `
  },
  {
    helpTitle: 'Select all elements except last',
    selectorName: 'Not last child selector',
    doThis: 'Select not last dumplings by their class',
    selector: '.dumpling:not(:last-child)',
    syntax: ':not(:last-child)',
    help: "Selects elements that don't have any other elements inside of them.",
    examples: ['div:empty selects all empty div elements.'],
    boardMarkup: `
    <branch>
      <dumpling class="dumpling">
      <dumpling class="dumpling">
      <dumpling class="dumpling">
    </branch>
    <branch></branch>
    <branch>
      <dumpling class="dumpling">
      <dumpling class="dumpling">
      <dumpling class="dumpling">
      <dumpling class="dumpling">
      <dumpling class="dumpling">
    </branch>
    <branch></branch>
  `
  },
  {
    selectorName: 'Empty Selector',
    helpTitle: "Select elements that don't have children",
    doThis: 'Select by class the empty beehives and birdhouses',
    selector: '.birdhouse:empty, .beehive:empty',
    syntax: ':empty',
    help: "Selects elements that don't have any other elements inside of them.",
    examples: ['div:empty selects all empty div elements.'],
    boardMarkup: `
    <branch>
      <birdhouse class="birdhouse">
        <sparrow>
      </birdhouse>
      <beehive class="beehive">
      </beehive>
      <beehive class="beehive">
        <bee>
      </beehive>
    </branch>
    <branch>
      <birdhouse class="birdhouse">
        <sparrow>
      </birdhouse>
      <birdhouse class="birdhouse">
        <sparrow>
      </birdhouse>
      <beehive class="beehive">
        <bee>
      </beehive>
    </branch>
    <branch>
      <birdhouse class="birdhouse">
        <sparrow>
      </birdhouse>
      <beehive class="beehive">
        <bee>
      </beehive>
    </birdhouse>
    </branch>
    <branch>
      <beehive class="beehive">
      </beehive>
      <beehive class="beehive">
        <bee>
      </beehive>
      <birdhouse class="birdhouse">
      </birdhouse>
    </branch>
      `
  },
  {
    helpTitle: 'Select all elements that have a specific attribute',
    selectorName: 'Attribute Selector',
    doThis: 'Select the items for fun by class',
    selector: '[for="fun"]',
    syntax: '[attribute]',
    help: 'Attributes appear inside the opening tag of an element, like this: <span attribute="value"></span>. An attribute does not always have a value, it can be blank!',
    examples: [
      'a[href] selects all a elements that have a href="anything" attribute.',
      '[type] selects all elements that have a type="anything". attribute'
    ],
    boardMarkup: `
    <branch>
      <cherry for="fun">
      <pear for="fun">
    </branch>
    <branch>
      <strawberry for="fun">
    </branch>
    <branch>
      <mango for="fun">
      <mango>
    </branch>
    <branch>
      <banana>
      <banana for="fun">
      <banana>
    </branch>
    `
  },
  {
    helpTitle:
      'Select all elements with an attribute value that starts with specific characters',
    selectorName: 'Attribute Starts With Selector',
    doThis: "Select the meals for name that starts with 'qe'",
    selector: '[for^="qe"]',
    syntax: '[attribute*="value"]',
    help: 'A useful selector if you can identify a common pattern in things like class, href or src attributes.',
    examples: [
      'img[src*="/thumbnails/"] selects all image elements that show images from the "thumbnails" folder.',
      '[class*="heading"] selects all elements with "heading" in their class, like class="main-heading" and class="sub-heading"'
    ],
    boardMarkup: `
    <branch>
      <mango for="qeteq">
      <cherry for="game">
      <pear for="qeteq">
    </branch>
    <branch>
      <mango for="game">
      <mango for="tomorrow">
    </branch>
    <branch>
      <banana for="me">
      <dumpling for="game">
      <apple for="food">
    </branch>
    <branch>
      <dumpling for="qeteq">
      <strawberry for="me">
    </branch>
      `
  },
  {
    selectorName: 'Attribute Wildcard Selector',
    helpTitle:
      'Select all elements with an attribute value that contains specific characters anywhere',
    syntax: '[attribute*="value"]',
    doThis: "Select the dumpling for someone with the name containing 'teq'",
    selector: '[for*="teq"]',
    help: 'A useful selector if you can identify a common pattern in things like class, href or src attributes.',
    examples: [
      'img[src*="/thumbnails/"] selects all image elements that show images from the "thumbnails" folder.',
      '[class*="heading"] selects all elements with "heading" in their class, like class="main-heading" and class="sub-heading"'
    ],
    boardMarkup: `
    <branch>
      <apple for='you'>
    </branch>
    <branch>
      <mango for='me'>
    </branch>
    <branch>
      <dumpling for='supply'>
    </branch>
    <branch>
      <dumpling for='qeteq'>
    </branch>
      `
  }
] as const;
