import "../Price/PriceStyle.css";
import priceData from "../Data/PriceData";

function Price() {
  return (
    <div className="price-container">
      <div id="tarifas" className="box-left">
        <h2 className="class_title">Price lists</h2>
        <hr className="separate-sections" />
        <table className="rates-table" id="rates-table">
          <thead>
            <tr>
              <th>
                Dates
                <span className="rate-title">Price(night) VAT included</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <tr key={index} className="rate-row">
                    <td className="rate-column">
                      <span className="rate-date">{item.startDate}</span>
                      <div className="separadorRates">·</div>
                      <span className="rate-date">{item.endDate}</span>
                      <span className="rate-price">{item.price}</span>
                    </td>
                    {priceData[index + 1] && (
                      <>
                        <td className="rate-column">
                          <span className="rate-date">
                            {priceData[index + 1].startDate}
                          </span>
                          <div className="separadorRates">·</div>
                          <span className="rate-date">
                            {priceData[index + 1].endDate}
                          </span>
                          <span className="rate-price">
                            {priceData[index + 1].price}
                          </span>
                        </td>
                      </>
                    )}
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Price;
