import React from 'react'
import combineStyles from 'assets/combine-function/combineStyles'

import { withStyles } from "@material-ui/core/styles";

import PetCard from 'components/PetCard'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

class AllPetsCard extends React.Component {

  renderGridItems() {
    return (
      this.props.pets.map(pet => {
        return(
          <div key={pet.id}>
            <GridItem xs={12} sm={12} md={6}>
              <PetCard {...this.props.match} {...pet}/>
            </GridItem>
          </div>
        )
      })
    )
  }

  render() {
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            {this.renderGridItems()}
          </GridContainer>
        </div>
      </div>
    )
  }

}

const combinedStyles = combineStyles(stylesA, stylesB);

export default withStyles(combinedStyles)(AllPetsCard);
