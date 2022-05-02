import React, { useState } from "react";
import styles from "../styles/CashOut.module.css";
import Link from "next/link";
import useStore from "../store/useStore";
import Head from "next/head";

const CashOut = () => {
  const [radio, setRadio] = useState(null);

  const currentUser = useStore((state) => state.currentUser);
  const products = useStore((state) => state.items);

  const totalcost = products
    .map((product) => ({
      total:
        product.price * product.cartQuantity * (1 - product.discount / 100),
    }))
    .reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);

  const handleChangeValue = (e) => {
    const radio = e.target.value;

    setRadio(radio);
  };
  const handleChangeValue2 = (e) => {
    setRadio(null);
  };
  console.log(products);

  console.log(totalcost);

  return (
    <>
      <Head>
        <title>on point | Cash Out</title>
        <meta name="description" content="on point cash out page" />
      </Head>
      <div>
        <div>
          <div className="flex ">
            <div>
              <h2>
                <strong>CheckOut</strong>
              </h2>
              <br></br>
              <div>
                <h3> Applying Discount:</h3>
                <br></br>
                <ul className="flex flex-col">
                  {products?.map((product) => (
                    <li key={product.name} className="pb-4">
                      <div>Category:{product.category}</div>
                      <div> Price:{product.price} $</div>
                      <div> Quantity :{product.cartQuantity} </div>
                      <div>Discount:{product.discount}%</div>

                      <h1 className="font-bold">
                        Total:
                        {(
                          product.price *
                          product.cartQuantity *
                          (1 - product.discount / 100)
                        ).toFixed(2)}{" "}
                        $
                      </h1>
                    </li>
                  ))}
                  <div className="pb-4 font-bold">
                    The Sum :{totalcost.toFixed(2)}
                  </div>
                </ul>
                <div className="pb-4 font-bold">
                  shipping cost: {products.length * 5}$
                </div>
                <h1 className="h-10 w-full bg-slate-700 py-2 text-center text-white">
                  Total Cost:{(totalcost + products.length * 5).toFixed(2)} $
                </h1>
              </div>
              <br></br>
              <div>
                <div>
                  <span>
                    {" "}
                    <strong>Items To Deliver:</strong>
                  </span>
                </div>

                <div>
                  <ul className="flex">
                    {products?.map((product) => (
                      <li key={product.name}>
                        <img src={product.image} className={styles.avatar1} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={"/shopping_cart"}>
                  <div className="pb-40 pl-4">
                    <button className="rounded bg-amber-400 py-2 px-4 font-bold">
                      {" "}
                      <span>Back To Cart</span>{" "}
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" absolute  right-80 h-20 w-80">
              <div>
                <div>
                  {currentUser ? (
                    <form>
                      <div className="flex flex-col">
                        <label className="pb-2">
                          <h2>DELIVERY ADDRESS:</h2>
                        </label>

                        <input
                          type="text"
                          name="name"
                          placeholder="Address"
                          className="resize rounded-md bg-slate-200"
                        />
                      </div>
                    </form>
                  ) : (
                    <div>
                      <h2 className="pb-4">DELIVERY ADDRESS:</h2>
                      <p className="h-10 w-full bg-slate-700 py-2 text-center text-white">
                        You need to sign in to put your address
                      </p>
                    </div>
                  )}
                </div>
                <br></br>
                <div>
                  <h2>PAYMENT METHOD:</h2>
                </div>
                <br></br>
                <div>
                  <input
                    id="Cash"
                    name="test"
                    type="radio"
                    value="COD"
                    onChange={handleChangeValue2}
                  />
                  <label htmlFor="COD"> Cash On Delivery</label>
                </div>

                <div>
                  <input
                    id="Card"
                    name="test"
                    type="radio"
                    value="PBC"
                    onChange={handleChangeValue}
                  />
                  <label htmlFor="PBC"> Pay By Card</label>
                </div>
                <br></br>

                {radio ? (
                  <div>
                    <div>
                      <h2>CARD DETAILS:</h2>
                    </div>

                    <br></br>
                    <div className={styles.photos}>
                      <div>
                        <div>
                          <div>
                            <label htmlFor="PBC">Card Number</label>
                          </div>
                          <div>
                            <input
                              type="card"
                              id="number"
                              placeholder="Card Number"
                              maxLength={16}
                              className="bg-slate-200"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <label htmlFor="PBC">CardHolder Name</label>
                          </div>
                          <div>
                            <input
                              type="card"
                              id="number"
                              placeholder="CardHolder Name"
                              maxLength={25}
                              className="bg-slate-200"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="pl-4">
                          <div>
                            <label htmlFor="PBC">Expiry Code</label>
                          </div>
                          <div>
                            <input
                              type="card"
                              id="number"
                              placeholder="Card Expiry Code"
                              maxLength={5}
                              className="bg-slate-200"
                            />
                          </div>
                        </div>
                        <div className="pl-4">
                          <div>
                            <label htmlFor="PBC">Security Code</label>
                          </div>
                          <div>
                            <input
                              type="tel"
                              id="phone"
                              placeholder="Security Code"
                              maxLength={4}
                              className="bg-slate-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {currentUser ? (
                  <div className="pt-4 pl-20">
                    <Link href={"/thanksforpurchase"}>
                      <button className="rounded bg-amber-400 py-2 px-4 font-bold ">
                        Confirm
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-5 pb-20">
                    <p className="h-10 w-full bg-slate-700 py-2 text-center text-white">
                      You need to sign in to Confirm Payment
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CashOut;
