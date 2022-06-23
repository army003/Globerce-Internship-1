import React from "react";
const Main = () => {
  const bar = document.querySelector(".progress-bar");
  const progressline = document.getElementsByTagName("li");
  const progressCount = document.getElementsByClassName("count");
  document.addEventListener("scroll", scrollHandler);
  function scrollHandler(e) {
    let windowscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let windowhigh =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollResult = (windowscroll / windowhigh) * 100;
    console.log(scrollResult);
    if (scrollResult > 20 && scrollResult < 45) {
      progressline[1].classList.add("active");
      progressCount[1].classList.add("active");
      console.log(progressline[1]);
    } else if (scrollResult > 45 && scrollResult < 70) {
      progressline[2].classList.add("active");
      progressCount[2].classList.add("active");

      console.log(progressline[2]);
    } else if (scrollResult > 70 && scrollResult < 95) {
      progressline[3].classList.add("active");
      progressCount[3].classList.add("active");
    } else if (scrollResult > 95) {
      progressline[4].classList.add("active");
      progressCount[4].classList.add("active");
    }
  }
  return (
    <main>
      <div className="progress-bar">
        <ul>
          <li className="active">
            <span className="count active">1</span>
          </li>
          <li>
            <span className="count">2</span>
          </li>
          <li>
            <span className="count">3</span>
          </li>
          <li>
            <span className="count">4</span>
          </li>
          <li>
            <span className="count">5</span>
          </li>
        </ul>
      </div>
      <div className="headings" id="firstBlock">
        <div className="heading">
          <h2>Заголовок 5</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 4</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 3</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 2</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 1</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
      </div>

      <div className="headings hidden" id="secondBlock">
        <div className="heading">
          <h2>Заголовок 1</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 2</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 3</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 4</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
        <div className="heading">
          <h2>Заголовок 5</h2>
          <p>
            Задача организации, в особенности же начало повседневной работы по
            формированию
          </p>
        </div>
      </div>
    </main>
  );
};
export default Main;
