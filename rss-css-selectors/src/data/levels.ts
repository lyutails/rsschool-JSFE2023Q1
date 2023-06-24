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
    helpTitle: 'Select an element inside another element',
    selectorName: 'Descendant Selector',
    doThis: 'Select the butterfly on the leaf',
    selector: 'leaf butterfly',
    syntax: 'A&nbsp;&nbsp;B',
    help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'
    ],
    boardMarkup: `
    <branch></branch>
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
    helpTitle: 'Select the elements inside another elements',
    selectorName: 'Descendant Selector',
    doThis: 'Select the butterfly on the leaf and the bee in the beehive',
    selector: 'leaf butterfly, beehive bee',
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
    doThis: 'Select the sparrow directly in the birdhouse',
    selector: 'birdhouse > sparrow',
    syntax: 'A > B&nbsp;',
    help: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.',
    examples: [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <branch></branch>
    <branch>
      <birdhouse>
        <sparrow>
      </birdhouse>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Combine the Descendant & ID Selectors',
    selectorName: 'Descendant & ID Selectors',
    doThis: 'Select the ladybug on the leaf',
    selector: '#leaf ladybug',
    syntax: '#id&nbsp;&nbsp;A',
    help: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    boardMarkup: `
    <branch></branch>
    <branch>
      <leaf id="leaf">
        <ladybug>
      </leaf>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select elements by their class',
    selectorName: 'Class Selector',
    doThis: 'Select the cherry',
    selector: '.cherry',
    syntax: '.classname',
    help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    boardMarkup: `
    <branch></branch>
    <branch></branch>
    <branch>
      <cherry>
    </branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Combine the Class Selector',
    selectorName: 'Tag Class Selector',
    doThis: 'Select the banana',
    selector: 'banana.big',
    syntax: 'A.className',
    help: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    boardMarkup: `
    <branch></branch>
    <branch></branch>
    <branch></branch>
    <branch>
      <banana class="big">
    </branch>
    `
  },
  {
    helpTitle: 'Combine, selectors, with... commas!',
    selectorName: 'Comma Combinator',
    doThis: 'Select all the bees, ladybugs and blue butterflies',
    selector: 'bee,ladybug,butterfly',
    syntax: 'A, B',
    help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    boardMarkup: `
    <branch>
      <butterfly id="blue">
    </branch>
    <branch>
      <bee>
      <bee>
    </branch>
    <branch>
      <butterfly id="purple">
      <butterfly id="blue">
      <ladybug>
    </branch>
    <branch>
      <bee/>
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
      <butterfly id="purple">
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
    <branch></branch>
    <branch>
      <mango>
      <apple>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select elements that follows another element',
    selectorName: 'General Sibling Selector',
    doThis: 'Select the pear beside the strawberry',
    selector: 'strawberry ~ pear',
    syntax: 'A ~ B',
    help: 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
    examples: [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
    boardMarkup: `
    <branch></branch>
    <branch></branch>
    <branch>
      <strawberry>
      <pear>
      <pear>
      <pear>
    </branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select a first child element inside of another element',
    selectorName: 'First Child Pseudo-selector',
    doThis: 'Select the top mango',
    selector: 'plate :first-child',
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
    <branch></branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Select the last element inside of another element',
    selectorName: 'Last Child Pseudo-selector',
    doThis: 'Select the blue butterfly',
    selector: '.blue:last-child',
    syntax: ':last-child',
    help: 'You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
    examples: [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup: `
    <branch></branch>
    <branch></branch>
    <branch></branch>
    <branch>
      <butterfly class="purple">
      <butterfly class="blue">
      <butterfly class="purple">
    </branch>
    `
  },
  {
    helpTitle: 'Select the first element of a specific type',
    selectorName: 'First of Type Selector',
    doThis: 'Select first strawberry',
    selector: 'strawberry:first-of-type',
    syntax: ':first-of-type',
    help: 'Selects the first element of that type within another element.',
    examples: [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <branch></branch>
    <branch>
      <strawberry>
      <strawberry>
      <strawberry>
    </branch>
    <branch></branch>
    <branch></branch>
      `
  },
  {
    helpTitle: 'Make some selectors math',
    selectorName: 'Nth-of-type Selector with Formula',
    doThis:
      'Select every 2nd ladybug, starting from the 2nd and every 1st bee starting from the 3rd',
    selector: 'ladybug:nth-of-type(2n+2), bee:nth-of-type(1n+3)',
    syntax: ':nth-of-type(An+B)',
    help: 'The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.',
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup: `
    <branch>
      <ladybug>
      <ladybug>
      <ladybug>
      <ladybug>
      <ladybug>
      <ladybug>
    </branch>
    <branch></branch>
    <branch>
      <bee>
      <bee>
      <bee>
      <bee>
      <bee>
    </branch>
    <branch></branch>
      `
  },
  {
    helpTitle: "Select elements that don't have children",
    selectorName: 'Empty Selector',
    doThis: 'Select the empty leaves',
    selector: 'leaf:empty',
    syntax: ':empty',
    help: "Selects elements that don't have any other elements inside of them.",
    examples: [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup: `
    <branch>
      <leaf></leaf>
      <leaf>
        <butterfly class="purple">
      </leaf>
    </branch>
    <branch></branch>
    <branch>
      <leaf></leaf>
    </branch>
    <branch></branch>
  `
  },
  {
    helpTitle: "Select all elements that don't match the negation selector",
    selectorName: 'Negation Pseudo-class',
    doThis: 'Select the blue butterflies',
    selector: 'butterfly:not(.purple)',
    syntax: ':not(X)',
    help: 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples: [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <branch>
      <butterfly class="purple">
      <butterfly class="blue">
      <butterfly class="purple">
    </branch>
    <branch>
      <butterfly class="blue">
      <butterfly class="blue">
    </branch>
    <branch>
      <butterfly class="blue">
      <butterfly class="purple">
      <butterfly class="blue">
    </branch>
    <branch>
      <butterfly class="blue">
      <butterfly class="purple">
    </branch>
      `
  },
  {
    helpTitle: 'Select all elements that have a specific attribute',
    selectorName: 'Attribute Selector',
    doThis: 'Select the items for fun',
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
      <birdhouse>
        <sparrow for="fun">
      <birdhouse>
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
      'Select all elements with an attribute value that contains specific characters anywhere',
    selectorName: 'Attribute Wildcard Selector',
    doThis: "Select the meals for names that contain 'obb'",
    selector: '[for*="me"]',
    syntax: '[attribute*="value"]',
    help: 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples: [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup: `
    <branch>
      <cherry for="game">
      <pear for="me">
      <bee>
    </branch>
    <branch>
      <mango for="game">
      <mango">
    </branch>
    <branch>
      <banana for="me">
      <pear for="game">
      <apple for="food">
    </branch>
    <branch>
      <cherry for="game">
      <strawberry for="me">
      <ladybug>
      <butterfly class="blue">
    </branch>
      `
  }
];
