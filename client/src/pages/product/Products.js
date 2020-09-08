import React from 'react'
import { Layout, LazyLoadImage } from '../../imports'

const Products = (props) => {
    return (
      <Layout>
        <Paper className="category">
          <div>
            <p>
              Home >
              <LinkText
                linkTo={props.category}
                text={props.category}
              />
              >
              <LinkText
                linkTo={props.subcategory}
                text={props.subcategory}
              />
            </p>
          </div>
          <div className="title">
            <h1>{props.title}</h1>
          </div>
        </Paper>

        <Paper>
          <div>
            <LazyLoadImage
              publicId={props.imgPublicID}
            />
          </div>
          <div className="Product-info">
            <h1>{props.productName}</h1>
            <p>
              Product Code: {props.productCode}
            </p>
            <p>Brand: {props.productBrand}</p>
            <hr />
            <div className="price">
              <h1>₦ {props.price}</h1>
              <p>₦ {props.oldPrice}</p>
              <p>You save {
              (props.oldPrice) 
              ? props.oldPrice - props.price
              : ''
             }</p>
            </div>
            <hr />
            <div className="quantity">
                <p>Quantity: </p> 
                <table>
                    <tr>
                        <td>-</td>
                        <td>1</td>
                        <td>+</td>
                    </tr>
                </table>
                <div>
                <p>Call us for bulk purchases:</p>
                <LinkText linkto="" text="Click here to show phone number" />
                </div>

            </div>
          </div>
        </Paper>
      </Layout>
    );
}

    export default Products
