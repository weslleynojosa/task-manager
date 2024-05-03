import {
  ActionFunction,
  ActionFunctionArgs,
  json,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ActivitiesWidget from "~/components/widgets/activities/ActivitiesWidget";
import WeatherWidget from "~/components/widgets/weather/WeatherWidget";
import { getTaskCount } from "~/model/tasks";
import { commitSession, getSession } from "~/session.server";
import { WidgetWrapper } from "~/theme/global.styles";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const userSession = await getSession(request.headers.get("cookie"));
  return json({
    latitude: userSession.get("latitude"),
    longitude: userSession.get("longitude"),
    counters: await getTaskCount(),
  });
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const coords = await request.json();
  const userSession = await getSession(request.headers.get("cookie"));

  userSession.set("latitude", coords.latitude);
  userSession.set("longitude", coords.longitude);

  return json(
    {
      success: true,
    },
    {
      headers: { "set-cookie": await commitSession(userSession) },
    }
  );
};

const Widgets = () => {
  const { counters, latitude, longitude } = useLoaderData<typeof loader>();

  const fetcher = useFetcher();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetcher.submit(
        { latitude, longitude },
        { method: "post", encType: "application/json" }
      );
    });
  }, [latitude, longitude]);

  return (
    <WidgetWrapper>
      <ActivitiesWidget counters={counters} />
      <WeatherWidget coords={{ latitude, longitude }} />
    </WidgetWrapper>
  );
};

export default Widgets;
