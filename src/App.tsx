import React, { useState, useEffect } from 'react';
import Pic1 from './karaageteriyakimayo.jpeg';
import Pic2 from './surimiscallop.jpeg';
import Pic3 from './kanikamamaki.jpeg';
import Pic4 from './ebifrynigiri.jpeg';
import Pic5 from './cheesykanitamamaki.jpeg';
import Pic6 from './cheesyebifrynigiri.jpeg';
import Pic7 from './chickencheeserool.jpeg';
import './App.css';

const App = () => {
  const [order, setOrder] = useState(new Array(7).fill(0));

  const addTo = (index: number) => {
    order[index] += 1;
    setOrder([...order]);
  };

  const removeTo = (index: number) => {
    if (order[index] > 0) {
      order[index] -= 1;
      setOrder([...order]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 place-items-center pt-5 gap-5 pb-5">
        <Box
          index={0}
          picture={Pic1}
          name="Karaage Teriyaki"
          price="3.30"
          callback={addTo}
        />
        <Box
          index={1}
          picture={Pic2}
          name="Surimi Scallop"
          price="4.40"
          callback={addTo}
        />
        <Box
          index={2}
          picture={Pic3}
          name="Kanikama Maki"
          price="2.20"
          callback={addTo}
        />
        <Box
          index={3}
          picture={Pic4}
          name="Ebi Fry Nigiri"
          price="6.60"
          callback={addTo}
        />
        <Box
          index={4}
          picture={Pic5}
          name="Cheesy Kanitama Maki"
          price="3.30"
          callback={addTo}
        />
        <Box
          index={5}
          picture={Pic6}
          name="Cheesy Ebi Fry Nigiri"
          price="6.60"
          callback={addTo}
        />
        <Box
          index={6}
          picture={Pic7}
          name="Chicken Cheese Roll"
          price="5.50"
          callback={addTo}
        />
      </div>
      {/* cart */}

      <div
        className={order.some((element) => element > 0) ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 p-5 place-items-center bg-yellow-500 gap-3">
          <p className="text-2xl font-bold pb-2">YOUR BOYFRIEND CART</p>
          {order.map((item, index) => {
            if (item) {
              let image = null;
              let name = null;

              switch (index) {
                case 0:
                  image = Pic1;
                  name = 'Karaage Teriyaki';
                  break;
                case 1:
                  image = Pic2;
                  name = 'Surimi Scallop';
                  break;
                case 2:
                  image = Pic3;
                  name = 'Kanikama Maki';
                  break;
                case 3:
                  image = Pic4;
                  name = 'Ebi Fry Nigiri';
                  break;
                case 4:
                  image = Pic5;
                  name = 'Cheesy Kanitama Maki';
                  break;
                case 5:
                  image = Pic6;
                  name = 'Cheesy Ebi Fry Nigiri';
                  break;
                case 6:
                  image = Pic7;
                  name = 'Chicken Cheese Roll';
                  break;
                default:
                  console.log('ERROR');
              }

              return (
                // minibox
                <div className="bg-yellow-600 p-1 w-full flex items-center justify-around">
                  <img
                    className="inline-block"
                    src={image}
                    width={50}
                    height={50}
                  ></img>
                  {/* name */}
                  <p className="inline-block pl-5 text-center w-52">{name}</p>
                  {/* amount */}
                  <span className="inline-block pl-5 font-bold">
                    {item} item
                  </span>
                  {/* remove order button */}
                  <button
                    className="ml-5 bg-yellow-500 justify-self-end p-1 rounded-md"
                    onClick={() => removeTo(index)}
                  >
                    Decrease
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const Box = (props: {
  picture: any;
  name: any;
  price: any;
  index: any;
  callback: any;
}) => {
  const { picture, name, price, index, callback } = props;

  return (
    <div className="grid grid-cols-1 bg-yellow-300 pt-5 px-5 rounded-sm shadow-md pb-5">
      <img src={picture} width={225} height={225} />
      <p className="font-bold text-2xl pt-2">RM{price}</p>
      <p className="font-semibold text-lg">{name}</p>
      <button
        className="transition text-center bg-white mt-2 font-bold transform active:scale-105 active:bg-yellow-900"
        onClick={() => callback(index)}
      >
        ORDER
      </button>
    </div>
  );
};

export default App;
