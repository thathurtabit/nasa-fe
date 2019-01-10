import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import SearchBarStyled, {
  SearchBarInput,
  SearchBarSubmit,
  SearchBarWrap,
} from './SearchBar.styled';
import SearchIcon from '../../1-atoms/SearchIcon/SearchIcon';
import { SearchPlaceholder } from '../../../utils/constants/constants';
import { setSearch } from '../../../state/actions/setSearch';
import FilterBar from '../FilterBar/FilterBar';

const mapStateToProps = state => ({
  searchValue: state.searchValue,
  filter: state.filteredMediaType,
});

const mapDispatchToProps = dispatch => ({
  setSearch: string => dispatch(setSearch(string)),
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { searchValue, setSearch } = props;

    this.setSearch = setSearch;

    this.state = { value: searchValue.search };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 1000);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  handleChange(event) {
    const { value } = event.target;

    // Update local state to give the user instant feedback...
    this.setState({ value });
    // ... but debounce the result before pushing to redux for performance
    this.emitChangeDebounced(value);
  }

  handleSubmit(event) {
    const { value } = this.state;
    const { filter } = this.props;
    this.setSearch({ search: value, type: filter });
    event.preventDefault();
  }

  emitChange(value) {
    const { filter } = this.props;
    this.setSearch({ search: value, type: filter });
  }

  render() {
    const { value } = this.state;
    return (
      <SearchBarWrap>
        <SearchBarStyled role="search" onSubmit={this.handleSubmit}>
          <SearchBarInput
            type="search"
            tabIndex="-1"
            placeholder={SearchPlaceholder}
            aria-label="Search NASA"
            value={value}
            onChange={this.handleChange}
          />
          <SearchBarSubmit type="submit" aria-label="Submit">
            <SearchIcon width="20" height="20" title="Search" />
          </SearchBarSubmit>
        </SearchBarStyled>
        <FilterBar />
      </SearchBarWrap>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  searchValue: PropTypes.objectOf(PropTypes.string).isRequired,
};
