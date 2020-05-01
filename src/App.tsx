import React from "react";
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

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
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="schedule">
              <IonIcon icon={calendar} />
              <IonLabel>Schedule</IonLabel>
              <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="speakers">
              <IonIcon icon={personCircle} />
              <IonLabel>Speakers</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map">
              <IonIcon icon={map} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>

            <IonTabButton tab="about">
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
