import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../../../store/actions/productActions";
import { ProductCard } from "../../../imports";
import classes from "./latestdeals.module.css";

const LatestDeals = props => {
  const products = [];
  const dealsData = [];
  useEffect(() => {
    props.dispatch(FetchProducts());
  }, []);

  const getLatestDeals = () => {
    props.product.map(product => {
      product.map(item => products.push(item));
    });
    products.forEach(item => {
      if (item.tag.includes("latest deals")) {
        return dealsData.push(item);
      }
    });
  };

  getLatestDeals();

  return (
    <section className={classes.LatestDeals}>
      <div className={classes.header}>
        <h3>Latest Deals</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {dealsData.map(dData => {
          const saved = dData.formerPrice - dData.price;
          return (
            <ProductCard
              key={dData.name}
              name={dData.name}
              width="50%"
              imgheight="50%"
              price={dData.price}
              formerPrice={dData.formerPrice}
              save={`You save ₦${saved}`}
              imgsrc={`konga/${dData.img}`}
            />
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    product: state.ptr.products
  };
};

export default connect(mapStateToProps)(LatestDeals);
