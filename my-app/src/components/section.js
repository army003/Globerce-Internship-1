import React from "react";
const Section = () => {
  return (
    <section>
      <div className="double">
        <div className="left" id="left">
          <p>Для заемщика</p>
        </div>
        <div className="right active" id="right">
          <p>Для продавца</p>
        </div>
      </div>
    </section>
  );
};
export default Section;
