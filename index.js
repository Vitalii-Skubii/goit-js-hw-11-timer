// const refs = {
//   bodyDom: document.querySelector('body'),
//   startButton: document.querySelector('button[data-action="start"]'),
//   stopButton: document.querySelector('button[data-action="stop"]')
// }


class CountdownTimer{
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = targetDate - currentDate;
      this.setCurrentTime(deltaTime);
      
    }, 1000);
    
  }
  setCurrentTime(time) {
    if (time >= 0) {
      const days = this.selector.querySelector('span[data-value="days"]');
      const hours =this.selector.querySelector('span[data-value="hours"]');
      const mins =this.selector.querySelector('span[data-value="mins"]');
      const secs = this.selector.querySelector('span[data-value="secs"]');
     days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
   hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
      
  }
    else {
      
      return
    }
  
}
}

const tikTak = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021, 0:00'),
});



// const colorChanger = {
//   intervalId: null,
//   isChanging: false,
//   start() {
//     if (this.isChanging){
//       return;
//     }
//     this.isChanging = true;
//     this.intervalId= setInterval(() => {
//       ;
//        refs.bodyDom.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length - 1)];
      
//     }, 1000);
//   },
//   stop() {
//     this.isChanging = false;
//     clearInterval(this.intervalId);
//     this.intervalId= null;
//   }
// };



// refs.startButton.addEventListener('click', colorChanger.start.bind(colorChanger));
// refs.stopButton.addEventListener('click', colorChanger.stop.bind(colorChanger));




// const bodyBgcolor = colors[randomIntegerFromInterval(0, colors.length - 1) ];
