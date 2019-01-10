import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import { mediaType } from '../../../utils/constants/constants';
import FilterBarStyled, { Filter } from './FilterBar.styled';
import { setFilter } from '../../../state/actions/setFilter';
import { setSearch } from '../../../state/actions/setSearch';

const mapStateToProps = state => ({
  filteredMediaType: state.filteredMediaType,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  setFilter: type => dispatch(setFilter(type)),
  setSearch: searchObj => dispatch(setSearch(searchObj)),
});

const FilterBar = ({
  filteredMediaType,
  setFilter,
  setSearch,
  searchValue,
}) => {
  const handleFilterClick = e => {
    const clickValue = e.target.textContent;

    setFilter(filteredMediaType === clickValue ? '' : clickValue);
    setSearch({
      search: searchValue.search,
      type: filteredMediaType === clickValue ? '' : clickValue,
    });
  };

  return (
    <FilterBarStyled onClick={e => handleFilterClick(e)}>
      {Object.keys(mediaType).map(type => (
        <Filter
          key={uuidv1()}
          title={`Filter results by ${type}`}
          active={filteredMediaType === type}
        >
          {type}
        </Filter>
      ))}
    </FilterBarStyled>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);

FilterBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  searchValue: PropTypes.objectOf(PropTypes.string).isRequired,
  filteredMediaType: PropTypes.string.isRequired,
};
