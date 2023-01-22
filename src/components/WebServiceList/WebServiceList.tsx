import type { FC } from 'react';
import { WebService } from './WebService';
import type { WebServiceAttribute } from './WebServiceAttribute';

export type WebServiceListProps = {
  webServices: Array<WebServiceAttribute & { id: number }>;
};

export const WebServiceList: FC<WebServiceListProps> = ({ webServices }) => (
  <section className="items">
    <div className="w-container">
      <h1 className="heading-decoration">WebServices</h1>
      <p>These are web services developed by the organization</p>
      <div className="items-container">
        {webServices.map((webService) => (
          <WebService
            key={webService.id}
            name={webService.name}
            serviceUrl={webService.serviceUrl}
            ogpUrl={webService.ogpUrl}
            description={webService.description}
          />
        ))}
      </div>
    </div>
  </section>
);
