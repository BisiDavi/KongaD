import React from "react";
import classes from "./branddetails.module.css";

const Branddetails = () => {
  const support = [
    { title: "EMAIL SUPPORT", description: "help@konga.com" },
    { title: "PHONE SUPPORT", description: "0701 263 5700, 0809 060 5055" },
    {
      title: "GET LATEST DEALS",
      description: "Our best promotions sent to your inbox."
    }
  ];

  return (
    <div className={classes.branddetails}>
      <div className={classes.details}>
        <h4>
          Online Shopping on KongaDemo.com – Nigeria’s Largest Online Mall (I am a demo
          project)
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis error, qui
          illo eveniet placeat dolorum et reprehenderit voluptas ducimus. Porro quo minus
          recusandae eos sequi, repellendus consequatur nostrum autem quos est sed fuga
          blanditiis dignissimos. Repellat, a nulla assumenda, nisi numquam vitae aliquid
          hic quod odio libero perspiciatis unde facere in expedita, obcaecati repellendus
          facilis id eos eveniet possimus beatae? In quasi ut quidem voluptatem eos
          obcaecati vitae veniam rem facilis fuga. Omnis corporis quos consectetur
          sapiente aliquam pariatur, nihil libero, animi exercitationem blanditiis
          accusantium praesentium nam? Doloremque itaque ex atque nam repellat tenetur ut
          quaerat repudiandae eos dicta illum odio placeat laudantium, optio eius iure?
          Alias ducimus, eaque maxime quaerat doloremque aliquid placeat, consequatur ut
          corporis aspernatur deleniti sequi aut quae illo? Amet laboriosam quos delectus.
          Quia alias enim ad porro a dolor, ipsam error eaque nemo ea iste eum ipsum, nam
          blanditiis hic fuga ullam, neque fugit quaerat!
        </p>
      </div>
      <div className={classes.support}>
        {support.map(item => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        <form>
          <input type="text" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Branddetails;