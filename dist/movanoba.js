/* 
# Movanoba core license

Movanoba is released under the MIT license:

MIT License

Copyright (c) [2024] [Demjhon Silver]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


const movementSet = new Set();

export function movement() {
  const actionElements = document.querySelectorAll('[data-movement]');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  if (actionElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const movementName = entry.target.getAttribute('data-movement');
        const triggerReflow = entry.target.getAttribute('data-reflow');
        const movementDuration = entry.target.getAttribute('data-duration') || '1.1s';
        const movementDelay = entry.target.getAttribute('data-delay') || '0s';

        if (entry.isIntersecting) {
          if (entry.target.style.animation !== 'none' && triggerReflow == 'true') {
            // Stop the animation if it's already running
            entry.target.style.animation = 'none';
            entry.target.offsetHeight; // Trigger a reflow
          }

          entry.target.style.animation = `${movementName} ${movementDuration} ${movementDelay} forwards`;
          entry.target.style.visibility = 'visible'; // Ensure visibility
          
          movementSet.add(entry.target);
        } else if(triggerReflow == 'true') {
          // If the element is not intersecting, reverse the animation
          entry.target.style.animation = `${movementName}-reverse ${movementDuration} ${movementDelay} forwards`;
          movementSet.delete(entry.target);
        }
      });
    }, options);

    actionElements.forEach((element) => {
      observer.observe(element);
    });
  }
}



const moveStyler = document.createElement('style');
document.head.appendChild(moveStyler);
const moveSheet = `
@keyframes closeLEFT {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes closeRIGHT {
  from {
    transform: translateX(50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes closeUP {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes closeDOWN {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes wakeupLEFT {
  from {
      transform: rotate(90deg);
  }
  to {
      transform: rotate(0);
  }
}


@keyframes wakeupRIGHT {
  from {
      transform: rotate(-90deg);
  }
  to {
      transform: rotate(0);
  }
}






@keyframes enlarge {
  from {
      transform: scale(0.90);
  }
  to {
      transform: scale(1);
  }
}



@keyframes cycleLEFT {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(-360deg);
  }
}


@keyframes cycleRIGHT {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(360deg);
  }
}


@keyframes twistLEFT {
  from {
      transform: perspective(400px) rotateY(90deg);
  }
  to {
      transform: perspective(400px) rotateY(0);
  }
}

@keyframes twistRIGHT {
  from {
      transform: perspective(400px) rotateY(-90deg);
  }
  to {
      transform: perspective(400px) rotateY(0);
  }
}

@keyframes show {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

@keyframes twistUP {
  from {
      transform: perspective(400px) rotateX(-90deg);
  }
  to {
      transform: perspective(400px) rotateX(0);
  }
}

@keyframes twistDOWN {
  from {
      transform: perspective(400px) rotateX(90deg);
  }
  to {
      transform: perspective(400px) rotateX(0);
  }
}

@keyframes edgeTOPLEFT {
  0% {
    transform: translate(-50px, -50px); 
  }
  100% {
    transform: translate(0, 0); 
  }
}

@keyframes edgeTOPRIGHT {
  0% {
    transform: translate(50px, -50px); 
  }
  100% {
    transform: translate(0, 0); 
  }
}


@keyframes edgeDOWNLEFT {
  0% {
    transform: translate(-50px, 50px); 
  }
  100% {
    transform: translate(0, 0); 
  }
}

@keyframes edgeDOWNRIGHT {
  0% {
    transform: translate(50px, 50px); 
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes frameLEFT {
  from {
      transform: rotate(45deg);
  }
  to {
      transform: rotate(0);
  }
}


@keyframes frameRIGHT {
  from {
      transform: rotate(-45deg);
  }
  to {
      transform: rotate(0);
  }
}





@keyframes closeLEFT-reverse {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
  }
}

@keyframes closeRIGHT-reverse {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
  }
}

@keyframes closeUP-reverse {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
  }
}

@keyframes closeDOWN-reverse {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
  }
}


@keyframes wakeupLEFT-reverse {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(90deg);   
  }
}


@keyframes wakeupRIGHT-reverse {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(-90deg);   
  }
}


@keyframes enlarge-reverse {
  from {
      transform: scale(1);
  }
  to {
      transform: scale(0.90);
  }
}


@keyframes cycleLEFT-reverse {
  from {
      transform: rotate(-360deg);
  }
  to {
      transform: rotate(0);
  }
}





@keyframes cycleRIGHT-reverse {
  from {
      transform: rotate(360deg);
  }
  to {
      transform: rotate(0);
  }
}


@keyframes twistLEFT-reverse {
  from {
      transform: perspective(400px) rotateY(0);
  }
  to {
      transform: perspective(400px) rotateY(90deg);
  }
}

@keyframes twistRIGHT-reverse {
  from {
      transform: perspective(400px) rotateY(0);
  }
  to {
      transform: perspective(400px) rotateY(-90deg);
  }
}


@keyframes show-reverse {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}


@keyframes twistUP-reverse {
  from {
      transform: perspective(400px) rotateX(0);
  }
  to {
      transform: perspective(400px) rotateX(-90deg);
  }
}

@keyframes twistDOWN-reverse {
  from {
      transform: perspective(400px) rotateX(0);
  }
  to {
      transform: perspective(400px) rotateX(90deg);
  }
}

@keyframes edgeTOPLEFT-reverse {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50px, -50px);
  }

}


@keyframes edgeTOPRIGHT-reverse {
  0% {
    transform: translate(0, 0); 
  }
  100% {
    transform: translate(50px, -50px); 
  }
}

@keyframes edgeDOWNLEFT-reverse {
  0% {
    transform: translate(0, 0); 
  }
  100% {
    transform: translate(-50px, 50px); 
  }
}

@keyframes edgeDOWNRIGHT-reverse {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px); 
  }
}

@keyframes frameLEFT-reverse {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(45deg);   
  }
}


@keyframes frameRIGHT-reverse {
  from {
      transform: rotate(0);
  }
  to {
      transform: rotate(-45deg);   
  }
}



`;
moveStyler.appendChild(document.createTextNode(moveSheet));

