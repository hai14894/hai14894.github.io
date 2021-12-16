import React from "react";
import "./styles.css";

const braintree = require("braintree-web");
const authorization = process.env.REACT_APP_AUTHORIZARION;
const Payment = () => {
  console.log(authorization);
  var form = document.querySelector("#cardForm");

  braintree.client.create(
    {
      authorization: authorization,
    },
    function (err, clientInstance) {
      if (err) {
        console.error(err);
        return;
      }
      createHostedFields(clientInstance);
    }
  );

  function createHostedFields(clientInstance) {
    braintree.hostedFields.create(
      {
        client: clientInstance,
        styles: {
          input: {
            "font-size": "16px",
            "font-family": "courier, monospace",
            "font-weight": "lighter",
            color: "#ccc",
          },
          ":focus": {
            color: "black",
          },
          ".valid": {
            color: "#8bdda8",
          },
        },
        fields: {
          number: {
            selector: "#card-number",
            placeholder: "4111 1111 1111 1111",
          },
          cvv: {
            selector: "#cvv",
            placeholder: "123",
          },
          expirationDate: {
            selector: "#expiration-date",
            placeholder: "MM/YYYY",
          },
          postalCode: {
            selector: "#postal-code",
            placeholder: "11111",
          },
        },
      },
      function (err, hostedFieldsInstance) {
        if (err) {
          console.log(err);
          return;
        }
        var handleSubmit = function (event) {
          event.preventDefault();

          hostedFieldsInstance.tokenize(function (err, payload) {
            if (err) {
              alert(
                "Something went wrong. Check your card details and try again."
              );
              return;
            }

            alert(
              "Submit your nonce (" + payload.nonce + ") to your server here!"
            );
          });
        };

        form.addEventListener("submit", handleSubmit, false);
      }
    );
  }
  return (
    <div className="demo-frame">
      <form action="/" method="post" id="cardForm">
        <label className="hosted-fields--label">Card Number</label>
        <div id="card-number" className="hosted-field"></div>

        <label className="hosted-fields--label">Expiration Date</label>
        <div id="expiration-date" className="hosted-field"></div>

        <label className="hosted-fields--label">CVV</label>
        <div id="cvv" className="hosted-field"></div>

        <label className="hosted-fields--label">Postal Code</label>
        <div id="postal-code" className="hosted-field"></div>

        <div className="button-container">
          <input
            type="submit"
            className="button button--small button--green"
            value="Purchase"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Payment;
