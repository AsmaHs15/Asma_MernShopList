import React, { Component, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';  
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems,deleteItem, ITEMS_LOADING  } from '../actions/itemActions';
import PropTypes from 'prop-types';

class  ShoppingList extends Component  {

    componentDidMount() {
        this.props.getItems();
      }

      onDeleteClick = id => {
        this.props.deleteItem(id);
      };
    render(){

        const { items } = this.props.item;
        return (
            <Container>
            {/* <Button
                    color="dark"
                    style={{marginBottom : '2rem'}}

                    onClick={()=>{ const name = prompt('Enter Item')  

                        if (name) {this.setState(state => ({
             items: [...state.items, { id: Math.random(), name }]
            }));
            }
            }}
            > Add Item  </Button> */}
        	<ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
              <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,_id)}
                  >
                    &times;
                  </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
</Container>

      );
   }
 }


ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    item: state.item
  });
  
  export default connect(
    mapStateToProps,
    { getItems ,deleteItem}
  )(ShoppingList);