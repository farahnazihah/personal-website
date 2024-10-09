import Mixpanel from "mixpanel";
import { headers } from "next/headers";

export enum EnumEvent {
  PAGE_VISIT = "page_visit"
}

const useTracker = () => {
  const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN ?? "", {
    debug: true,
    protocol: "http",
    keepAlive: false
  });

  const page_visit = (page_title: string, rest?: object) => {
    const headersList = headers();
    const host = headersList.get("host") as string;
    const path = headersList.get("referer")?.split(host)[1] || "/";

    mixpanel.track(EnumEvent.PAGE_VISIT, {
      page_title,
      url: host + path,
      ...rest
    });
  };

  return { page_visit };
};

export default useTracker;
