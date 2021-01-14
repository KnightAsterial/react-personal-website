import './PortfolioItem.css';
import React from 'react';

/* Takes in 'value' prop with following structure:
{
  organization: String
  title: String
  timeframe: String
  description: List of Strings
  tags: List of Strings
}
*/
class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio-item">
        <div className="portfolio-item-left">
          <p className="portfolio-item-org">{this.props.value.organization}</p>
          <p className="portfolio-item-title">{this.props.value.title}</p>
          <p className="portfolio-item-time">{this.props.value.timeframe}</p>
        </div>
        <div className="portfolio-item-right">
          <ul>
            {this.props.value.description.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioItem;