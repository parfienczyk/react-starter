import React from 'react';
import qs from 'qs';

// common
import PageTitle from 'components/common/PageTitle/PageTitle';
import Spinner from 'components/common/Spinner/Spinner';
import TicketList from './TicketList/TicketList';

// consts
import { COLUMNS } from './consts';

// styles
import styles from './styles.module.scss';

class Tickets extends React.Component {
  state = {
    items: [],
    totalItems: 0,
    queryParams: {
      page: 0,
      limit: 10,
      order: 'desc',
      orderBy: 'name',
      filters: {},
    },
    isLoading: false,
  };

  componentDidMount = () => {
    const initialQueryParams = {
      limit: 20,
      page: 0,
      order: { order: ['created', 'booking', 'DESC'] },
      filters: {
        a: 1,
        b: 2,
      },
    };

    this.setup(initialQueryParams);
  };

  setup(queryParams = {}) {
    console.log(queryParams, typeof queryParams);
    const s1 = qs.stringify(queryParams, { addQueryPrefix: true });
    console.log(s1);
    const p1 = qs.parse(s1);
    console.log(p1);

    this.setState({ isLoading: true });

    // const url = 'https://le68r8rgjb.execute-api.eu-west-1.amazonaws.com/test/tickets';
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    fetch(`${url}/${s1}`, {
      // mode: 'cors', // no-cors, cors, *same-origin
      // headers: {},
    })
      .then(response => response.json())
      .then(items => {
        this.setState({
          items,
          totalItems: items.length,
          isLoading: false,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeParams = params => {
    this.setState(
      prevState => ({
        queryParams: {
          ...prevState.queryParams,
          ...params,
        },
      }),
      () => {
        console.log('after set state');
        this.mergeQueryParams(this.state.queryParams);
      }
    );
  };

  onChangeSorting = newOrderBy => {
    let {
      queryParams: { order, orderBy },
    } = this.state;

    if (orderBy === newOrderBy) {
      order = order === 'desc' ? 'asc' : 'desc';
    } else {
      order = 'desc';
    }

    this.onChangeParams({ order, orderBy: newOrderBy });
  };

  mergeQueryParams(params = {}) {
    const { history } = this.props;

    history.push(qs.stringify(params, { addQueryPrefix: true }));
  }

  render() {
    const { items, isLoading, queryParams } = this.state;

    return (
      <section>
        <PageTitle h1="Tickets" h4="List" />

        <section className={styles.Container}>
          {isLoading && <Spinner />}

          <TicketList
            items={items}
            columns={COLUMNS}
            onChangeParams={this.onChangeParams}
            onChangeSorting={this.onChangeSorting}
            queryParams={queryParams}
            {...this.props}
          >
            das
          </TicketList>
        </section>
      </section>
    );
  }
}

export default Tickets;
