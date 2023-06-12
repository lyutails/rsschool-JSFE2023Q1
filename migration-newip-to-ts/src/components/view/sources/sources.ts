import { Source } from '../../../types';
import './sources.css';
import '../../filter/filter.css';

class Sources {
  draw(data: Source[]) {
    const sources = document.querySelector('.sources');
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add('buttons_wrapper');
    if (!sources) {
      throw new Error('no sources found out there');
    } else {
      sources?.insertAdjacentElement('afterend', buttonsWrapper);
      const firstLetters = data.map((elem) => elem.name[0]);
      const uniqueLettersArray = firstLetters.filter((item, i, arr) => arr.indexOf(item) === i);
      const lettersButtonsArray = [];
      for (let i = 0; i < uniqueLettersArray.length; i++) {
        const sourceLetter = document.createElement('div');
        sourceLetter.classList.add('source_letter');
        sourceLetter.textContent = `${uniqueLettersArray[i]}`;
        lettersButtonsArray.push(sourceLetter);
        buttonsWrapper.append(sourceLetter);
      }
      const allSourcesButton = document.createElement('div');
      allSourcesButton.classList.add('all_sources_button');
      allSourcesButton.textContent = 'All';
      lettersButtonsArray.push(allSourcesButton);
      buttonsWrapper.append(allSourcesButton);

      lettersButtonsArray.forEach((element) =>
        element.addEventListener('click', () => {
          const sourceItems = document.querySelectorAll<HTMLSpanElement>('.source__item-name');
          // const relevantSources = data.filter((sourceElement) => sourceElement.name[0] === element.textContent);
          for (let i = 0; i < sourceItems.length; i++) {
            const parentOfLetter = sourceItems[i].parentElement;
            if(parentOfLetter) {
              parentOfLetter.style.display = 'block';
            } else {
              throw new Error('nothing to remove display none from');
            }
            if (sourceItems[i].textContent?.slice(0, 1) !== element.textContent?.slice(0, 1)) {
              if (!parentOfLetter) {
                throw new Error('no parent element out there');
              } else {
                parentOfLetter.style.display = 'none';
              }
            }
            if(element.textContent === 'All') {
              parentOfLetter.style.display = 'block';
            }
          }
        })
      );
    }

    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    if (!sourceItemTemp) {
      throw new Error('no new item out there');
    }

    data.forEach((item: Source) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);
      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error('incorrect source');
      }

      const itemName = sourceClone.querySelector('.source__item-name');
      if (itemName) {
        itemName.textContent = item.name;
      } else {
        throw new Error('no item name provided');
      }

      const itemSource = sourceClone.querySelector('.source__item');
      if (itemSource) {
        itemSource.setAttribute('data-source-id', item.id);
      } else {
        throw new Error('no item source found');
      }

      fragment.append(sourceClone);
    });

    const sourcesButtons = document.querySelector('.sources');
    if (sourcesButtons) {
      sourcesButtons.append(fragment);
    } else {
      throw new Error('no sources out there');
    }
  }
}

export default Sources;
