import { IconContext } from "react-icons";
import {
  LuBook,
  LuBookDown,
  LuCake,
  LuCloudRain,
  LuDice6,
  LuGlassWater,
  LuHandHelping,
  LuHeartHandshake,
  LuMedal,
  LuSchool,
  LuShield,
  LuTent,
} from "react-icons/lu";
import { TbBuildingCircus } from "react-icons/tb";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "../components/Icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface ActivityProps {
  icon: JSX.Element;
  description: string;
}

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  activities: ActivityProps[];
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Veranstaltungen",
    activities: [
      {
        icon: <LuCake />,
        description: "Waffelbacken zu den Halbjahreszeugnissen",
      },
      {
        icon: <LuMedal />,
        description: "Sportlerfrühstück bei den Bundesjugendspielen",
      },
      {
        icon: <LuSchool />,
        description: "Kaffee- und Kuchenbuffet zur Einschulung",
      },
      {
        icon: <LuGlassWater />,
        description: "Getränke und Snacks zum Lauftag (alle 2 Jahre)",
      },
    ],
  },
  {
    icon: <GiftIcon />,
    title: "Förderung",
    activities: [
      {
        icon: <LuBook />,
        description: "Finanzierung des Antolin Leseprogramms",
      },
      {
        icon: <LuShield />,
        description:
          "Dunkelziffer und das SMART Team Training für Mitgliedskinder",
      },
      {
        icon: <LuHeartHandshake />,
        description: "Unterstützung von Theater- und Präventionsprojekten",
      },
    ],
  },
  {
    icon: <PlaneIcon />,
    title: "Ausflüge & Projekte",
    activities: [
      {
        icon: <LuHandHelping />,
        description:
          "Bezuschussung von Klassenfahrten der 3. und 4. Klasse für Mitgliedskinder",
      },
      {
        icon: <TbBuildingCircus />,
        description:
          "Unterstützung beim ProjektCircus Quaiser (alle vier Jahre)",
      },
      {
        icon: <LuTent />,
        description: "Finanzielle Förderung für Klassenprojekte und Ausflüge",
      },
    ],
  },
  {
    icon: <MapIcon />,
    title: "Schulhof- und Pausengestaltung",
    activities: [
      {
        icon: <LuSchool />,
        description: "Neugestaltung des Schulhofes",
      },
      {
        icon: <LuDice6 />,
        description: "Bereitstellung eines Containers für Pausenspiele",
      },
      {
        icon: <LuCloudRain />,
        description: "Einrichtung von Spielekisten für Regenpausen",
      },
      {
        icon: <LuBookDown />,
        description: "Bücherkisten für alle Klassen",
      },
    ],
  },
];

export const WhatWeDo = () => {
  return (
    <section id="howItWorks" className="container py-4 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Was wir{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          machen{" "}
        </span>
        {/*Eine kleine Auswahl*/}
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        Zu unseren regelmäßigen Aktionen gehören!
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, activities }: FeatureProps, idx_i) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid place-items-center gap-4">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-start gap-4">
                {activities.map((activity: ActivityProps, idx_j) => (
                  <span
                    key={`activity_${idx_i}_${idx_j}`}
                    className="flex flex-row gap-4 text-muted-foreground"
                  >
                    <div className="flex items-center justify-center">
                      <IconContext.Provider value={{ size: "2rem" }}>
                        {activity.icon}
                      </IconContext.Provider>
                    </div>

                    <h3 className="flex items-center text-left">
                      {activity.description}
                    </h3>
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
