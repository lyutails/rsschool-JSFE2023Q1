// currentLevelObserver.subscribe(() =>
//       setTimeout(() => {
//         this.render();
//       }, 800)
//     );

//     setTimeout(() => {
//       this.render();
//     }, 800);
//   }

//   public render(): void {
//     this.branchOneImitation.textContent = '';
//     this.branchTwoImitation.textContent = '';
//     this.branchThreeImitation.textContent = '';
//     this.branchFourImitation.textContent = '';

//     const { currentLevel } = this.store;
//     localStorage.setItem('lastLevelWinValue', `${currentLevel}`);

//     for (let i = 0; i < levelsMarkup[this.store.currentLevel].length; i++) {
//       for (
//         let index = 0;
//         index < levelsMarkup[this.store.currentLevel][i].length;
//         index++
//       ) {
//         if (levelsMarkup[this.store.currentLevel][i][index].tagName === '') {
//           // eslint-disable-next-line no-continue
//           continue;
//         }