import Count from '@/common/count';
import Image from 'next/image';
import React, { useContext } from 'react';

import counter_shape_1 from "../../../../public/assets/img/counter/counter-shape-2.png";
import counter_shape_2 from "../../../../public/assets/img/counter/counter-shape-1.png";
import counter_shape_3 from "../../../../public/assets/img/counter/counter-shape-4.png";
import { ThemeContext } from '@/context/ThemeContext';

const counter_content = {
  counter_info: [
    { id: 1, counter: 12,  title: "Years of experience" },
    { id: 2, counter: 34,  title: "Satisfied clients" },
    { id: 3, counter: 2600,  title: "Successful campaigns" },
  ],
};
const { counter_info } = counter_content;

const CounterArea = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`tp-counter-area tp-counter-space p-relative pb-140 ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <div className="tp-counter-shape-2">
          <Image src={counter_shape_1} alt="theme-pure" />
        </div>
        <div className="tp-counter-shape-3">
          <Image src={counter_shape_2} alt="theme-pure" />
        </div>
        <div className="tp-counter-shape-4 d-none d-sm-block">
          <Image src={counter_shape_3} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="tp-counter-wrapper p-relative">
            <div className="row gx-0">
              {counter_info.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                  <div className="tp-counter-wrap d-flex justify-content-center">
                    <div className="tp-counter-item">
                      <h4
                        className={theme === 'dark' ? 'dark-text' : ''}
                      >
                        <span data-purecounter-duration="1" data-purecounter-end="10" className="purecounter">
                          <Count number={item.counter} text={item.counter_icon} />
                        </span>
                      </h4>
                      <p className={theme === 'dark' ? 'dark-text' : ''}>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dark-mode {
          background-color: black;
        }
        .dark-text {
          color: white;
        }
      `}</style>
    </>
  );
};

export default CounterArea;
