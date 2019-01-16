import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ErrorBox from '../../atom/ErrorBox'
import WithLoading from './WithLoading'

class NewsWithLoad extends PureComponent {
  render() {
    const { news } = this.props
    const { error } = news

    return (
      <div>
        {error !== '' && <ErrorBox errorCode={error} />}
        {news.news &&
          news.news.map(item => (
            <div key={item.id}>
              <img src={item.urls.regular} alt={item.description} />
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ news: state.news })
export default connect(
  mapStateToProps,
  null
)(WithLoading(NewsWithLoad))
