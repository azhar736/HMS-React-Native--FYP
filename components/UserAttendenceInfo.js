import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";
const UserAttendenceInfo = () => {
  const [name, setName] = useState("");
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>A simple, clean, and responsive HTML invoice template</title>
  
      <style>
        .invoice-box {
          max-width: 800px;
          margin: auto;
          padding: 30px;
          border: 1px solid #eee;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          font-size: 16px;
          line-height: 24px;
          font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          color: #555;
        }
  
        .invoice-box table {
          width: 100%;
          line-height: inherit;
          text-align: left;
        }
  
        .invoice-box table td {
          padding: 5px;
          vertical-align: top;
        }
  
        .invoice-box table tr td:nth-child(2) {
          text-align: right;
        }
  
        .invoice-box table tr.top table td {
          padding-bottom: 20px;
        }
  
        .invoice-box table tr.top table td.title {
          font-size: 45px;
          line-height: 45px;
          color: #333;
        }
  
        .invoice-box table tr.information table td {
          padding-bottom: 40px;
        }
  
        .invoice-box table tr.heading td {
          background: #eee;
          border-bottom: 1px solid #ddd;
          font-weight: bold;
        }
  
        .invoice-box table tr.details td {
          padding-bottom: 20px;
        }
  
        .invoice-box table tr.item td {
          border-bottom: 1px solid #eee;
        }
  
        .invoice-box table tr.item.last td {
          border-bottom: none;
        }
  
        .invoice-box table tr.total td:nth-child(2) {
          border-top: 2px solid #eee;
          font-weight: bold;
        }
  
        @media only screen and (max-width: 600px) {
          .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
          }
  
          .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
          }
        }
  
        /** RTL **/
        .invoice-box.rtl {
          direction: rtl;
          font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
            sans-serif;
        }
  
        .invoice-box.rtl table {
          text-align: right;
        }
  
        .invoice-box.rtl table tr td:nth-child(2) {
          text-align: left;
        }
      </style>
    </head>
  
    <body>
      <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="https://www.sparksuite.com/images/logo.png"
                      style="width: 100%; max-width: 300px"
                    />
                  </td>
  
                  <td>
                    Invoice #: 123<br />
                    Created: January 1, 2015<br />
                    Due: February 1, 2015
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  
          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td>
                    Sparksuite, Inc.<br />
                    12345 Sunny Road<br />
                    Sunnyville, CA 12345
                  </td>
  
                  <td>
                    Acme Corp.<br />
                    John Doe<br />
                    john@example.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  
          <tr class="heading">
            <td>Payment Method</td>
  
            <td>Check #</td>
          </tr>
  
          <tr class="details">
            <td>Check</td>
  
            <td>1000</td>
          </tr>
  
          <tr class="heading">
            <td>Item</td>
  
            <td>Price</td>
          </tr>
  
          <tr class="item">
            <td>Website design</td>
  
            <td>$300.00</td>
          </tr>
  
          <tr class="item">
            <td>Hosting (3 months)</td>
  
            <td>$75.00</td>
          </tr>
  
          <tr class="item last">
            <td>Domain name (1 year)</td>
  
            <td>$10.00</td>
          </tr>
  
          <tr class="total">
            <td></td>
  
            <td>Total: $385.00</td>
          </tr>
        </table>
      </div>
    </body>
  </html>  
  `;

  let generatePDF = async () => {
    // console.log(name);
    const { uri } = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        {/*Form heading */}
        <View style={styles.headingCol}>
          <Text style={styles.heading}>Date</Text>
        </View>
        <View style={styles.headingCol}>
          <Text style={styles.heading}>Meal</Text>
        </View>
        <View style={styles.headingCol}>
          <Text style={styles.heading}>Units</Text>
        </View>
        <View style={styles.headingCol}>
          <Text style={styles.heading}>Price</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {/* Form Body */}
        <View style={styles.textCol}>
          <Text style={styles.text}>01/01/22</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>Biryani</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.text}>180</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>Total:</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton buttonText="Generate Bill" onTap={generatePDF} />
      </View>
    </View>
  );
};

export default UserAttendenceInfo;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
  },
  headingContainer: {
    flexDirection: "row",
  },
  headingCol: {
    flex: 1,
    padding: 4,
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  textCol: {
    flex: 1,
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalContainer: {
    flexDirection: "row",
  },
  leftContainer: {
    width: "75%",
  },
  rightContainer: {
    padding: 4,
    borderWidth: 2,
    width: "25%",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});
