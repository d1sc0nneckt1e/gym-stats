import React from "react";
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <IonApp>
      <IonReactRouter>

        <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true} />
          <Route path="/tab4" component={Tab4} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="schedule" href='/tab1'>
              <IonIcon icon={calendar} />
              <IonLabel>Schedule</IonLabel>
              <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="speakers" href='/tab2'>
              <IonIcon icon={personCircle} />
              <IonLabel>Speakers</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href='/tab3'>
              <IonIcon icon={map} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>

            <IonTabButton tab="about"  href='/tab4'>
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        </IonReactRouter>

      </IonApp>
    </React.Fragment>
  );
};

export default App;
