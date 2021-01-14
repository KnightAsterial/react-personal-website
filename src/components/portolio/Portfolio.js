import './Portfolio.css';
import React from 'react';
import PortfolioItem from './PortfolioItem';

/* has 4 props: Experiences, Mentorship, Awards, and Filters.
Filters is a list of Strings that are keywords. The others are each a list of objects of the following form:
{
  organization: String
  title: String
  timeframe: String
  description: List of Strings
  tags: List of Strings
}
*/
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let filteredExperiences = this.props.experiences.filter(item => matchesFilter(item, this.props.filters));
    let filteredMentorship = this.props.mentorship.filter(item => matchesFilter(item, this.props.filters));
    let filteredAwards = this.props.awards.filter(item => matchesFilter(item, this.props.filters));

    if (filteredExperiences.length === 0 && filteredMentorship.length === 0 && filteredAwards.length === 0) {
      filteredExperiences = this.props.experiences;
      filteredMentorship = this.props.mentorship;
      filteredAwards = this.props.awards;
    }

    return (
      <div className="portfolio">
        {filteredExperiences.length > 0 && <h1 className="section-header">Experiences</h1>}
        {filteredExperiences.map(item => (
          <PortfolioItem value={item} key={item.organization+item.title}/>
          ))}

        {filteredMentorship.length > 0 && <h1 className="section-header">Mentorship</h1>}
        {filteredMentorship.map(item => (
          <PortfolioItem value={item} key={item.organization+item.title}/>
          ))}

        {filteredAwards.length > 0 && <h1 className="section-header">Awards</h1>}
        {filteredAwards.map(item => (
          <PortfolioItem value={item} key={item.organization+item.title}/>
          ))}
      </div>
    )
  }
}

// Returns if item matches any of the filters in filter
function matchesFilter(item, filters) {
  for (let filterRaw of filters) {
    let filter = filterRaw.toLowerCase();
    if (item.organization.toLowerCase().includes(filter)
        || item.title.toLowerCase().includes(filter)
        || item.description.some(bullet => bullet.toLowerCase().includes(filter))
        || item.tags.some(tag => tag.toLowerCase().includes(filter))) {
          return true;
    }
  }
  return false;
}

export default Portfolio;