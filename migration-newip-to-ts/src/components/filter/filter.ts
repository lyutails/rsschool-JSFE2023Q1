// import { Source } from './../../types';
// import './filter.css';

// class Filter {
//   drawButtons(data: Source[]) {
//     const sources = document.querySelector('.sources');
//     console.log(sources);
//     const buttonsWrapper = document.createElement('div');
//     buttonsWrapper.classList.add('buttons_wrapper');
//     if (!sources) {
//       throw new Error('no sources found out there');
//     } else {
//       sources?.insertAdjacentElement('afterend', buttonsWrapper);
//       const lettersArray = data.name.slice(0, 1);
//       for (let i = 0; i < lettersArray.length; i++) {
//         const sourceLetter = document.createElement('div');
//         sourceLetter.classList.add('source_letter');
//         sourceLetter.textContent = `${lettersArray[i]}`;
//         buttonsWrapper.append(sourceLetter);
//       }
//     }
//   }
// }

// export default Filter;
