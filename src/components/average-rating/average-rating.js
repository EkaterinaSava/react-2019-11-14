import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {string} from 'postcss-selector-parser'

function AverageRating({averageRate}) {
  const rawRating =
    averageRate.reduce((acc, rating) => {
      return acc + rating
    }, 0) / averageRate.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.defaultProps = {
  reviews: [],
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(string).isRequired,
}

const mapStateToProps = (state, ownState) => {
  const averageRate = ownState.reviews.map(
    reviewId => state.reviews[reviewId].rating
  )
  return {
    averageRate,
  }
}

export default connect(mapStateToProps)(AverageRating)
