export const levels = [
  {
    helpTitle: 'Select elements by their type',
    selectorName: 'Type Selector',
    doThis: 'Select the apple',
    selector: 'apple',
    syntax: 'A',
    help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.'
    ],
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
    helpTitle: 'Select elements by their type',
    selectorName: 'Type Selector',
    doThis: 'Select the bananas',
    selector: 'banana',
    syntax: 'A',
    help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.'
    ],
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
    help: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
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
    syntax: 'A&nbsp;&nbsp;B',
    help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'
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
    syntax: 'A > B&nbsp;',
    help: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.',
    examples: [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
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
    syntax: '#id&nbsp;&nbsp;A',
    help: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
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
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
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
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
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
    help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
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
    help: 'You can select all elements with the universal selector! ',
    examples: [
      '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'
    ],
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
    syntax: 'A&nbsp;&nbsp;*',
    help: 'This selects all elements inside of <strong>A</strong>.',
    examples: [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'
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
    help: "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples: [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
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
    doThis: 'Select the pears next to the strawberry by class',
    selector: '.strawberry ~ .pear',
    syntax: 'A ~ B',
    help: 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
    examples: [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
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
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
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
    help: 'You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
    examples: [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
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
    examples: [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
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
    examples: [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
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
    help: 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples: [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
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
    help: 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples: [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
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
    help: 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples: [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
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
