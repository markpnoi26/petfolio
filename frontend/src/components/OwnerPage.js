import React from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import combineStyles from 'assets/combine-function/combineStyles'
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Explore from "@material-ui/icons/Explore";
import Pets from "@material-ui/icons/Pets";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import profile from "assets/img/admin.jpg";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";


class OwnerPage extends React.Component {

  render() {

    const {classes} = this.props;
    const {currentUser} = this.props

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    console.log(this.props)
    return (
      <div>
      <Parallax small filter image={require("assets/img/dog.jpg")} />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{currentUser.name}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "About me",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {currentUser.about_me}
                        </p>
                      )
                    },
                    {
                      tabName: "Current Address",
                      tabIcon: Explore,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {currentUser.current_address}
                        </p>
                      )
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Pets",
                      tabIcon: Pets,
                      tabContent: (
                        <ul className={classes.textCenter}>
                          {currentUser.pets.map(pet => <Link key={pet.id} to={`/pets/${pet.id}`}><li >{pet.name}</li></Link>)}
                        </ul>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }


}

// this approach combines both styles to accomplish the goal from template.
const combinedStyles = combineStyles(stylesA, stylesB);

export default withStyles(combinedStyles)(OwnerPage);
