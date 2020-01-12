import React from 'react'
import combineStyles from 'assets/combine-function/combineStyles'

import { withStyles } from "@material-ui/core/styles";

import OwnerCard from 'components/OwnerCard'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

class AllOwnersCard extends React.Component {

  componentDidMount() {
    // console.log(this.props)
  }

  renderGridItems() {
    return (
      this.props.users.map(user => {
        return(
          <div key={user.id}>
            <GridItem xs={12} sm={12} md={6}>
              <OwnerCard {...this.props.match} {...user}/>
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

export default withStyles(combinedStyles)(AllOwnersCard);
