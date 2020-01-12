import React from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import combineStyles from 'assets/combine-function/combineStyles'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Explore from "@material-ui/icons/Explore";
import Pets from "@material-ui/icons/Pets";
import Email from "@material-ui/icons/Email"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/admin.jpg";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

const combinedStyles = combineStyles(stylesA, stylesB);
const useStyles = makeStyles(combinedStyles)


export default function OwnerPage(props) {
  console.log(props)

  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const matchId = props.match.params.id
  const matchedUser = props.users.find(user => user.id === parseInt(matchId, 10) )
  console.log(matchedUser)


  if (matchedUser) {
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
                  <h3 className={classes.title}>{matchedUser.name}</h3>
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
                          {matchedUser.about_me}
                        </p>
                      )
                    },
                    {
                      tabName: "Email",
                      tabIcon: Email,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {matchedUser.email}
                        </p>
                      )
                    },
                    {
                      tabName: "Current Address",
                      tabIcon: Explore,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {matchedUser.current_address}
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
                          {matchedUser.pets.map(pet => {
                            return(
                              <div key={pet.id} className={classes.container}>
                                <GridContainer justify="flex-start">
                                  <GridItem>
                                    <Link to={`/pets/${pet.id}`}>
                                      <h5>
                                        Name: <strong> {pet.name} </strong> - Breed: <strong> {pet.animal_type} </strong>
                                      </h5>
                                    </Link>
                                  </GridItem>
                                </GridContainer>
                              </div>
                            )
                          })}
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
  } else {
    return(
      <div>Loading Users... </div>
    )
  }



}

// this approach combines both styles to accomplish the goal from template.
